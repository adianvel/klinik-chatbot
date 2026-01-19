export default function ChatButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
    >
      <img
        src="/logo_chatbot.png"
        alt="Chatbot"
        className="
          w-[100px] h-[100px]
          rounded-full
          shadow-xl
          transition-transform duration-200 ease-out
          hover:scale-110
          active:scale-95
        "
      />
    </div>
  )
}