import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface MissionVisionData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  missionLabel?: string;
  missionText?: string;
  visionLabel?: string;
  visionText?: string;
}

export default function MissionVisionSection({ data }: { data: MissionVisionData | null }) {
  if (!data) return null;

  const hasMission = !!(data.missionLabel || data.missionText);
  const hasVision = !!(data.visionLabel || data.visionText);

  return (
    <section style={{ background: "var(--forest)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {(data.eyebrowText || data.heading || data.headingEmphasis) && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h2 className="font-playfair text-[32px] font-semibold text-[#f0ebe0] leading-[1.2]">
                {data.heading}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic text-[#d4b06a]">{data.headingEmphasis}</em>
                )}
              </h2>
            )}
          </Reveal>
        )}

        {(hasMission || hasVision) && (
          <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
            {hasMission && (
              <Reveal
                className="why-card rounded-[6px] p-8"
                style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
              >
                {data.missionLabel && (
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#b8924a] mb-4">
                    {data.missionLabel}
                  </p>
                )}
                {data.missionText && (
                  <p className="font-cormorant italic font-semibold text-[18px] text-[#f0ebe0] leading-[1.7]">
                    {data.missionText}
                  </p>
                )}
              </Reveal>
            )}

            {hasVision && (
              <Reveal
                delay={100}
                className="why-card rounded-[6px] p-8"
                style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
              >
                {data.visionLabel && (
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#b8924a] mb-4">
                    {data.visionLabel}
                  </p>
                )}
                {data.visionText && (
                  <p className="font-cormorant italic font-semibold text-[18px] text-[#f0ebe0] leading-[1.7]">
                    {data.visionText}
                  </p>
                )}
              </Reveal>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
