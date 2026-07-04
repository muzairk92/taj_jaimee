import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface StatsBarData {
  stats?: { number: string; label: string }[];
}

export default function StatsStrip({ data }: { data: StatsBarData | null }) {
  const stats = data?.stats;
  if (!stats?.length) return null;

  return (
    <div className="border-b border-[rgba(184,146,74,0.15)]" style={{ background: "var(--forest)" }}>
      <Container className="py-10 max-[900px]:py-8">
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-8">
  {stats.map((stat, i) => (
    <Reveal
      key={i}
      delay={i * 80}
      // flex-1 makes them share space equally. min/max-w controls how the text wraps.
      className="flex-1 min-w-[120px] max-w-[200px] text-center px-4 border-r border-[rgba(240,235,224,0.08)] last:border-r-0"
    >
      <div className="font-playfair text-[34px] font-semibold text-[#d4b06a] leading-none mb-2">
        {stat.number}
      </div>
      <div className="text-[12px] font-normal text-[rgba(240,235,224,0.6)] leading-[1.6]">
        {stat.label}
      </div>
    </Reveal>
  ))}
</div>
      </Container>
    </div>
  );
}
