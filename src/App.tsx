import { Routes, Route } from 'react-router-dom'
import Header from './components/module/Header.tsx'
import Footer from './components/module/Footer.tsx'
import Home from './components/Home'
import Planning from './components/Planning'
import PlanningDetail from './components/PlanningDetail'
import Partner from './components/Partner.tsx'
import Association from './components/Association'
import Regles from './components/Regles'
import Status from './components/Status'
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
        <Route path="/status" element={<Status />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
