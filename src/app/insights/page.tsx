import client from "@/lib/apollo/client";
import { GET_INSIGHTS_PAGE, GET_INSIGHTS_LIST } from "@/lib/graphql/insights.queries";
import InsightsHero, { type InsightsHeroData } from "@/components/insights/InsightsHero";
import CategoriesSection, { type CategoriesData } from "@/components/insights/CategoriesSection";
import ArticlesListSection from "@/components/insights/ArticlesListSection";

type InsightsCmsSection = { __typename: string } & Record<string, unknown>;

async function fetchInsightsPageSections(): Promise<InsightsCmsSection[] | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_INSIGHTS_PAGE, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.page?.insightsPageSections?.insightsSections ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

async function fetchInsightsList() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return [];
  const timeout = new Promise<[]>((resolve) => setTimeout(() => resolve([]), 3000));
  const fetch = client
    .query({ query: GET_INSIGHTS_LIST, variables: { first: 50 }, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.insights?.nodes ?? [])
    .catch(() => []);
  return Promise.race([fetch, timeout]);
}

function getSection<T>(sections: InsightsCmsSection[] | null, typename: string): T | null {
  if (!sections) return null;
  return (sections.find((s) => s.__typename === typename) as T) ?? null;
}

export default async function InsightsPage() {
  const [sections, insights] = await Promise.all([fetchInsightsPageSections(), fetchInsightsList()]);

  const hero = getSection<InsightsHeroData>(sections, "InsightsPageSectionsInsightsSectionsHeroLayout");
  const categories = getSection<CategoriesData>(sections, "InsightsPageSectionsInsightsSectionsCategoriesLayout");

  return (
    <main>
      <InsightsHero data={hero} />
      <CategoriesSection data={categories} />
      <ArticlesListSection insights={insights} />
    </main>
  );
}
