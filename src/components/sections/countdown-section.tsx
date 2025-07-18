'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeroImage from '@/components/hero-image'

const paragraphLines = [
  "NUESTRA FELICIDAD SOLO ESTÁ COMPLETA",
  "CUANDO LA COMPARTIMOS CON LAS PERSONAS",
  "A LAS QUE AMAMOS NOS HARÍA",
  "INMENSAMENTE FELICES QUE NOS ACOMPAÑARAN",
  "EN EL INICIO DE NUESTRA VIDA JUNTOS."
]

export default function CountdownSection() {
  const targetDate = new Date("2025-11-15T15:30:00-05:00").getTime()

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const paragraphRef = useRef(null)
  const titleRef = useRef(null)
  const countdownRef = useRef(null)
  const imageRef = useRef(null)

  const inViewParagraph = useInView(paragraphRef, { margin: '-10% 0px' })
  const inViewTitle = useInView(titleRef, { margin: '-10% 0px' })
  const inViewCountdown = useInView(countdownRef, { margin: '-10% 0px' })
  const inViewImage = useInView(imageRef, { margin: '-10% 0px' })

  return (
    <section id="countdown" className="px-6 bg-[#f5f1eb] text-center overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Párrafo */}
        <div ref={paragraphRef}>
          <div className="text-sm md:text-base text-[#000000] leading-relaxed mb-10 max-w-xl mx-auto space-y-2">
            {paragraphLines.map((line, index) => (
              <motion.p
                key={index}
                initial={false}
                animate={{
                  opacity: inViewParagraph ? 1 : 0,
                  y: inViewParagraph ? 0 : 20,
                }}
                transition={{ duration: 2.6, delay: index * 0.2 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Título animado por letra */}
        <div ref={titleRef}>
          <motion.div
            className="text-2xl md:text-4xl font-body text-[#000000] mb-4 leading-tight inline-block"
            initial={false}
            animate={{ opacity: inViewTitle ? 1 : 0, y: inViewTitle ? 0 : 20 }}
            transition={{ duration: 2.6 }}
          >
            {"CUENTA REGRESIVA".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={false}
                animate={{
                  opacity: inViewTitle ? 1 : 0,
                  x: inViewTitle ? 0 : -10
                }}
                transition={{ delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Contador */}
        <div ref={countdownRef}>
          <div className="grid grid-cols-4 gap-4 text-[#000000] font-mono font-bold text-3xl md:text-5xl mb-10">
            {[
              { label: "DÍAS", value: timeLeft.days },
              { label: "HORAS", value: timeLeft.hours.toString().padStart(2, "0") },
              { label: "MINUTOS", value: timeLeft.minutes.toString().padStart(2, "0") },
              { label: "SEGUNDOS", value: timeLeft.seconds.toString().padStart(2, "0") }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={false}
                animate={{
                  opacity: inViewCountdown ? 1 : 0,
                  y: inViewCountdown ? 0 : 20
                }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                {item.value}
                <span className="block text-sm md:text-base font-body font-normal mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Imagen con animación de abajo hacia arriba */}
        <div ref={imageRef} className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: inViewImage ? '0%' : '100%', opacity: inViewImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <HeroImage imagePath="/program.jpeg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
