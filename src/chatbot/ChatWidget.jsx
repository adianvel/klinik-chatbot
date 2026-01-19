import { useState } from "react";
import { sendMessage } from "./chatService";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendMessage(input);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: res.reply },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Chatbot tidak merespons" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pesan..."
        />
        <button onClick={handleSend} disabled={loading}>
          Kirim
        </button>
      </div>
    </div>
  );
}