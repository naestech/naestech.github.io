import { motion } from 'framer-motion'
import React from 'react'

interface SectionTransitionProps {
  children: React.ReactNode
  direction?: string | null
  isFade?: boolean
}

function SectionTransition({ children, direction = null, isFade = false }: SectionTransitionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={isFade ? fadeVariants : variants}
    >
      {children}
    </motion.div>
  )
}

export default SectionTransition 