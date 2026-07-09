import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface ResearchData {
  eyebrowText?: string;
  heading?: string;
  paragraph1?: string;
  paragraph2?: string;
  proofPoints?: { text?: string }[];
  ctaText?: string;
  ctaUrl?: string;
}

export default function FounderResearch({ data }: { data: ResearchData | null }) {
  if (!data) return null;

  const proofPoints = data.proofPoints?.filter((p) => p.text) ?? [];
  const hasText = !!(data.eyebrowText || data.heading || data.paragraph1 || data.paragraph2);
  const hasCta = !!(data.ctaText && data.ctaUrl);
  if (!hasText && proofPoints.length === 0 && !hasCta) return null;

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[28px] font-semibold text-[#3a2e28] leading-[1.3] mb-5">
                {data.heading}
              </h2>
            )}
            {data.paragraph1 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.paragraph1}</p>
            )}
            {data.paragraph2 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-8">{data.paragraph2}</p>
            )}
            {hasCta && (
              <a
                href={data.ctaUrl}
                className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block hover:bg-[#3a2e28] hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
              >
                {data.ctaText}
              </a>
            )}
          </Reveal>

          {proofPoints.length > 0 && (
            <Reveal delay={150}>
              <div className="rounded-[8px] p-8" style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[rgba(58,46,40,0.45)] mb-5">
                  Visual Proof Points
                </p>
                <div className="flex flex-col gap-2.5">
                  {proofPoints.map((point, i) => (
                    <span
                      key={i}
                      className="text-[13px] font-semibold text-[#3a2e28] bg-white rounded-[6px] px-4 py-3"
                      style={{ border: "0.5px solid var(--border)" }}
                    >
                      {point.text}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
