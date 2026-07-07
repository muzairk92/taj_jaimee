import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { withReferral } from "@/lib/referral";

interface PartnerItem {
  name?: string;
  website?: string;
  tagline?: string;
  body?: { paragraph?: string }[];
  bestSuitedFor?: { tag?: string }[];
}

export interface DirectoryData {
  eyebrowText?: string;
  heading?: string;
  partners?: PartnerItem[];
}

function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function PartnerDirectory({ data }: { data: DirectoryData | null }) {
  if (!data) return null;

  const partners = data.partners ?? [];

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        {(data.eyebrowText || data.heading) && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[28px] font-semibold text-[#3a2e28] leading-[1.3] max-w-[720px] mx-auto">
                {data.heading}
              </h2>
            )}
          </Reveal>
        )}

        {partners.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, i) => {
              const bestSuitedFor = partner.bestSuitedFor?.filter((item) => item.tag) ?? [];
              const body = partner.body?.filter((item) => item.paragraph) ?? [];

              return (
                <Reveal
                  key={partner.name ?? i}
                  delay={i * 60}
                  className="flex-1 min-w-[420px] max-w-[640px] rounded-[8px] p-8"
                  style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
                >
                  {(partner.name || partner.tagline) && (
                    <div className="flex items-center gap-4 mb-4">
                      {partner.name && (
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: "var(--forest)", border: "1px solid var(--gold)" }}
                        >
                          <span className="font-playfair italic text-[16px] text-[#d4b06a]">
                            {initialsOf(partner.name)}
                          </span>
                        </div>
                      )}
                      {partner.name && (
                        <h3 className="font-playfair text-[20px] font-semibold text-[#3a2e28] leading-[1.3]">
                          {partner.name}
                        </h3>
                      )}
                    </div>
                  )}

                  {partner.tagline && (
                    <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#b8924a] mb-4">
                      {partner.tagline}
                    </p>
                  )}

                  {body.map((item, idx) => (
                    <p key={idx} className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] mb-3 last:mb-0">
                      {item.paragraph}
                    </p>
                  ))}

                  {partner.website && (
                    <a
                      href={withReferral(partner.website)}
                      target="_blank"
                      rel="noopener"
                      className="inline-block text-sm font-medium tracking-[0.08em] uppercase text-[#b8924a] border-b border-[#b8924a] pb-0.5 mt-5 hover:text-[#3a2e28] hover:border-[#3a2e28] hover:translate-x-1 transition-all duration-300"
                    >
                      Visit Website ↗
                    </a>
                  )}

                  {bestSuitedFor.length > 0 && (
                    <div className="mt-5 pt-5" style={{ borderTop: "0.5px solid var(--border)" }}>
                      <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#7b6b5a] mb-3">
                        Best suited for
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {bestSuitedFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[12px] font-medium text-[#3a2e28] bg-white rounded-[20px] px-3 py-1.5"
                            style={{ border: "0.5px solid var(--border)" }}
                          >
                            {item.tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
