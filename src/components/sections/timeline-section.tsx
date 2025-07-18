'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function TimelineSection() {
  const timelineEvents = [
    { time: '3:30 PM', title: 'RECEPCIÓN CON CAFECITO', icon: '/icon/cafe.svg' },
    { time: '4:00 PM', title: 'CEREMONIA', icon: '/icon/anillos.svg' },
    { time: '5:00 PM', title: 'COCTEL', icon: '/icon/coctel.svg' },
    { time: '6:00 PM', title: 'ENTRADA DE LOS NOVIOS', icon: '/icon/novios.svg' },
    { time: '7:00 PM', title: 'CENA', icon: '/icon/cena.svg' },
    { time: '9:00 PM', title: 'FIESTA', icon: '/icon/party.svg' },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: '-20% 0px', once: false })

  return (
    <section id="timeline" className="px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto" ref={sectionRef}>
        <h2 className="text-3xl md:text-4xl font-script text-[#000000] mb-12">
          Programa de la boda
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-black h-full" />

          {timelineEvents.map((event, index) => {
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
                  <Image
                    src={event.icon}
                    alt={event.title}
                    width={48}
                    height={48}
                    className="w-15 h-15"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
