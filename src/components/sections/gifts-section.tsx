'use client'

import { Mail } from "lucide-react"
import HeroImage from '@/components/hero-image'
import { motion } from 'framer-motion'

export default function GiftsSection() {
  return (
    <section id="gifts" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto mb-12">
        {/* Título animado */}
        <motion.h2
          className="text-3xl md:text-4xl font-script text-[#000000] mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Sugerencia de regalos
        </motion.h2>

        {/* Lluvia de sobres */}
        <motion.div
          className="bg-[#F9F6F1] p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 2.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="text-xl font-serif text-[#000000] font-semibold mb-4">LLUVIA DE SOBRES</div>
          <Mail className="w-16 h-16 text-[#000000] mx-auto mb-6" />
        </motion.div>

        {/* Cuenta bancaria */}
        <motion.div
          className="bg-[#f9f6f1] p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 2.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="text-lg font-serif text-[#000000] font-semibold mb-2">CUENTA BANCARIA</div>
          <div className="text-xl font-serif text-[#000000] font-bold mb-2">BANCOLOMBIA</div>
          <div className="text-lg font-mono text-[#000000] mb-2">57652017284</div>
          <div className="text-sm text-[#000000]">NOMBRE DEL PROPIETARIO: Daniel Baquero</div>
          <div className="text-sm text-[#000000]">C.C: 1.136.883.136</div>
        </motion.div>
      </div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
          delay: 0.4
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <HeroImage imagePath="/gift.jpeg" />
      </motion.div>
    </section>
  )
}
