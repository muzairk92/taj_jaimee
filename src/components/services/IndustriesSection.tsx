import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const industries = [
  {
    title: "Energy & Sustainability",
    body: "Supporting companies focused on energy efficiency, lifecycle optimisation, renewable energy, infrastructure and sustainable transformation.",
  },
  {
    title: "Technology & AI-Enabled Business",
    body: "Helping technology-driven companies clarify their commercial direction, build partnerships and position solutions for growth.",
  },
  {
    title: "Retail & Customer Intelligence",
    body: "Connecting retail and commercial environments with data, analytics and customer-flow insights through our partner ecosystem.",
  },
  {
    title: "Infrastructure & Smart Cities",
    body: "Supporting smarter infrastructure, mobility, occupancy intelligence and digital sustainability through strategic and partner-enabled solutions.",
  },
  {
    title: "International Market Expansion",
    body: "Helping companies explore opportunities across Norway, Europe and Asia through market entry, partnerships and commercial positioning.",
  },
];

const howWeSupport = [
  "Business growth strategy",
  "Market entry and expansion",
  "Strategic partnerships",
  "Talent and organisation advisory",
  "Commercial positioning",
  "Digital growth and innovation",
  "Partner-enabled technology solutions",
  "Sustainability-aligned business development",
];

export default function IndustriesSection() {
  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="text-center mb-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            Industries We Support
          </p>
          <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] max-w-[720px] mx-auto">
            We work with companies operating in sectors where strategy, people, technology and
            sustainability are shaping the next stage of growth.
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {industries.map((industry, i) => (
            <Reveal
              key={industry.title}
              delay={i * 70}
              className="flex-1 min-w-[260px] max-w-[320px] bg-white border border-[#c8b8a2] rounded-[6px] p-6 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
            >
              <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{industry.title}</h3>
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{industry.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mb-6">
          <h3 className="text-[17px] font-semibold text-[#3a2e28]">How We Support These Industries</h3>
          <p className="text-[14px] font-normal text-[#7b6b5a] mt-2">
            Across each sector, we help organisations with:
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-[820px] mx-auto">
          {howWeSupport.map((item) => (
            <span
              key={item}
              className="text-[13px] font-semibold text-[#3a2e28] bg-white rounded-[20px] px-4 py-2"
              style={{ border: "0.5px solid var(--border)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
