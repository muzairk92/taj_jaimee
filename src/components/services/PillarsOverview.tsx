import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    label: "Pillar One",
    title: "Strategy and Growth Advisory",
    description:
      "For market entry, business development, partnerships, commercial positioning and growth planning.",
    anchor: "#strategy-advisory",
  },
  {
    label: "Pillar Two",
    title: "Talent and Organisation Advisory",
    description:
      "For recruitment strategy, leadership hiring, team structure, capability gaps and workforce planning.",
    anchor: "#talent-advisory",
  },
  {
    label: "Pillar Three",
    title: "Technology & Sustainability Solutions",
    description:
      "Partner-enabled AI, analytics, automation, retail intelligence, smart infrastructure, energy efficiency and digital transformation.",
    anchor: "#tech-solutions",
  },
];

export default function PillarsOverview() {
  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="flex flex-wrap justify-center gap-6">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 100}
              className="flex-1 min-w-[280px] max-w-[380px] bg-white border border-[#c8b8a2] rounded-[6px] p-8 flex flex-col gap-4 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-[#b8924a] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-[#b8924a] rounded-full" />
                </div>
                <span className="font-playfair italic text-[12px] font-semibold tracking-[0.14em] uppercase text-[#b8924a]">
                  {pillar.label}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#3a2e28] leading-[1.3]">{pillar.title}</h3>
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.8] flex-1">
                {pillar.description}
              </p>
              <a
                href={pillar.anchor}
                className="text-xs font-semibold tracking-[0.1em] uppercase text-[#b8924a] inline-block mt-auto hover:text-[#3a2e28] hover:translate-x-1 transition-all duration-300"
              >
                Explore →
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
