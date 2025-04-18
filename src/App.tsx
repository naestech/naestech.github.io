import { HashRouter } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Home from './components/sections/home'
import About from './components/sections/about'
import Projects from './components/sections/projects'
import Blog from './components/sections/blog'
import Contact from './components/sections/contact'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App 