import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechTicker from './components/TechTicker'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
