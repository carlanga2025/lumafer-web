import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/header/Navbar"
import Home from "./pages/Home"
import Nosostros from "./pages/Nosostros"
import Servicios from "./pages/Servicios"
import Contacto from "./pages/Contacto"
import Footer from "./components/footer/Footer"
import NotFound from "./utils/NotFound"
import WhatsApp from "./components/whatsapp/WhatsApp"
import './styles/App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosostros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsApp />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
