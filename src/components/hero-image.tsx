'use client'

import Image from 'next/image'
import React from 'react'

interface HeroImageProps {
  imagePath: string // Ejemplo: "/program.jpeg"
}

export default function HeroImage({ imagePath }: HeroImageProps) {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#f5f1eb] overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-[600px] aspect-[3/4] relative overflow-hidden">
        <Image
          src={imagePath}
          alt="Imagen de pareja"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
