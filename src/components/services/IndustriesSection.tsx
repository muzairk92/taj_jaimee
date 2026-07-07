import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface IndustriesData {
  eyebrowText?: string;
  heading?: string;
  industries?: { title?: string; body?: string }[];
  howWeSupportHeading?: string;
  howWeSupportIntro?: string;
  howWeSupportItems?: { text?: string }[];
}

export default function IndustriesSection({ data }: { data: IndustriesData | null }) {
  if (!data) return null;

  const industries = data.industries?.filter((i) => i.title || i.body) ?? [];
  const howWeSupportItems = data.howWeSupportItems?.filter((item) => item.text) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading);
  const hasHowWeSupportHeader = !!(data.howWeSupportHeading || data.howWeSupportIntro);
  const hasContent = hasHeader || industries.length > 0 || hasHowWeSupportHeader || howWeSupportItems.length > 0;
  if (!hasContent) return null;

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
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] max-w-[720px] mx-auto">
                {data.heading}
              </h2>
            )}
          </Reveal>
        )}

        {industries.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5 mb-14">
            {industries.map((industry, i) => (
              <Reveal
                key={industry.title ?? i}
                delay={i * 70}
                className="flex-1 min-w-[260px] max-w-[320px] bg-white border border-[#c8b8a2] rounded-[6px] p-6 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
              >
                {industry.title && <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{industry.title}</h3>}
                {industry.body && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{industry.body}</p>
                )}
              </Reveal>
            ))}
          </div>
        )}

        {hasHowWeSupportHeader && (
          <Reveal className="text-center mb-6">
            {data.howWeSupportHeading && (
              <h3 className="text-[17px] font-semibold text-[#3a2e28]">{data.howWeSupportHeading}</h3>
            )}
            {data.howWeSupportIntro && (
              <p className="text-[14px] font-normal text-[#7b6b5a] mt-2">{data.howWeSupportIntro}</p>
            )}
          </Reveal>
        )}

        {howWeSupportItems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[820px] mx-auto">
            {howWeSupportItems.map((item, i) => (
              <span
                key={i}
                className="text-[13px] font-semibold text-[#3a2e28] bg-white rounded-[20px] px-4 py-2"
                style={{ border: "0.5px solid var(--border)" }}
              >
                {item.text}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
