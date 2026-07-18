import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Testimonial {
  quote?: string;
  name?: string;
  role?: string;
  context?: string;
}

export interface StrategyPillarData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  services?: { title?: string; body?: string }[];
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

export default function StrategyPillarDetail({ data }: { data: StrategyPillarData | null }) {
  if (!data) return null;
  const services = data.services?.filter((s) => s.title || s.body) ?? [];
  const testimonials = data.testimonials?.filter((t) => t.quote || t.name) ?? [];
  const hasTestimonialsHeader = !!(data.testimonialsHeading || data.testimonialsIntro);
  const hasContent = !!(
    data.eyebrowText ||
    data.heading ||
    data.description ||
    services.length > 0 ||
    hasTestimonialsHeader ||
    testimonials.length > 0
  );
  if (!hasContent) return null;

  return (
    <section id="strategy-advisory" className="bg-white scroll-mt-[68px]">
      <Container className="py-20 max-[900px]:py-14">
        {(data.eyebrowText || data.heading || data.description) && (
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

        {services.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5">
            {services.map((service, i) => (
              <Reveal
                key={service.title ?? i}
                delay={i * 70}
                className="flex-1 min-w-[280px] max-w-[360px] border border-[#c8b8a2] rounded-[6px] p-6 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
                style={{ background: "var(--linen)" }}
              >
                {service.title && <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{service.title}</h3>}
                {service.body && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75]">{service.body}</p>
                )}
              </Reveal>
            ))}
          </div>
        )}

        {hasTestimonialsHeader && (
          <Reveal className="text-center mb-10 mt-14">
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
