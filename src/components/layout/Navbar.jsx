import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styles from '../../styles/modules/Navbar.module.css'
import naeLogo from '/nae.png'

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ''}`}>
      <Link to="/#home" className={styles.logo}>
        <img src={naeLogo} alt="naes.tech logo" />
      </Link>
      <nav className={styles.nav}>
        <Link smooth to="/#about" className={styles.navItem}>about</Link>
        <span className={styles.separator}>::</span>
        <Link smooth to="/#projects" className={styles.navItem}>projects</Link>
        <span className={styles.separator}>::</span>
        <Link smooth to="/#blog" className={styles.navItem}>blog</Link>
        <span className={styles.separator}>::</span>
        <Link smooth to="/#contact" className={styles.navItem}>contact</Link>
      </nav>
    </header>
  )
}

export default Navbar
