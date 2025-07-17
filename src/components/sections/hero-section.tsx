'use client'

import { motion } from 'framer-motion'
import '@/styles/hero-section.css'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#f5f1eb] overflow-hidden flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }} // empieza invisible y más abajo
        animate={{ opacity: 1, y: 0 }} // aparece y sube suavemente
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="invitacion-animada w-full max-w-[600px] aspect-[3/4] relative flex flex-col items-center justify-center"
      >
        <div className="container">
          <div className="strips">
            <div className="strip"></div>
            <div className="strip"></div>
            <div className="strip"></div>
          </div>
          <div className="overlay-text">
            <span className="nombre nombre-izq">Paula</span>
            <span className="amp">&</span>
            <span className="nombre nombre-der">Daniel</span>
          </div>
        </div>

        {/* Fecha debajo del overlay-text */}
        <h4 className="font-charmonman text-[clamp(1.5rem,6vw,5rem)] text-[#000000] text-center mt-4">
          15 . 11 . 25
        </h4>
      </motion.div>
    </section>
  )
}
