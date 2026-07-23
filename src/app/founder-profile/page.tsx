import client from "@/lib/apollo/client";
import { GET_FOUNDER_PROFILE_PAGE } from "@/lib/graphql/founder-profile.queries";
import FounderBioCard, { type FounderBioCardProps } from "@/components/founder-profile/FounderBioCard";
import { deepStripHtml } from "@/lib/sanitizeText";

type FounderProfileCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchFounderProfileSections(): Promise<FounderProfileCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_FOUNDER_PROFILE_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.founderProfilePageSections?.founderProfileSections ?? null)
    .catch(() => null);
  const sections = await Promise.race([fetch, timeout]);
  return sections ? deepStripHtml(sections) : null;
}

function getSection<T>(sections: FounderProfileCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function FounderProfilePage() {
  const sections = await fetchFounderProfileSections();

  const hero = getSection<FounderBioCardProps["hero"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsHeroLayout"
  );
  const tagline = getSection<FounderBioCardProps["tagline"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsTaglineLayout"
  );
  const introduction = getSection<FounderBioCardProps["introduction"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsIntroductionLayout"
  );
  const expertise = getSection<FounderBioCardProps["expertise"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsExpertiseLayout"
  );
  const credentials = getSection<FounderBioCardProps["credentials"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsCredentialsLayout"
  );
  const whyFounded = getSection<FounderBioCardProps["whyFounded"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsWhyFoundedLayout"
  );
  const wayForward = getSection<FounderBioCardProps["wayForward"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsWayForwardLayout"
  );
  const signatureQuote = getSection<FounderBioCardProps["signatureQuote"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsSignatureQuoteLayout"
  );
  const cta = getSection<FounderBioCardProps["cta"]>(
    sections,
    "FounderProfilePageSectionsFounderProfileSectionsCtaLayout"
  );

  return (
    <main>
      <FounderBioCard
        hero={hero}
        tagline={tagline}
        introduction={introduction}
        expertise={expertise}
        credentials={credentials}
        whyFounded={whyFounded}
        wayForward={wayForward}
        signatureQuote={signatureQuote}
        cta={cta}
      />
    </main>
  );
}
