import { Church, Sparkles } from "lucide-react"

export default function CeremonyReceptionSection() {
  return (
    <section id="ceremony" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Church section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Church className="w-16 h-16 text-[#8b7355] mx-auto mb-4" />
          <h2 className="text-2xl font-script text-[#8b7355] mb-2">Ceremonia Religiosa</h2>
          <h3 className="text-xl font-serif text-[#8b7355] font-semibold mb-2">PARROQUIA DEL CARMEN</h3>
          <p className="text-sm text-[#8b7355] mb-4">Av Cristóbal de Robles #456 Navarro, Son</p>
          <div className="text-2xl font-serif text-[#8b7355] font-bold mb-4">5:00 PM</div>
          <button className="bg-[#8b7355] text-white px-6 py-2 rounded-lg font-serif text-base hover:bg-[#7a6449] transition-colors">
            VER UBICACIÓN
          </button>
        </div>

        {/* Reception section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Sparkles className="w-16 h-16 text-[#8b7355] mx-auto mb-4" />
          <h2 className="text-2xl font-script text-[#8b7355] mb-2">Recepción</h2>
          <h3 className="text-xl font-serif text-[#8b7355] font-semibold mb-2">CORDOVA CLUB</h3>
          <p className="text-sm text-[#8b7355] mb-4">San Ignacio Calderón #456 #456 Navarro, Son</p>
          <div className="text-2xl font-serif text-[#8b7355] font-bold mb-4">7:00 PM</div>
          <button className="bg-[#8b7355] text-white px-6 py-2 rounded-lg font-serif text-base hover:bg-[#7a6449] transition-colors">
            VER UBICACIÓN
          </button>
        </div>
      </div>
    </section>
  )
}
