"use client"

import { useState, useEffect } from "react"
import HeroImage from '@/components/hero-image'
import { motion } from "framer-motion"

const paragraphLines = [
  "NUESTRA FELICIDAD SOLO ESTÁ COMPLETA",
  "CUANDO LA COMPARTIMOS CON LAS PERSONAS",
  "A LAS QUE AMAMOS NOS HARÍA","INMENSAMENTE FELICES QUE NOS ACOMPAÑARAN",
  "EN EL INICIO DE NUESTRA VIDA JUNTOS."
]

export default function CountdownSection() {
  const targetDate = new Date("2025-11-15T15:30:00-05:00").getTime()

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

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

  return (
    <section id="countdown" className="px-6 bg-[#f5f1eb] text-center overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Párrafo animado por línea */}
        <div className="text-sm md:text-base text-[#000000] leading-relaxed mb-10 max-w-xl mx-auto space-y-2">
          {paragraphLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Título animado por letra */}
        <motion.div
          className="text-2xl md:text-4xl font-body text-[#000000] mb-4 leading-tight inline-block"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {"CUENTA REGRESIVA".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Contador animado por columna */}
        <div className="grid grid-cols-4 gap-4 text-[#000000] font-mono font-bold text-3xl md:text-5xl mb-10">
          {[
            { label: "DÍAS", value: timeLeft.days },
            { label: "HORAS", value: timeLeft.hours.toString().padStart(2, "0") },
            { label: "MINUTOS", value: timeLeft.minutes.toString().padStart(2, "0") },
            { label: "SEGUNDOS", value: timeLeft.seconds.toString().padStart(2, "0") }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
            >
              {item.value}
              <span className="block text-sm md:text-base font-body font-normal mt-1">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Imagen del programa */}
      <HeroImage imagePath="/program.jpeg" />
    </section>
  )
}
