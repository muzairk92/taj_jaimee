import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface TestimonialItem {
  quote?: string;
  name?: string;
  title?: string;
  avatar?: { node?: { sourceUrl?: string; altText?: string } };
}

interface TestimonialsData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

export default function TestimonialsSection({ data }: { data: TestimonialsData | null }) {
  if (!data) return null;

  const testimonials = data.testimonials ?? [];

  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <Reveal>
          {data.eyebrowText && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 text-center font-medium">
              {data.eyebrowText}
            </p>
          )}
          {data.heading && (
            <h2 className="font-playfair text-[32px] font-semibold text-[#3a2e28] text-center leading-[1.2] mb-3">
              {data.heading}
            </h2>
          )}
          {data.description && (
            <p className="text-[14px] font-normal text-[#7b6b5a] text-center leading-[1.8] max-w-[600px] mx-auto mb-12">
              {data.description}
            </p>
          )}
        </Reveal>

        {testimonials.length > 0 && (
          <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
            {testimonials.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="bg-white rounded-[6px] p-8 flex flex-col hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(58,46,40,0.08)]"
                style={{ border: "0.5px solid var(--border)" }}
              >
                <span className="font-playfair text-[56px] text-[#b8924a] block leading-[0.7] mb-5 opacity-25 select-none">
                  &ldquo;
                </span>
                {t.quote && (
                  <p className="font-cormorant italic font-normal text-[18px] text-[#3a2e28] leading-[1.75] mb-7 flex-1">
                    {t.quote}
                  </p>
                )}
                <div className="flex items-center gap-3 pt-5 border-t border-[#c8b8a2]">
                  {t.avatar?.node?.sourceUrl ? (
                    <img
                      src={t.avatar.node.sourceUrl}
                      alt={t.avatar.node.altText ?? t.name ?? ""}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                      style={{ background: "var(--forest)", border: "1px solid rgba(184,146,74,0.3)" }}
                    >
                      <span className="font-playfair italic text-sm text-[#d4b06a]">
                        {t.name?.[0] ?? "—"}
                      </span>
                    </div>
                  )}
                  <div>
                    {t.name && <p className="text-sm font-semibold text-[#3a2e28]">{t.name}</p>}
                    {t.title && <p className="text-xs font-normal text-[#7b6b5a] mt-0.5">{t.title}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
