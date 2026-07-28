import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Tag {
  text?: string;
}

interface Stat {
  number?: string;
  label?: string;
}

interface TimelineItem {
  period?: string;
  company?: string;
  role?: string;
  description?: string;
}

export interface FounderStoryData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  lead?: string;
  founderName?: string;
  founderRole?: string;
  photo?: { node?: { sourceUrl?: string; altText?: string } };
  tags?: Tag[];
  stats?: Stat[];
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  timeline?: TimelineItem[];
  foundingBoxLabel?: string;
  foundingParagraph1?: string;
  foundingParagraph2?: string;
  foundingParagraph3?: string;
  foundingParagraph4?: string;
  signatureQuote?: string;
  signatureAttribution?: string;
}

export default function FounderStorySection({ data }: { data: FounderStoryData | null }) {
  if (!data) return null;

  const tags = data.tags?.filter((t) => t.text) ?? [];
  const stats = data.stats?.filter((s) => s.number || s.label) ?? [];
  const timeline = data.timeline?.filter((t) => t.period || t.role) ?? [];
  const photoSrc = data.photo?.node?.sourceUrl ?? null;

  const hasIdentity = !!(photoSrc || data.founderName || data.founderRole || tags.length > 0);
  const hasHeader = !!(data.eyebrowText || data.heading || data.headingEmphasis || data.lead);
  const hasParagraphs = !!(data.paragraph1 || data.paragraph2 || data.paragraph3);
  const hasFoundingBox = !!(
    data.foundingBoxLabel ||
    data.foundingParagraph1 ||
    data.foundingParagraph2 ||
    data.foundingParagraph3 ||
    data.foundingParagraph4
  );
  const hasSignature = !!(data.signatureQuote || data.signatureAttribution);

  const hasContent =
    hasIdentity || hasHeader || stats.length > 0 || hasParagraphs || timeline.length > 0 || hasFoundingBox || hasSignature;
  if (!hasContent) return null;

  return (
    <section id="story" className="scroll-mt-[68px]" style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="max-w-[1440px] mx-auto">
          {hasIdentity && (
            <Reveal className="grid grid-cols-[100px_1fr] gap-6 items-start mb-10 max-[560px]:grid-cols-1 max-[560px]:text-center">
              <div
                className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0 mx-auto md:mx-0"
                style={{ background: "var(--moss)", border: "2px solid var(--gold)" }}
              >
                {photoSrc && (
                  <img
                    src={photoSrc}
                    alt={data.photo?.node?.altText || data.founderName || "Founder"}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                {data.founderName && (
                  <div className="font-playfair font-semibold text-[22px] text-[#f0ebe0] mb-1">
                    {data.founderName}
                  </div>
                )}
                {data.founderRole && (
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] block mb-3">
                    {data.founderRole}
                  </span>
                )}
                {tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[12px] font-normal text-[rgba(240,235,224,0.45)] px-2.5 py-1 rounded-[2px]"
                        style={{ background: "rgba(240,235,224,0.06)", border: "0.5px solid rgba(240,235,224,0.12)" }}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          {hasHeader && (
            <Reveal delay={40} className="mb-10">
              {data.eyebrowText && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.eyebrowText}
                </p>
              )}
              {(data.heading || data.headingEmphasis) && (
                <h1 className="font-playfair text-[38px] font-semibold text-[#f0ebe0] leading-[1.2] mb-4 max-[900px]:text-[28px]">
                  {data.heading}{" "}
                  {data.headingEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#d4b06a]">{data.headingEmphasis}</em>
                  )}
                </h1>
              )}
              {data.lead && (
                <p className="font-cormorant italic font-semibold text-[#d4b06a] text-[22px] leading-[1.5] max-[900px]:text-[19px]">
                  {data.lead}
                </p>
              )}
            </Reveal>
          )}

          {stats.length > 0 && (
            <Reveal
              delay={80}
              className="flex flex-wrap justify-center rounded-[8px] overflow-hidden mb-10"
              style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.08)" }}
            >
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[180px] p-4 text-center"
                  style={{ borderRight: i < stats.length - 1 ? "0.5px solid rgba(240,235,224,0.08)" : undefined }}
                >
                  <div className="font-playfair font-semibold text-[26px] text-[#d4b06a] leading-none mb-1.5">
                    {item.number}
                  </div>
                  <div className="text-[11px] font-normal text-[rgba(240,235,224,0.5)] leading-[1.4]">
                    {item.label}
                  </div>
                </div>
              ))}
            </Reveal>
          )}

          {hasParagraphs && (
            <Reveal delay={40}>
              {data.paragraph1 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.72)] leading-[1.9] mb-4">
                  {data.paragraph1}
                </p>
              )}
              {data.paragraph2 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.72)] leading-[1.9] mb-4">
                  {data.paragraph2}
                </p>
              )}
              {data.paragraph3 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.72)] leading-[1.9] mb-10">
                  {data.paragraph3}
                </p>
              )}
            </Reveal>
          )}

          {timeline.length > 0 && (
            <div className="flex flex-col mb-10">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 60} className="grid grid-cols-[130px_1fr] relative">
                  {i < timeline.length - 1 && (
                    <div
                      className="absolute left-[129px] top-[22px] bottom-0 w-px"
                      style={{ background: "rgba(184,146,74,0.25)" }}
                    />
                  )}
                  <div
                    className="w-2 h-2 rounded-full absolute left-[125px] top-5"
                    style={{ background: "var(--gold)", border: "2px solid var(--midnight)" }}
                  />
                  <div className="pr-4 py-3.5 text-right">
                    {item.period && (
                      <span className="text-[12px] font-semibold text-[#b8924a] tracking-[0.06em] block mb-0.5">
                        {item.period}
                      </span>
                    )}
                    {item.company && (
                      <span className="text-[12px] font-normal text-[rgba(240,235,224,0.4)] leading-[1.4]">
                        {item.company}
                      </span>
                    )}
                  </div>
                  <div className="pl-5 pb-5 pt-3" style={{ borderLeft: "0.5px solid rgba(240,235,224,0.08)" }}>
                    {item.role && (
                      <div className="text-[13px] font-semibold text-[#f0ebe0] mb-1.5">{item.role}</div>
                    )}
                    {item.description && (
                      <div className="text-[13px] font-normal text-[rgba(240,235,224,0.55)] leading-[1.7]">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {hasFoundingBox && (
            <Reveal
              className="rounded-[8px] p-7 mb-10"
              style={{ background: "rgba(184,146,74,0.08)", border: "0.5px solid rgba(184,146,74,0.2)" }}
            >
              {data.foundingBoxLabel && (
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] block mb-3">
                  {data.foundingBoxLabel}
                </span>
              )}
              {data.foundingParagraph1 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-4">
                  {data.foundingParagraph1}
                </p>
              )}
              {data.foundingParagraph2 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-4">
                  {data.foundingParagraph2}
                </p>
              )}
              {data.foundingParagraph3 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-4">
                  {data.foundingParagraph3}
                </p>
              )}
              {data.foundingParagraph4 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9]">
                  {data.foundingParagraph4}
                </p>
              )}
            </Reveal>
          )}

          {hasSignature && (
            <Reveal className="pt-8" style={{ borderTop: "0.5px solid rgba(240,235,224,0.1)" }}>
              <span className="font-playfair font-semibold text-[44px] text-[#b8924a] block leading-[0.7] mb-4 opacity-30 select-none">
                &ldquo;
              </span>
              {data.signatureQuote && (
                <p className="font-cormorant italic font-semibold text-[19px] text-[#f0ebe0] leading-[1.7] mb-4 max-w-[600px]">
                  {data.signatureQuote}
                </p>
              )}
              {data.signatureAttribution && (
                <div className="flex items-center gap-3">
                  <div className="w-7 h-px" style={{ background: "var(--gold)" }} />
                  <span className="text-[11px] font-semibold text-[rgba(240,235,224,0.6)]">
                    {data.signatureAttribution}
                  </span>
                </div>
              )}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
