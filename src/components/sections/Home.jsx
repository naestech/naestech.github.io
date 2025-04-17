import styles from '../../styles/modules/Section.module.css'

function Home() {
  const handleContinue = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`${styles.section}`} id="home">
      <div className={styles.content}>
        <div className={styles.popup}>
          <div className={styles.popupHeader}>
            <span className={styles.title}>welcome to naes.tech</span>
            <button className={styles.closeButton}>×</button>
          </div>
          <div className={styles.popupContent}>
            <p>"a lot of computer scientists want computers to think like people. i want to use computers to make you think about other people."</p>
          </div>
          <div className={styles.popupFooter}>
            <button onClick={handleContinue} className={styles.continueButton}>
              continue
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home