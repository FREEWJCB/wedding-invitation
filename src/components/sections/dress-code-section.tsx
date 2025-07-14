import Image from "next/image"

export default function DressCodeSection() {
  return (
    <section id="dresscode" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-12">Información Importante</h2>

        {/* Kids message */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-sm md:text-base text-[#8b7355] leading-relaxed">
            AUNQUE AMAMOS A LOS PEQUEÑOS, ESTE DÍA ESPECIAL ES SOLO PARA ADULTOS. LES PEDIMOS QUE NOS ACOMPAÑEN{" "}
            <span className="font-semibold underline">SIN NIÑOS</span>
          </p>
        </div>

        {/* Dress code section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-serif text-[#8b7355] font-semibold mb-6">VESTIMENTA FORMAL</h3>

          <p className="text-sm md:text-base text-[#8b7355] mb-6">
            LES PEDIMOS DE FAVOR A LOS INVITADOS EVITAR ESTOS COLORES:
          </p>

          {/* Color circles */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-16 h-16 bg-black rounded-full border-2 border-[#8b7355]"></div>
            <div className="w-16 h-16 bg-[#f5f1eb] rounded-full border-2 border-[#8b7355]"></div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image src="/placeholder.svg?height=400&width=600" alt="Wedding details" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
