'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import HeroImage from '@/components/hero-image'
import Form from 'next/form'
import { InvitationWithInvitees } from '@/types/models/invitation'
import Update from '@/app/invitation/update'

interface RSVPSectionProps {
  invitation: InvitationWithInvitees
}

export default function RSVPSection({ invitation }: RSVPSectionProps) {
  const { code, count, escorts } = invitation

  const titleRef = useRef(null)
  const textRef = useRef(null)
  const formRef = useRef(null)
  const imageRef = useRef(null)

  const isTitleInView = useInView(titleRef, { margin: '-10% 0px', once: false })
  const isTextInView = useInView(textRef, { margin: '-10% 0px', once: false })
  const isFormInView = useInView(formRef, { margin: '-10% 0px', once: false })
  const isImageInView = useInView(imageRef, { margin: '-10% 0px', once: false })

  return (
    <section id="rsvp" className="px-6 bg-[#f5f1eb] text-center overflow-hidden">
      <div className="max-w-3xl mx-auto mb-18">
        <div className="bg-[#f9f6f1] p-8 rounded-lg shadow-md">

          {/* Título */}
          <motion.div ref={titleRef} layout>
            <motion.h2
              key="title"
              className="text-3xl md:text-4xl font-script text-[#000000] mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 2.6 }}
            >
              Confirma tu asistencia
            </motion.h2>
          </motion.div>

          {/* Texto */}
          <motion.div ref={textRef} layout>
            <motion.p
              key="text"
              className="text-sm md:text-base text-[#000000] leading-relaxed mb-6"
              initial={{ opacity: 0, x: 80 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
              transition={{ duration: 2.6, delay: isTextInView ? 0.2 : 0 }}
            >
              TU CONFIRMACIÓN ES MUY IMPORTANTE! POR FAVOR, INDÍCANOS SI ASISTIRÁS O NO A NUESTRA BODA ANTES DEL 17 DE MAYO 2025.
            </motion.p>
          </motion.div>

          {/* Formulario */}
          <motion.div ref={formRef} layout>
            <motion.div
              layout
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 2.5, delay: isFormInView ? 0.4 : 0 }}
            >
              <Form action={Update} className="flex flex-col items-center justify-center space-y-4">
                <input type="hidden" name="code" value={code} />

                {Array.from({ length: count }).map((_, idx) => (
                  <div key={idx} className="w-full max-w-md text-left">
                    <label htmlFor={`invitees[${idx}][full_name]`} className="block text-sm text-black mb-1">
                      Nombre del invitado {idx + 1}
                    </label>
                    <input
                      name={`invitees[${idx}][full_name]`}
                      id={`invitees[${idx}][full_name]`}
                      required
                      className="w-full focus:border-[#c2beb8] outline-none p-2 border border-gray-300 rounded"
                    />
                    <label htmlFor={`invitees[${idx}][allergy_info]`} className="block text-sm text-black mb-1 mt-2">
                      ¿Alguna alergia? (opcional)
                    </label>
                    <input
                      name={`invitees[${idx}][allergy_info]`}
                      id={`invitees[${idx}][allergy_info]`}
                      className="w-full focus:border-[#c2beb8] p-2 border outline-none border-gray-300 rounded"
                    />
                  </div>
                ))}

                {Array.from({ length: escorts }).map((_, idx) => {
                  const currentIdx = idx + count;
                  return (
                    <div key={idx} className="w-full max-w-md text-left">
                      <label htmlFor={`escorts[${idx}][full_name]`} className="block text-sm text-black mb-1">
                        Nombre del invitado {currentIdx + 1}
                      </label>
                      <input
                        name={`escorts[${idx}][full_name]`}
                        id={`escorts[${idx}][full_name]`}
                        required
                        className="w-full p-2 border focus:border-[#c2beb8] outline-none border-gray-300 rounded"
                      />
                      <label htmlFor={`escorts[${idx}][allergy_info]`} className="block text-sm text-black mb-1 mt-2">
                        ¿Alguna alergia? (opcional)
                      </label>
                      <input
                        name={`escorts[${idx}][allergy_info]`}
                        id={`escorts[${idx}][allergy_info]`}
                        className="w-full p-2 border focus:border-[#c2beb8] outline-none border-gray-300 rounded"
                      />
                    </div>
                  );
                })}

                <div className="w-full max-w-md text-left">
                  <label htmlFor="has_choosen_driver" className="block text-sm text-black mb-1">
                    ¿Quieres conductor elegido?
                  </label>
                  <select name="has_choosen_driver" id="has_choosen_driver" required className="w-full p-2 mb-1 outline-none focus:border-[#c2beb8] border border-gray-300 rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                  </select>

                  <label htmlFor="has_choosen_driver" className="block text-sm text-gray-800 mb-1">
                    En caso de seleccionar conductor elegido, tenga en cuenta que este servicio tiene un costo adicional.
                  </label>
                  <label htmlFor="contact_phone" className="block text-sm text-black mb-1 mt-2">
                    Teléfono
                  </label>
                  <input
                    name="contact_phone"
                    id="contact_phone"
                    type="tel"
                    pattern="\d*"
                    inputMode="numeric"
                    className="w-full p-2 border border-gray-300 focus:border-[#c2beb8] outline-none rounded"
                  />
                </div>

                <div className="w-full max-w-md text-left">
                  <label htmlFor="guest_message" className="block text-sm text-black mb-1">
                    Nota o mensaje (opcional)
                  </label>
                  <textarea name="guest_message" id="guest_message" rows={4} className="w-full p-2 border border-gray-300 focus:border-[#c2beb8] rounded outline-none" />
                </div>

                <button
                  type="submit"
                  className="bg-[#f5f1eb] text-black px-8 py-3 rounded-lg font-serif text-lg hover:bg-[#c2beb8] transition-colors outline-none"
                >
                  Confirmar asistencia
                </button>
              </Form>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Imagen decorativa */}
      <motion.div ref={imageRef} layout>
        <motion.div
          key="image"
          layout
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={isImageInView ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 } : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          transition={{ duration: 3.2, ease: 'easeInOut', delay: isImageInView ? 0.6 : 0 }}
          style={{ overflow: 'hidden' }}
        >
          <HeroImage imagePath="/asistencia.jpeg" />
        </motion.div>
      </motion.div>
    </section>
  )
}
