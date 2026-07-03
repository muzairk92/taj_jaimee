import Container from "@/components/ui/Container";

interface ArticleItem {
  category?: string;
  title?: string;
  description?: string;
}

interface InsightsData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  articles?: ArticleItem[];
}

export default function InsightsSection({ data }: { data: InsightsData | null }) {
  if (!data) return null;

  const articles = data.articles ?? [];

  return (
    <section id="insights" className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        {data.eyebrowText && (
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 text-center font-medium">
            {data.eyebrowText}
          </p>
        )}
        {data.heading && (
          <h2 className="font-playfair text-[32px] font-normal text-[#3a2e28] text-center leading-[1.2] mb-3">
            {data.heading}
          </h2>
        )}
        {data.description && (
          <p className="text-[15px] font-light text-[#7b6b5a] text-center leading-[1.8] max-w-[600px] mx-auto mb-12">
            {data.description}
          </p>
        )}

        {articles.length > 0 && (
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {articles.map((article, i) => (
              <div
                key={i}
                className="rounded-[6px] overflow-hidden hover:shadow-[0_6px_32px_rgba(58,46,40,0.1)] transition-shadow flex flex-col"
                style={{ border: "0.5px solid var(--border)" }}
              >
                {article.category && (
                  <div
                    className="px-6 py-2.5"
                    style={{ background: "var(--linen)", borderBottom: "0.5px solid var(--border)" }}
                  >
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a]">
                      {article.category}
                    </span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {article.title && (
                    <h3 className="font-playfair text-base font-normal text-[#3a2e28] leading-[1.5] mb-3">
                      {article.title}
                    </h3>
                  )}
                  {article.description && (
                    <p className="text-sm font-light text-[#7b6b5a] leading-[1.8] flex-1">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
