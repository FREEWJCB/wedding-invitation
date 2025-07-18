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
        className="invitacion-animada w-full max-w-[600px] aspect-[3/4] relative flex flex-col items-center justify-center"
        // Animación al entrar y salir del viewport
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 3.2, ease: 'easeOut' }}
        viewport={{ amount: 0.5 }}  // activa cuando el 50% está visible
      >
        <div className="container">
          <div className="strips">
            <div className="strip strip-left">
              <span className="nombre nombre-izq">Daniel</span>
            </div>
            <div className="strip strip-center">
              <span className="amp">&</span>
            </div>
            <div className="strip strip-right">
              <span className="nombre nombre-der">Paula</span>
            </div>
          </div>
        </div>

        <h4 className="font-charmonman text-[clamp(1.0rem,4vw,4rem)] text-[#000000] text-center mt-4">
          15 . 11 . 25
        </h4>
      </motion.div>
    </section>
  )
}
