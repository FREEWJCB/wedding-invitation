import { Mail } from "lucide-react"

export default function GiftsSection() {
  return (
    <section id="gifts" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-12">Sugerencia de Regalos</h2>

        {/* Rain of envelopes section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-serif text-[#8b7355] font-semibold mb-4">LLUVIA DE SOBRES</h3>
          <Mail className="w-16 h-16 text-[#8b7355] mx-auto mb-6" />
          <p className="text-sm md:text-base text-[#8b7355]">
            Tu presencia es nuestro mejor regalo, pero si deseas hacernos un obsequio, puedes hacerlo en efectivo.
          </p>
        </div>

        {/* Bank accounts */}
        <div className="space-y-12">
          {/* BBVA Account */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-serif text-[#8b7355] font-semibold mb-2">CUENTA BANCARIA</h3>
            <div className="text-xl font-serif text-[#8b7355] font-bold mb-2">BBVA</div>
            <div className="text-lg font-mono text-[#8b7355] mb-2">123456789010</div>
            <div className="text-sm text-[#8b7355]">NOMBRE DEL PROPIETARIO: BÁRBARA & SERGIO</div>
          </div>

          {/* BANCOPPEL Account */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-serif text-[#8b7355] font-semibold mb-2">CUENTA BANCARIA</h3>
            <div className="text-xl font-serif text-[#8b7355] font-bold">BANCOPPEL</div>
            <div className="text-lg font-mono text-[#8b7355] mb-2">987654321098</div>
            <div className="text-sm text-[#8b7355]">NOMBRE DEL PROPIETARIO: BÁRBARA & SERGIO</div>
          </div>
        </div>
      </div>
    </section>
  )
}
