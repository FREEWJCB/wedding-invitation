import Image from "next/image"

export default function ThankYouSection() {
  return (
    <section id="thankyou" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-12">¡Gracias por acompañarnos!</h2>

        <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image src="/placeholder.svg?height=400&width=600" alt="Pareja bailando" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-[12px] border-l-[#8b7355] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#8b7355] leading-relaxed mb-6">
          GRACIAS POR ACOMPAÑARNOS EN ESTE MOMENTO TAN IMPORTANTE PARA NOSOTROS.
        </p>

        <p className="text-sm md:text-base text-[#8b7355] mb-6">CON CARIÑO: BÁRBARA & SERGIO</p>

        <div className="text-5xl font-script text-[#8b7355] mb-6">B&S</div>
      </div>
    </section>
  )
}
