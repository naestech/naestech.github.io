import styles from '../../styles/modules/Section.module.css'

function About() {
  return (
    <section className={`${styles.section} ${styles.about}`} id="about">
      <div className={styles.content}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.imageColumn}>
            <img 
              src="/naes.png" 
              alt="stylized picture of nadine" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textColumn}>
            <div>
              <p className={styles.aboutText}>
                nadine is a software engineer based in california and texas.
              </p>
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
