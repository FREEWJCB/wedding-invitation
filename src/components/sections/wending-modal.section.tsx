'use client'

import { useEffect, useState } from 'react'
import '@/styles/wedding-modal.css'

export default function WeddingModal() {
  const [isClosing, setIsClosing] = useState(false)
  const [showModal, setShowModal] = useState(true)

  // Agrega blur cuando el modal está activo
  useEffect(() => {
    const main = document.getElementById('mainContent')
    if (!main) return

    if (showModal) {
      main.classList.add('blurred')
      document.body.style.overflow = 'hidden'
    }

    return () => {
      if (main) main.classList.remove('blurred')
      document.body.style.overflow = ''
    }
  }, [showModal])

  const handleClose = () => {
    setIsClosing(true)
    const main = document.getElementById('mainContent')
    if (main) main.classList.remove('blurred')
    document.body.style.overflow = ''

    setTimeout(() => {
      setShowModal(false)
    }, 500)
  }

  if (!showModal) return null

  return (
    <div
      className={`wedding-modal ${isClosing ? 'fade-out' : ''}`}
      onClick={handleClose}
    >
      <div
        className="wedding-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="wedding-message">
          Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos.
          <br />
          Nos haría inmensamente felices que nos acompañaras.
        </p>
        <button className="wedding-button" onClick={handleClose}>
          Continuar
        </button>
      </div>
    </div>
  )
}
