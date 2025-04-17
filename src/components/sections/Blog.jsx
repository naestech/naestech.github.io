import { useEffect } from 'react'
import styles from '../../styles/modules/Section.module.css'

function Blog() {
  useEffect(() => {
    // Re-initialize the widget when the component mounts
    if (window.SubstackFeedWidget) {
      const script = document.createElement('script')
      script.src = 'https://substackapi.com/embeds/feed.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className={`${styles.section}`} id="blog">
      <div className={styles.content}>
        <div className={styles.blogPreview}>
          <div id="substack-feed-embed"></div>
          <a 
            href="https://technaelogy.substack.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.readMore}
          >
            read more on substack →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog