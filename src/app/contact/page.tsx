import client from "@/lib/apollo/client";
import { GET_CONTACT_PAGE } from "@/lib/graphql/contact.queries";
import ContactHero, { type ContactHeroData } from "@/components/contact/ContactHero";
import CapabilityCallout, { type CapabilityCalloutData } from "@/components/contact/CapabilityCallout";
import ContactFormSection, { type ReasonsData, type FormData } from "@/components/contact/ContactFormSection";

type ContactCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchContactSections(): Promise<ContactCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_CONTACT_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.contactPageSections?.contactSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: ContactCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function ContactPage() {
  const sections = await fetchContactSections();

  const hero = getSection<ContactHeroData>(sections, "ContactPageSectionsContactSectionsHeroLayout");
  const capabilityCallout = getSection<CapabilityCalloutData>(
    sections,
    "ContactPageSectionsContactSectionsCapabilityCalloutLayout"
  );
  const reasons = getSection<ReasonsData>(sections, "ContactPageSectionsContactSectionsReasonsLayout");
  const form = getSection<FormData>(sections, "ContactPageSectionsContactSectionsFormLayout");

  return (
    <main>
      <ContactHero data={hero} />
      <CapabilityCallout data={capabilityCallout} />
      <ContactFormSection reasonsData={reasons} formData={form} />
    </main>
  );
}
