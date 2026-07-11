import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface CapabilityHeroData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
}

export default function CapabilityHero({ data }: { data: CapabilityHeroData | null }) {
  if (!data) return null;

  const hasContent = !!(data.eyebrowText || data.heading || data.description);
  if (!hasContent) return null;

  return (
    <section className="relative overflow-hidden text-center" style={{ background: "var(--midnight)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(184,146,74,0.16) 0%, transparent 60%)",
        }}
      />
      <Container className="py-24 max-[900px]:py-16 relative">
        <Reveal className="max-w-[780px] mx-auto">
          {data.eyebrowText && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-5 font-medium">
              {data.eyebrowText}
            </p>
          )}
          {data.heading && (
            <h1 className="font-playfair text-[38px] font-semibold text-[#f0ebe0] leading-[1.2] max-[900px]:text-[28px]">
              {data.heading}
            </h1>
          )}
          {data.description && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] max-w-[640px] mx-auto mt-6">
              {data.description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
