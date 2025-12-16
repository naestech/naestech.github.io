import React, { useEffect } from 'react'
import '../../styles/Footer.css'

function Footer() {
  useEffect(() => {
    // Detect if Dark Reader is active by checking footer's computed background color
    const detectDarkReaderAndSwapImages = () => {
      const footer = document.querySelector('.footer')
      const blackskyImg = document.querySelector('.blacksky-icon')
      const emailImg = document.querySelector('.email-icon')
      const githubImg = document.querySelector('.github-icon')
      const substackImg = document.querySelector('.substack-icon')
      
      if (!footer) return

      const bgColor = window.getComputedStyle(footer).backgroundColor
      
      // Parse RGB values from background color
      const rgbMatch = bgColor.match(/\d+/g)
      if (!rgbMatch || rgbMatch.length < 3) return

      const [r, g, b] = rgbMatch.map(Number)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000

      // If footer is dark (brightness < 128), we're in dark mode
      const isDarkMode = brightness < 128

      // Swap blacksky image based on mode
      if (blackskyImg) {
        if (isDarkMode) {
          blackskyImg.src = 'blacksky.png' // white version for dark mode
        } else {
          blackskyImg.src = 'blacksky dark.png' // dark version for light mode
        }
      }

      // Swap email image based on mode
      if (emailImg) {
        if (isDarkMode) {
          emailImg.src = 'email.png' // colored version for dark mode
        } else {
          emailImg.src = 'email dark.png' // dark version for light mode
        }
      }

      // Swap github image based on mode
      if (githubImg) {
        if (isDarkMode) {
          githubImg.src = 'github.png' // colored version for dark mode
        } else {
          githubImg.src = 'github dark.png' // dark version for light mode
        }
      }

      // Swap substack image based on mode
      if (substackImg) {
        if (isDarkMode) {
          substackImg.src = 'substack.png' // colored version for dark mode
        } else {
          substackImg.src = 'substack dark.png' // dark version for light mode
        }
      }
    }

    // Run on mount
    detectDarkReaderAndSwapImages()

    // Watch for changes with optimized observer
    const observer = new MutationObserver(() => {
      requestAnimationFrame(detectDarkReaderAndSwapImages)
    })
    
    const footer = document.querySelector('.footer')
    if (footer) {
      observer.observe(footer, { attributes: true, subtree: true })
    }
    
    // Watch the html element for data-theme changes (in case that gets used)
    const htmlObserver = new MutationObserver(() => {
      requestAnimationFrame(detectDarkReaderAndSwapImages)
    })
    htmlObserver.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
      htmlObserver.disconnect()
    }
  }, [])

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="mailto:naestech@proton.me" title="Email" className="social-icon">
            <img src="email.png" alt="Email" className="email-icon" />
          </a>
          <a href="https://fedi.naes.tech/nae" target="_blank" rel="noopener noreferrer" title="Fediverse" className="social-icon">
            <img src="fediverse.png" alt="Fediverse" className="fediverse-icon" />
          </a>
          <a href="https://github.com/naestech" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon">
            <img src="github.png" alt="GitHub" className="github-icon" />
          </a>
          <a href="https://substack.com/@technaelogy" target="_blank" rel="noopener noreferrer" title="Substack" className="social-icon">
            <img src="substack.png" alt="Substack" className="substack-icon" />
          </a>
          <a href="https://blacksky.community/profile/did:plc:5vosyksw3glpoo6dsxhpms7e" target="_blank" rel="noopener noreferrer" title="Blacksky" className="social-icon">
            <img src="blacksky.png" alt="Blacksky" className="blacksky-icon" />
          </a>
        </div>
        <p>made with love by nae</p>
        <p>© 2023 - 2026</p>
      </div>
    </footer>
  )
}

export default Footer 