'use client'

import { motion } from 'framer-motion'

export default function DressCodeSection() {

  return (
    <section id="dresscode" className="py-6 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">

        {/* Dress code section */}
        <motion.div
          className="bg-[#f9f6f1] p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-2xl font-serif text-[#000000] font-semibold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            VESTIMENTA
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-[#000000] mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Vestido Largo Negro / Smocking Negro
          </motion.p>

          {/* Color circles */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-black rounded-full border-2"></div>
            <div className="w-16 h-16 bg-white rounded-full border-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
