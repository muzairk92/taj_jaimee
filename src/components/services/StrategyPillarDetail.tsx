import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    title: "Business Growth Strategy",
    body: "We help companies define growth priorities, identify market opportunities and create practical roadmaps for sustainable expansion.",
  },
  {
    title: "Market Entry & Expansion",
    body: "We support businesses entering new markets by assessing positioning, customer segments, local opportunities, risks, partnerships and go-to-market strategy.",
  },
  {
    title: "Strategic Partnerships & Alliances",
    body: "We help identify, structure and develop partnerships that create commercial value, market access and long-term business opportunities.",
  },
  {
    title: "Business Development Advisory",
    body: "We support sales pipeline development, client targeting, value proposition refinement, stakeholder engagement and commercial execution.",
  },
  {
    title: "Go-to-Market Strategy",
    body: "We help companies clarify their offer, ideal customers, messaging, pricing logic, sales channels and execution plan.",
  },
  {
    title: "Commercial Positioning & Brand Strategy",
    body: "We help businesses communicate their value more clearly, strengthen market credibility and position themselves for higher-value opportunities.",
  },
];

export default function StrategyPillarDetail() {
  return (
    <section id="strategy-advisory" className="bg-white scroll-mt-[68px]">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="text-center mb-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            Pillar One
          </p>
          <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-3 max-w-[680px] mx-auto">
            Strategy and Growth Advisory
          </h2>
          <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[640px] mx-auto">
            For market entry, business development, partnerships, commercial positioning and
            growth planning.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-5">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 70}
              className="flex-1 min-w-[280px] max-w-[360px] border border-[#c8b8a2] rounded-[6px] p-6 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
              style={{ background: "var(--linen)" }}
            >
              <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{service.title}</h3>
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
