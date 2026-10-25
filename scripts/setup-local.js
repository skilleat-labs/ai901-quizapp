import fs from 'node:fs';
import { randomBytes } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const file=path.join(root,'.env');
if(fs.existsSync(file)){console.log('.env가 이미 있습니다. 덮어쓰지 않았습니다.');process.exit(0);}
const password=randomBytes(18).toString('base64url');
fs.writeFileSync(file,`PORT=3100\nHOST=127.0.0.1\nNODE_ENV=development\nSTORAGE_DRIVER=local\nADMIN_PASSWORD=${password}\nSESSION_SECRET=${randomBytes(48).toString('hex')}\n`,{mode:0o600});
console.log('.env를 만들었습니다. 강사 암호는 로컬 .env의 ADMIN_PASSWORD에서 확인하세요. Git에 올리지 마세요.');
