import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Careers from './pages/Careers/career'
import Contact from './pages/Contact/contact'
import SSLC from './pages/Sslc/sslc'
import './App.css'

function App() {
  return (
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sslc" element={<SSLC />} />
            <Route path="/sslc/:id" element={<SSLC />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
