"use client"

import { Church, Wine } from "lucide-react"
import HeroImage from "@/components/hero-image"
import { motion } from "framer-motion"

export default function CeremonyReceptionSection() {
  return (
    <section id="ceremony" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto space-y-12 mb-12">
        <motion.div
          className="bg-[#F9F6F1] p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        >
          <Church className="w-16 h-16 text-[#000000] mx-auto mb-4" />
          <h2 className="text-2xl font-script text-[#000000] mb-2">
            Ceremonia Religiosa
          </h2>
          <div className="text-xl font-serif text-[#000000] font-semibold mb-2">
            CAPILLA HACIENDA TERRANOSTRA
          </div>
          <h3 className="text-sm font-serif text-[#000000] font-semibold mb-2">
            Subachoque, Cundinamarca
          </h3>
          <div className="text-2xl font-serif text-[#000000] mb-4">
            4:00 PM
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <a href="https://www.google.com/maps/search/?api=1&query=4.943580,-74.157142" target="_blank">
              <button className="bg-[#ededed] text-black px-6 py-2 rounded-lg font-serif text-base hover:bg-[#c2beb8] transition-colors">
                Ver en Google Maps
              </button>
            </a>
            <a href="https://waze.com/ul?ll=4.943580,-74.157142&navigate=yes" target="_blank">
              <button className="bg-[#ededed] text-black px-6 py-2 rounded-lg font-serif text-base hover:bg-[#c2beb8] transition-colors">
                Ver en Waze
              </button>
            </a>
          </div>
        </motion.div>
        <div className="text-sm md:text-base text-[#000000] leading-relaxed mb-10 max-w-xl mx-auto space-y-2">
          RECUERDA QUE LOS SÁBADOS SUELE HABER BASTANTE TRÁFICO. PLANEA TU SALIDA CON ANTICIPACIÓN.
        </div>
        <motion.div
          className="bg-[#F9F6F1] p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        >
          <Wine className="w-16 h-16 text-[#000000] mx-auto mb-4" />
          <h2 className="text-2xl font-script text-[#000000] mb-2">
            Recepción
          </h2>
          <div className="text-xl font-serif text-[#000000] font-semibold mb-2">
            HACIENDA TERRANOSTRA
          </div>
          <h3 className="text-sm font-serif text-[#000000] font-semibold mb-2">
            Subachoque, Cundinamarca
          </h3>
          <div className="text-2xl font-serif text-[#000000]  mb-4">
            5:00 PM
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <a href="https://www.google.com/maps/search/?api=1&query=4.943580,-74.157142" target="_blank">
              <button className="bg-[#ededed] text-black px-6 py-2 rounded-lg font-serif text-base hover:bg-[#c2beb8] transition-colors">
                Ver en Google Maps
              </button>
            </a>
            <a href="https://waze.com/ul?ll=4.943580,-74.157142&navigate=yes" target="_blank">
              <button className="bg-[#ededed] text-black px-6 py-2 rounded-lg font-serif text-base hover:bg-[#c2beb8] transition-colors">
                Ver en Waze
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Imagen animada desde la derecha */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.8, ease: "easeOut" }}
        exit={{ opacity: 0, x: 100 }}
        viewport={{ amount: 0.5 }}
      >
        <HeroImage imagePath="/ubicacion.jpeg" />
      </motion.div>
    </section>
  )
}
