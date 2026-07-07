import client from "@/lib/apollo/client";
import { GET_SERVICES_PAGE } from "@/lib/graphql/services.queries";
import ServicesHero, { type ServicesHeroData } from "@/components/services/ServicesHero";
import PillarsOverview from "@/components/services/PillarsOverview";
import StrategyPillarDetail, { type StrategyPillarData } from "@/components/services/StrategyPillarDetail";
import TalentPillarDetail, { type TalentPillarData } from "@/components/services/TalentPillarDetail";
import TechPillarDetail, { type TechPillarData } from "@/components/services/TechPillarDetail";
import WhoWeHelpSection, { type WhoWeHelpData } from "@/components/services/WhoWeHelpSection";
import TypicalEngagementsSection, { type EngagementsData } from "@/components/services/TypicalEngagementsSection";
import IndustriesSection, { type IndustriesData } from "@/components/services/IndustriesSection";
import SolutionAreasSection, { type SolutionAreasData } from "@/components/services/SolutionAreasSection";
import CapabilityDeckSection, { type CapabilityDeckData } from "@/components/services/CapabilityDeckSection";
import CtaSection from "@/components/shared/CtaSection";

type ServicesCmsSection = { __typename: string } & Record<string, unknown>;

interface CtaData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

async function fetchServicesSections(): Promise<ServicesCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_SERVICES_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.servicesPageSections?.servicesSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: ServicesCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function ServicesPage() {
  const sections = await fetchServicesSections();

  const hero = getSection<ServicesHeroData>(sections, "ServicesPageSectionsServicesSectionsHeroLayout");
  const strategy = getSection<StrategyPillarData>(sections, "ServicesPageSectionsServicesSectionsStrategyPillarLayout");
  const talent = getSection<TalentPillarData>(sections, "ServicesPageSectionsServicesSectionsTalentPillarLayout");
  const tech = getSection<TechPillarData>(sections, "ServicesPageSectionsServicesSectionsTechPillarLayout");
  const whoWeHelp = getSection<WhoWeHelpData>(sections, "ServicesPageSectionsServicesSectionsWhoWeHelpLayout");
  const engagements = getSection<EngagementsData>(sections, "ServicesPageSectionsServicesSectionsEngagementsLayout");
  const industries = getSection<IndustriesData>(sections, "ServicesPageSectionsServicesSectionsIndustriesLayout");
  const solutionAreas = getSection<SolutionAreasData>(sections, "ServicesPageSectionsServicesSectionsSolutionAreasLayout");
  const cta = getSection<CtaData>(sections, "ServicesPageSectionsServicesSectionsCtaLayout");
  const capabilityDeck = getSection<CapabilityDeckData>(sections, "ServicesPageSectionsServicesSectionsCapabilityDeckLayout");

  return (
    <main>
      <ServicesHero data={hero} />
      <PillarsOverview strategy={strategy} talent={talent} tech={tech} />
      <StrategyPillarDetail data={strategy} />
      <TalentPillarDetail data={talent} />
      <TechPillarDetail data={tech} />
      <WhoWeHelpSection data={whoWeHelp} />
      <TypicalEngagementsSection data={engagements} />
      <IndustriesSection data={industries} />
      <SolutionAreasSection data={solutionAreas} />
      {cta && <CtaSection data={cta} />}
      <CapabilityDeckSection data={capabilityDeck} />
    </main>
  );
}
