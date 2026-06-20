import { useEffect, useRef, useState } from "react"
import { Send, X } from "lucide-react"

export default function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState("")
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    inputRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const sendMessage = async () => {
    const trimmedInput = input.trim()
    if (!trimmedInput || isTyping) return

    const nextMessages = [
      ...messages,
      { role: "user", content: trimmedInput },
    ]

    setMessages(nextMessages)
    setInput("")
    setError("")
    setIsTyping(true)

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
          history: nextMessages,
        }),
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(`Backend error ${response.status}: ${text}`)
      }

      const data = await response.json()
      const aiResponse = data.response || "Aku di sini mendengarkan kamu."

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ])
    } catch (err) {
      console.error("Backend error:", err)
      setError("Chatbot belum tersambung. Pastikan backend berjalan di port 8000.")
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, aku sedang kesulitan merespons.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/40 p-3 sm:p-4" role="presentation">
      <div
        className="w-full max-w-md h-[82vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-title"
      >
        <div className="flex items-center justify-between p-4 border-b border-charcoal/10">
          <h2 id="chat-title" className="font-semibold text-lg text-charcoal">
            Chat Konseling
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup chat"
            className="min-h-10 min-w-10 rounded-full text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm bg-cream/70" aria-live="polite">
          {messages.length === 0 && !isTyping && (
            <div className="text-center text-charcoal/60 mt-10 px-6">
              Kamu bisa mulai bercerita di sini. Ceritamu akan kami tanggapi dengan hati-hati.
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={`${msg.role}-${index}`}
              className={`max-w-[82%] px-3 py-2 rounded-xl whitespace-pre-wrap ${
                msg.role === "user"
                  ? "ml-auto bg-moss text-white"
                  : "mr-auto bg-white border border-charcoal/10 text-charcoal"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {isTyping && (
            <div className="mr-auto bg-white border border-charcoal/10 px-3 py-2 rounded-xl text-charcoal/60 italic animate-pulse">
              Sedang mengetik...
            </div>
          )}

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form
          className="p-4 border-t border-charcoal/10 flex gap-2 bg-white"
          onSubmit={(event) => {
            event.preventDefault()
            sendMessage()
          }}
        >
          <label htmlFor="chat-message" className="sr-only">
            Pesan chat
          </label>
          <input
            ref={inputRef}
            id="chat-message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ketik pesan..."
            autoComplete="off"
            className="min-h-10 flex-1 border border-charcoal/20 rounded-xl px-3 py-2 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Kirim pesan"
            aria-busy={isTyping}
            className="min-h-10 min-w-10 rounded-xl flex items-center justify-center bg-moss text-white hover:bg-charcoal transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          >
            <Send size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  )
}
