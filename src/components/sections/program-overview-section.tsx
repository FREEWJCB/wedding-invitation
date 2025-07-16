import { Church, Heart } from "lucide-react"

export default function ProgramOverviewSection() {
  return (
    <section id="program" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-12">Programa de la boda</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Church className="w-12 h-12 text-[#8b7355] mb-4" />
            <h3 className="text-xl font-serif text-[#8b7355] font-semibold mb-2">Ceremonia Religiosa</h3>
            <p className="text-lg font-serif text-[#8b7355]">5:00 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="w-12 h-12 text-[#8b7355] mb-4" />
            <h3 className="text-xl font-serif text-[#8b7355] font-semibold mb-2">Recepción</h3>
            <p className="text-lg font-serif text-[#8b7355]">7:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
