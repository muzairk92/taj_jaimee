import client from "@/lib/apollo/client";
import { GET_CAPABILITY_PAGE } from "@/lib/graphql/capability.queries";
import CapabilityHero, { type CapabilityHeroData } from "@/components/capability/CapabilityHero";
import CapabilityDocuments, { type CapabilityDocumentsData } from "@/components/capability/CapabilityDocuments";
import CtaSection from "@/components/shared/CtaSection";

type CapabilityCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchCapabilitySections(): Promise<CapabilityCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_CAPABILITY_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.pages?.nodes?.[0]?.capabilitySections?.capabilitySections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: CapabilityCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function CapabilityPage() {
  const sections = await fetchCapabilitySections();

  const hero = getSection<CapabilityHeroData>(sections, "CapabilitySectionsCapabilitySectionsHeroLayout");
  const documents = getSection<CapabilityDocumentsData>(
    sections,
    "CapabilitySectionsCapabilitySectionsDocumentsLayout"
  );

  return (
    <main>
      <CapabilityHero data={hero} />
      <CapabilityDocuments data={documents} />
      <CtaSection
        data={{
          eyebrowText: "Want the Full Picture?",
          heading: "Let's Talk Through Your Requirements",
          description:
            "Request our full capability deck or discuss how our approach applies to your specific growth priorities.",
          primaryButtonText: "Start a Conversation",
          primaryButtonUrl: "mailto:hello@tanjimenezconsulting.com",
        }}
      />
    </main>
  );
}
