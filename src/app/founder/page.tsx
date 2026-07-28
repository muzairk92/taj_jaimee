import client from "@/lib/apollo/client";
import { GET_FOUNDER_PAGE } from "@/lib/graphql/founder.queries";
import { deepStripHtml } from "@/lib/sanitizeText";
import FounderStorySection, { type FounderStoryData } from "@/components/founder/FounderStorySection";
import FounderCredentialsSection, {
  type FounderCredentialsData,
} from "@/components/founder/FounderCredentialsSection";
import FounderReferencesSection, {
  type FounderReferencesData,
} from "@/components/founder/FounderReferencesSection";
import FounderCapabilitySection, {
  type FounderCapabilityData,
} from "@/components/founder/FounderCapabilitySection";
import FounderConnectSection, { type FounderConnectData } from "@/components/founder/FounderConnectSection";

type FounderCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchFounderSections(): Promise<FounderCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_FOUNDER_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.founderPageSections?.founderSections ?? null)
    .catch(() => null);
  const sections = await Promise.race([fetch, timeout]);
  return sections ? deepStripHtml(sections) : null;
}

function getSection<T>(sections: FounderCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function FounderPage() {
  const sections = await fetchFounderSections();

  const story = getSection<FounderStoryData>(sections, "FounderPageSectionsFounderSectionsStoryLayout");
  const credentials = getSection<FounderCredentialsData>(
    sections,
    "FounderPageSectionsFounderSectionsCredentialsLayout"
  );
  const references = getSection<FounderReferencesData>(
    sections,
    "FounderPageSectionsFounderSectionsReferencesLayout"
  );
  const capability = getSection<FounderCapabilityData>(
    sections,
    "FounderPageSectionsFounderSectionsCapabilityLayout"
  );
  const connect = getSection<FounderConnectData>(sections, "FounderPageSectionsFounderSectionsConnectLayout");

  return (
    <main>
      <FounderStorySection data={story} />
      <FounderCredentialsSection data={credentials} />
      <FounderReferencesSection data={references} />
      <FounderCapabilitySection data={capability} />
      <FounderConnectSection data={connect} />
    </main>
  );
}
