'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function DressCodeSection() {
  // Referencia para la sección completa
  const sectionRef = useRef(null)

  return (
    <section id="dresscode" className="py-6 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto relative min-h-[350px]" ref={sectionRef}>
        {/* Card contenedor */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-[#f9f6f1] p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 2.6 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          {/* Título */}
          <motion.h2
            className="text-2xl font-serif text-black font-semibold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 2.6 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            VESTIMENTA
          </motion.h2>

          {/* Descripción */}
          <motion.p
            className="text-sm md:text-base text-black mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Vestido Largo Negro / Smocking Negro
          </motion.p>

          {/* Círculos de color */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 2.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="w-16 h-16 bg-black rounded-full border-2" />
            <div className="w-16 h-16 bg-white rounded-full border-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
