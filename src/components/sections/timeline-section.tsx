'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Church, Heart, Sparkles, Users, Utensils } from 'lucide-react'

export default function TimelineSection() {
  const timelineEvents = [
    { time: '3:30 PM', title: 'RECEPCIÓN CON CAFECITO', icon: Church },
    { time: '4:00 PM', title: 'CEREMONIA', icon: Heart },
    { time: '5:00 PM', title: 'COCTEL', icon: Heart },
    { time: '6:00 PM', title: 'ENTRADA DE LOS NOVIOS', icon: Sparkles },
    { time: '9:30 PM', title: 'CENA', icon: Users },
    { time: '12:00 AM', title: 'FIESTA', icon: Utensils },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: '-20% 0px', once: false })

  return (
    <section id="timeline" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto" ref={sectionRef}>
        <h2 className="text-3xl md:text-4xl font-script text-[#000000] mb-12">
          Programa de la boda
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-black h-full" />

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                transition={{ duration: 2.6, delay: index * 0.2 }}
                className={`relative mb-12 last:mb-0 flex items-center ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-[#f5f1eb] z-10" />

                <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="text-lg font-serif text-[#000000] font-semibold">
                    {event.time}
                  </div>
                  <div className="text-sm text-[#000000] mt-1">{event.title}</div>
                </div>

                <div className={`w-1/2 flex ${isLeft ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                  <IconComponent className="w-8 h-8 text-[#000000]" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
