from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
import logging

from ollama_service import chat_with_ollama, check_ollama_health

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Klinik K2+ Chatbot API",
    description="Backend API for the Klinik K2+ counseling chatbot",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    role: str = Field(...)
    content: str = Field(...)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    history: Optional[List[Message]] = Field(default=None)


class ChatResponse(BaseModel):
    response: str = Field(...)
    status: str = Field(default="success")


class HealthResponse(BaseModel):
    status: str
    ollama_connected: bool


@app.get("/", tags=["General"])
async def root():
    return {
        "name": "Klinik K2+ Chatbot API",
        "version": "1.0.0",
        "docs": "/docs"
    }


@app.get("/health", response_model=HealthResponse, tags=["General"])
async def health_check():
    ollama_status = check_ollama_health()
    return HealthResponse(
        status="healthy" if ollama_status else "degraded",
        ollama_connected=ollama_status
    )


@app.post("/chat", response_model=ChatResponse, tags=["Chat"])
async def chat(request: ChatRequest):
    logger.info(f"Received chat request: {request.message[:50]}...")
    
    try:
        history = None
        if request.history:
            history = [{"role": m.role, "content": m.content} for m in request.history]
        
        response_text = await chat_with_ollama(
            user_message=request.message,
            conversation_history=history
        )
        
        logger.info("Chat response generated successfully")
        return ChatResponse(response=response_text, status="success")
        
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Gagal mendapatkan respons dari chatbot: {str(e)}"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
