import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import CountdownSection from "@/components/sections/countdown-section"
import Footer from "@/components/footer"
import WeddingModal from "@/components/sections/wending-modal.section"
import ProgramOverviewSection from '@/components/sections/program-overview-section';
import CeremonyReceptionSection from '@/components/sections/ceremony-reception-section';
import TimelineSection from '@/components/sections/timeline-section';
import DressCodeSection from '@/components/sections/dress-code-section';
import GiftsSection from '@/components/sections/gifts-section';
import RSVPSection from '@/components/sections/rsvp-section';
import ThankYouSection from '@/components/sections/thank-you-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#8b7355] font-body">
      <WeddingModal />
      <Header />
      <main id="mainContent">
        <HeroSection />
        <CountdownSection />
        <ProgramOverviewSection />
        <CeremonyReceptionSection />
        <TimelineSection />
        <DressCodeSection />
        <GiftsSection />
        <RSVPSection />
        <ThankYouSection />
      </main>
      <Footer />
    </div>
  )
}
