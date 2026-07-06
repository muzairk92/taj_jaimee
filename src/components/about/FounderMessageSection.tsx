import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface FounderMessageData {
  messageText?: string;
  attribution?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export default function FounderMessageSection({ data }: { data: FounderMessageData | null }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden text-center" style={{ background: "var(--forest)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(47,75,69,0.6) 0%, transparent 70%)",
        }}
      />
      <Container className="py-24 max-[900px]:py-16 relative">
        <Reveal className="max-w-[720px] mx-auto">
          <span className="font-playfair text-[56px] text-[#b8924a] block leading-[0.7] mb-4 opacity-30 select-none">
            &ldquo;
          </span>
          {data.messageText && (
            <p className="font-cormorant italic font-semibold text-[20px] text-[#f0ebe0] leading-[1.7] mb-7">
              {data.messageText}
            </p>
          )}
          {data.attribution && (
            <p className="text-[13px] font-semibold tracking-[0.06em] text-[#d4b06a] mb-8">
              — {data.attribution}
            </p>
          )}
          {data.buttonText && data.buttonUrl && (
            <a
              href={data.buttonUrl}
              className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] inline-block hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
            >
              {data.buttonText}
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
