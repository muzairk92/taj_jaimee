import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function TechPillarDetail() {
  return (
    <section id="tech-solutions" style={{ background: "var(--forest)" }} className="scroll-mt-[68px]">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="max-w-[720px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            Pillar Three
          </p>
          <h2 className="font-playfair text-[30px] font-semibold text-[#f0ebe0] leading-[1.25] mb-3">
            Technology &amp; Sustainability Solutions
          </h2>
          <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.8] mb-10">
            Partner-enabled AI, analytics, automation, retail intelligence, smart infrastructure,
            energy efficiency and digital transformation.
          </p>

          <div
            className="why-card rounded-[6px] p-8 text-left"
            style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
          >
            <h3 className="text-[17px] font-semibold text-[#f0ebe0] mb-4">
              Digital Growth &amp; Innovation Strategy
            </h3>
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4">
              We help companies understand where AI, automation, analytics and digital tools can
              improve operations, decision-making and customer experience.
            </p>
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4">
              Through our partner ecosystem, we help companies access practical technology
              solutions that support smarter operations, better customer insights, energy
              efficiency, automation and sustainable digital transformation.
            </p>
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4">
              We work with specialised partners across AI, analytics, retail intelligence, smart
              infrastructure, energy management, travel technology and intelligent business
              systems — helping clients connect strategy with real-world implementation.
            </p>
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85]">
              We also help clients consider the strategic importance of data governance, privacy
              awareness and responsible technology adoption when exploring AI, analytics,
              automation and digital solutions.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
