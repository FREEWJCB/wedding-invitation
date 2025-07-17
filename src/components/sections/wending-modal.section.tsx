'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import '@/styles/wedding-modal.css'

export default function WeddingModal() {
  const [showModal, setShowModal] = useState(true)

  // Agrega blur y bloquea scroll cuando el modal está activo
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
    const main = document.getElementById('mainContent')
    if (main) main.classList.remove('blurred')
    document.body.style.overflow = ''
    setShowModal(false)
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="wedding-modal"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="wedding-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              maxHeight: '95vh', // No sobrepasa la pantalla
              overflowY: 'auto'   // Scroll si hay mucho contenido
            }}
          >
            <h3 className="text-4xl md:text-5xl font-script text-[#000000] mb-2 leading-tight">
              Camila & Luis
            </h3>
            <h3 className="text-xl md:text-2xl font-serif text-[#000000] mb-6 tracking-wide font-semibold">
              CUPOS (2)
            </h3>
            <p className="wedding-message">
              Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos.
              <br />
              Nos haría inmensamente felices que nos acompañaras.
            </p>
            <button className="wedding-button" onClick={handleClose}>
              Continuar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
