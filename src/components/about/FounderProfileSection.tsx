import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface FounderProfileData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  bodyParagraph1?: string;
  bodyParagraph2?: string;
  bodyParagraph3?: string;
  bodyParagraph4?: string;
  credentials?: { text: string }[];
  profilePhoto?: { node?: { sourceUrl?: string; altText?: string } };
  testimonialQuote?: string;
  testimonialAttribution1?: string;
  testimonialAttribution2?: string;
}

export default function FounderProfileSection({ data }: { data: FounderProfileData | null }) {
  if (!data) return null;

  const credentials = data.credentials ?? [];
  const photoSrc = data.profilePhoto?.node?.sourceUrl ?? null;
  const hasTestimonial = !!(data.testimonialQuote || data.testimonialAttribution1 || data.testimonialAttribution2);

  return (
    <section id="founder-profile" style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-5">
                {data.heading}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic text-[#b8924a]">{data.headingEmphasis}</em>
                )}
              </h2>
            )}
            {data.bodyParagraph1 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bodyParagraph1}</p>
            )}
            {data.bodyParagraph2 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bodyParagraph2}</p>
            )}
            {data.bodyParagraph3 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bodyParagraph3}</p>
            )}
            {data.bodyParagraph4 && (
              <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-6">{data.bodyParagraph4}</p>
            )}
            {credentials.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {credentials.map((credential) => (
                  <span
                    key={credential.text}
                    className="text-[13px] font-semibold text-[#3a2e28] bg-white rounded-[20px] px-4 py-2"
                    style={{ border: "0.5px solid var(--border)" }}
                  >
                    {credential.text}
                  </span>
                ))}
              </div>
            )}
          </Reveal>

          {(photoSrc || hasTestimonial) && (
            <Reveal delay={150}>
              {photoSrc && (
                <div
                  className="rounded-[8px] overflow-hidden mb-6"
                  style={{ aspectRatio: "4 / 5", border: "0.5px solid var(--border)" }}
                >
                  <img
                    src={photoSrc}
                    alt={data.profilePhoto?.node?.altText ?? "Founder"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {hasTestimonial && (
                <div className="rounded-[8px] p-7 bg-white" style={{ border: "0.5px solid var(--border)" }}>
                  {data.testimonialQuote && (
                    <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.7] mb-4">
                      &ldquo;{data.testimonialQuote}&rdquo;
                    </p>
                  )}
                  {(data.testimonialAttribution1 || data.testimonialAttribution2) && (
                    <p className="text-[13px] font-semibold text-[#7b6b5a] leading-[1.5]">
                      {data.testimonialAttribution1}
                      {data.testimonialAttribution1 && data.testimonialAttribution2 && <br />}
                      {data.testimonialAttribution2}
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
