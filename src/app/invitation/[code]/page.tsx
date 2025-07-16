import Header from "@/components/header"
import ProgramOverviewSection from "@/components/sections/program-overview-section"
import CeremonyReceptionSection from "@/components/sections/ceremony-reception-section"
import TimelineSection from "@/components/sections/timeline-section"
import DressCodeSection from "@/components/sections/dress-code-section"
import GiftsSection from "@/components/sections/gifts-section"
import RSVPSection from "@/components/sections/rsvp-section"
import ThankYouSection from "@/components/sections/thank-you-section"
import Footer from "@/components/footer"

import { getInvitation } from "@/actions/invitations"
import { notFound } from "next/navigation"

const InvitationPage = async ({ params }: { params: Promise<{ code: string }>; }) => {
  const { code } = await params;
  const invitation = await getInvitation(code).catch(notFound);
  console.log(JSON.stringify(invitation, null, 2));
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#8b7355] font-body">
      <Header />
      <main>
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
};

export default InvitationPage;
