import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Events from './components/events.tsx'
import Partner from './components/Partner.tsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
