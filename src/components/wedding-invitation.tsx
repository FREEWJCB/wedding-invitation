"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CoverPage from "./pages/cover-page"
import ProgramPage from "./pages/program-page"
import TimelinePage from "./pages/timeline-page"
import CeremonyPage from "./pages/ceremony-page"
import DressCodePage from "./pages/dress-code-page"
import GiftsPage from "./pages/gifts-page"
import ConfirmationPage from "./pages/confirmation-page"
import CountdownPage from "./pages/countdown-page"
import ThankYouPage from "./pages/thank-you-page"

const pages = [
  { id: "cover", component: CoverPage },
  { id: "program", component: ProgramPage },
  { id: "timeline", component: TimelinePage },
  { id: "ceremony", component: CeremonyPage },
  { id: "dresscode", component: DressCodePage },
  { id: "gifts", component: GiftsPage },
  { id: "confirmation", component: ConfirmationPage },
  { id: "countdown", component: CountdownPage },
  { id: "thankyou", component: ThankYouPage },
]

export default function WeddingInvitation() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  const CurrentComponent = pages[currentPage].component

  return (
    <div className="min-h-screen bg-[#f5f1eb] relative overflow-hidden">
      {/* Navigation dots */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to page ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentPage ? "bg-[#8b7355] scale-125" : "bg-[#d4c4a8]"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {currentPage > 0 && (
        <button
          onClick={prevPage}
          aria-label="Previous page"
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/80 hover:bg-white/90 rounded-full shadow-lg p-2 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-[#8b7355]" />
        </button>
      )}

      {currentPage < pages.length - 1 && (
        <button
          onClick={nextPage}
          aria-label="Next page"
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/80 hover:bg-white/90 rounded-full shadow-lg p-2 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-[#8b7355]" />
        </button>
      )}

      {/* Page content */}
      <div className="w-full h-screen">
        <CurrentComponent />
      </div>
    </div>
  )
}
