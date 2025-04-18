import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../../styles/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout 