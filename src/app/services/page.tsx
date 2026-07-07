import ServicesHero from "@/components/services/ServicesHero";
import PillarsOverview from "@/components/services/PillarsOverview";
import StrategyPillarDetail from "@/components/services/StrategyPillarDetail";
import TalentPillarDetail from "@/components/services/TalentPillarDetail";
import TechPillarDetail from "@/components/services/TechPillarDetail";
import WhoWeHelpSection from "@/components/services/WhoWeHelpSection";
import TypicalEngagementsSection from "@/components/services/TypicalEngagementsSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import SolutionAreasSection from "@/components/services/SolutionAreasSection";
import CapabilityDeckSection from "@/components/services/CapabilityDeckSection";
import CtaSection from "@/components/shared/CtaSection";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <PillarsOverview />
      <StrategyPillarDetail />
      <TalentPillarDetail />
      <TechPillarDetail />
      <WhoWeHelpSection />
      <TypicalEngagementsSection />
      <IndustriesSection />
      <SolutionAreasSection />
      <CtaSection
        data={{
          heading: "Advisory Services for Companies Ready to Grow Smarter",
          description:
            "We connect strategy, people, partnerships and technology to help ambitious organisations turn complexity into momentum through strategic growth advisory, talent capability and partner-enabled solutions.",
          primaryButtonText: "Start a Strategic Conversation",
          primaryButtonUrl: "mailto:hello@tanjimenezconsulting.com",
        }}
      />
      <CapabilityDeckSection />
    </main>
  );
}
