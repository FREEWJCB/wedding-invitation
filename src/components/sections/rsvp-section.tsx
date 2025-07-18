'use client'

import { motion } from 'framer-motion'
import HeroImage from '@/components/hero-image'
import Form from 'next/form'
import { InvitationWithInvitees } from '@/types/models/invitation';
import Update from '@/app/invitation/update';
interface RSVPSectionProps {
  invitation: InvitationWithInvitees
}
export default function RSVPSection({ invitation }: RSVPSectionProps) {
  const { code, count, escorts } = invitation
  return (
    <section id="rsvp" className="px-6 bg-[#f5f1eb] text-center overflow-hidden">
      <div className="max-w-3xl mx-auto mb-10">
        <div className="bg-[#f9f6f1] p-8 rounded-lg shadow-md">
          {/* Título animado */}
          <motion.h2
            className="text-3xl md:text-4xl font-script text-[#000000] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Confirma tu asistencia
          </motion.h2>

          {/* Párrafo animado */}
          <motion.p
            className="text-sm md:text-base text-[#000000] leading-relaxed mb-6"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TU CONFIRMACIÓN ES MUY IMPORTANTE! POR FAVOR, INDÍCANOS SI ASISTIRÁS O NO A NUESTRA BODA ANTES DEL 17 DE
            MAYO 2025.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Form action={Update} className="flex flex-col items-center justify-center space-y-4">
              <input type="hidden" name="code" value={code} />
              {Array.from({ length: count }).map((_, idx) => (
                <div key={idx} className="w-full max-w-md text-left">
                  <label htmlFor={`invitees[${idx}][full_name]`} className="block font-semibold text-sm text-black mb-1">
                    Nombre del Invitado {idx + 1}
                  </label>
                  <input
                    name={`invitees[${idx}][full_name]`}
                    id={`invitees[${idx}][full_name]`}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <label htmlFor={`invitees[${idx}][allergy_info]`} className="block font-semibold text-sm text-black mb-1 mt-2">
                    ¿Alguna alergia? (opcional)
                  </label>
                  <input
                    name={`invitees[${idx}][allergy_info]`}
                    id={`invitees[${idx}][allergy_info]`}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
              {Array.from({ length: escorts }).map((_, idx) => (
                <div key={idx} className="w-full max-w-md text-left">
                  <label htmlFor={`escorts[${idx}][full_name]`} className="block font-semibold text-sm text-black mb-1">
                    Nombre del Invitado {idx + 1}
                  </label>
                  <input
                    name={`escorts[${idx}][full_name]`}
                    id={`escorts[${idx}][full_name]`}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <label htmlFor={`escorts[${idx}][allergy_info]`} className="block font-semibold text-sm text-black mb-1 mt-2">
                    ¿Alguna alergia? (opcional)
                  </label>
                  <input
                    name={`escorts[${idx}][allergy_info]`}
                    id={`escorts[${idx}][allergy_info]`}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}

              <div className="w-full max-w-md text-left">
                <label htmlFor="has_choosen_driver" className="block font-semibold text-sm text-black mb-1">
                  ¿Quieres conductor elegido?
                </label>
                <select name="has_choosen_driver" id="has_choosen_driver" required className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Selecciona una opción</option>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>

                  <label htmlFor={`contact_phone`} className="block font-semibold text-sm text-black mb-1 mt-2">
                    Telefono
                  </label>
                  <input
                    name={`contact_phone`}
                    id={`contact_phone`}
                    type="tel"
                    pattern="\d*"
                    inputMode="numeric"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
              </div>

              <div className="w-full max-w-md text-left">
                <label htmlFor="guest_message" className="block font-semibold text-sm text-black mb-1">
                  Nota o mensaje (opcional)
                </label>
                <textarea name="guest_message" id="guest_message" rows={4} className="w-full p-2 border border-gray-300 rounded" />
              </div>

              <button
                type="submit"
                className="bg-[#f5f1eb] text-black px-8 py-3 rounded-lg font-serif text-lg hover:bg-[#7a6449] transition-colors"
              >
                Confirmar asistencia
              </button>
            </Form>
          </motion.div>
        </div>
      </div>

      {/* Imagen decorativa */}
      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.6 }}
      >
        <HeroImage imagePath="/asistencia.jpeg" />
      </motion.div>
    </section>
  )
}
