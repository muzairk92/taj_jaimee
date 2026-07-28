import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Reason {
  icon?: string;
  title?: string;
  body?: string;
}

interface ProcessStep {
  number?: string;
  title?: string;
  body?: string;
}

interface OptionTag {
  text?: string;
}

interface Social {
  icon?: string;
  platform?: string;
  detail?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface FounderConnectData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  lead?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroTitleEmphasis?: string;
  heroBody?: string;
  reasonsHeading?: string;
  reasons?: Reason[];
  processHeading?: string;
  processSteps?: ProcessStep[];
  formGuideLabel?: string;
  formField1Label?: string;
  formField1Hint?: string;
  formField2Label?: string;
  formField2Hint?: string;
  formField3Label?: string;
  formOptionTags?: OptionTag[];
  formField4Label?: string;
  formField4Hint?: string;
  linkedinHeading?: string;
  socials?: Social[];
  finalEyebrow?: string;
  finalTitle?: string;
  finalTitleEmphasis?: string;
  finalBody?: string;
  finalPrimaryButtonText?: string;
  finalPrimaryButtonUrl?: string;
  finalSecondaryButtonText?: string;
  finalSecondaryButtonUrl?: string;
  finalResponseNote?: string;
}

export default function FounderConnectSection({ data }: { data: FounderConnectData | null }) {
  if (!data) return null;

  const reasons = data.reasons?.filter((r) => r.title || r.body) ?? [];
  const steps = data.processSteps?.filter((s) => s.title || s.body) ?? [];
  const optionTags = data.formOptionTags?.filter((t) => t.text) ?? [];
  const socials = data.socials?.filter((s) => s.platform || s.detail) ?? [];

  const hasHeader = !!(data.eyebrowText || data.heading || data.headingEmphasis || data.lead);
  const hasHero = !!(data.heroEyebrow || data.heroTitle || data.heroTitleEmphasis || data.heroBody);
  const hasFormGuide = !!(
    data.formGuideLabel ||
    data.formField1Label ||
    data.formField2Label ||
    data.formField3Label ||
    data.formField4Label
  );
  const hasFinal = !!(
    data.finalEyebrow ||
    data.finalTitle ||
    data.finalTitleEmphasis ||
    data.finalBody ||
    (data.finalPrimaryButtonText && data.finalPrimaryButtonUrl) ||
    (data.finalSecondaryButtonText && data.finalSecondaryButtonUrl)
  );

  const hasContent =
    hasHeader || hasHero || reasons.length > 0 || steps.length > 0 || hasFormGuide || socials.length > 0 || hasFinal;
  if (!hasContent) return null;

  return (
    <section id="connect" className="scroll-mt-[68px]" style={{ background: "var(--linen)" }}>
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

          {hasHero && (
            <Reveal className="relative overflow-hidden rounded-[8px] p-7 md:p-8 mb-10" style={{ background: "var(--midnight)" }}>
              <div
                className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(47,75,69,0.5) 0%, transparent 65%)" }}
              />
              {data.heroEyebrow && (
                <span className="relative text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium block">
                  {data.heroEyebrow}
                </span>
              )}
              {(data.heroTitle || data.heroTitleEmphasis) && (
                <h3 className="relative font-playfair font-semibold text-[24px] text-[#f0ebe0] leading-[1.25] mb-3">
                  {data.heroTitle}{" "}
                  {data.heroTitleEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#d4b06a]">{data.heroTitleEmphasis}</em>
                  )}
                </h3>
              )}
              {data.heroBody && (
                <p className="relative text-[14px] font-normal text-[rgba(240,235,224,0.6)] leading-[1.8] max-w-[560px]">
                  {data.heroBody}
                </p>
              )}
            </Reveal>
          )}

          {data.reasonsHeading && (
            <Reveal>
              <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-4">
                {data.reasonsHeading}
              </h3>
            </Reveal>
          )}
          {reasons.length > 0 && (
            <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-4 mb-10">
              {reasons.map((reason, i) => (
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
                  {reason.icon && <span className="text-[18px] text-[#b8924a] block mb-2">{reason.icon}</span>}
                  {reason.title && <div className="text-[14px] font-semibold text-[#3a2e28] mb-1.5">{reason.title}</div>}
                  {reason.body && <p className="text-[12px] font-normal text-[#7b6b5a] leading-[1.65]">{reason.body}</p>}
                </Reveal>
              ))}
            </div>
          )}

          {data.processHeading && (
            <Reveal>
              <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-4">
                {data.processHeading}
              </h3>
            </Reveal>
          )}
          {steps.length > 0 && (
            <Reveal
              className="grid grid-cols-4 max-[640px]:grid-cols-2 rounded-[8px] overflow-hidden mb-10"
              style={{ background: "var(--forest)" }}
            >
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="p-4 text-center"
                  style={{ borderRight: i < steps.length - 1 ? "0.5px solid rgba(240,235,224,0.08)" : undefined }}
                >
                  {step.number && (
                    <div className="font-playfair font-semibold text-[20px] text-[#d4b06a] leading-none mb-1.5">
                      {step.number}
                    </div>
                  )}
                  {step.title && <div className="text-[11px] font-semibold text-[#f0ebe0] mb-1">{step.title}</div>}
                  {step.body && (
                    <p className="text-[12px] font-normal text-[rgba(240,235,224,0.45)] leading-[1.5]">{step.body}</p>
                  )}
                </div>
              ))}
            </Reveal>
          )}

          {hasFormGuide && (
            <Reveal className="rounded-[8px] p-5 md:p-6 mb-10" style={{ background: "var(--white)", border: "0.5px solid var(--border)" }}>
              {data.formGuideLabel && (
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#7b6b5a] block mb-3">
                  {data.formGuideLabel}
                </span>
              )}
              <div className="grid grid-cols-2 max-[560px]:grid-cols-1 gap-2.5">
                {data.formField1Label && (
                  <div className="bg-white rounded-[4px] p-2.5 px-3.5" style={{ border: "0.5px solid var(--border)" }}>
                    <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#7b6b5a] block mb-1">
                      {data.formField1Label}
                    </span>
                    {data.formField1Hint && (
                      <span className="text-[10.5px] font-normal text-[#3a2e28]">{data.formField1Hint}</span>
                    )}
                  </div>
                )}
                {data.formField2Label && (
                  <div className="bg-white rounded-[4px] p-2.5 px-3.5" style={{ border: "0.5px solid var(--border)" }}>
                    <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#7b6b5a] block mb-1">
                      {data.formField2Label}
                    </span>
                    {data.formField2Hint && (
                      <span className="text-[10.5px] font-normal text-[#3a2e28]">{data.formField2Hint}</span>
                    )}
                  </div>
                )}
                {data.formField3Label && (
                  <div
                    className="col-span-2 max-[560px]:col-span-1 bg-white rounded-[4px] p-2.5 px-3.5"
                    style={{ border: "0.5px solid var(--border)" }}
                  >
                    <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#7b6b5a] block mb-1">
                      {data.formField3Label}
                    </span>
                    {optionTags.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap mt-1">
                        {optionTags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-normal text-[#7b6b5a] px-2.5 py-1 rounded-[2px]"
                            style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {data.formField4Label && (
                  <div
                    className="col-span-2 max-[560px]:col-span-1 bg-white rounded-[4px] p-2.5 px-3.5"
                    style={{ border: "0.5px solid var(--border)" }}
                  >
                    <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#7b6b5a] block mb-1">
                      {data.formField4Label}
                    </span>
                    {data.formField4Hint && (
                      <span className="text-[10.5px] font-normal text-[#3a2e28]">{data.formField4Hint}</span>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          {data.linkedinHeading && (
            <Reveal>
              <h3 className="font-playfair text-[22px] font-semibold text-[#3a2e28] leading-[1.3] mb-4">
                {data.linkedinHeading}
              </h3>
            </Reveal>
          )}
          {socials.length > 0 && (
            <div className="grid grid-cols-3 max-[640px]:grid-cols-1 gap-4 mb-10">
              {socials.map((social, i) => (
                <Reveal
                  key={i}
                  delay={i * 60}
                  className="bg-white rounded-[8px] p-5 text-center"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  {social.icon && (
                    <span className="text-[20px] text-[#0b1f1c] block mb-1.5 font-semibold">{social.icon}</span>
                  )}
                  {social.platform && (
                    <div className="text-[13px] font-semibold text-[#3a2e28] mb-1">{social.platform}</div>
                  )}
                  {social.detail && <p className="text-[11px] font-normal text-[#7b6b5a] leading-[1.4]">{social.detail}</p>}
                  {social.linkText && social.linkUrl && (
                    <a
                      href={social.linkUrl}
                      className="text-[11px] font-semibold text-[#b8924a] tracking-[0.06em] mt-2 block hover:text-[#3a2e28] transition-colors"
                    >
                      {social.linkText}
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          )}

          {hasFinal && (
            <Reveal className="rounded-[10px] p-9 md:p-10 text-center" style={{ background: "var(--midnight)" }}>
              {data.finalEyebrow && (
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#b8924a] mb-3 font-medium block">
                  {data.finalEyebrow}
                </span>
              )}
              {(data.finalTitle || data.finalTitleEmphasis) && (
                <h3 className="font-playfair font-semibold text-[26px] text-[#f0ebe0] leading-[1.3] mb-3">
                  {data.finalTitle}{" "}
                  {data.finalTitleEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#d4b06a]">{data.finalTitleEmphasis}</em>
                  )}
                </h3>
              )}
              {data.finalBody && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.6)] leading-[1.85] max-w-[520px] mx-auto mb-8">
                  {data.finalBody}
                </p>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                {data.finalPrimaryButtonText && data.finalPrimaryButtonUrl && (
                  <a
                    href={data.finalPrimaryButtonUrl}
                    className="bg-[#b8924a] text-[#0b1f1c] text-sm font-semibold tracking-[0.08em] uppercase px-8 py-4 rounded-[2px] inline-block hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
                  >
                    {data.finalPrimaryButtonText} →
                  </a>
                )}
                {data.finalSecondaryButtonText && data.finalSecondaryButtonUrl && (
                  <a
                    href={data.finalSecondaryButtonUrl}
                    className="border border-[rgba(240,235,224,0.4)] text-[rgba(240,235,224,0.8)] text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-[2px] inline-block hover:border-white hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
                  >
                    {data.finalSecondaryButtonText}
                  </a>
                )}
              </div>
              {data.finalResponseNote && (
                <span className="text-[11px] text-[rgba(240,235,224,0.35)] mt-5 block">{data.finalResponseNote}</span>
              )}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
