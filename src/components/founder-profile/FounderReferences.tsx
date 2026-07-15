import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Testimonial {
  quote?: string;
  name?: string;
  title?: string;
  photo?: { node?: { sourceUrl?: string; altText?: string } };
}

interface TestimonialGroup {
  category?: string;
  intro?: string;
  testimonials?: Testimonial[];
}

export interface ReferencesData {
  eyebrowText?: string;
  heading?: string;
  pullQuote?: string;
  introText?: string;
  groups?: TestimonialGroup[];
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function FounderReferences({ data }: { data: ReferencesData | null }) {
  if (!data) return null;

  const groups = (data.groups ?? []).filter(
    (group) => group.category || group.intro || (group.testimonials && group.testimonials.length > 0)
  );
  const hasHeader = !!(data.eyebrowText || data.heading || data.pullQuote || data.introText);
  if (!hasHeader && groups.length === 0) return null;

  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {hasHeader && (
          <Reveal className="text-center mb-14 max-w-[720px] mx-auto">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-4">
                {data.heading}
              </h2>
            )}
            {data.pullQuote && (
              <p className="font-cormorant italic font-semibold text-[18px] text-[#b8924a] leading-[1.6] mb-4">
                {data.pullQuote}
              </p>
            )}
            {data.introText && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8]">{data.introText}</p>
            )}
          </Reveal>
        )}

        <div className="flex flex-col gap-14">
          {groups.map((group, gi) => {
            const testimonials = group.testimonials ?? [];
            return (
              <div key={group.category ?? gi}>
                {(group.category || group.intro) && (
                  <Reveal delay={gi * 40} className="max-w-[720px] mx-auto text-center mb-6">
                    {group.category && (
                      <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#3a2e28] mb-2">
                        {group.category}
                      </h3>
                    )}
                    {group.intro && (
                      <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8]">{group.intro}</p>
                    )}
                  </Reveal>
                )}

                {testimonials.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-6">
                    {testimonials.map((t, i) => (
                      <Reveal
                        key={t.name ?? i}
                        delay={i * 100}
                        className="flex-1 min-w-[320px] max-w-[480px] bg-white rounded-[6px] p-7"
                        style={{ border: "0.5px solid var(--border)" }}
                      >
                        {t.quote && (
                          <blockquote className="border-l-2 border-[#b8924a] pl-5 mb-5">
                            <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.7] line-clamp-[12]">
                              &ldquo;{t.quote}&rdquo;
                            </p>
                          </blockquote>
                        )}
                        {(t.name || t.title) && (
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                              style={{ background: "var(--forest)", border: "1px solid var(--gold)" }}
                            >
                              {t.photo?.node?.sourceUrl ? (
                                <img
                                  src={t.photo.node.sourceUrl}
                                  alt={t.photo.node.altText ?? t.name ?? ""}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="font-playfair italic text-[13px] text-[#d4b06a]">
                                  {t.name ? initials(t.name) : ""}
                                </span>
                              )}
                            </div>
                            <div>
                              {t.name && <p className="text-[13px] font-semibold text-[#3a2e28]">{t.name}</p>}
                              {t.title && (
                                <p className="text-[12px] font-normal text-[#7b6b5a] leading-[1.6]">{t.title}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
