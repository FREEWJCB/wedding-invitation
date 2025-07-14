import { Church, Heart, Sparkles, Users, Music, Utensils } from "lucide-react"

export default function TimelineSection() {
  const timelineEvents = [
    {
      time: "5:00 PM",
      title: "CEREMONIA RELIGIOSA",
      icon: Church,
    },
    {
      time: "7:00 PM",
      title: "CEREMONIA CIVIL RECEPCIÓN",
      icon: Heart,
    },
    {
      time: "8:00 PM",
      title: "RECEPCIÓN CORDOVA CLUB",
      icon: Heart,
    },
    {
      time: "9:00 PM",
      title: "BRINDIS",
      icon: Sparkles,
    },
    {
      time: "9:30 PM",
      title: "VALS ESPOSOS",
      icon: Users,
    },
    {
      time: "12:00 AM",
      title: "CENA DESVELADOS",
      icon: Utensils,
    },
    {
      time: "1:00 A 2:00 AM",
      title: "GRUPO EN VIVO",
      icon: Music,
    },
  ]

  return (
    <section id="timeline" className="py-16 px-6 bg-[#f5f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-script text-[#8b7355] mb-12">Cronograma del Día</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#8b7355] h-full"></div>

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            return (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8b7355] rounded-full border-4 border-[#f5f1eb] z-10"></div>

                {/* Content */}
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="text-lg font-serif text-[#8b7355] font-semibold">{event.time}</div>
                    <div className="text-sm text-[#8b7355] mt-1">{event.title}</div>
                  </div>
                  <div className={`w-1/2 flex ${index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"}`}>
                    <IconComponent className="w-8 h-8 text-[#8b7355]" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
