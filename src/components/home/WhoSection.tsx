import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface WhoWeWorkWithData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  traits?: { text: string }[];
}

export default function WhoSection({ data }: { data: WhoWeWorkWithData | null }) {
  if (!data) return null;

  return (
    <section style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#f0ebe0] leading-[1.25] mb-4">
                {data.heading}
              </h2>
            )}
            {data.description && (
              <p className="text-[14px] font-normal text-[rgba(240,235,224,0.6)] leading-[1.85] mb-6">
                {data.description}
              </p>
            )}
            {data.buttonText && data.buttonUrl && (
              <a
                href={data.buttonUrl}
                className="text-sm font-medium tracking-[0.08em] uppercase text-[#b8924a] border-b border-[#b8924a] pb-0.5 inline-block hover:text-white hover:border-white hover:translate-x-1 transition-all duration-300"
              >
                {data.buttonText}
              </a>
            )}
          </Reveal>

          {data.traits && data.traits.length > 0 && (
            <div className="flex flex-col gap-3">
              {data.traits.map((trait, i) => (
                <Reveal
                  key={trait.text}
                  delay={i * 80}
                  className="flex items-center gap-4 rounded-[4px] px-5 py-3.5 hover:bg-[rgba(240,235,224,0.07)]"
                  style={{
                    background: "rgba(240,235,224,0.04)",
                    border: "0.5px solid rgba(240,235,224,0.1)",
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-[#b8924a] rounded-full shrink-0" />
                  <span className="text-[14px] font-normal text-[rgba(240,235,224,0.75)]">{trait.text}</span>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
