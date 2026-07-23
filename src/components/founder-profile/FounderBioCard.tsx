import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import FounderHero, { type FounderHeroData } from "@/components/founder-profile/FounderHero";

interface TaglineData {
  items?: { text?: string }[];
}

interface IntroductionData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

interface ExpertiseData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  quoteText?: string;
  quoteName?: string;
  quoteRole?: string;
  cards?: { title?: string; description?: string }[];
}

interface CredentialsData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  credentials?: { title?: string; subtitle?: string }[];
  paragraph4?: string;
  quoteText?: string;
  quoteName?: string;
  quoteRole?: string;
}

interface WhyFoundedData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  quoteText?: string;
  quoteName?: string;
  quoteRole?: string;
}

interface WayForwardData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  subEyebrowText?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
}

interface SignatureQuoteData {
  quoteText?: string;
  attributionName?: string;
  attributionRole?: string;
}

interface CtaData {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface FounderBioCardProps {
  hero: FounderHeroData | null;
  tagline: TaglineData | null;
  introduction: IntroductionData | null;
  expertise: ExpertiseData | null;
  credentials: CredentialsData | null;
  whyFounded: WhyFoundedData | null;
  wayForward: WayForwardData | null;
  signatureQuote: SignatureQuoteData | null;
  cta: CtaData | null;
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#b8924a">
      <path d="M12 2.5l2.95 6.28 6.93.86-5.1 4.78 1.42 6.87L12 17.9l-6.2 3.39 1.42-6.87-5.1-4.78 6.93-.86L12 2.5z" />
    </svg>
  );
}

export default function FounderBioCard({
  hero,
  tagline,
  introduction,
  expertise,
  credentials,
  whyFounded,
  wayForward,
  signatureQuote,
  cta,
}: FounderBioCardProps) {
  const taglineItems = tagline?.items?.filter((i) => i.text) ?? [];
  const expertiseCards = expertise?.cards?.filter((c) => c.title || c.description) ?? [];
  const credentialItems = credentials?.credentials?.filter((c) => c.title || c.subtitle) ?? [];

  const hasIntroduction = !!(
    introduction &&
    (introduction.eyebrowText ||
      introduction.heading ||
      introduction.headingEmphasis ||
      introduction.paragraph1 ||
      introduction.paragraph2 ||
      introduction.paragraph3)
  );

  const hasExpertise = !!(
    expertise &&
    (expertise.eyebrowText ||
      expertise.heading ||
      expertise.headingEmphasis ||
      expertise.paragraph1 ||
      expertise.paragraph2 ||
      expertise.paragraph3 ||
      expertise.quoteText ||
      expertiseCards.length > 0)
  );

  const hasCredentials = !!(
    credentials &&
    (credentials.eyebrowText ||
      credentials.heading ||
      credentials.headingEmphasis ||
      credentials.paragraph1 ||
      credentials.paragraph2 ||
      credentials.paragraph3 ||
      credentials.paragraph4 ||
      credentials.quoteText ||
      credentialItems.length > 0)
  );

  const hasWhyFounded = !!(
    whyFounded &&
    (whyFounded.eyebrowText ||
      whyFounded.heading ||
      whyFounded.headingEmphasis ||
      whyFounded.paragraph1 ||
      whyFounded.paragraph2 ||
      whyFounded.paragraph3 ||
      whyFounded.paragraph4 ||
      whyFounded.quoteText)
  );

  const hasWayForward = !!(
    wayForward &&
    (wayForward.eyebrowText ||
      wayForward.heading ||
      wayForward.headingEmphasis ||
      wayForward.subEyebrowText ||
      wayForward.paragraph1 ||
      wayForward.paragraph2 ||
      wayForward.paragraph3 ||
      wayForward.paragraph4)
  );

  const hasSignatureQuote = !!(signatureQuote && signatureQuote.quoteText);

  const hasCta = !!(cta && (cta.heading || cta.description || (cta.buttonText && cta.buttonUrl)));

  return (
    <>
      <FounderHero data={hero} />

      {/* Tagline strip */}
      {taglineItems.length > 0 && (
        <div id="tagline" className="scroll-mt-[68px]" style={{ background: "var(--rose)" }}>
          <Container className="py-3 max-[900px]:py-2.5">
            <Reveal className="flex items-center justify-center gap-6 flex-wrap max-[900px]:gap-3">
              {taglineItems.map((item, i) => (
                <span key={i} className="flex items-center gap-6 max-[900px]:gap-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#5a3535] font-medium">
                    {item.text}
                  </span>
                  {i < taglineItems.length - 1 && (
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "rgba(90,53,53,0.4)" }} />
                  )}
                </span>
              ))}
            </Reveal>
          </Container>
        </div>
      )}

      {/* Introduction */}
      {hasIntroduction && introduction && (
        <section id="introduction" className="bg-white scroll-mt-[68px]">
          <Container className="py-20 max-[900px]:py-14">
            <div className="max-w-[1440px] mx-auto">
              <Reveal className="mb-10">
                {introduction.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {introduction.eyebrowText}
                  </p>
                )}
                {(introduction.heading || introduction.headingEmphasis) && (
                  <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                    {introduction.heading}{" "}
                    {introduction.headingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#b8924a]">
                        {introduction.headingEmphasis}
                      </em>
                    )}
                  </h2>
                )}
              </Reveal>

              <Reveal delay={40}>
                {introduction.paragraph1 && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                    {introduction.paragraph1}
                  </p>
                )}
                {introduction.paragraph2 && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                    {introduction.paragraph2}
                  </p>
                )}
                {introduction.paragraph3 && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85]">{introduction.paragraph3}</p>
                )}
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* Expertise & Experience */}
      {hasExpertise && expertise && (
        <section id="expertise" className="scroll-mt-[68px]" style={{ background: "var(--linen)" }}>
          <Container className="py-20 max-[900px]:py-14">
            <div className="max-w-[1440px] mx-auto">
              <Reveal className="mb-10">
                {expertise.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {expertise.eyebrowText}
                  </p>
                )}
                {(expertise.heading || expertise.headingEmphasis) && (
                  <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                    {expertise.heading}{" "}
                    {expertise.headingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#b8924a]">
                        {expertise.headingEmphasis}
                      </em>
                    )}
                  </h2>
                )}
              </Reveal>

              {(expertise.paragraph1 || expertise.paragraph2 || expertise.paragraph3) && (
                <Reveal delay={40}>
                  {expertise.paragraph1 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {expertise.paragraph1}
                    </p>
                  )}
                  {expertise.paragraph2 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {expertise.paragraph2}
                    </p>
                  )}
                  {expertise.paragraph3 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-8">
                      {expertise.paragraph3}
                    </p>
                  )}
                </Reveal>
              )}

              {expertise.quoteText && (
                <Reveal
                  delay={80}
                  className="bg-white rounded-[6px] p-7 mb-10"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  <blockquote className="border-l-2 border-[#b8924a] pl-5 mb-4">
                    <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.7]">
                      &ldquo;{expertise.quoteText}&rdquo;
                    </p>
                  </blockquote>
                  {expertise.quoteName && (
                    <p className="text-[13px] font-semibold text-[#3a2e28]">{expertise.quoteName}</p>
                  )}
                  {expertise.quoteRole && (
                    <p className="text-[12px] font-normal text-[#7b6b5a] leading-[1.6]">{expertise.quoteRole}</p>
                  )}
                </Reveal>
              )}

              {expertiseCards.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                  {expertiseCards.map((card, i) => (
                    <Reveal
                      key={i}
                      delay={i * 80}
                      className="flex-1 min-w-[260px] max-w-[340px] bg-white border border-[#c8b8a2] rounded-[6px] p-7 flex flex-col gap-3 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)] hover:-translate-y-1"
                    >
                      <div className="w-9 h-9 border border-[#b8924a] rounded-full flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 bg-[#b8924a] rounded-full" />
                      </div>
                      {card.title && (
                        <h3 className="text-[15px] font-semibold text-[#3a2e28] leading-[1.3]">{card.title}</h3>
                      )}
                      {card.description && (
                        <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{card.description}</p>
                      )}
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Achievements & Credentials */}
      {hasCredentials && credentials && (
        <section id="credentials" className="bg-white scroll-mt-[68px]">
          <Container className="py-20 max-[900px]:py-14">
            <div className="max-w-[1440px] mx-auto">
              <Reveal className="mb-10">
                {credentials.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {credentials.eyebrowText}
                  </p>
                )}
                {(credentials.heading || credentials.headingEmphasis) && (
                  <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                    {credentials.heading}{" "}
                    {credentials.headingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#b8924a]">
                        {credentials.headingEmphasis}
                      </em>
                    )}
                  </h2>
                )}
              </Reveal>

              {(credentials.paragraph1 || credentials.paragraph2 || credentials.paragraph3) && (
                <Reveal delay={40}>
                  {credentials.paragraph1 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {credentials.paragraph1}
                    </p>
                  )}
                  {credentials.paragraph2 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {credentials.paragraph2}
                    </p>
                  )}
                  {credentials.paragraph3 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-10">
                      {credentials.paragraph3}
                    </p>
                  )}
                </Reveal>
              )}

              {credentialItems.length > 0 && (
                <Reveal delay={80} className="flex flex-wrap justify-center gap-10 mb-10">
                  {credentialItems.map((cred, i) => (
                    <div key={i} className="flex items-center max-w-[280px]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-[#b8924a] rounded-[2px] flex items-center justify-center shrink-0">
                          <StarIcon />
                        </div>
                        <div>
                          {cred.title && (
                            <span className="block text-sm font-semibold text-[#3a2e28] mb-0.5">{cred.title}</span>
                          )}
                          {cred.subtitle && (
                            <span className="block text-xs font-normal text-[#7b6b5a] leading-[1.5]">
                              {cred.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                      {i < credentialItems.length - 1 && (
                        <div className="w-px h-10 bg-[#c8b8a2] ml-10 shrink-0 max-[900px]:hidden" />
                      )}
                    </div>
                  ))}
                </Reveal>
              )}

              {credentials.paragraph4 && (
                <Reveal delay={100}>
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-8">
                    {credentials.paragraph4}
                  </p>
                </Reveal>
              )}

              {credentials.quoteText && (
                <Reveal
                  delay={140}
                  className="bg-white rounded-[6px] p-7"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  <blockquote className="border-l-2 border-[#b8924a] pl-5 mb-4">
                    <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.7]">
                      &ldquo;{credentials.quoteText}&rdquo;
                    </p>
                  </blockquote>
                  {credentials.quoteName && (
                    <p className="text-[13px] font-semibold text-[#3a2e28]">{credentials.quoteName}</p>
                  )}
                  {credentials.quoteRole && (
                    <p className="text-[12px] font-normal text-[#7b6b5a] leading-[1.6]">{credentials.quoteRole}</p>
                  )}
                </Reveal>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Why She Founded Tan Jimenez Consulting */}
      {hasWhyFounded && whyFounded && (
        <section id="why-founded" className="scroll-mt-[68px]" style={{ background: "var(--linen)" }}>
          <Container className="py-20 max-[900px]:py-14">
            <div className="max-w-[1440px] mx-auto">
              <Reveal className="mb-10">
                {whyFounded.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {whyFounded.eyebrowText}
                  </p>
                )}
                {(whyFounded.heading || whyFounded.headingEmphasis) && (
                  <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                    {whyFounded.heading}{" "}
                    {whyFounded.headingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#b8924a]">
                        {whyFounded.headingEmphasis}
                      </em>
                    )}
                  </h2>
                )}
              </Reveal>

              {(whyFounded.paragraph1 || whyFounded.paragraph2 || whyFounded.paragraph3 || whyFounded.paragraph4) && (
                <Reveal delay={40}>
                  {whyFounded.paragraph1 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {whyFounded.paragraph1}
                    </p>
                  )}
                  {whyFounded.paragraph2 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {whyFounded.paragraph2}
                    </p>
                  )}
                  {whyFounded.paragraph3 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-5">
                      {whyFounded.paragraph3}
                    </p>
                  )}
                  {whyFounded.paragraph4 && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-10">
                      {whyFounded.paragraph4}
                    </p>
                  )}
                </Reveal>
              )}

              {whyFounded.quoteText && (
                <Reveal
                  delay={80}
                  className="bg-white rounded-[6px] p-7"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  <blockquote className="border-l-2 border-[#b8924a] pl-5 mb-4">
                    <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.7]">
                      &ldquo;{whyFounded.quoteText}&rdquo;
                    </p>
                  </blockquote>
                  {whyFounded.quoteName && (
                    <p className="text-[13px] font-semibold text-[#3a2e28]">{whyFounded.quoteName}</p>
                  )}
                  {whyFounded.quoteRole && (
                    <p className="text-[12px] font-normal text-[#7b6b5a] leading-[1.6]">{whyFounded.quoteRole}</p>
                  )}
                </Reveal>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* The Way Forward */}
      {hasWayForward && wayForward && (
        <section id="way-forward" className="scroll-mt-[68px]" style={{ background: "var(--forest)" }}>
          <Container className="py-20 max-[900px]:py-14">
            <div className="max-w-[1440px] mx-auto">
              <Reveal className="mb-10">
                {wayForward.eyebrowText && (
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                    {wayForward.eyebrowText}
                  </p>
                )}
                {(wayForward.heading || wayForward.headingEmphasis) && (
                  <h2 className="font-playfair text-[30px] font-semibold text-[#f0ebe0] leading-[1.25]">
                    {wayForward.heading}{" "}
                    {wayForward.headingEmphasis && (
                      <em className="font-cormorant italic font-semibold text-[#d4b06a]">
                        {wayForward.headingEmphasis}
                      </em>
                    )}
                  </h2>
                )}
              </Reveal>

              <Reveal delay={40}>
                {wayForward.subEyebrowText && (
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#b8924a] mb-3 font-medium">
                    {wayForward.subEyebrowText}
                  </p>
                )}
                {wayForward.paragraph1 && (
                  <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.85] mb-5">
                    {wayForward.paragraph1}
                  </p>
                )}
                {wayForward.paragraph2 && (
                  <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.85] mb-5">
                    {wayForward.paragraph2}
                  </p>
                )}
                {wayForward.paragraph3 && (
                  <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.85] mb-5">
                    {wayForward.paragraph3}
                  </p>
                )}
                {wayForward.paragraph4 && (
                  <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.85]">
                    {wayForward.paragraph4}
                  </p>
                )}
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* Signature quote */}
      {hasSignatureQuote && signatureQuote && (
        <section id="signature-quote" className="relative overflow-hidden scroll-mt-[68px]" style={{ background: "var(--midnight)" }}>
          <div
            className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 70% 50%, rgba(47,75,69,0.5) 0%, transparent 60%)",
            }}
          />
          <Container className="py-20 max-[900px]:py-14 relative">
            <Reveal>
              <span className="font-playfair font-semibold text-[44px] text-[#b8924a] block leading-[0.7] mb-4 opacity-30 select-none">
                &ldquo;
              </span>
              <p className="font-cormorant italic text-[26px] text-[#f0ebe0] leading-[1.7] mb-6">
                {signatureQuote.quoteText}
              </p>
              {(signatureQuote.attributionName || signatureQuote.attributionRole) && (
                <p className="text-[13px] font-semibold text-[rgba(240,235,224,0.7)]">
                  {signatureQuote.attributionName}
                  {signatureQuote.attributionName && signatureQuote.attributionRole && <br />}
                  {signatureQuote.attributionRole && (
                    <span className="font-normal text-[#b8924a]">{signatureQuote.attributionRole}</span>
                  )}
                </p>
              )}
            </Reveal>
          </Container>
        </section>
      )}

      {/* CTA strip */}
      {hasCta && cta && (
        <div id="cta" className="scroll-mt-[68px]" style={{ background: "var(--rose)" }}>
          <Container className="py-4 flex items-center justify-between gap-4 flex-wrap">
            <Reveal>
              {cta.heading && (
                <strong className="text-[26px] font-semibold font-playfair text-[#5a3535] block mb-0.5">
                  {cta.heading}
                </strong>
              )}
              {cta.description && (
                <p className="text-[14px] font-normal text-[#5a3535] leading-[1.5]">{cta.description}</p>
              )}
            </Reveal>

            {cta.buttonText && cta.buttonUrl && (
              <Reveal delay={40}>
                <a
                  href={cta.buttonUrl}
                  className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block whitespace-nowrap hover:bg-[#3a2e28] hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
                >
                  {cta.buttonText} →
                </a>
              </Reveal>
            )}
          </Container>
        </div>
      )}
    </>
  );
}
