export default function ChatButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Buka chat konseling"
      className="fixed bottom-6 right-6 z-50 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-4"
    >
      <img
        src="/logo_chatbot.png"
        alt=""
        width="100"
        height="100"
        className="
          w-[100px] h-[100px]
          rounded-full
          shadow-xl
          transition-transform duration-200 ease-out
          hover:scale-110
          active:scale-95
        "
      />
    </button>
  )
}
