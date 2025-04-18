import { useEffect } from 'react'
import styles from '../../styles/modules/Section.module.css'

function Blog() {
  useEffect(() => {
    // Initialize Substack widget
    window.SubstackFeedWidget = {
      substackUrl: "technaelogy.substack.com",
      posts: 1,
      layout: "right",
      hidden: ["image", "reactions", "comments", "premium"]
    }

    // Load Substack embed script
    const script = document.createElement('script')
    script.src = 'https://substackapi.com/embeds/feed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className={`${styles.section} ${styles.blog} blog-section`} id="blog">
      <div className={styles.content}>
        <div className={styles.blogPreview}>
          <div id="substack-feed-embed" className="substack-embed"></div>
          <a 
            href="https://technaelogy.substack.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.readMore}
          >
            view all posts on substack →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog