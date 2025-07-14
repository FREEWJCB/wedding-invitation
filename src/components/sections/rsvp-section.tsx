import Image from "next/image"

export default function RSVPSection() {
  return (
    <section id="rsvp" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-12">Confirma tu Asistencia</h2>

        <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image src="/placeholder.svg?height=400&width=600" alt="Pareja en escaleras" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-[12px] border-l-[#8b7355] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-sm md:text-base text-[#8b7355] leading-relaxed mb-6">
            TU CONFIRMACIÓN ES MUY IMPORTANTE! POR FAVOR, INDÍCANOS SI ASISTIRÁS O NO A NUESTRA BODA ANTES DEL 17 DE
            MAYO 2025.
          </p>

          <button className="bg-[#8b7355] text-white px-8 py-3 rounded-lg font-serif text-lg hover:bg-[#7a6449] transition-colors">
            CONFIRMAR ASISTENCIA
          </button>
        </div>
      </div>
    </section>
  )
}
