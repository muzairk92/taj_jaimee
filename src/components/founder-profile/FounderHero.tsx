import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface FounderHeroData {
  eyebrowText?: string;
  heading?: string;
  subheading?: string;
  paragraph?: string;
  tags?: { text?: string }[];
  founderName?: string;
  founderRole?: string;
  photo?: { node?: { sourceUrl?: string; altText?: string } };
}

export default function FounderHero({ data }: { data: FounderHeroData | null }) {
  if (!data) return null;

  const photoSrc = data.photo?.node?.sourceUrl ?? null;
  const hasText = !!(data.eyebrowText || data.heading || data.subheading);
  const hasIdentity = !!(photoSrc || data.founderName || data.founderRole);
  if (!hasText && !hasIdentity) return null;

  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-[68px]" style={{ background: "var(--midnight)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(184,146,74,0.16) 0%, transparent 60%)",
        }}
      />
      <Container className="py-24 max-[900px]:py-16 relative">
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-5 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h1 className="font-playfair text-[38px] font-semibold text-[#f0ebe0] leading-[1.2] max-[900px]:text-[28px]">
                {data.heading}
              </h1>
            )}
            {data.subheading && (
              <p className="font-cormorant italic font-semibold text-[#d4b06a] text-[22px] mt-4 max-[900px]:text-[19px]">
                {data.subheading}
              </p>
            )}
            {data.paragraph && (
              <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.85] mt-5 ">
                {data.paragraph}
              </p>
            )}
            {data.tags && data.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-6">
                {data.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-normal tracking-[0.06em] text-[rgba(240,235,224,0.45)] px-2.5 py-1 rounded-[2px]"
                    style={{ background: "rgba(240,235,224,0.06)", border: "0.5px solid rgba(240,235,224,0.12)" }}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            )}
          </Reveal>

          {hasIdentity && (
            <Reveal delay={150}>
              <div
                className="rounded-[8px] flex items-center justify-center overflow-hidden mb-5 max-[900px]:max-w-[260px] max-[900px]:mx-auto"
                style={{ aspectRatio: "4 / 4", background: "var(--forest)", border: "1px solid var(--gold)" }}
              >
                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt={data.photo?.node?.altText ?? data.founderName ?? "Founder"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-playfair italic text-[56px] text-[#d4b06a]">
                    {data.founderName
                      ? data.founderName
                          .split(" ")
                          .map((part) => part[0])
                          .filter(Boolean)
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()
                      : "TJ"}
                  </span>
                )}
              </div>
              {(data.founderName || data.founderRole) && (
                <div className="text-center max-[900px]:text-center">
                  {data.founderName && (
                    <p className="font-playfair text-[20px] font-semibold text-[#f0ebe0]">{data.founderName}</p>
                  )}
                  {data.founderRole && (
                    <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] mt-1">
                      {data.founderRole}
                    </p>
                  )}
                </div>
              )}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
