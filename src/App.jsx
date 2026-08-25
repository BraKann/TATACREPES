import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import LeCulottage from './pages/LeCulottage.jsx'
import APropos from './pages/APropos.jsx'
import Realisations from './pages/Realisations.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"             element={<Accueil />} />
          <Route path="/le-culottage" element={<LeCulottage />} />
          <Route path="/a-propos"     element={<APropos />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact"      element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}