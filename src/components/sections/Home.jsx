import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import styles from '../../styles/modules/Section.module.css'

function Home() {
  console.log('Home component rendering')
  const sketchRef = useRef()
  const p5Instance = useRef()
  const [error, setError] = useState(null)

  // Log p5 version
  console.log('p5.js version:', p5.VERSION || 'unknown')
  
  useEffect(() => {
    console.log('Home useEffect running')
    
    // Ensure the container exists
    if (!sketchRef.current) {
      console.error('Sketch container not found')
      setError('Canvas container not found')
      return
    }
    
    console.log('Sketch container found:', sketchRef.current)
    console.log('Browser dimensions:', window.innerWidth, window.innerHeight)
    console.log('User agent:', navigator.userAgent)
    
    try {
      const sketch = (p) => {
        console.log('p5 sketch initializing')
        let particles = []
        const numParticles = 2000
        const repulsionRadius = 100
        const repulsionStrength = 0.1
        const maxSpeed = 2
  
        class Particle {
          constructor() {
            this.x = p.random(p.width)
            this.y = p.random(p.height)
            this.vx = p.random(-maxSpeed, maxSpeed)
            this.vy = p.random(-maxSpeed, maxSpeed)
            this.size = p.random(1, 3)
            this.opacity = p.random(150, 255)
          }
  
          update(mouseX, mouseY) {
            this.vx += p.random(-0.2, 0.2)
            this.vy += p.random(-0.2, 0.2)
  
            const speed = p.sqrt(this.vx * this.vx + this.vy * this.vy)
            if (speed > maxSpeed) {
              this.vx = (this.vx / speed) * maxSpeed
              this.vy = (this.vy / speed) * maxSpeed
            }
  
            const dx = this.x - mouseX
            const dy = this.y - mouseY
            const distance = p.sqrt(dx * dx + dy * dy)
  
            if (distance < repulsionRadius) {
              const angle = p.atan2(dy, dx)
              const force = (repulsionRadius - distance) * repulsionStrength
              this.vx += p.cos(angle) * force
              this.vy += p.sin(angle) * force
            }
  
            this.x += this.vx
            this.y += this.vy
  
            if (this.x < 0) this.x = p.width
            if (this.x > p.width) this.x = 0
            if (this.y < 0) this.y = p.height
            if (this.y > p.height) this.y = 0
          }
  
          draw() {
            p.fill(255, this.opacity)
            p.ellipse(this.x, this.y, this.size, this.size)
          }
        }
  
        p.setup = () => {
          console.log('p5 setup running, window size:', p.windowWidth, p.windowHeight)
          // Check window size
          const canvasWidth = Math.max(p.windowWidth, 100)
          const canvasHeight = Math.max(p.windowHeight, 100)
          
          console.log('Creating canvas with dimensions:', canvasWidth, canvasHeight)
          
          // Create the canvas and immediately attach it to the parent
          const canvas = p.createCanvas(canvasWidth, canvasHeight)
          if (sketchRef.current) {
            console.log('Attaching canvas to parent')
            canvas.parent(sketchRef.current)
            console.log('Canvas attached successfully')
          } else {
            console.error('Parent element not available during p5 setup')
          }
          
          console.log('Initializing particles')
          // Initialize particles
          for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle())
          }
          console.log('Created', particles.length, 'particles')
        }
  
        p.draw = () => {
          // Add a counter to track frames
          if (!p.frameCount || p.frameCount % 100 === 0) {
            console.log('p5 draw running, frame:', p.frameCount)
          }
          
          p.background(0)
          p.noStroke()
  
          particles.forEach(particle => {
            particle.update(p.mouseX, p.mouseY)
            particle.draw()
          })
        }
  
        p.windowResized = () => {
          const canvasWidth = Math.max(p.windowWidth, 100)
          const canvasHeight = Math.max(p.windowHeight, 100)
          console.log('Window resized, new dimensions:', canvasWidth, canvasHeight)
          p.resizeCanvas(canvasWidth, canvasHeight)
        }
      }
  
      console.log('Creating new p5 instance')
      // Create new p5 instance
      p5Instance.current = new p5(sketch)
      console.log('p5 instance created:', !!p5Instance.current)
    } catch (err) {
      console.error('Error creating p5 sketch:', err)
      setError(`Failed to initialize canvas: ${err.message}`)
    }

    return () => {
      if (p5Instance.current) {
        console.log('Cleaning up p5 instance')
        try {
          p5Instance.current.remove()
          console.log('p5 instance removed successfully')
        } catch (err) {
          console.error('Error removing p5 instance:', err)
        }
      }
    }
  }, [])

  return (
    <section className={`${styles.section} ${styles.home}`} id="home">
      <div ref={sketchRef} className={styles.canvasContainer}>
        {error && <div className={styles.error}>Error: {error}</div>}
      </div>
    </section>
  )
}

export default Home