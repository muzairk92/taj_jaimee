import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface NetworkMember {
  initials?: string;
  name?: string;
  role?: string;
  bio?: string;
  ctaText?: string;
  ctaUrl?: string;
}

interface Stat {
  number?: string;
  label?: string;
}

export interface AdvisoryNetworkData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  tagline?: string;
  introParagraph1?: string;
  introParagraph2?: string;
  networkQuote?: string;
  networkQuoteAttribution?: string;
  membersHeading?: string;
  membersHeadingEmphasis?: string;
  networkMembers?: NetworkMember[];
  processHeading?: string;
  processHeadingEmphasis?: string;
  processParagraph1?: string;
  processParagraph2?: string;
  processParagraph3?: string;
  mattersHeading?: string;
  mattersHeadingEmphasis?: string;
  mattersParagraph1?: string;
  mattersParagraph2?: string;
  stats?: Stat[];
  ctaHeading?: string;
  ctaDescription?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function NetworkSection({ data }: { data: AdvisoryNetworkData | null }) {
  if (!data) return null;

  const members = data.networkMembers?.filter((m) => m.name || m.bio) ?? [];
  const stats = data.stats?.filter((s) => s.number || s.label) ?? [];

  const hasHeader = !!(data.eyebrowText || data.heading || data.headingEmphasis || data.tagline);
  const hasIntro = !!(data.introParagraph1 || data.introParagraph2);
  const hasQuote = !!data.networkQuote;
  const hasMembersHeading = !!(data.membersHeading || data.membersHeadingEmphasis);
  const hasProcess = !!(
    data.processHeading ||
    data.processHeadingEmphasis ||
    data.processParagraph1 ||
    data.processParagraph2 ||
    data.processParagraph3
  );
  const hasMatters = !!(
    data.mattersHeading ||
    data.mattersHeadingEmphasis ||
    data.mattersParagraph1 ||
    data.mattersParagraph2
  );
  const hasCta = !!(data.ctaHeading || data.ctaDescription || (data.ctaText && data.ctaUrl));

  const hasContent =
    hasHeader || hasIntro || hasQuote || hasMembersHeading || members.length > 0 || hasProcess || hasMatters || stats.length > 0 || hasCta;
  if (!hasContent) return null;

  return (
    <section id="network" className="scroll-mt-[68px]" style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {/* Section header */}
        {hasHeader && (
          <Reveal className="text-center max-w-[760px] mx-auto mb-14">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h1 className="font-playfair text-[32px] font-semibold text-[#f0ebe0] leading-[1.2] mb-4">
                {data.heading}{" "}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic font-semibold text-[#d4b06a]">{data.headingEmphasis}</em>
                )}
              </h1>
            )}
            {data.tagline && (
              <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85]">{data.tagline}</p>
            )}
          </Reveal>
        )}

        {/* Body intro */}
        {(hasIntro || hasQuote) && (
          <div className="max-w-[860px] mx-auto">
            {hasIntro && (
              <Reveal>
                {data.introParagraph1 && (
                  <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-5">
                    {data.introParagraph1}
                  </p>
                )}
                {data.introParagraph2 && (
                  <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-10">
                    {data.introParagraph2}
                  </p>
                )}
              </Reveal>
            )}

            {hasQuote && (
              <Reveal
                delay={40}
                className="rounded-r-[6px] pl-5 pr-5 py-4 mb-14"
                style={{ borderLeft: "2px solid var(--gold)", background: "rgba(184,146,74,0.06)" }}
              >
                <p className="font-cormorant italic font-semibold text-[16px] text-[#f0ebe0] leading-[1.7] mb-3">
                  &ldquo;{data.networkQuote}&rdquo;
                </p>
                {data.networkQuoteAttribution && (
                  <span className="text-[12px] font-semibold text-[#b8924a]">{data.networkQuoteAttribution}</span>
                )}
              </Reveal>
            )}
          </div>
        )}

        {/* Advisor grid */}
        {hasMembersHeading && (
          <Reveal className="text-center mb-10">
            <h2 className="font-playfair text-[24px] font-semibold text-[#f0ebe0] leading-[1.3]">
              {data.membersHeading}{" "}
              {data.membersHeadingEmphasis && (
                <em className="font-cormorant italic font-semibold text-[#d4b06a]">{data.membersHeadingEmphasis}</em>
              )}
            </h2>
          </Reveal>
        )}

        {members.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5 mb-16">
            {members.map((member, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="flex-1 min-w-[280px] max-w-[380px] rounded-[6px] p-7"
                style={{ background: "rgba(240,235,224,0.04)", border: "0.5px solid rgba(240,235,224,0.12)" }}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--forest)", border: "1px solid rgba(184,146,74,0.4)" }}
                  >
                    <span className="font-playfair italic text-sm text-[#d4b06a]">{member.initials ?? ""}</span>
                  </div>
                  <div>
                    {member.name && (
                      <p className="text-[15px] font-semibold text-[#f0ebe0] leading-[1.3]">{member.name}</p>
                    )}
                    {member.role && (
                      <p className="text-[11px] font-medium text-[#d4b06a] leading-[1.4]">{member.role}</p>
                    )}
                  </div>
                </div>
                {member.bio && (
                  <p className="text-[13px] font-normal text-[rgba(240,235,224,0.62)] leading-[1.75]">
                    {member.bio}
                  </p>
                )}
                {member.ctaText && member.ctaUrl && (
                  <a
                    href={member.ctaUrl}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.04em] uppercase text-[#d4b06a] mt-4 hover:text-[#f0ebe0] transition-colors"
                  >
                    {member.ctaText} →
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        )}

        {/* Process + matters */}
        {(hasProcess || hasMatters) && (
          <div className="max-w-[860px] mx-auto">
            {hasProcess && (
              <>
                <Reveal className="text-center mb-6">
                  <h2 className="font-playfair text-[22px] font-semibold text-[#f0ebe0] leading-[1.3]">
                    {data.processHeading}{" "}
                    {data.processHeadingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#d4b06a]">
                        {data.processHeadingEmphasis}
                      </em>
                    )}
                  </h2>
                </Reveal>

                <Reveal delay={40}>
                  {data.processParagraph1 && (
                    <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-5">
                      {data.processParagraph1}
                    </p>
                  )}
                  {data.processParagraph2 && (
                    <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-5">
                      {data.processParagraph2}
                    </p>
                  )}
                  {data.processParagraph3 && (
                    <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-14">
                      {data.processParagraph3}
                    </p>
                  )}
                </Reveal>
              </>
            )}

            {hasMatters && (
              <>
                <Reveal className="text-center mb-6">
                  <h2 className="font-playfair text-[22px] font-semibold text-[#f0ebe0] leading-[1.3]">
                    {data.mattersHeading}{" "}
                    {data.mattersHeadingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#d4b06a]">
                        {data.mattersHeadingEmphasis}
                      </em>
                    )}
                  </h2>
                </Reveal>

                <Reveal delay={40}>
                  {data.mattersParagraph1 && (
                    <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9] mb-5">
                      {data.mattersParagraph1}
                    </p>
                  )}
                  {data.mattersParagraph2 && (
                    <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.9]">
                      {data.mattersParagraph2}
                    </p>
                  )}
                </Reveal>
              </>
            )}
          </div>
        )}

        {/* Stat strip */}
        {stats.length > 0 && (
          <Reveal
            className="grid grid-cols-4 max-[760px]:grid-cols-2 gap-8 max-[760px]:gap-6 mt-16 pt-14"
            style={{ borderTop: "0.5px solid rgba(240,235,224,0.12)" }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-playfair text-[36px] font-semibold text-[#d4b06a] leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-[12px] font-normal text-[rgba(240,235,224,0.6)] leading-[1.5]">
                  {stat.label}
                </div>
              </div>
            ))}
          </Reveal>
        )}
      </Container>

      {/* CTA bar */}
      {hasCta && (
        <div style={{ background: "var(--rose)" }}>
          <Container className="py-4 flex items-center justify-between gap-4 flex-wrap">
            <Reveal className="text-[14px] font-normal text-[#5a3535] leading-[1.5]">
              {data.ctaHeading && <strong className="font-semibold block mb-0.5">{data.ctaHeading}</strong>}
              {data.ctaDescription}
            </Reveal>
            {data.ctaText && data.ctaUrl && (
              <Reveal delay={40}>
                <a
                  href={data.ctaUrl}
                  className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block whitespace-nowrap hover:bg-[#3a2e28] hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
                >
                  {data.ctaText} →
                </a>
              </Reveal>
            )}
          </Container>
        </div>
      )}
    </section>
  );
}
