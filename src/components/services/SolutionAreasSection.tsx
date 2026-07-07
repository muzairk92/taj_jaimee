import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const solutionAreas = [
  {
    title: "Smart City & Infrastructure Intelligence",
    body: "Data-driven solutions for smarter urban planning, mobility, energy use, occupancy insights and infrastructure optimisation.",
  },
  {
    title: "Retail Intelligence & Customer Analytics",
    body: "People-counting, visitor analytics, behaviour insights and operational data to help retailers improve performance and customer experience.",
  },
  {
    title: "Energy Efficiency & Sustainability Solutions",
    body: "Solutions that help organisations monitor energy use, reduce waste, improve operational efficiency and support sustainability goals.",
  },
  {
    title: "AI, Automation & Business Intelligence",
    body: "Tools and advisory support to help organisations streamline processes, improve decision-making and reduce manual work.",
  },
];

export default function SolutionAreasSection() {
  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="text-center mb-12">
          <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
            Solution Areas
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-5">
          {solutionAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 80}
              className="flex-1 min-w-[280px] max-w-[380px] rounded-[6px] p-7 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
              style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
            >
              <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{area.title}</h3>
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{area.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
