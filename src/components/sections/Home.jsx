import { useEffect, useRef } from 'react'
import p5 from 'p5'
import styles from '../../styles/modules/Section.module.css'

function Home() {
  console.log('Home component rendering')
  const sketchRef = useRef()
  const p5Instance = useRef()

  useEffect(() => {
    console.log('Home useEffect running')
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
        console.log('p5 setup running')
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(sketchRef.current)
        
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle())
        }
      }

      p.draw = () => {
        p.background(0)
        p.noStroke()

        particles.forEach(particle => {
          particle.update(p.mouseX, p.mouseY)
          particle.draw()
        })
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
    }

    p5Instance.current = new p5(sketch)

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove()
      }
    }
  }, [])

  return (
    <section className={`${styles.section} ${styles.home}`} id="home">
      <div ref={sketchRef} className={styles.canvasContainer}></div>
    </section>
  )
}

export default Home