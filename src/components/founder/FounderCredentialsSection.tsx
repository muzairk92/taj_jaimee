import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface CredentialCard {
  icon?: string;
  label?: string;
  title?: string;
  body?: string;
}

interface ProofBadge {
  icon?: string;
  title?: string;
  subtitle?: string;
}

interface ExpertiseItem {
  numeral?: string;
  title?: string;
  body?: string;
}

export interface FounderCredentialsData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  lead?: string;
  credentialCards?: CredentialCard[];
  researchLabel?: string;
  researchTitle?: string;
  researchTitleEmphasis?: string;
  researchParagraph1?: string;
  researchParagraph2?: string;
  researchParagraph3?: string;
  proofBadges?: ProofBadge[];
  connectionHeading?: string;
  connectionParagraph?: string;
  expertiseItems?: ExpertiseItem[];
  marketLabel?: string;
  marketBody?: string;
}

export default function FounderCredentialsSection({ data }: { data: FounderCredentialsData | null }) {
  if (!data) return null;

  const cards = data.credentialCards?.filter((c) => c.title || c.body) ?? [];
  const badges = data.proofBadges?.filter((b) => b.title || b.subtitle) ?? [];
  const expertise = data.expertiseItems?.filter((e) => e.title || e.body) ?? [];

  const hasHeader = !!(data.eyebrowText || data.heading || data.headingEmphasis || data.lead);
  const hasResearch = !!(
    data.researchLabel ||
    data.researchTitle ||
    data.researchTitleEmphasis ||
    data.researchParagraph1 ||
    data.researchParagraph2 ||
    data.researchParagraph3
  );
  const hasConnection = !!(data.connectionHeading || data.connectionParagraph);
  const hasMarket = !!(data.marketLabel || data.marketBody);

  const hasContent =
    hasHeader || cards.length > 0 || hasResearch || badges.length > 0 || hasConnection || expertise.length > 0 || hasMarket;
  if (!hasContent) return null;

  return (
    <section id="credentials" className="scroll-mt-[68px]" style={{ background: "var(--linen)" }}>
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

          {cards.length > 0 && (
            <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-5 mb-10">
              {cards.map((card, i) => (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className="bg-white rounded-[8px] p-6"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  <div className="h-0.5 rounded-[2px] mb-4" style={{ background: "var(--gold)" }} />
                  {card.icon && <span className="text-[22px] text-[#b8924a] block mb-3">{card.icon}</span>}
                  {card.label && (
                    <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] block mb-2">
                      {card.label}
                    </span>
                  )}
                  {card.title && (
                    <div className="text-[15px] font-semibold text-[#3a2e28] mb-2 leading-[1.3]">{card.title}</div>
                  )}
                  {card.body && <p className="text-[13px] font-normal text-[#7b6b5a] leading-[1.7]">{card.body}</p>}
                </Reveal>
              ))}
            </div>
          )}

          {hasResearch && (
            <Reveal className="rounded-[8px] p-7 md:p-8 mb-10" style={{ background: "var(--midnight)" }}>
              {data.researchLabel && (
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] block mb-3">
                  {data.researchLabel}
                </span>
              )}
              {(data.researchTitle || data.researchTitleEmphasis) && (
                <h3 className="font-playfair font-semibold text-[20px] text-[#f0ebe0] leading-[1.3] mb-3">
                  {data.researchTitle}{" "}
                  {data.researchTitleEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#d4b06a]">
                      {data.researchTitleEmphasis}
                    </em>
                  )}
                </h3>
              )}
              {data.researchParagraph1 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.8] mb-4">
                  {data.researchParagraph1}
                </p>
              )}
              {data.researchParagraph2 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.8] mb-4">
                  {data.researchParagraph2}
                </p>
              )}
              {data.researchParagraph3 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.8]">
                  {data.researchParagraph3}
                </p>
              )}
            </Reveal>
          )}

          {badges.length > 0 && (
            <div className="grid grid-cols-3 max-[640px]:grid-cols-1 gap-4 mb-10">
              {badges.map((badge, i) => (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className="bg-white rounded-[8px] p-5 text-center"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  {badge.icon && <span className="text-[20px] text-[#b8924a] block mb-2.5">{badge.icon}</span>}
                  {badge.title && (
                    <div className="text-[13px] font-semibold text-[#3a2e28] mb-1.5 leading-[1.3]">
                      {badge.title}
                    </div>
                  )}
                  {badge.subtitle && (
                    <p className="text-[11px] font-normal text-[#7b6b5a] leading-[1.5]">{badge.subtitle}</p>
                  )}
                </Reveal>
              ))}
            </div>
          )}

          {hasConnection && (
            <Reveal className="mb-10">
              {data.connectionHeading && (
                <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-3">
                  {data.connectionHeading}
                </h3>
              )}
              {data.connectionParagraph && (
                <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.9]">{data.connectionParagraph}</p>
              )}
            </Reveal>
          )}

          {expertise.length > 0 && (
            <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-4 mb-10">
              {expertise.map((item, i) => (
                <Reveal
                  key={i}
                  delay={i * 60}
                  className="relative bg-white rounded-[8px] p-6 pl-7"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  <span
                    className="absolute top-0 left-0 w-[2px] h-full rounded-l-[2px]"
                    style={{ background: "var(--gold)" }}
                  />
                  {item.numeral && (
                    <span className="font-playfair italic font-semibold text-[13px] text-[#b8924a] block mb-2">
                      {item.numeral}
                    </span>
                  )}
                  {item.title && <div className="text-[14px] font-semibold text-[#3a2e28] mb-2">{item.title}</div>}
                  {item.body && <p className="text-[13px] font-normal text-[#7b6b5a] leading-[1.65]">{item.body}</p>}
                </Reveal>
              ))}
            </div>
          )}

          {hasMarket && (
            <Reveal className="rounded-[8px] p-6 md:p-7" style={{ background: "var(--forest)" }}>
              {data.marketLabel && (
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#d4b06a] block mb-2.5">
                  {data.marketLabel}
                </span>
              )}
              {data.marketBody && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.8]">
                  {data.marketBody}
                </p>
              )}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
