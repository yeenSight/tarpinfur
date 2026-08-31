import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Events from './components/events.tsx'
import Planning from './components/Planning'
import PlanningDetail from './components/PlanningDetail'
import Partner from './components/Partner.tsx'
import Association from './components/Association'
import Regles from './components/Regles'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/planning/:id" element={<PlanningDetail />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/association" element={<Association />} />
        <Route path="/regles" element={<Regles />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
