import client from "@/lib/apollo/client";
import { GET_PARTNERS_PAGE } from "@/lib/graphql/partners.queries";
import PartnersHero, { type PartnersHeroData } from "@/components/partners/PartnersHero";
import PartnerDirectory, { type DirectoryData } from "@/components/partners/PartnerDirectory";
import ResponsibleTechNotice, {
  type ResponsibleTechNoticeData,
} from "@/components/partners/ResponsibleTechNotice";
import CtaSection from "@/components/shared/CtaSection";

type PartnersCmsSection = { __typename: string } & Record<string, unknown>;

interface CtaData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
}

async function fetchPartnersSections(): Promise<PartnersCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_PARTNERS_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.partnersPageSections?.partnersSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: PartnersCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function PartnersPage() {
  const sections = await fetchPartnersSections();

  const hero = getSection<PartnersHeroData>(sections, "PartnersPageSectionsPartnersSectionsHeroLayout");
  const directory = getSection<DirectoryData>(sections, "PartnersPageSectionsPartnersSectionsDirectoryLayout");
  const responsibleTech = getSection<ResponsibleTechNoticeData>(
    sections,
    "PartnersPageSectionsPartnersSectionsResponsibleTechNoticeLayout"
  );
  const cta = getSection<CtaData>(sections, "PartnersPageSectionsPartnersSectionsCtaLayout");

  return (
    <main>
      <PartnersHero data={hero} />
      <PartnerDirectory data={directory} />
      <ResponsibleTechNotice data={responsibleTech} />
      {cta && <CtaSection data={cta} />}
    </main>
  );
}
