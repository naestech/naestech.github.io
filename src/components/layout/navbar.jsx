import React from 'react'
import '../../styles/Navbar.css'
import naeLogo from '/nae.png'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <img src={naeLogo} alt="naes.tech logo" />
      </a>
      <div className="navbar-links">
        <a href="#about" className="navbar-link">about</a>
        <span className="separator">::</span>
        <a href="#projects" className="navbar-link">projects</a>
        <span className="separator">::</span>
        <a href="#blog" className="navbar-link">blog</a>
        <span className="separator">::</span>
        <a href="#contact" className="navbar-link">contact</a>
      </div>
    </nav>
  )
}

export default Navbar 