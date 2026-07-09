import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface ExpertiseData {
  eyebrowText?: string;
  heading?: string;
  items?: { title?: string; description?: string }[];
}

export default function FounderExpertise({ data }: { data: ExpertiseData | null }) {
  if (!data) return null;

  const items = data.items?.filter((item) => item.title || item.description) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading);
  if (!hasHeader && items.length === 0) return null;

  return (
    <section style={{ background: "var(--rose)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {hasHeader && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#5a3535] mb-3 font-medium">
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

        {items.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item, i) => (
              <Reveal
                key={item.title ?? i}
                delay={i * 80}
                className="flex-1 min-w-[260px] max-w-[340px] bg-white border border-[#c8b8a2] rounded-[6px] p-7 flex flex-col gap-3 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)] hover:-translate-y-1"
              >
                <div className="w-9 h-9 border border-[#b8924a] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-[#b8924a] rounded-full" />
                </div>
                {item.title && <h3 className="text-[15px] font-semibold text-[#3a2e28] leading-[1.3]">{item.title}</h3>}
                {item.description && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{item.description}</p>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
