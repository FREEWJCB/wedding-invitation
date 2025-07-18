'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ThankYouSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { margin: '-10% 0px', once: false })

  return (
    <section id="thankyou" ref={sectionRef} className="py-16 px-6 bg-[#f5f1eb] text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        layout
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 2.6, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-script text-[#000000] mb-12"
          layout
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ delay: 0.2, duration: 2.6 }}
        >
          ¡Gracias por acompañarnos!
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-[#000000] leading-relaxed mb-6"
          layout
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ delay: 0.4, duration: 2.6 }}
        >
          GRACIAS POR ACOMPAÑARNOS EN ESTE MOMENTO TAN IMPORTANTE PARA NOSOTROS.
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-[#000000] mb-6"
          layout
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ delay: 0.6, duration: 2.6 }}
        >
          CON CARIÑO: BÁRBARA & SERGIO
        </motion.p>

        <motion.div
          className="mb-6 flex justify-center"
          layout
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ delay: 0.8, duration: 2.6 }}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={90}
            height={90}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
