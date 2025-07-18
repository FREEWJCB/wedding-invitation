"use client"

import { motion } from "framer-motion"
import { Church, Heart, Sparkles, Users, Utensils } from "lucide-react"

export default function TimelineSection() {
  const timelineEvents = [
    { time: "3:30 PM", title: "RECEPCIÓN CON CAFECITO", icon: Church },
    { time: "4:00 PM", title: "CEREMONIA", icon: Heart },
    { time: "5:00 PM", title: "COCTEL", icon: Heart },
    { time: "6:00 PM", title: "ENTRADA DE LOS NOVIOS", icon: Sparkles },
    { time: "9:30 PM", title: "CENA", icon: Users },
    { time: "12:00 AM", title: "FIESTA", icon: Utensils },
  ]

  return (
    <section id="timeline" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#000000] mb-12">
          Programa de la boda
        </h2>

        <div className="relative">
          {/* Línea central del timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-black h-full"></div>

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            const isLeft = index % 2 === 0

            return (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Punto del timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-[#f5f1eb] z-10"></div>

                {/* Contenido animado */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Hora y título */}
                  <div
                    className={`w-1/2 ${
                      isLeft ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="text-lg font-serif text-[#000000] font-semibold">
                      {event.time}
                    </div>
                    <div className="text-sm text-[#000000] mt-1">{event.title}</div>
                  </div>

                  {/* Icono */}
                  <div
                    className={`w-1/2 flex ${
                      isLeft ? "justify-start pl-8" : "justify-end pr-8"
                    }`}
                  >
                    <IconComponent className="w-8 h-8 text-[#000000]" />
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
