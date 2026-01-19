import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import KonselingPage from './pages/KonselingPage'
import ChatButton from './chatbot/ChatButton'
import ChatPanel from './chatbot/ChatPanel'
import './index.css'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/konseling" element={<KonselingPage />} />
      </Routes>

      {}
      <ChatButton onClick={() => setIsChatOpen(true)} />

      {}
      {isChatOpen && (
        <ChatPanel onClose={() => setIsChatOpen(false)} />
      )}
    </Router>
  )
}

export default App