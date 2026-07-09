import client from "@/lib/apollo/client";
import { GET_FOUNDER_PROFILE_PAGE } from "@/lib/graphql/founder-profile.queries";
import FounderHero, { type FounderHeroData } from "@/components/founder-profile/FounderHero";
import FounderStory, { type StoryData } from "@/components/founder-profile/FounderStory";
import FounderExpertise, { type ExpertiseData } from "@/components/founder-profile/FounderExpertise";
import FounderResearch, { type ResearchData } from "@/components/founder-profile/FounderResearch";
import FounderReferences, { type ReferencesData } from "@/components/founder-profile/FounderReferences";
import CtaSection from "@/components/shared/CtaSection";

type FounderProfileCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchFounderProfileSections(): Promise<FounderProfileCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_FOUNDER_PROFILE_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.founderProfilePageSections?.founderProfileSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: FounderProfileCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function FounderProfilePage() {
  const sections = await fetchFounderProfileSections();

  const hero = getSection<FounderHeroData>(sections, "FounderProfilePageSectionsFounderProfileSectionsHeroLayout");
  const story = getSection<StoryData>(sections, "FounderProfilePageSectionsFounderProfileSectionsStoryLayout");
  const expertise = getSection<ExpertiseData>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsExpertiseLayout"
  );
  const research = getSection<ResearchData>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsResearchLayout"
  );
  const references = getSection<ReferencesData>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsReferencesLayout"
  );
  const cta = getSection<{
    eyebrowText?: string;
    heading?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonUrl?: string;
    secondaryButtonText?: string;
    secondaryButtonUrl?: string;
  }>(sections, "FounderProfilePageSectionsFounderProfileSectionsCtaLayout");

  return (
    <main>
      <FounderHero data={hero} />
      <FounderStory data={story} />
      <FounderExpertise data={expertise} />
      <FounderResearch data={research} />
      <FounderReferences data={references} />
      <CtaSection
        data={
          cta ?? {
            eyebrowText: "Partner With Jaimee",
            heading: "Let's Discuss Your Growth Priorities",
            description:
              "Whether you are entering a new market, building strategic partnerships or exploring technology-enabled solutions — we would be pleased to hear from you.",
            primaryButtonText: "Discuss Your Growth Priorities",
            primaryButtonUrl: "mailto:hello@tanjimenezconsulting.com",
            secondaryButtonText: "Explore Our Services",
            secondaryButtonUrl: "/services",
          }
        }
      />
    </main>
  );
}
