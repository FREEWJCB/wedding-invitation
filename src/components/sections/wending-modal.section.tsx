'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { InvitationWithInvitees } from '@/types/models/invitation'
import '@/styles/wedding-modal.css'

interface WeddingModalProps {
  invitation: InvitationWithInvitees
}

export default function WeddingModal({ invitation }: WeddingModalProps) {
  const { count, escorts, invitees } = invitation

  let names = ''
  if (count === 1) {
    names = invitees[0]?.full_name || ''
    if (escorts > 0) {
      names += ` + ${escorts}`
    }
  } else if (count === 2) {
    names = `${invitees[0]?.full_name || ''} y ${invitees[1]?.full_name || ''}`
  } else if (count > 2) {
    const allNames = invitees.map((inv) => inv.full_name)
    names = allNames.slice(0, -1).join(', ') + ' y ' + allNames.slice(-1)
  }

  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const main = document.getElementById('mainContent')
    if (!main) return

    if (showModal) {
      main.classList.add('blurred')
      document.body.style.overflow = 'hidden'
    } else {
      main.classList.remove('blurred')
      document.body.style.overflow = ''
    }
  }, [showModal])

  const handleClose = () => {
    setShowModal(false)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-lg bg-[#f5f1eb] text-black font-serif shadow-lg hover:bg-[#5d4c38] transition"
      >
        Ver mensaje
      </button>

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
                maxHeight: '95vh',
                overflowY: 'auto',
              }}
            >
              <h3 className="text-4xl md:text-5xl font-script text-[#000000] mb-2 leading-tight">
                {names}
              </h3>
              <p className="wedding-message mb-6">{invitation.couple_message}</p>
              <button
              className="bg-[#f5f1eb] text-black px-6 py-3 rounded-lg font-serif text-lg hover:bg-[#7a6449] transition-colors" onClick={handleClose}
            >
              Continuar
            </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
