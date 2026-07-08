import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface InsightNode {
  slug?: string;
  title?: string;
  insightFields?: {
    category?: string[];
    subtitle?: string;
    author?: string;
    readTime?: string;
  };
}

export default function ArticlesListSection({ insights }: { insights: InsightNode[] }) {
  if (insights.length === 0) return null;

  return (
    <section id="articles" className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="text-center mb-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            Latest Articles
          </p>
          <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
            Featured Insights
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {insights.map((insight, i) => {
            const fields = insight.insightFields;
            const category = fields?.category?.[0];

            return (
              <Reveal
                key={insight.slug ?? i}
                delay={i * 100}
                className="flex-1 min-w-[300px] max-w-[420px] rounded-[6px] overflow-hidden hover:shadow-[0_6px_32px_rgba(58,46,40,0.1)] hover:-translate-y-1"
                style={{ border: "0.5px solid var(--border)" }}
              >
                <Link href={`/insights/${insight.slug}`} className="flex flex-col h-full">
                  {category && (
                    <div
                      className="px-6 py-2.5"
                      style={{ background: "var(--linen)", borderBottom: "0.5px solid var(--border)" }}
                    >
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a]">
                        {category}
                      </span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {insight.title && (
                      <h3 className="font-playfair text-base font-semibold text-[#3a2e28] leading-[1.5] mb-3">
                        {insight.title}
                      </h3>
                    )}
                    {fields?.subtitle && (
                      <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] flex-1 mb-4">
                        {fields.subtitle}
                      </p>
                    )}
                    {(fields?.author || fields?.readTime) && (
                      <p
                        className="text-[12px] font-medium text-[#7b6b5a]"
                        style={{ borderTop: "0.5px solid var(--border)", paddingTop: "12px" }}
                      >
                        {fields.author && `By ${fields.author}`}
                        {fields.author && fields.readTime && " · "}
                        {fields.readTime}
                      </p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
