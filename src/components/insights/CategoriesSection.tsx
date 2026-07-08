import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface CategoriesData {
  eyebrowText?: string;
  heading?: string;
  categories?: { title?: string; description?: string }[];
}

export default function CategoriesSection({ data }: { data: CategoriesData | null }) {
  if (!data) return null;

  const categories = data.categories?.filter((c) => c.title || c.description) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading);
  if (!hasHeader && categories.length === 0) return null;

  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {hasHeader && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                {data.heading}
              </h2>
            )}
          </Reveal>
        )}

        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5">
            {categories.map((category, i) => (
              <Reveal
                key={category.title ?? i}
                delay={i * 60}
                className="flex-1 min-w-[260px] max-w-[320px] bg-white border border-[#c8b8a2] rounded-[6px] p-6 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
              >
                {category.title && <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{category.title}</h3>}
                {category.description && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{category.description}</p>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
