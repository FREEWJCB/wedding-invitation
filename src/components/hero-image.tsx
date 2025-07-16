'use client'

import React from 'react'
import '@/styles/hero-image.css'

interface HeroImageProps {
  imagePath: string // Ejemplo: "/program.jpeg"
}

export default function HeroImage({ imagePath }: HeroImageProps) {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#f5f1eb] overflow-hidden flex justify-center"
    >
      <div
        className="hero-image-container w-full max-w-[600px] relative"
        style={{ backgroundImage: `url(${imagePath})` }}
      />
    </section>
  )
}
