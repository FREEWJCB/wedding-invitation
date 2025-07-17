'use client'

import { motion } from 'framer-motion'

const lineAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
}

export default function DressCodeSection() {
  const lines = [
    'AUNQUE AMAMOS A LOS PEQUEÑOS,',
    'ESTE DÍA ESPECIAL ES SOLO PARA ADULTOS.',
    'LES PEDIMOS QUE NOS ACOMPAÑEN SIN NIÑOS',
  ]

  return (
    <section id="dresscode" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        {/* Kids message */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12 overflow-hidden">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="text-sm md:text-base text-[#000000] leading-relaxed"
              variants={lineAnimation}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {line.includes('SIN NIÑOS') ? (
                <>
                  {line.split('SIN NIÑOS')[0]}
                  <span className="font-semibold underline">SIN NIÑOS</span>
                </>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>

        {/* Dress code section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-serif text-[#000000] font-semibold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            VESTIMENTA FORMAL
          </motion.h3>

          <motion.p
            className="text-sm md:text-base text-[#000000] mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            LES PEDIMOS DE FAVOR A LOS INVITADOS EVITAR ESTOS COLORES:
          </motion.p>

          {/* Color circles */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-black rounded-full border-2 border-[#8b7355]"></div>
            <div className="w-16 h-16 bg-[#f5f1eb] rounded-full border-2 border-[#8b7355]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
