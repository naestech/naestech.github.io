import styles from '../../styles/modules/Section.module.css'

function Contact() {
  return (
    <section className={`${styles.section}`} id="contact">
      <div className={styles.content}>
        <div className={styles.projectRows}>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>email</h2>
              <a href="mailto:naestech@proton.me">naestech@proton.me</a>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>github</h2>
              <a href="https://github.com/naestech" target="_blank" rel="noopener noreferrer">naestech</a>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>instagram</h2>
              <a href="https://instagram.com/naes.tech" target="_blank" rel="noopener noreferrer">naes.tech</a>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              <h2>bluesky</h2>
              <a href="https://bsky.app/profile/naes.tech" target="_blank" rel="noopener noreferrer">naes.tech</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
