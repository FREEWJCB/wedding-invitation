'use client'

import { motion } from 'framer-motion'
import HeroImage from '@/components/hero-image'

export default function RSVPSection() {
  return (
    <section id="rsvp" className="py-3 px-6 bg-[#f5f1eb] text-center overflow-hidden">
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Título animado de arriba hacia abajo */}
          <motion.h2
            className="text-3xl md:text-4xl font-script text-[#000000] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Confirma tu Asistencia
          </motion.h2>

          {/* Párrafo animado de derecha a izquierda */}
          <motion.p
            className="text-sm md:text-base text-[#000000] leading-relaxed mb-6"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TU CONFIRMACIÓN ES MUY IMPORTANTE! POR FAVOR, INDÍCANOS SI ASISTIRÁS O NO A NUESTRA BODA ANTES DEL 17 DE
            MAYO 2025.
          </motion.p>

          {/* Botón animado de abajo hacia arriba */}
          <motion.button
            className="bg-[#f5f1eb] text-black px-8 py-3 rounded-lg font-serif text-lg hover:bg-[#7a6449] transition-colors"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Confirmar Asistencia
          </motion.button>
        </div>
      </div>

      {/* Imagen con revelado de arriba hacia abajo */}
      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.6 }}
      >
        <HeroImage imagePath="/asistencia.jpeg" />
      </motion.div>
    </section>
  )
}
