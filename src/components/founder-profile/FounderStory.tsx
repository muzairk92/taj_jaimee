import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface StoryData {
  paragraphs?: { text?: string }[];
}

export default function FounderStory({ data }: { data: StoryData | null }) {
  if (!data) return null;

  const paragraphs = data.paragraphs?.filter((p) => p.text) ?? [];
  if (paragraphs.length === 0) return null;

  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="max-w-[840px] mx-auto">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 40}>
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-10 last:mb-0">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
