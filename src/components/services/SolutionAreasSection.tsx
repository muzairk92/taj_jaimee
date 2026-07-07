import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface SolutionAreasData {
  heading?: string;
  solutionAreas?: { title?: string; body?: string }[];
}

export default function SolutionAreasSection({ data }: { data: SolutionAreasData | null }) {
  if (!data) return null;

  const solutionAreas = data.solutionAreas?.filter((a) => a.title || a.body) ?? [];
  if (!data.heading && solutionAreas.length === 0) return null;

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        {data.heading && (
          <Reveal className="text-center mb-12">
            <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
              {data.heading}
            </h2>
          </Reveal>
        )}

        {solutionAreas.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5">
            {solutionAreas.map((area, i) => (
              <Reveal
                key={area.title ?? i}
                delay={i * 80}
                className="flex-1 min-w-[280px] max-w-[380px] rounded-[6px] p-7 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
                style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
              >
                {area.title && <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{area.title}</h3>}
                {area.body && <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{area.body}</p>}
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
