// components/animated-letters.tsx
"use client"
import { motion } from "framer-motion"

export default function AnimatedLetters({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}
