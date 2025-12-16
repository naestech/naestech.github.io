import styles from '../../styles/modules/Section.module.css'

function Projects() {
  return (
    <section className={`${styles.section}`} id="projects">
      <div className={styles.content}>
        <div className={styles.projectHeader}>
          selected works :: 
          <a 
            href="https://github.com/naestech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.allProjectsLink}
          >
            all projects
          </a>
        </div>
        <div className={styles.projectRows}>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>sshuffle</h2>
              <p>dance dance revolution in the terminal.</p>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>library.local</h2>
              <p>travelling wifi library hosting literature analyzing our tech-saturated world.</p>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>encore</h2>
              <p>highlighting rising artists selling out local venues in a curated email.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects