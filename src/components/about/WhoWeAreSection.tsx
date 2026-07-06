import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface WhoWeAreData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  bodyParagraph1?: string;
  bodyParagraph2?: string;
  bodyParagraph3?: string;
  tagPanelLabel?: string;
  quickFacts?: { text: string }[];
}

export default function WhoWeAreSection({ data }: { data: WhoWeAreData | null }) {
  if (!data) return null;

  const quickFacts = data.quickFacts ?? [];

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-5">
                {data.heading}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic text-[#b8924a]">{data.headingEmphasis}</em>
                )}
              </h2>
            )}
            {data.bodyParagraph1 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bodyParagraph1}</p>
            )}
            {data.bodyParagraph2 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bodyParagraph2}</p>
            )}
            {data.bodyParagraph3 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85]">{data.bodyParagraph3}</p>
            )}
          </Reveal>

          {quickFacts.length > 0 && (
            <Reveal
              delay={150}
              className="rounded-[10px] p-8"
              style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
            >
              {data.tagPanelLabel && (
                <span className="block text-[12px] font-semibold tracking-[0.14em] uppercase text-[#7b6b5a] mb-5">
                  {data.tagPanelLabel}
                </span>
              )}
              <div className="flex flex-col gap-2.5">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.text}
                    className="flex items-center gap-3 rounded-[4px] px-4 py-3"
                    style={{ background: "var(--white)", border: "0.5px solid var(--border)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#b8924a] rounded-full shrink-0" />
                    <span className="text-[14px] font-medium text-[#3a2e28]">{fact.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
