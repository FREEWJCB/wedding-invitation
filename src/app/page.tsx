import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import CountdownSection from "@/components/sections/countdown-section"
import Footer from "@/components/footer"
import WeddingModal from "@/components/sections/wending-modal.section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#8b7355] font-body">
      <WeddingModal />
      <Header />
      <main id="mainContent">
        <HeroSection />
        <CountdownSection />
      </main>
      <Footer />
    </div>
  )
}
