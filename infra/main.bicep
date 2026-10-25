targetScope = 'subscription'

@description('azd 환경 이름. 리소스 그룹 이름에 사용합니다.')
param environmentName string
@description('실제 배포 전 사용자 확인이 필요한 Azure 지역')
param location string
@secure()
@minLength(12)
param adminPassword string
@secure()
@minLength(32)
param sessionSecret string

resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: 'rg-ai901-quiz-${environmentName}'
  location: location
  tags: {
    'azd-env-name': environmentName
    purpose: 'AI901 classroom assessment'
  }
}
module resources 'resources.bicep' = {
  name: 'ai901-quiz-resources'
  scope: rg
  params: {
    location: location
    environmentName: environmentName
    adminPassword: adminPassword
    sessionSecret: sessionSecret
  }
}
output AZURE_RESOURCE_GROUP string = rg.name
output AZURE_WEBAPP_NAME string = resources.outputs.webAppName
output SERVICE_WEB_ENDPOINT_URL string = resources.outputs.endpoint
output AZURE_STORAGE_ACCOUNT_NAME string = resources.outputs.storageName
