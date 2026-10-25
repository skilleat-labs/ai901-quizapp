param location string
param environmentName string
@secure()
param adminPassword string
@secure()
param sessionSecret string
var suffix = uniqueString(resourceGroup().id)
var tags = { 'azd-env-name': environmentName }
var tableRole = subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '0a9a7e1f-b9d0-4cc4-a60d-0319b160aaa3')
var keyVaultRole = subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4633458b-17de-408a-b874-0445c86b69e6')

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: 'quiz${suffix}'
  location: location
  tags: tags
  kind: 'StorageV2'
  sku: { name: 'Standard_LRS' }
  properties: {
    accessTier: 'Hot'
    minimumTlsVersion: 'TLS1_2'
    supportsHttpsTrafficOnly: true
    allowBlobPublicAccess: false
    allowSharedKeyAccess: false
  }
}
resource tableService 'Microsoft.Storage/storageAccounts/tableServices@2023-05-01' = {
  parent: storage
  name: 'default'
}
resource quizTable 'Microsoft.Storage/storageAccounts/tableServices/tables@2023-05-01' = {
  parent: tableService
  name: 'QuizData'
}
resource vault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: 'kv-quiz-${suffix}'
  location: location
  tags: tags
  properties: {
    tenantId: tenant().tenantId
    sku: { family: 'A', name: 'standard' }
    enableRbacAuthorization: true
    enableSoftDelete: true
    softDeleteRetentionInDays: 7
    enablePurgeProtection: true
    accessPolicies: []
  }
}
resource adminSecret 'Microsoft.KeyVault/vaults/secrets@2023-07-01' = {
  parent: vault
  name: 'admin-password'
  properties: { value: adminPassword }
}
resource sessionSecretResource 'Microsoft.KeyVault/vaults/secrets@2023-07-01' = {
  parent: vault
  name: 'session-secret'
  properties: { value: sessionSecret }
}
resource workspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: 'log-quiz-${suffix}'
  location: location
  tags: tags
  properties: {
    sku: { name: 'PerGB2018' }
    retentionInDays: 30
  }
}
resource insights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'appi-quiz-${suffix}'
  location: location
  kind: 'web'
  tags: tags
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: workspace.id
  }
}
resource plan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: 'plan-quiz-${suffix}'
  location: location
  tags: tags
  kind: 'linux'
  sku: { name: 'B1', tier: 'Basic', capacity: 1 }
  properties: { reserved: true }
}
resource app 'Microsoft.Web/sites@2023-12-01' = {
  name: 'ai901-quiz-${suffix}'
  location: location
  kind: 'app,linux'
  tags: union(tags, { 'azd-service-name': 'web' })
  identity: { type: 'SystemAssigned' }
  properties: {
    serverFarmId: plan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'NODE|24-lts'
      appCommandLine: 'npm start'
      alwaysOn: true
      healthCheckPath: '/health'
      minTlsVersion: '1.2'
      ftpsState: 'Disabled'
      appSettings: [
        { name: 'NODE_ENV', value: 'production' }
        { name: 'HOST', value: '0.0.0.0' }
        { name: 'PORT', value: '8080' }
        { name: 'STORAGE_DRIVER', value: 'azure' }
        { name: 'TABLE_ENDPOINT', value: storage.properties.primaryEndpoints.table }
        { name: 'TABLE_NAME', value: quizTable.name }
        { name: 'ADMIN_PASSWORD', value: '@Microsoft.KeyVault(SecretUri=${vault.properties.vaultUri}secrets/${adminSecret.name})' }
        { name: 'SESSION_SECRET', value: '@Microsoft.KeyVault(SecretUri=${vault.properties.vaultUri}secrets/${sessionSecretResource.name})' }
        { name: 'SCM_DO_BUILD_DURING_DEPLOYMENT', value: 'true' }
        { name: 'APPLICATIONINSIGHTS_CONNECTION_STRING', value: insights.properties.ConnectionString }
        { name: 'ApplicationInsightsAgent_EXTENSION_VERSION', value: '~3' }
      ]
    }
  }
}
resource tableAccess 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storage.id, app.id, tableRole)
  scope: storage
  properties: { principalId: app.identity.principalId, principalType: 'ServicePrincipal', roleDefinitionId: tableRole }
}
resource vaultAccess 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(vault.id, app.id, keyVaultRole)
  scope: vault
  properties: { principalId: app.identity.principalId, principalType: 'ServicePrincipal', roleDefinitionId: keyVaultRole }
}
resource ftpPolicy 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2023-12-01' = {
  parent: app
  name: 'ftp'
  properties: { allow: false }
}
resource scmPolicy 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2023-12-01' = {
  parent: app
  name: 'scm'
  properties: { allow: false }
}
output webAppName string = app.name
output endpoint string = 'https://${app.properties.defaultHostName}'
output storageName string = storage.name
