import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Testimonial {
  quote?: string;
  name?: string;
  role?: string;
  context?: string;
}

export interface TalentPillarData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  serviceTitle?: string;
  serviceBody?: string;
  bioParagraph1?: string;
  bioParagraph2?: string;
  bioParagraph3?: string;
  testimonialsHeading?: string;
  testimonialsIntro?: string;
  testimonials?: Testimonial[];
}

function QuoteCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="flex-1 min-w-[320px] max-w-[440px] bg-white rounded-[6px] p-7 flex flex-col hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(58,46,40,0.08)]"
      style={{ border: "0.5px solid var(--border)" }}
    >
      <span className="font-playfair text-[44px] text-[#b8924a] block leading-[0.7] mb-4 opacity-25 select-none">
        &ldquo;
      </span>
      {testimonial.quote && (
        <p className="font-cormorant italic font-normal text-[16px] text-[#3a2e28] leading-[1.75] mb-6 flex-1">
          {testimonial.quote}
        </p>
      )}
      {(testimonial.name || testimonial.role || testimonial.context) && (
        <div className="pt-4" style={{ borderTop: "1px solid #c8b8a2" }}>
          {testimonial.name && <p className="text-sm font-semibold text-[#3a2e28]">{testimonial.name}</p>}
          {testimonial.role && <p className="text-xs font-medium text-[#7b6b5a] mt-0.5">{testimonial.role}</p>}
          {testimonial.context && (
            <p className="text-[11px] font-normal text-[#7b6b5a] mt-1 italic">{testimonial.context}</p>
          )}
        </div>
      )}
    </Reveal>
  );
}

export default function TalentPillarDetail({ data }: { data: TalentPillarData | null }) {
  if (!data) return null;

  const testimonials = data.testimonials?.filter((t) => t.quote || t.name) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading || data.description);
  const hasService = !!(data.serviceTitle || data.serviceBody || data.bioParagraph1 || data.bioParagraph2 || data.bioParagraph3);
  const hasTestimonialsHeader = !!(data.testimonialsHeading || data.testimonialsIntro);
  const hasContent = hasHeader || hasService || hasTestimonialsHeader || testimonials.length > 0;
  if (!hasContent) return null;

  return (
    <section id="talent-advisory" style={{ background: "var(--linen)" }} className="scroll-mt-[68px]">
      <Container className="py-20 max-[900px]:py-14">
        {hasHeader && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-3 max-w-[680px] mx-auto">
                {data.heading}
              </h2>
            )}
            {data.description && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[640px] mx-auto">
                {data.description}
              </p>
            )}
          </Reveal>
        )}

        {hasService && (
          <Reveal
            delay={100}
            className="max-w-[760px] mx-auto bg-white rounded-[6px] p-8 mb-14"
            style={{ border: "0.5px solid var(--border)" }}
          >
            {data.serviceTitle && <h3 className="text-[17px] font-semibold text-[#3a2e28] mb-3">{data.serviceTitle}</h3>}
            {data.serviceBody && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] mb-6">{data.serviceBody}</p>
            )}
            {data.bioParagraph1 && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-4">{data.bioParagraph1}</p>
            )}
            {data.bioParagraph2 && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85] mb-4">{data.bioParagraph2}</p>
            )}
            {data.bioParagraph3 && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.85]">{data.bioParagraph3}</p>
            )}
          </Reveal>
        )}

        {hasTestimonialsHeader && (
          <Reveal className="text-center mb-10">
            {data.testimonialsHeading && (
              <h3 className="font-playfair text-[24px] font-semibold text-[#3a2e28] leading-[1.3] mb-3 max-w-[680px] mx-auto">
                {data.testimonialsHeading}
              </h3>
            )}
            {data.testimonialsIntro && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[640px] mx-auto">
                {data.testimonialsIntro}
              </p>
            )}
          </Reveal>
        )}

        {testimonials.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, i) => (
              <QuoteCard key={testimonial.name ?? i} testimonial={testimonial} delay={i * 80} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
