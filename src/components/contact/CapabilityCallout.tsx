import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface CapabilityCalloutData {
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export default function CapabilityCallout({ data }: { data: CapabilityCalloutData | null }) {
  if (!data) return null;
  const hasButton = !!(data.buttonText && data.buttonUrl);
  if (!data.text && !hasButton) return null;

  return (
    <section style={{ background: "var(--forest)" }}>
      <Container className="py-12 max-[900px]:py-10">
        <Reveal
          className="why-card max-w-[820px] mx-auto rounded-[8px] p-8 flex items-center justify-between gap-6 flex-wrap max-[640px]:flex-col max-[640px]:items-start"
          style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
        >
          {data.text && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.8)] leading-[1.7] flex-1 min-w-[260px]">
              {data.text}
            </p>
          )}
          {hasButton && (
            <a
              href={data.buttonUrl}
              className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block whitespace-nowrap hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
            >
              {data.buttonText}
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
