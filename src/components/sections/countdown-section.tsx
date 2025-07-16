"use client"

import { useState, useEffect } from "react"
import HeroImage from '@/components/hero-image'
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
    <section id="countdown" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-2 leading-tight">
          ¡Nos casamos! ¡Reserva la fecha!
        </h2>
        <h4 className="text-2xl md:text-3xl font-serif text-[#8b7355] mb-2 font-medium tracking-wide">
          15 Noviembre 2025
        </h4>
        <h3 className="text-4xl md:text-5xl font-script text-[#8b7355] mb-2 leading-tight">
          CAMILA & LUIS
        </h3>
        <h3 className="text-xl md:text-2xl font-serif text-[#8b7355] mb-6 tracking-wide font-semibold">
          CUPOS (2)
        </h3>

        <p className="text-sm md:text-base text-[#8b7355] leading-relaxed mb-10 max-w-xl mx-auto">
          Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos.
          Nos haría inmensamente felices que nos acompañaran en el inicio de nuestra vida juntos.
        </p>

        <div className="grid grid-cols-4 gap-4 text-[#8b7355] font-mono font-bold text-3xl md:text-5xl mb-10">
          <div>
            {timeLeft.days}
            <span className="block text-sm md:text-base font-body font-normal mt-1">DÍAS</span>
          </div>
          <div>
            {timeLeft.hours.toString().padStart(2, "0")}
            <span className="block text-sm md:text-base font-body font-normal mt-1">HORAS</span>
          </div>
          <div>
            {timeLeft.minutes.toString().padStart(2, "0")}
            <span className="block text-sm md:text-base font-body font-normal mt-1">MINUTOS</span>
          </div>
          <div>
            {timeLeft.seconds.toString().padStart(2, "0")}
            <span className="block text-sm md:text-base font-body font-normal mt-1">SEGUNDOS</span>
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-serif text-[#8b7355] mb-6">
          Con la bendición de Dios, de nuestros padres y padrinos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base text-[#8b7355] mb-12">
          <div>
            <h4 className="font-semibold mb-2">PAPÁS DE LA NOVIA</h4>
            <p>PORFIRIO RAMÍREZ</p>
            <p>MIRANDA ENRÍQUEZ</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">PAPÁS DEL NOVIO</h4>
            <p>JAVIER CUEVAS</p>
            <p>GUADALUPE GUERRERO</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">PADRINOS DE VELACIÓN</h4>
            <p>EMMANUEL ENRÍQUEZ</p>
            <p>LUZ ELENA FLORES</p>
          </div>
        </div>
      </div>
      <HeroImage imagePath="/program.jpeg" />
    </section>
  )
}
