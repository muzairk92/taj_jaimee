import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface ArticleCloserProps {
  text?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function ArticleCloser({ text, ctaText, ctaUrl }: ArticleCloserProps) {
  const hasButton = !!(ctaText && ctaUrl);
  if (!text && !hasButton) return null;

  return (
    <section style={{ background: "var(--forest)" }}>
      <Container className="py-12 max-[900px]:py-10">
        <Reveal className="max-w-[720px] mx-auto flex items-center justify-between gap-6 flex-wrap max-[640px]:flex-col max-[640px]:items-start">
          {text && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.7] flex-1 min-w-[240px]">
              {text}
            </p>
          )}
          {hasButton && (
            <a
              href={ctaUrl}
              className="border border-[#b8924a] text-[#b8924a] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3 rounded-[2px] inline-block whitespace-nowrap hover:bg-[#b8924a] hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
            >
              {ctaText}
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
