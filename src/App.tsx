import { HashRouter } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'

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