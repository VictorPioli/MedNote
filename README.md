# 🏥 MedNote.IA

**Sistema inteligente de análise médica baseado em IA com transcrição de voz e diagnóstico automatizado.**

## 🚀 Visão Geral

O MedNote.IA é uma plataforma completa que combina:
- 🎤 **Transcrição de voz em tempo real**
- 🧠 **Análise médica com IA (OpenAI GPT)**
- 📱 **Interface moderna e responsiva**
- 🌐 **Suporte multilíngue (PT/EN)**
- ☁️ **Persistência na nuvem (Firebase)**

## 📁 Arquitetura

```
MedNote.IA/
├── frontend/          # React + TypeScript
│   ├── src/
│   │   ├── components/
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