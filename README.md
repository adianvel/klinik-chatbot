# Klinik K2+ Chatbot

Website konseling dan chatbot untuk layanan kesehatan mental mahasiswa UNU Yogyakarta.

## Tech Stack

**Frontend:**
- React 18
- Vite
- TailwindCSS
- GSAP (animations)
- React Router DOM

**Backend:**
- Python (FastAPI)
- Ollama (LLM)

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- Ollama

### Installation

1. **Install Frontend Dependencies**
   ```bash
   pnpm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Download Ollama Model**
   ```bash
   ollama pull llama3.2
   ```

### Running the App

1. **Start Ollama**
   ```bash
   ollama serve
   ```

2. **Start Python Backend** (new terminal)
   ```bash
   cd backend
   uvicorn main:app --reload --port 8000
   ```

3. **Start Frontend** (new terminal)
   ```bash
   pnpm dev
   ```

4. Open `http://localhost:5173`

## Project Structure

```
klinik-k2-plus-main/
├── backend/
│   ├── main.py              # FastAPI server
│   ├── ollama_service.py    # Ollama communication
│   └── requirements.txt     # Python dependencies
├── src/
│   ├── chatbot/             # Chatbot components
│   ├── components/          # UI components
│   ├── pages/               # Page components
│   ├── App.jsx              # Main app
│   └── index.css            # Global styles
├── public/                   # Static assets
└── package.json
```

## API Endpoints

| Method | Endpoint  | Description        |
|--------|-----------|-------------------|
| GET    | /         | API info          |
| GET    | /health   | Health check      |
| POST   | /chat     | Chat with bot     |

## Features

- 🏠 Homepage with service information
- 📋 Counseling registration form
- 💬 AI-powered chatbot (Ollama + llama3.2)
- 📱 Responsive design
- ✨ Smooth animations

## License

© 2024 Klinik K2+ - UNU Yogyakarta
