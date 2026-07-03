import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface ServicesPillarsData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  pillars?: { label: string; title: string; description: string; linkText: string; linkUrl: string }[];
}

export default function ServicesSection({ data }: { data: ServicesPillarsData | null }) {
  if (!data) return null;

  return (
    <section id="services" style={{ background: "var(--linen)" }}>
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
            <p className="text-[14px] font-medium text-[#7b6b5a] text-center leading-[1.8] max-w-[600px] mx-auto mb-12">
              {data.description}
            </p>
          )}
        </Reveal>

        {data.pillars && data.pillars.length > 0 && (
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {data.pillars.map((pillar, i) => (
              <Reveal
                key={pillar.label}
                delay={i * 100}
                className="bg-white border border-[#c8b8a2] rounded-[6px] p-8 flex flex-col gap-4 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[#b8924a] rounded-full flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-[#b8924a] rounded-full" />
                  </div>
                  <span className="font-playfair italic text-[12px] font-semibold tracking-[0.14em] uppercase text-[#b8924a]">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#3a2e28] leading-[1.3]">{pillar.title}</h3>
                <p className="text-[14px] font-medium text-[#7b6b5a] leading-[1.8] flex-1">{pillar.description}</p>
                {pillar.linkText && pillar.linkUrl && (
                  <a
                    href={pillar.linkUrl}
                    className="text-xs font-semibold tracking-[0.1em] uppercase text-[#b8924a] inline-block mt-auto hover:text-[#3a2e28] hover:translate-x-1 transition-all duration-300"
                  >
                    {pillar.linkText}
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
