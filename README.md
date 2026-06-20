# Klinik K2+ Chatbot

Landing page konseling dan chatbot untuk layanan kesehatan mental mahasiswa UNU Yogyakarta.

## Tech Stack

Frontend:
- React 18
- Vite
- TailwindCSS
- GSAP
- React Router DOM

Backend:
- Python
- FastAPI
- Ollama

## Getting Started

Run every command from the project root:

```bash
cd C:\klinik-k2
```

### Prerequisites

- Node.js 18+
- Python 3.8+
- Ollama

### Installation

```bash
pnpm install
pip install -r backend/requirements.txt
ollama pull llama3.2
```

### Running the App

Start Ollama:

```bash
ollama serve
```

Start the Python backend from the root:

```bash
pnpm run dev:backend
```

Start the frontend from the root:

```bash
pnpm dev
```

Open `http://localhost:5173`.

## Project Structure

```text
klinik-k2/
|-- backend/
|   |-- main.py
|   |-- ollama_service.py
|   `-- requirements.txt
|-- public/
|-- src/
|   |-- chatbot/
|   |-- components/
|   |-- pages/
|   |-- App.jsx
|   `-- index.css
|-- index.html
|-- package.json
|-- pnpm-lock.yaml
|-- postcss.config.js
|-- tailwind.config.js
`-- vite.config.js
```

## API Endpoints

| Method | Endpoint  | Description    |
|--------|-----------|----------------|
| GET    | /         | API info       |
| GET    | /health   | Health check   |
| POST   | /chat     | Chat with bot  |

## Features

- Homepage with service information
- Counseling registration form
- AI-powered chatbot with Ollama
- Responsive design
- Smooth animations

## License

Copyright 2024 Klinik K2+ - UNU Yogyakarta
