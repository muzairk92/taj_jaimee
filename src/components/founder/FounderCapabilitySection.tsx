import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface PillarItem {
  text?: string;
}

interface Pillar {
  label?: string;
  name?: string;
  role?: string;
  items?: PillarItem[];
}

interface Sector {
  icon?: string;
  name?: string;
  subtitle?: string;
}

interface Region {
  name?: string;
  detail?: string;
}

interface Engagement {
  label?: string;
  title?: string;
  body?: string;
}

export interface FounderCapabilityData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  lead?: string;
  glanceTitle?: string;
  glanceTitleEmphasis?: string;
  glanceBody?: string;
  pillarsHeading?: string;
  pillarsHeadingEmphasis?: string;
  pillars?: Pillar[];
  sectorsHeading?: string;
  sectors?: Sector[];
  geoLabel?: string;
  regions?: Region[];
  engagementsHeading?: string;
  engagements?: Engagement[];
  downloadTitle?: string;
  downloadSubtitle?: string;
  downloadButtonText?: string;
  downloadButtonUrl?: string;
}

export default function FounderCapabilitySection({ data }: { data: FounderCapabilityData | null }) {
  if (!data) return null;

  const pillars = data.pillars?.filter((p) => p.name || p.label) ?? [];
  const sectors = data.sectors?.filter((s) => s.name || s.subtitle) ?? [];
  const regions = data.regions?.filter((r) => r.name || r.detail) ?? [];
  const engagements = data.engagements?.filter((e) => e.title || e.body) ?? [];

  const hasHeader = !!(data.eyebrowText || data.heading || data.headingEmphasis || data.lead);
  const hasGlance = !!(data.glanceTitle || data.glanceTitleEmphasis || data.glanceBody);
  const hasPillarsHeading = !!(data.pillarsHeading || data.pillarsHeadingEmphasis);
  const hasGeo = !!(data.geoLabel || regions.length > 0);
  const hasDownload = !!(data.downloadTitle || data.downloadSubtitle || (data.downloadButtonText && data.downloadButtonUrl));

  const hasContent =
    hasHeader ||
    hasGlance ||
    pillars.length > 0 ||
    sectors.length > 0 ||
    hasGeo ||
    engagements.length > 0 ||
    hasDownload;
  if (!hasContent) return null;

  return (
    <section id="capability" className="scroll-mt-[68px]" style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="max-w-[1440px] mx-auto">
          {hasHeader && (
            <Reveal className="mb-10">
              {data.eyebrowText && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.eyebrowText}
                </p>
              )}
              {(data.heading || data.headingEmphasis) && (
                <h2 className="font-playfair text-[32px] font-semibold text-[#3a2e28] leading-[1.2] mb-4">
                  {data.heading}{" "}
                  {data.headingEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#b8924a]">{data.headingEmphasis}</em>
                  )}
                </h2>
              )}
              {data.lead && (
                <p className="font-cormorant italic font-semibold text-[#b8924a] text-[18px] leading-[1.6]">
                  {data.lead}
                </p>
              )}
            </Reveal>
          )}

          {hasGlance && (
            <Reveal className="rounded-[8px] p-6 md:p-7 mb-10" style={{ background: "var(--midnight)" }}>
              {(data.glanceTitle || data.glanceTitleEmphasis) && (
                <h3 className="font-playfair font-semibold text-[20px] text-[#f0ebe0] leading-[1.3] mb-2">
                  {data.glanceTitle}{" "}
                  {data.glanceTitleEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#d4b06a]">{data.glanceTitleEmphasis}</em>
                  )}
                </h3>
              )}
              {data.glanceBody && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.6)] leading-[1.75]">
                  {data.glanceBody}
                </p>
              )}
            </Reveal>
          )}

          {hasPillarsHeading && (
            <Reveal>
              <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-4">
                {data.pillarsHeading}{" "}
                {data.pillarsHeadingEmphasis && (
                  <em className="font-cormorant italic font-semibold text-[#b8924a]">{data.pillarsHeadingEmphasis}</em>
                )}
              </h3>
            </Reveal>
          )}
          {pillars.length > 0 && (
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-4 mb-10">
              {pillars.map((pillar, i) => {
                const items = pillar.items?.filter((it) => it.text) ?? [];
                return (
                  <Reveal
                    key={i}
                    delay={i * 80}
                    className="bg-white rounded-[8px] overflow-hidden"
                    style={{ border: "0.5px solid var(--border)" }}
                  >
                    <div className="p-4" style={{ background: "var(--linen)", borderBottom: "0.5px solid var(--border)" }}>
                      {pillar.label && (
                        <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#b8924a] block mb-1">
                          {pillar.label}
                        </span>
                      )}
                      {pillar.name && <div className="text-[13px] font-semibold text-[#3a2e28]">{pillar.name}</div>}
                      {pillar.role && (
                        <div className="text-[12px] font-normal tracking-[0.06em] uppercase text-[#7b6b5a] mt-0.5">
                          {pillar.role}
                        </div>
                      )}
                    </div>
                    {items.length > 0 && (
                      <div className="p-4">
                        <div className="flex flex-col gap-1.5">
                          {items.map((item, ii) => (
                            <div key={ii} className="text-[12px] font-normal text-[#7b6b5a] pl-3 relative leading-[1.5]">
                              <span className="absolute left-0 text-[#b8924a] text-[10px]">—</span>
                              {item.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          )}

          {data.sectorsHeading && (
            <Reveal>
              <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-4">
                {data.sectorsHeading}
              </h3>
            </Reveal>
          )}
          {sectors.length > 0 && (
            <div className="grid grid-cols-3 max-[640px]:grid-cols-1 gap-3 mb-10">
              {sectors.map((sector, i) => (
                <Reveal
                  key={i}
                  delay={i * 60}
                  className="rounded-[6px] p-4 text-center"
                  style={{ background: "white", border: "0.5px solid var(--border)" }}
                >
                  {sector.icon && <span className="text-[18px] text-[#b8924a] block mb-2">{sector.icon}</span>}
                  {sector.name && <div className="text-[11px] font-semibold text-[#3a2e28] mb-1">{sector.name}</div>}
                  {sector.subtitle && (
                    <p className="text-[10px] font-normal text-[#7b6b5a] leading-[1.4]">{sector.subtitle}</p>
                  )}
                </Reveal>
              ))}
            </div>
          )}

          {hasGeo && (
            <Reveal className="rounded-[8px] p-6 mb-10" style={{ background: "var(--forest)" }}>
              {data.geoLabel && (
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#d4b06a] block mb-3">
                  {data.geoLabel}
                </span>
              )}
              {regions.length > 0 && (
                <div className="grid grid-cols-4 max-[640px]:grid-cols-2">
                  {regions.map((region, i) => (
                    <div
                      key={i}
                      className="text-center p-3"
                      style={{ borderRight: i < regions.length - 1 ? "0.5px solid rgba(240,235,224,0.08)" : undefined }}
                    >
                      {region.name && <div className="text-[12px] font-semibold text-[#f0ebe0] mb-1">{region.name}</div>}
                      {region.detail && (
                        <div className="text-[10px] font-normal text-[rgba(240,235,224,0.45)] leading-[1.4]">
                          {region.detail}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          )}

          {data.engagementsHeading && (
            <Reveal>
              <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-4">
                {data.engagementsHeading}
              </h3>
            </Reveal>
          )}
          {engagements.length > 0 && (
            <div className="grid grid-cols-2 max-[560px]:grid-cols-1 gap-3 mb-10">
              {engagements.map((eng, i) => (
                <Reveal
                  key={i}
                  delay={i * 60}
                  className="bg-white rounded-[8px] p-5"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  {eng.label && (
                    <span className="font-playfair italic font-semibold text-[13px] text-[#b8924a] block mb-1.5">
                      {eng.label}
                    </span>
                  )}
                  {eng.title && <div className="text-[14px] font-semibold text-[#3a2e28] mb-1.5">{eng.title}</div>}
                  {eng.body && <p className="text-[12px] font-normal text-[#7b6b5a] leading-[1.65]">{eng.body}</p>}
                </Reveal>
              ))}
            </div>
          )}

          {hasDownload && (
            <Reveal
              className="rounded-[8px] p-5 md:p-6 flex items-center justify-between gap-4 flex-wrap"
              style={{ background: "rgba(184,146,74,0.08)", border: "0.5px solid rgba(184,146,74,0.2)" }}
            >
              <div>
                {data.downloadTitle && (
                  <div className="text-[14px] font-semibold text-[#3a2e28] mb-1">{data.downloadTitle}</div>
                )}
                {data.downloadSubtitle && (
                  <p className="text-[12px] font-normal text-[#7b6b5a]">{data.downloadSubtitle}</p>
                )}
              </div>
              {data.downloadButtonText && data.downloadButtonUrl && (
                <a
                  href={data.downloadButtonUrl}
                  className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block whitespace-nowrap hover:bg-[#3a2e28] hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
                >
                  {data.downloadButtonText} →
                </a>
              )}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
