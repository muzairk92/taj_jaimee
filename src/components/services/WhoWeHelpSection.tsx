import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface WhoWeHelpData {
  eyebrowText?: string;
  heading?: string;
  audiences?: { text?: string }[];
}

export default function WhoWeHelpSection({ data }: { data: WhoWeHelpData | null }) {
  if (!data) return null;

  const audiences = data.audiences?.filter((a) => a.text) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading);
  if (!hasHeader && audiences.length === 0) return null;

  return (
    <section style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {hasHeader && (
            <Reveal>
              {data.eyebrowText && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.eyebrowText}
                </p>
              )}
              {data.heading && (
                <h2 className="font-playfair text-[30px] font-semibold text-[#f0ebe0] leading-[1.25]">
                  {data.heading}
                </h2>
              )}
            </Reveal>
          )}

          {audiences.length > 0 && (
            <div className="flex flex-col gap-3">
              {audiences.map((audience, i) => (
                <Reveal
                  key={audience.text}
                  delay={i * 80}
                  className="flex items-center gap-4 rounded-[4px] px-5 py-3.5 hover:bg-[rgba(240,235,224,0.07)]"
                  style={{
                    background: "rgba(240,235,224,0.04)",
                    border: "0.5px solid rgba(240,235,224,0.1)",
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-[#b8924a] rounded-full shrink-0" />
                  <span className="text-[14px] font-normal text-[rgba(240,235,224,0.75)]">{audience.text}</span>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
