import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface AboutHeroData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  subheading?: string;
}

export default function AboutHero({ data }: { data: AboutHeroData | null }) {
  if (!data) return null;

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
            <h1 className="font-playfair text-[42px] font-semibold text-[#f0ebe0] leading-[1.15] max-[900px]:text-[30px]">
              {data.heading}
            </h1>
          )}
          {data.headingEmphasis && (
            <p className="font-cormorant italic font-semibold text-[#d4b06a] text-[28px] mt-3 max-[900px]:text-[22px]">
              {data.headingEmphasis}
            </p>
          )}
          {data.subheading && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] max-w-[640px] mx-auto mt-6">
              {data.subheading}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
