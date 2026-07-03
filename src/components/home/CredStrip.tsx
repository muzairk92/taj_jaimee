import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface AwardItem {
  icon?: { node?: { sourceUrl?: string; altText?: string } };
  title?: string;
  subtitle?: string;
}

interface AwardsBarData {
  awards?: AwardItem[];
}

export default function CredStrip({ data }: { data: AwardsBarData | null }) {
  const awards = data?.awards;
  if (!awards?.length) return null;

  return (
    <div className="border-t border-b border-[#c8b8a2]" style={{ background: "var(--linen)" }}>
      <Container className="py-8">
        <div className="flex items-center justify-center gap-10 flex-wrap max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
          {awards.map((award, i) => (
            <Reveal key={i} delay={i * 80} className="flex items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#b8924a] rounded-[2px] flex items-center justify-center shrink-0 overflow-hidden">
                  {award.icon?.node?.sourceUrl ? (
                    <img
                      src={award.icon.node.sourceUrl}
                      alt={award.icon.node.altText ?? award.title ?? ""}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-[#b8924a] opacity-60" />
                  )}
                </div>
                <div>
                  {award.title && (
                    <span className="block text-sm font-semibold text-[#3a2e28] mb-0.5">{award.title}</span>
                  )}
                  {award.subtitle && (
                    <span className="block text-xs font-normal text-[#7b6b5a] leading-[1.5] max-w-[200px]">
                      {award.subtitle}
                    </span>
                  )}
                </div>
              </div>
              {i < awards.length - 1 && (
                <div className="w-px h-10 bg-[#c8b8a2] mx-10 shrink-0 max-[900px]:hidden" />
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
