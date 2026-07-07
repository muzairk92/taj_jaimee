import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface StrategyPillarData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  services?: { title?: string; body?: string }[];
}

export default function StrategyPillarDetail({ data }: { data: StrategyPillarData | null }) {
  if (!data) return null;
  const services = data.services?.filter((s) => s.title || s.body) ?? [];
  const hasContent = !!(data.eyebrowText || data.heading || data.description || services.length > 0);
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
      </Container>
    </section>
  );
}
