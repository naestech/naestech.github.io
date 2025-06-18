import { useEffect, useState } from 'react'
import styles from '../../styles/modules/Section.module.css'

interface SubstackPost {
  title: string
  description: string
  url: string
}

function Blog() {
  const [latestPost, setLatestPost] = useState<SubstackPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch('/naestech.github.io/substack.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const posts: SubstackPost[] = await response.json();
        setLatestPost(posts[0] || null);
      } catch {
        setLatestPost({
          title: 'ai-nxiety',
          description: 'the corpse of creativity: dressed in unity & drained of soul',
          url: 'https://technaelogy.substack.com/p/ai-nxiety'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchLatestPost();
  }, []);


  return (
    <section className={`${styles.section} ${styles.blog}`} id="blog">
      <div className={styles.content}>
        <div className={styles.projectRows}>
          <div className={styles.projectRow}>
            <div className={styles.projectCard}>
              {loading ? (
                <p>loading latest post...</p>
              ) : latestPost ? (
                <div>
                  <h2>
                    <a href={latestPost.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {latestPost.title}
                    </a>
                  </h2>
                  <p>{latestPost.description}</p>
                </div>
              ) : (
                <div>
                  <h2>no posts found</h2>
                  <p>check back later for new content</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <a 
          href="https://technaelogy.substack.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.readMore}
        >
          view all posts on substack →
        </a>
      </div>
    </section>
  )
}

export default Blog