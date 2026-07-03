import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface IndustriesData {
  eyebrowText?: string;
  heading?: string;
  industries?: { label: string }[];
  buttonText?: string;
  buttonUrl?: string;
}

export default function IndustriesSection({ data }: { data: IndustriesData | null }) {
  if (!data) return null;

  const industries = data.industries ?? [];

  return (
    <section style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <Reveal>
          {data.eyebrowText && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 text-center font-medium">
              {data.eyebrowText}
            </p>
          )}
          {data.heading && (
            <h2 className="font-playfair text-[32px] font-semibold text-[#f0ebe0] text-center leading-[1.2] mb-10">
              {data.heading}
            </h2>
          )}
        </Reveal>

        {industries.length > 0 && (
          <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal
                key={industry.label}
                delay={i * 60}
                className="rounded-[6px] px-4 py-6 text-center hover:bg-[rgba(240,235,224,0.09)] hover:-translate-y-1"
                style={{
                  background: "rgba(240,235,224,0.04)",
                  border: "0.5px solid rgba(240,235,224,0.1)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "rgba(184,146,74,0.15)", border: "1px solid rgba(184,146,74,0.3)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[rgba(184,146,74,0.7)]" />
                </div>
                <p className="text-sm font-medium text-[rgba(240,235,224,0.85)] leading-[1.5]">
                  {industry.label}
                </p>
              </Reveal>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          {data.buttonText && data.buttonUrl && (
            <a
              href={data.buttonUrl}
              className="border-2 border-[#b8924a] text-[#b8924a] text-sm font-semibold tracking-[0.1em] uppercase px-8 py-3.5 rounded-[2px] inline-block hover:bg-[#b8924a] hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
            >
              {data.buttonText}
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
