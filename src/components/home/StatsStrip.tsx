import Container from "@/components/ui/Container";

interface StatsBarData {
  stats?: { number: string; label: string }[];
}

export default function StatsStrip({ data }: { data: StatsBarData | null }) {
  const stats = data?.stats;
  if (!stats?.length) return null;

  return (
    <div className="border-b border-[rgba(184,146,74,0.15)]" style={{ background: "var(--forest)" }}>
      <Container className="py-10 max-[900px]:py-8">
        <div className="grid grid-cols-5 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-4 border-r border-[rgba(240,235,224,0.08)] last:border-r-0 max-[900px]:py-4"
            >
              <div className="font-playfair text-[34px] font-normal text-[#d4b06a] leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-[12px] font-light text-[rgba(240,235,224,0.6)] leading-[1.6]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
