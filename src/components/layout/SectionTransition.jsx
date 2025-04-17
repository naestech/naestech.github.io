import { motion, useScroll, useTransform } from 'framer-motion'

function SectionTransition({ children, direction = null, isFade = false }) {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 1],
    [
      direction === 'right' ? 100 : -100,
      direction === 'right' ? 50 : -50,
      0,
      0,
      direction === 'right' ? -50 : 50,
      direction === 'right' ? -100 : 100
    ]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 1],
    [0, 0.5, 1, 1, 0.5, 0]
  )

  return (
    <motion.div
      style={{
        x: isFade ? 0 : x,
        opacity: opacity,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default SectionTransition 