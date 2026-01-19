import { useState, useEffect, useRef } from "react"

export default function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return

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
                "Kamu adalah chatbot konseling. Sikapmu empatik, lembut, dan menenangkan. Dengarkan pengguna, validasi perasaannya, dan berikan respons singkat yang tidak menghakimi."
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          options: {
            temperature: 0.4,
            num_ctx: 1024,
            num_predict: 180
          },
          stream: false
        })
      })

      if (!response.ok) {
          const text = await response.text()
          throw new Error(`Ollama HTTP ${response.status}: ${text}`)
      }

      const data = await response.json()
      const aiResponse =
        data.message?.content || "Aku di sini mendengarkan kamu 🌱"

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
          content: "Maaf, aku sedang kesulitan merespons 🤍"
        }
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/40">
      <div className="w-full max-w-md h-[80vh] bg-white rounded-t-2xl shadow-xl m-4 flex flex-col">

        {}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg text-black">
            Chat Konseling
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm bg-green-50">
          {messages.length === 0 && !isTyping && (
            <div className="text-center text-gray-400 mt-10">
              Kamu bisa mulai bercerita di sini 🌱
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-3 py-2 rounded-lg whitespace-pre-wrap
                ${
                  msg.role === "user"
                    ? "ml-auto bg-green-500 text-white"
                    : "mr-auto bg-white border text-gray-800"
                }`}
            >
              {msg.content}
            </div>
          ))}

          {isTyping && (
            <div className="mr-auto bg-white border px-3 py-2 rounded-lg text-gray-400 italic animate-pulse">
              Sedang mengetik…
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {}
        <div className="p-4 border-t flex gap-2 bg-white">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
            placeholder="Ketik pesan..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 transition disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}