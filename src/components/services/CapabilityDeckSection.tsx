import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface CapabilityDeckData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  testimonialParagraph1?: string;
  testimonialParagraph2?: string;
  attribution?: string;
  attributionContext?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export default function CapabilityDeckSection({ data }: { data: CapabilityDeckData | null }) {
  if (!data) return null;

  const hasHeader = !!(data.eyebrowText || data.heading || data.description);
  const hasTestimonial = !!(data.testimonialParagraph1 || data.testimonialParagraph2 || data.attribution || data.attributionContext);
  const hasButton = !!(data.buttonText && data.buttonUrl);
  if (!hasHeader && !hasTestimonial && !hasButton) return null;

  return (
    <section className="relative overflow-hidden text-center" style={{ background: "var(--midnight)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,146,74,0.07) 0%, transparent 70%)",
        }}
      />
      <Container className="py-20 max-[900px]:py-14 relative">
        <Reveal className="max-w-[760px] mx-auto">
          {hasHeader && (
            <>
              {data.eyebrowText && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.eyebrowText}
                </p>
              )}
              {data.heading && (
                <h2 className="font-playfair text-[26px] font-semibold text-[#f0ebe0] leading-[1.3] mb-3">
                  {data.heading}
                </h2>
              )}
              {data.description && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.8] mb-10">
                  {data.description}
                </p>
              )}
            </>
          )}

          {hasTestimonial && (
            <div
              className="rounded-[6px] p-8 text-left"
              style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
            >
              <span className="font-playfair text-[44px] text-[#b8924a] block leading-[0.7] mb-4 opacity-30 select-none">
                &ldquo;
              </span>
              {data.testimonialParagraph1 && (
                <p className="font-cormorant italic font-semibold text-[18px] text-[#f0ebe0] leading-[1.75] mb-6">
                  {data.testimonialParagraph1}
                </p>
              )}
              {data.testimonialParagraph2 && (
                <p className="font-cormorant italic font-semibold text-[18px] text-[#f0ebe0] leading-[1.75] mb-6">
                  {data.testimonialParagraph2}
                </p>
              )}
              {(data.attribution || data.attributionContext) && (
                <p className="text-[13px] font-semibold text-[#d4b06a]">
                  {data.attribution}
                  {data.attribution && data.attributionContext && <br />}
                  {data.attributionContext && (
                    <span className="font-normal text-[rgba(240,235,224,0.6)]">{data.attributionContext}</span>
                  )}
                </p>
              )}
            </div>
          )}

          {hasButton && (
            <a
              href={data.buttonUrl}
              className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 mt-10"
            >
              {data.buttonText}
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
