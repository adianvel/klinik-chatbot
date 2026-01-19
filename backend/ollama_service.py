import httpx
from typing import Optional

OLLAMA_BASE_URL = "http://127.0.0.1:11434"
OLLAMA_MODEL = "llama3.2"

SYSTEM_PROMPT = """Kamu adalah chatbot konseling bernama Kiana dari Klinik K2+ UNU Yogyakarta.
Sikapmu empatik, lembut, dan menenangkan. Dengarkan pengguna, validasi perasaannya, 
dan berikan respons singkat yang tidak menghakimi. Gunakan bahasa Indonesia yang hangat dan ramah.
Jangan memberikan diagnosis medis, tetapi dorong pengguna untuk mencari bantuan profesional jika diperlukan."""


async def chat_with_ollama(
    user_message: str,
    conversation_history: Optional[list] = None
) -> str:
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    if conversation_history:
        for msg in conversation_history:
            messages.append({
                "role": msg.get("role", "user"),
                "content": msg.get("content", "")
            })
    
    messages.append({"role": "user", "content": user_message})
    
    payload = {
        "model": OLLAMA_MODEL,
        "messages": messages,
        "options": {
            "temperature": 0.4,
            "num_ctx": 1024,
            "num_predict": 180
        },
        "stream": False
    }
    
    async with httpx.AsyncClient(timeout=60.0) as client:
        response = await client.post(
            f"{OLLAMA_BASE_URL}/api/chat",
            json=payload
        )
        response.raise_for_status()
        
        data = response.json()
        return data.get("message", {}).get("content", "Aku di sini mendengarkan kamu 🌱")


def check_ollama_health() -> bool:
    try:
        with httpx.Client(timeout=5.0) as client:
            response = client.get(f"{OLLAMA_BASE_URL}/api/tags")
            return response.status_code == 200
    except Exception:
        return False
