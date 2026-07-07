import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface EngagementsData {
  eyebrowText?: string;
  heading?: string;
  engagements?: { title?: string; description?: string }[];
  buttonText?: string;
  buttonUrl?: string;
}

export default function TypicalEngagementsSection({ data }: { data: EngagementsData | null }) {
  if (!data) return null;

  const engagements = data.engagements?.filter((e) => e.title || e.description) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading);
  const hasButton = !!(data.buttonText && data.buttonUrl);
  if (!hasHeader && engagements.length === 0 && !hasButton) return null;

  return (
    <section className="bg-white">
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

        {engagements.length > 0 && (
          <div className="max-w-[820px] mx-auto flex flex-col gap-3 mb-10">
            {engagements.map((engagement, i) => (
              <Reveal
                key={engagement.title ?? i}
                delay={i * 60}
                className="flex items-start gap-5 rounded-[6px] p-6 max-[640px]:flex-col max-[640px]:gap-2"
                style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
              >
                {engagement.title && (
                  <h3 className="text-[15px] font-semibold text-[#3a2e28] leading-[1.4] w-[260px] shrink-0 max-[640px]:w-full">
                    {engagement.title}
                  </h3>
                )}
                {engagement.description && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{engagement.description}</p>
                )}
              </Reveal>
            ))}
          </div>
        )}

        {hasButton && (
          <div className="text-center">
            <a
              href={data.buttonUrl}
              className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block hover:bg-[#3a2e28] hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
            >
              {data.buttonText}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
