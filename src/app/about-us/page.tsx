import client from "@/lib/apollo/client";
import { GET_ABOUT_PAGE } from "@/lib/graphql/about.queries";
import AboutHero, { type AboutHeroData } from "@/components/about/AboutHero";
import WhoWeAreSection, { type WhoWeAreData } from "@/components/about/WhoWeAreSection";
import MissionVisionSection, { type MissionVisionData } from "@/components/about/MissionVisionSection";
import ValuesSection, { type ValuesData } from "@/components/about/ValuesSection";
import TeamSection, { type TeamData } from "@/components/about/TeamSection";
import NetworkSection, { type AdvisoryNetworkData } from "@/components/about/NetworkSection";
import FounderMessageSection, { type FounderMessageData } from "@/components/about/FounderMessageSection";
import FounderProfileSection, { type FounderProfileData } from "@/components/about/FounderProfileSection";
import CtaSection from "@/components/shared/CtaSection";

type AboutCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchAboutSections(): Promise<AboutCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_ABOUT_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.aboutSections?.aboutSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: AboutCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function AboutPage() {
  const sections = await fetchAboutSections();

  const hero = getSection<AboutHeroData>(sections, "AboutSectionsAboutSectionsHeroLayout");
  const whoWeAre = getSection<WhoWeAreData>(sections, "AboutSectionsAboutSectionsWhoWeAreLayout");
  const missionVision = getSection<MissionVisionData>(sections, "AboutSectionsAboutSectionsMissionVisionLayout");
  const values = getSection<ValuesData>(sections, "AboutSectionsAboutSectionsValuesLayout");
  const team = getSection<TeamData>(sections, "AboutSectionsAboutSectionsTeamLayout");
  const network = getSection<AdvisoryNetworkData>(sections, "AboutSectionsAboutSectionsAdvisoryNetworkLayout");
  const founderMessage = getSection<FounderMessageData>(sections, "AboutSectionsAboutSectionsFounderMessageLayout");
  const founderProfile = getSection<FounderProfileData>(sections, "AboutSectionsAboutSectionsFounderProfileLayout");

  return (
    <main>
      <AboutHero data={hero} />
      <WhoWeAreSection data={whoWeAre} />
      <MissionVisionSection data={missionVision} />
      <ValuesSection data={values} />
      <TeamSection data={team} />
      <NetworkSection data={network} />
      <FounderMessageSection data={founderMessage} />
      <FounderProfileSection data={founderProfile} />
      <CtaSection
        data={{
          eyebrowText: "Ready to Scale with Clarity?",
          heading: "Let's explore your next growth opportunity.",
          description:
            "Whether you are entering a new market, building strategic partnerships or exploring technology-enabled solutions — we would be pleased to hear from you.",
          primaryButtonText: "Discuss Your Growth Priorities",
          primaryButtonUrl: "mailto:hello@tanjimenezconsulting.com",
          secondaryButtonText: "Explore Our Services",
          secondaryButtonUrl: "/#services",
        }}
      />
    </main>
  );
}
