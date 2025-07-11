# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

**🚀 Zapier MCP AI Assistant**
A multi-tenant AI assistant SaaS platform that integrates with user-specific Zapier MCP endpoints to perform real-time actions such as sending emails, scheduling calendar events, posting messages to Slack, and managing Zoom meetings — all powered via natural language through LLMs like OpenAI.

**🧠 Features**
🔐 Multi-User Authentication – Secure login and personalized experience.

🤖 LLM Chat Interface – Ask in natural language, get real actions done.

🔌 Zapier MCP Integration – Executes structured tool calls (Gmail, Google Calendar, Slack, Zoom).

🌐 FastAPI Backend + Vite + React Frontend – High performance and developer-friendly.

🧪 Mock Tools Simulation – Simulates tool responses for testing/demo purposes.

**📁 Project Structure**
zapier-mcp-ai-assistant/
│
├── backend/                    # FastAPI backend
│   ├── main.py                 # FastAPI app entry point
│   ├── routes/                 # All API routes
│   ├── services/               # LLM integration, MCP API handling
│   ├── auth/                   # User login/signup with token auth
│   ├── models/                 # Pydantic models for user, message, tools
│   ├── .env                    # Environment variables (OpenAI key, MCP URL)
│
├── frontend/                   # Vite + React frontend
│   ├── src/
│   │   ├── components/         # Chat UI, Login, Dashboard
│   │   ├── pages/              # Auth Pages, Chat Page
│   │   ├── api/                # Axios calls to backend
│   │   └── App.jsx
│   ├── vite.config.js
│
├── README.md
├── requirements.txt
├── package.json

**🔧 Environment Setup**
**1. Clone the Repo**
git clone https://github.com/your-username/zapier-mcp-ai-assistant.git
cd zapier-mcp-ai-assistant
**2. Setup Backend (FastAPI)**
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
Create a .env file:

**env**
OPENAI_API_KEY=your_openai_api_key
MCP_BASE_URL=https://mcp.zapier.com/api/mcp/s/your-mcp-id/mcp

**Run server:**
uvicorn main:app --reload
**3. Setup Frontend (Vite + React)**
cd ../frontend
npm install
npm run dev

**🧪 Demo Instructions**
Login or Register

Start a Chat Session

Try Commands like:

“Send an email to John about tomorrow’s meeting”

“Create a Google Calendar event for team sync at 5 PM”

“Post a reminder to #general Slack channel”

Demo Video: https://drive.google.com/file/d/15wj182h_5WwfJXvHM4ZMHWfFV-poCLVP/view

**📦 Key Technologies**
Tech	Usage
FastAPI	Backend REST APIs
React + Vite	Frontend SPA
OpenAI	LLM-powered intent parsing
Zapier MCP	Tool action execution
JWT	User Authentication
Axios	API communication frontend/backend

**📸 Screenshots**
✅ Multi-user login
💬 AI-powered chat with tools
📅 Auto-schedule events via GPT
📤 Send emails / Slack messages

**📚 Use Cases**
SaaS platform with plug-and-play LLM tool agents

AI productivity bot for emails, meetings, messaging

AI assistant layer for custom enterprise tools (via Zapier MCP)

**🚀 Future Improvements**
Real OAuth integration for tools (Gmail/Slack)

Persistent history and logs

Admin dashboard for usage tracking

Better NLP error handling and fallback flows

**🙋‍♀️ Made by**
Kusuma G M
Email: kusuma.gm@campusuvce.in
University: UVCE, Bangalore

