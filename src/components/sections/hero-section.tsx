'use client'

import '@/styles/hero-section.css'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#f5f1eb] overflow-hidden flex justify-center"
    >
      <div className="invitacion-animada w-full max-w-[600px] aspect-[3/4] relative">
        <div className="container">
          <div className="strips">
            <div className="strip"></div>
            <div className="strip"></div>
            <div className="strip"></div>
          </div>
          <div className="overlay-text">
            <span className="nombre nombre-izq">Paula</span>
            <span className="amp">&</span>
            <span className="nombre nombre-der">Daniel</span>
          </div>
        </div>
      </div>
    </section>
  )
}
