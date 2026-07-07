import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const engagements = [
  {
    title: "Market Entry Advisory Sprint",
    description: "Market scan, positioning, partner mapping and recommended entry route.",
  },
  {
    title: "Growth Strategy Review",
    description: "Review of commercial direction, offer, target clients and growth priorities.",
  },
  {
    title: "Partnership Development Support",
    description: "Identification and development of strategic partner opportunities.",
  },
  {
    title: "Talent & Capability Advisory",
    description: "Recruitment strategy, role definition, capability gaps and hiring roadmap.",
  },
  {
    title: "Technology Solution Mapping",
    description:
      "Assessment of AI, analytics, automation or sustainability partner solutions relevant to business needs.",
  },
];

export default function TypicalEngagementsSection() {
  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="text-center mb-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
            How We Work
          </p>
          <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
            Typical Engagements
          </h2>
        </Reveal>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3 mb-10">
          {engagements.map((engagement, i) => (
            <Reveal
              key={engagement.title}
              delay={i * 60}
              className="flex items-start gap-5 rounded-[6px] p-6 max-[640px]:flex-col max-[640px]:gap-2"
              style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
            >
              <h3 className="text-[15px] font-semibold text-[#3a2e28] leading-[1.4] w-[260px] shrink-0 max-[640px]:w-full">
                {engagement.title}
              </h3>
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">
                {engagement.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:hello@tanjimenezconsulting.com"
            className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block hover:bg-[#3a2e28] hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
          >
            Discuss Possible Engagement
          </a>
        </div>
      </Container>
    </section>
  );
}
