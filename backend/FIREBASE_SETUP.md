# 🔥 Guia de Configuração do Firebase

Este arquivo explica como mapear as informações do arquivo JSON do Firebase Admin SDK para as variáveis de ambiente.

## 📁 Passo 1: Baixar o arquivo JSON

1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Selecione seu projeto
3. Vá em **Configurações do projeto** → **Contas de serviço**
4. Clique em **Gerar nova chave privada**
5. Salve o arquivo JSON na pasta `backend/keys/`

## 🔄 Passo 2: Mapear para variáveis de ambiente

O arquivo JSON baixado terá esta estrutura:

```json
{
  "type": "service_account",
  "project_id": "seu-projeto-123",
  "private_key_id": "abc123def456",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgk...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xyz@seu-projeto-123.iam.gserviceaccount.com",
  "client_id": "123456789012345678901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xyz%40seu-projeto-123.iam.gserviceaccount.com"
}
```

### Mapeamento para .env:

```bash
# Copie os valores do JSON para as variáveis correspondentes:

FIREBASE_PROJECT_ID=seu-projeto-123
FIREBASE_PRIVATE_KEY_ID=abc123def456  
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgk...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xyz@seu-projeto-123.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=123456789012345678901
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xyz%40seu-projeto-123.iam.gserviceaccount.com
```

## ⚠️ Importante:

- **Mantenha as quebras de linha `\n`** na `FIREBASE_PRIVATE_KEY`
- **Use aspas duplas** ao redor da private key
- **Nunca comite** o arquivo JSON ou o .env no GitHub
- **O arquivo JSON pode ficar na pasta `keys/`** como backup, mas não é obrigatório

## 🧪 Como testar:

1. Configure todas as variáveis no `.env`
2. Execute `npm run dev` no backend
3. Se aparecer "✅ Firebase conectado!", está funcionando!

## 📝 Exemplo prático:

Se seu arquivo JSON contém:
```json
{
  "project_id": "mednote-abcd123",
  "private_key": "-----BEGIN PRIVATE KEY-----\nABC123...\n-----END PRIVATE KEY-----\n"
}
```

No seu `.env`:
```bash
FIREBASE_PROJECT_ID=mednote-abcd123
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nABC123...\n-----END PRIVATE KEY-----\n"
```