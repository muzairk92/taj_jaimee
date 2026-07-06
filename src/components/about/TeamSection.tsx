import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface PartnerItem {
  initials?: string;
  photo?: { node?: { sourceUrl?: string; altText?: string } };
  name?: string;
  role?: string;
  bio?: string;
  quote?: string;
}

export interface TeamData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  description?: string;
  founderRole?: string;
  founderName?: string;
  founderPhoto?: { node?: { sourceUrl?: string; altText?: string } };
  founderBio?: string;
  founderQuote?: string;
  partners?: PartnerItem[];
}

export default function TeamSection({ data }: { data: TeamData | null }) {
  if (!data) return null;

  const partners = data.partners ?? [];
  const hasFounder = !!(data.founderName || data.founderRole || data.founderBio || data.founderQuote);
  const founderPhotoSrc = data.founderPhoto?.node?.sourceUrl ?? null;

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        {(data.eyebrowText || data.heading || data.headingEmphasis || data.description) && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h2 className="font-playfair text-[32px] font-semibold text-[#3a2e28] leading-[1.2] mb-3">
                {data.heading}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic text-[#b8924a]">{data.headingEmphasis}</em>
                )}
              </h2>
            )}
            {data.description && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[600px] mx-auto">
                {data.description}
              </p>
            )}
          </Reveal>
        )}

        {hasFounder && (
          <Reveal
            className="rounded-[10px] p-10 grid grid-cols-[0.85fr_1.15fr] gap-12 items-center mb-8 max-[900px]:grid-cols-1 max-[900px]:p-6 max-[900px]:gap-6"
            style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
          >
            <div
              className="rounded-[6px] flex items-center justify-center overflow-hidden max-[900px]:max-w-[220px] max-[900px]:mx-auto"
              style={{ aspectRatio: "4 / 5", background: "var(--forest)", border: "1px solid var(--gold)" }}
            >
              {founderPhotoSrc ? (
                <img
                  src={founderPhotoSrc}
                  alt={data.founderPhoto?.node?.altText ?? data.founderName ?? "Founder"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-playfair italic text-[48px] text-[#d4b06a]">
                  {data.founderName
                    ? data.founderName
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")
                    : "TJ"}
                </span>
              )}
            </div>
            <div>
              {data.founderRole && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.founderRole}
                </p>
              )}
              {data.founderName && (
                <h3 className="font-playfair text-[26px] font-semibold text-[#3a2e28] mb-4">
                  {data.founderName}
                </h3>
              )}
              {data.founderBio && (
                <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.85] mb-5">{data.founderBio}</p>
              )}
              {data.founderQuote && (
                <blockquote className="border-l-2 border-[#b8924a] pl-5">
                  <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.65]">
                    &ldquo;{data.founderQuote}&rdquo;
                  </p>
                </blockquote>
              )}
            </div>
          </Reveal>
        )}

        {partners.length > 0 && (
          <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
            {partners.map((partner, i) => {
              const photoSrc = partner.photo?.node?.sourceUrl ?? null;
              return (
                <Reveal
                  key={partner.name ?? i}
                  delay={i * 100}
                  className="rounded-[6px] p-8"
                  style={{ border: "0.5px solid var(--border)" }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                      style={{ background: "var(--forest)", border: "1px solid var(--gold)" }}
                    >
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={partner.photo?.node?.altText ?? partner.name ?? ""}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-playfair italic text-[18px] text-[#d4b06a]">
                          {partner.initials ?? ""}
                        </span>
                      )}
                    </div>
                    <div>
                      {partner.name && <p className="text-[16px] font-semibold text-[#3a2e28]">{partner.name}</p>}
                      {partner.role && (
                        <p className="text-[12px] font-semibold tracking-[0.04em] uppercase text-[#b8924a]">
                          {partner.role}
                        </p>
                      )}
                    </div>
                  </div>
                  {partner.bio && (
                    <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] mb-4">{partner.bio}</p>
                  )}
                  {partner.quote && (
                    <blockquote className="border-l-2 border-[#b8924a] pl-4">
                      <p className="font-cormorant italic font-semibold text-[15px] text-[#3a2e28] leading-[1.65]">
                        &ldquo;{partner.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
