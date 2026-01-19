export async function sendMessage({
  input,
  setInput,
  setMessages,
  setIsTyping
}) {
  if (!input.trim()) return

  const userMessage = input

  setMessages(prev => [
    ...prev,
    { role: "user", content: userMessage }
  ])
  setInput("")
  setIsTyping(true)

  try {
    const response = await fetch("http://127.0.0.1:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "kiana",
        messages: [
          {
            role: "system",
            content:
              "Kamu adalah chatbot konseling yang empatik, lembut, dan menenangkan."
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        stream: false
      })
    })

    if (!response.ok) {
      throw new Error("Ollama API error")
    }

    const data = await response.json()

    const aiResponse =
      data.message?.content ||
      "Aku di sini mendengarkan kamu 🌱"

    setMessages(prev => [
      ...prev,
      { role: "assistant", content: aiResponse }
    ])
  } catch (error) {
    console.error("Ollama error:", error)
    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content:
          "Maaf ya, aku sedang kesulitan merespons. Coba sebentar lagi 🤍"
      }
    ])
  } finally {
    setIsTyping(false)
  }
}