import React from 'react'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import './App.css'

console.log('App component importing')

function App() {
  console.log('App component rendering')
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 