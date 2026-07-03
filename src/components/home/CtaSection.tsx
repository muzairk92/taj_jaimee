import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface FinalCtaData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export default function CtaSection({ data }: { data: FinalCtaData | null }) {
  if (!data) return null;

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--forest)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,146,74,0.07) 0%, transparent 70%)",
        }}
      />
      <Container className="py-24 text-center relative max-[900px]:py-16">
        <Reveal>
          {data.eyebrowText && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-4 font-medium">
              {data.eyebrowText}
            </p>
          )}
          {data.heading && (
            <h2 className="font-playfair text-[36px] font-semibold text-[#f0ebe0] leading-[1.2] mb-4 max-[900px]:text-[28px]">
              {data.heading}
            </h2>
          )}
          {data.description && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.85] max-w-[520px] mx-auto mb-10">
              {data.description}
            </p>
          )}

          <div className="flex gap-4 justify-center flex-wrap">
            {data.primaryButtonText && data.primaryButtonUrl && (
              <a
                href={data.primaryButtonUrl}
                className="bg-[#b8924a] text-[#0b1f1c] text-sm font-semibold tracking-[0.08em] uppercase px-8 py-4 rounded-[2px] inline-block hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
              >
                {data.primaryButtonText}
              </a>
            )}
            {data.secondaryButtonText && data.secondaryButtonUrl && (
              <a
                href={data.secondaryButtonUrl}
                className="border border-[rgba(240,235,224,0.4)] text-[rgba(240,235,224,0.8)] text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-[2px] inline-block hover:border-white hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
              >
                {data.secondaryButtonText}
              </a>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
