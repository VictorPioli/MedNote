# 🏥 MedNote.IA

**Assistente médico inteligente com IA para transcrição de voz e diagnóstico automatizado**

MedNote.IA é uma aplicação completa que permite aos profissionais de saúde gravar consultas por voz, obter transcrições automáticas e receber sugestões de diagnóstico através de inteligência artificial. O sistema também mantém um histórico completo das consultas realizadas.

## 🚀 Funcionalidades

- 🎤 **Gravação de voz em tempo real** com transcrição automática
- 🤖 **Diagnóstico inteligente** usando OpenAI GPT
- 📋 **Sugestões de exames e medicamentos**
- 📊 **Histórico completo de consultas**
- 🔥 **Armazenamento seguro** no Firebase Firestore
- 💬 **Chat interativo** para esclarecimentos adicionais

## 🏗️ Arquitetura

```
Frontend (React + TypeScript)  ←→  Backend (Node.js + Express)  ←→  Firebase Firestore
                                            ↕
                                      OpenAI API
```

- **Frontend**: Interface React simples que se comunica apenas com o backend via APIs REST
- **Backend**: Servidor Node.js que centraliza toda a lógica de negócio, IA e persistência
- **Banco de dados**: Firebase Firestore para armazenar consultas e histórico

## 📋 Pré-requisitos

- **Node.js** 16+ instalado
- **npm** ou **yarn**
- Conta **OpenAI** com chave API
- Projeto **Firebase** configurado

## ⚙️ Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/VictorPioli/MedNote.git
cd MedNote
```

### 2. Configuração do Firebase

#### 2.1. Criar projeto no Firebase
1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Dê um nome ao seu projeto (ex: `mednote-seu-nome`)
4. Habilite o **Firestore Database** em modo de produção

#### 2.2. Gerar chave do Firebase Admin SDK
1. No console do Firebase, vá em **Configurações do projeto** (ícone de engrenagem)
2. Clique na aba **Contas de serviço**
3. Clique em **Gerar nova chave privada**
4. Salve o arquivo JSON baixado na pasta `backend/keys/`
5. Renomeie o arquivo para um nome descritivo (ex: `firebase-admin-key.json`)

> 📋 **Veja o guia detalhado**: `backend/FIREBASE_SETUP.md` tem instruções completas sobre como mapear o arquivo JSON para as variáveis de ambiente.

### 3. Configuração das variáveis de ambiente

#### 3.1. Backend (.env)
Crie o arquivo `backend/.env` com as seguintes variáveis:

```env
# OpenAI API Key - OBRIGATÓRIO
OPENAI_API_KEY=sk-sua-chave-openai-aqui

# Firebase Admin SDK - OBRIGATÓRIO
FIREBASE_PROJECT_ID=seu-projeto-id
FIREBASE_PRIVATE_KEY_ID=chave-privada-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nsua-chave-privada-aqui\n-----END PRIVATE KEY-----"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@seu-projeto.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=seu-client-id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40seu-projeto.iam.gserviceaccount.com

# Configurações opcionais
PORT=3001
NODE_ENV=development
```

> **💡 Como obter as informações do Firebase:**
> 
> Todas as variáveis de ambiente do Firebase estão no arquivo JSON que você baixou no passo 2.2. Abra o arquivo e copie os valores correspondentes:
> - `project_id` → `FIREBASE_PROJECT_ID`
> - `private_key_id` → `FIREBASE_PRIVATE_KEY_ID`
> - `private_key` → `FIREBASE_PRIVATE_KEY` (mantenha as quebras de linha \n)
> - `client_email` → `FIREBASE_CLIENT_EMAIL`
> - `client_id` → `FIREBASE_CLIENT_ID`
> - etc.

#### 3.2. Frontend (.env)
Crie o arquivo `frontend/.env`:

```env
# URL do backend - ajuste se necessário
REACT_APP_API_URL=http://localhost:3001
```

### 4. Obter chave da OpenAI

1. Acesse [platform.openai.com](https://platform.openai.com/)
2. Crie uma conta ou faça login
3. Vá em **API Keys** no menu lateral
4. Clique em **Create new secret key**
5. Copie a chave e adicione no arquivo `backend/.env`

> **⚠️ Importante**: A chave da OpenAI é paga por uso. Monitore seu uso na dashboard da OpenAI.

## 🚀 Instalação e Execução

### 1. Instalar dependências

```bash
# Opção A: Instalar tudo de uma vez (na raiz do projeto)
npm run install:all

# Opção B: Instalar separadamente
# Backend
cd backend
npm install

# Frontend  
cd ../frontend
npm install
```

### 2. Executar o projeto

#### Opção A: Executar tudo de uma vez ⚡ (RECOMENDADO)

```bash
# Na raiz do projeto - executa backend e frontend simultaneamente
npm run dev
```

#### Opção B: Executar separadamente (para desenvolvimento avançado)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### 3. Acessar a aplicação

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:3001](http://localhost:3001)

## 📁 Estrutura do Projeto

```
MedNote.IA/
├── backend/                 # Servidor Node.js + Express
│   ├── src/
│   │   ├── controllers/     # Lógica dos endpoints
│   │   ├── services/        # Serviços (OpenAI, Firebase)
│   │   ├── routes/          # Rotas da API
│   │   └── types/           # Tipos TypeScript
│   ├── keys/               # 🔑 Chaves do Firebase (NÃO COMMITAR)
│   │   └── *.json          # Arquivo de chave do Firebase Admin SDK
│   ├── .env                # 🔑 Variáveis de ambiente (NÃO COMMITAR)
│   └── package.json
├── frontend/               # Interface React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── services/       # Serviços de API
│   │   └── types/          # Tipos TypeScript
│   ├── .env               # Configurações do frontend
│   └── package.json
└── README.md
```

## 🔧 Scripts Disponíveis

### Raiz do projeto
```bash
npm run dev          # Executa backend + frontend simultaneamente
npm run install:all  # Instala dependências de backend + frontend
npm run build        # Build de produção (backend + frontend)
```

### Backend
```bash
npm run dev      # Execução em desenvolvimento (nodemon)
npm run build    # Build para produção
npm start        # Execução em produção
npm run lint     # Verificar código
```

### Frontend
```bash
npm start        # Servidor de desenvolvimento
npm run build    # Build para produção
npm test         # Executar testes
npm run lint     # Verificar código
```

## 🔐 Segurança

### Variáveis Sensíveis
Nunca commite os seguintes arquivos/informações:

- `backend/.env` (contém chaves da OpenAI e Firebase)
- `backend/keys/*.json` (chaves do Firebase Admin SDK)
- Qualquer chave de API em código

### Firebase Security Rules
Configure as regras de segurança do Firestore conforme necessário:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🐛 Solução de Problemas

### Erro "Firebase project not found"
- Verifique se o `FIREBASE_PROJECT_ID` está correto
- Confirme se o projeto existe no console do Firebase

### Erro "OpenAI API key invalid"
- Verifique se a chave da OpenAI está correta no `.env`
- Confirme se você tem créditos disponíveis na conta OpenAI

### Erro "Module not found" 
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Frontend não conecta com backend
- Verifique se o backend está rodando na porta 3001
- Confirme a variável `REACT_APP_API_URL` no frontend

### Problemas com CORS
- O backend já está configurado para aceitar requisições do localhost:3000
- Se executar em outra porta, ajuste o CORS em `backend/src/server.ts`

## 📚 API Endpoints

### POST `/api/transcribe`
Transcreve áudio em texto

### POST `/api/diagnose`  
Gera diagnóstico a partir da transcrição

### POST `/api/chat`
Chat interativo para esclarecimentos

### GET `/api/consultations`
Lista histórico de consultas

### DELETE `/api/consultations/:id`
Remove uma consulta específica

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Victor Pioli** - [GitHub](https://github.com/VictorPioli)

---

⭐ **Se este projeto te ajudou, deixe uma estrela no GitHub!**

## 🆘 Suporte

Se encontrar problemas:

1. Verifique se seguiu todos os passos de configuração
2. Consulte a seção de "Solução de Problemas"
3. Abra uma [issue](https://github.com/VictorPioli/MedNote/issues) no GitHub

**Logs úteis para debug:**
- Backend: `npm run dev` (mostra logs detalhados)
- Frontend: Console do navegador (F12)
```
│   │   │   ├── layout/     # Header e navegação
│   │   │   ├── recording/  # Gravação e visualização
│   │   │   ├── diagnosis/  # Resultados e transcrições
│   │   │   ├── history/    # Histórico de consultas
│   │   │   ├── chat/       # Interface conversacional
│   │   │   └── ui/         # Componentes utilitários
│   │   ├── services/       # APIs e serviços
│   │   ├── types/          # TypeScript types
│   │   └── config/         # Configurações
│   └── build/         # Build para produção
│
├── backend/           # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── controllers/    # Controladores da API
│   │   ├── services/       # Lógica de negócio
│   │   ├── types/          # Tipos TypeScript
│   │   └── config.ts       # Configurações
│   ├── keys/          # Chaves Firebase (não versionado)
│   └── dist/          # Build compilado
│
└── README.md          # Este arquivo
```
```

## 🛠 Tecnologias

### Frontend
- **React 18** + **TypeScript**
- **CSS3** com variáveis customizadas
- **Firebase SDK** para persistência
- **Web Speech API** para gravação

### Backend  
- **Node.js** + **Express**
- **TypeScript** para tipagem
- **OpenAI API** para análise médica
- **Firebase Admin SDK**
- **Multer** para upload de arquivos

## 🚦 Setup Local

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta OpenAI (API Key)
- Projeto Firebase configurado

### 1. Clone o repositório
```bash
git clone <url-do-repo>
cd MedNote.IA
```

### 2. Configure o Backend
```bash
cd backend
npm install

# Configure .env
cp .env.example .env
# Edite .env com suas chaves
```

### 3. Configure o Frontend
```bash
cd ../frontend  
npm install

# Configure .env
cp .env.example .env
# Edite .env com configurações Firebase
```

### 4. Execute em modo desenvolvimento
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm start
```

## 🌐 Deploy para Produção

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy pasta build/
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
npm run build
npm start
# Configure variáveis de ambiente
```

## 🔑 Variáveis de Ambiente

### Backend (.env)
```env
NODE_ENV=production
PORT=3001
OPENAI_API_KEY=sk-...
CORS_ORIGIN=https://seu-frontend.com
```

### Frontend (.env)
```env
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_API_URL=https://seu-backend.com
```

## 📚 Funcionalidades

✅ **Gravação de áudio** com visualização em tempo real  
✅ **Transcrição automática** usando Whisper API  
✅ **Análise médica** com GPT-4 para diagnósticos  
✅ **Chat contextual** para esclarecimentos  
✅ **Histórico completo** de consultas  
✅ **Multilíngue** PT/EN com traduções  
✅ **Interface responsiva** para mobile/desktop  
✅ **Persistência segura** no Firebase  

## 🔒 Segurança

- Chaves de API protegidas em variáveis de ambiente
- Validação de entrada em todas as rotas
- Rate limiting para prevenir abuso
- Headers de segurança com Helmet
- Dados sensíveis não versionados

## 📞 Suporte

Para questões sobre desenvolvimento ou deploy, consulte a documentação interna ou entre em contato com a equipe.

---

**⚠️ Aviso Legal:** Este sistema é destinado a fins educacionais e de apoio. Não substitui consulta médica profissional.
