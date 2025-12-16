import React, { useEffect } from 'react'
import '../../styles/Navbar.css'
import naeLogo from '/nae.png'

function Navbar() {
  useEffect(() => {
    // Detect if Dark Reader is active by checking navbar's computed background color
    const detectDarkReaderAndSwapLogo = () => {
      const navbar = document.querySelector('.navbar')
      const naeLogoImg = document.querySelector('.navbar-logo img')
      
      if (!navbar || !naeLogoImg) return

      const bgColor = window.getComputedStyle(navbar).backgroundColor
      
      // Parse RGB values from background color
      const rgbMatch = bgColor.match(/\d+/g)
      if (!rgbMatch || rgbMatch.length < 3) return

      const [r, g, b] = rgbMatch.map(Number)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000

      // If navbar is dark (brightness < 128), we're in dark mode
      const isDarkMode = brightness < 128

      // Swap nae logo based on mode
      if (isDarkMode) {
        naeLogoImg.src = 'nae.png' // white/light version for dark mode
      } else {
        naeLogoImg.src = 'nae dark.png' // dark version for light mode
      }
    }

    // Run on mount
    detectDarkReaderAndSwapLogo()

    // Watch for changes with optimized observer
    const observer = new MutationObserver(() => {
      requestAnimationFrame(detectDarkReaderAndSwapLogo)
    })
    
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      observer.observe(navbar, { attributes: true, subtree: true })
    }
    
    // Watch the html element for data-theme changes (in case that gets used)
    const htmlObserver = new MutationObserver(() => {
      requestAnimationFrame(detectDarkReaderAndSwapLogo)
    })
    htmlObserver.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
      htmlObserver.disconnect()
    }
  }, [])

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <img src={naeLogo} alt="naes.tech logo" className="nae-logo-img" />
      </a>
      <div className="navbar-links">
        <a href="#about" className="navbar-link">about</a>
        <span className="separator">::</span>
        <a href="#projects" className="navbar-link">projects</a>
        <span className="separator">::</span>
        <a href="#contact" className="navbar-link">contact</a>
      </div>
    </nav>
  )
}

export default Navbar 