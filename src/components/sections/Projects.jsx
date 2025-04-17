import styles from '../../styles/modules/Section.module.css'

function Projects() {
  return (
    <section className={`${styles.section}`} id="projects">
      <div className={styles.content}>
        <div className={styles.projectRows}>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>encore</h2>
              <p>highlighting rising artists selling out local venues in a curated email.</p>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>algorhythm</h2>
              <p>music discovery tool that lets musicians control their music recommendation system.</p>
              <div className={styles.projectLinks}>
                <a href="https://github.com/naestech/algorhythm" target="_blank" rel="noopener noreferrer">repository</a>
                <span className={styles.linkSeparator}>::</span>
                <a href="https://youtu.be/apukKAs3Qs4?si=FxaKRfy3db_oUJjx" target="_blank" rel="noopener noreferrer">demo</a>
              </div>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>spotifeed</h2>
              <p>atproto feed that aggregates all spotify links on bluesky.</p>
              <div className={styles.projectLinks}>
                <a href="https://github.com/naestech/spotifeed" target="_blank" rel="noopener noreferrer">repository</a>
                <span className={styles.linkSeparator}>::</span>
                <a href="https://bsky.app/profile/naes.tech/feed/aaafgqdqtoyw6" target="_blank" rel="noopener noreferrer">feed</a>
              </div>
            </div>
          </div>
        </div>
        <a 
          href="https://github.com/naestech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.readMore}
        >
          view all projects on github →
        </a>
      </div>
    </section>
  )
}

export default Projects