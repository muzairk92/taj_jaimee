import client from "@/lib/apollo/client";
import { GET_HOMEPAGE } from "@/lib/graphql/homepage.queries";
import DynamicSlider, { type DynamicSliderData } from "@/components/home/DynamicSlider";
import TaglineBar from "@/components/home/TaglineBar";
import StatsStrip from "@/components/home/StatsStrip";
import WhySection from "@/components/home/WhySection";
import WhoSection from "@/components/home/WhoSection";
import ServicesSection from "@/components/home/ServicesSection";
import FirmSection from "@/components/home/FirmSection";
import PartnersSection from "@/components/home/PartnersSection";
import CredStrip from "@/components/home/CredStrip";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import InsightsSection from "@/components/home/InsightsSection";
import CtaSection from "@/components/shared/CtaSection";

type CmsSection = { __typename: string } & Record<string, unknown>;

async function fetchCmsSections(): Promise<CmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_HOMEPAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.homepageSections?.homepageSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: CmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function HomePage() {
  const sections = await fetchCmsSections();

  const dynamicSlider = getSection<DynamicSliderData>(
    sections,
    "HomepageSectionsHomepageSectionsDynamicSliderLayout"
  );

  const trustBar = getSection<{
    trustItems?: { label: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsTrustBarLayout");

  const statsBar = getSection<{
    stats?: { number: string; label: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsStatsBarLayout");

  const featureCards = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    cards?: { number: string; title: string; description: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsFeatureCardsLayout");

  const whoWeWorkWith = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    traits?: { text: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsWhoWeWorkWithLayout");

  const servicesPillars = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    pillars?: { label: string; title: string; description: string; linkText: string; linkUrl: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsServicesPillarsLayout");

  const founderBio = getSection<{
    eyebrowText?: string;
    heading?: string;
    bioParagraph1?: string;
    bioParagraph2?: string;
    quote?: string;
    founderImage?: { node?: { sourceUrl?: string; altText?: string } };
    founderName?: string;
    founderTitle?: string;
    buttonText?: string;
    buttonUrl?: string;
    structureItems?: { label: string; sublabel: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsFounderBioLayout");

  const partnerEcosystem = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    partnerLogos?: { logo?: { node?: { sourceUrl?: string; altText?: string } }; name?: string }[];
    buttonText?: string;
    buttonUrl?: string;
  }>(sections, "HomepageSectionsHomepageSectionsPartnerEcosystemLayout");

  const awardsBar = getSection<{
    awards?: { icon?: { node?: { sourceUrl?: string; altText?: string } }; title?: string; subtitle?: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsAwardsBarLayout");

  const testimonials = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    testimonials?: { quote?: string; name?: string; title?: string; avatar?: { node?: { sourceUrl?: string; altText?: string } } }[];
  }>(sections, "HomepageSectionsHomepageSectionsTestimonialsLayout");

  const industriesData = getSection<{
    eyebrowText?: string;
    heading?: string;
    industries?: { label: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsIndustriesLayout");

  const insightsData = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    articles?: { category?: string; title?: string; description?: string }[];
  }>(sections, "HomepageSectionsHomepageSectionsInsightsLayout");

  const finalCta = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonUrl?: string;
    secondaryButtonText?: string;
    secondaryButtonUrl?: string;
  }>(sections, "HomepageSectionsHomepageSectionsFinalCtaLayout");

  return (
    <main>
      <DynamicSlider data={dynamicSlider} />
      <TaglineBar data={trustBar} />
      <StatsStrip data={statsBar} />
      <WhySection data={featureCards} />
      <WhoSection data={whoWeWorkWith} />
      <ServicesSection data={servicesPillars} />
      <FirmSection data={founderBio} />
      <PartnersSection data={partnerEcosystem} />
      <CredStrip data={awardsBar} />
      <TestimonialsSection data={testimonials} />
      <IndustriesSection data={industriesData} />
      <InsightsSection data={insightsData} />
      <CtaSection data={finalCta} />
    </main>
  );
}
