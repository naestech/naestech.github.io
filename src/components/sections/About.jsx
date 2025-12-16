import { useState, useEffect } from 'react'
import styles from '../../styles/modules/Section.module.css'

function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [dotCount, setDotCount] = useState(1)

  useEffect(() => {
    if (isExpanded) return

    const interval = setInterval(() => {
      setDotCount((prev) => (prev === 3 ? 1 : prev + 1))
    }, 500)

    return () => clearInterval(interval)
  }, [isExpanded])

  const getDots = () => {
    return '.'.repeat(dotCount)
  }

  const handleDotClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className={`${styles.section} ${styles.about}`} id="about">
      <div className={styles.content}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.imageColumn}>
            <img 
              src="naes.png" 
              alt="stylized picture of nadine" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textColumn}>
            <div>
              {!isExpanded ? (
                <p className={styles.aboutText}>
                  nadine is a software engineer based in california and texas
                  <span 
                    className={styles.animatedDots}
                    onClick={handleDotClick}
                  >
                    {getDots()}
                  </span>
                </p>
               ) : (
                 <>
                   <p className={styles.aboutText}>
                     nadine is a software engineer based in california and texas.
                   </p>
                   <br />
                   <p className={styles.aboutText}>
                     they explore the interplay between creativity and technology, guided by the belief that software should be a tool rather than an authority, while working towards the internet that should have been
                     <span 
                       className={styles.animatedDots}
                       onClick={handleDotClick}
                     >
                       .
                     </span>
                   </p>
                 </>
               )}
              <br />
              <p className={styles.aboutText}>
                <span className={styles.emphasis}>embedded in:</span>
                nasa, warner music group, amazon web services, and the open source community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About