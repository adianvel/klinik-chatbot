import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatButton from './chatbot/ChatButton'
import './index.css'

const KonselingPage = lazy(() => import('./pages/KonselingPage'))
const ChatPanel = lazy(() => import('./chatbot/ChatPanel'))

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/konseling" element={<KonselingPage />} />
        </Routes>

        {isChatOpen && (
          <ChatPanel onClose={() => setIsChatOpen(false)} />
        )}
      </Suspense>

      <ChatButton onClick={() => setIsChatOpen(true)} />
    </Router>
  )
}

export default App
