'use client'

import { Mail } from "lucide-react"
import HeroImage from '@/components/hero-image'
import { motion } from 'framer-motion'

export default function GiftsSection() {
  return (
    <section id="gifts" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto mb-12">
        {/* Título animado desde abajo hacia arriba */}
        <motion.h2
          className="text-3xl md:text-4xl font-script text-[#000000] mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Sugerencia de Regalos
        </motion.h2>

        {/* Rain of envelopes section (izquierda a derecha) */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-serif text-[#000000] font-semibold mb-4">LLUVIA DE SOBRES</h3>
          <Mail className="w-16 h-16 text-[#000000] mx-auto mb-6" />
          <p className="text-sm md:text-base text-[#000000]">
            Tu presencia es nuestro mejor regalo, pero si deseas hacernos un obsequio, puedes hacerlo en efectivo.
          </p>
        </motion.div>

        {/* Cuentas bancarias (cada una animada desde la izquierda) */}
        <div className="space-y-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif text-[#000000] font-semibold mb-2">CUENTA BANCARIA</h3>
            <div className="text-xl font-serif text-[#000000] font-bold mb-2">BBVA</div>
            <div className="text-lg font-mono text-[#000000] mb-2">123456789010</div>
            <div className="text-sm text-[#000000]">NOMBRE DEL PROPIETARIO: BÁRBARA & SERGIO</div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif text-[#000000] font-semibold mb-2">CUENTA BANCARIA</h3>
            <div className="text-xl font-serif text-[#000000] font-bold">BANCOPPEL</div>
            <div className="text-lg font-mono text-[#000000] mb-2">987654321098</div>
            <div className="text-sm text-[#000000]">NOMBRE DEL PROPIETARIO: BÁRBARA & SERGIO</div>
          </motion.div>
        </div>
      </div>

      {/* Imagen con animación tipo rebote desde el frente */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.8,
          delay: 0.4
        }}
        viewport={{ once: true }}
      >
        <HeroImage imagePath="/gift.jpeg" />
      </motion.div>
    </section>
  )
}
