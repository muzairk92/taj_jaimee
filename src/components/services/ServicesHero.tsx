import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function ServicesHero() {
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
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-5 font-medium">
            Advisory Services
          </p>
          <h1 className="font-playfair text-[38px] font-semibold text-[#f0ebe0] leading-[1.2] max-[900px]:text-[28px]">
            Advisory Services for Companies Ready to Grow Smarter
          </h1>
          <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] max-w-[640px] mx-auto mt-6">
            We connect strategy, people, partnerships and technology to help ambitious
            organisations turn complexity into momentum.
          </p>
          <p className="text-[14px] font-medium text-[#d4b06a] leading-[1.85] max-w-[560px] mx-auto mt-5">
            We help companies grow through three connected advisory pillars: strategy, people and
            technology.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
