import { notFound } from "next/navigation";
import client from "@/lib/apollo/client";
import { GET_INSIGHT_DETAIL } from "@/lib/graphql/insights.queries";
import Container from "@/components/ui/Container";
import ArticleHeader from "@/components/insights/ArticleHeader";
import ArticleContent from "@/components/insights/ArticleContent";
import ArticleCloser from "@/components/insights/ArticleCloser";

async function fetchInsight(slug: string) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_INSIGHT_DETAIL, variables: { slug }, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.insight ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = await fetchInsight(slug);

  if (!insight) notFound();

  const fields = insight.insightFields ?? {};
  const category = fields.category?.[0];
  const body = fields.body ?? [];

  return (
    <main>
      <ArticleHeader
        category={category}
        title={insight.title}
        subtitle={fields.subtitle}
        author={fields.author}
        readTime={fields.readTime}
      />
      <section className="bg-white">
        <Container className="py-16 max-[900px]:py-10">
          <ArticleContent body={body} />
        </Container>
      </section>
      <ArticleCloser text={fields.closerText} ctaText={fields.closerCtaText} ctaUrl={fields.closerCtaUrl} />
    </main>
  );
}
