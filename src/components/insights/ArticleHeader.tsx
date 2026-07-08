import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface ArticleHeaderProps {
  category?: string;
  title?: string;
  subtitle?: string;
  author?: string;
  readTime?: string;
}

export default function ArticleHeader({ category, title, subtitle, author, readTime }: ArticleHeaderProps) {
  return (
    <section style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="max-w-[720px] mx-auto">
          <Link
            href="/insights"
            className="text-xs font-medium tracking-[0.08em] uppercase text-[#b8924a] hover:text-white transition-colors inline-block mb-8"
          >
            ← Back to Insights
          </Link>

          {category && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-4 font-medium">{category}</p>
          )}
          {title && (
            <h1 className="font-playfair text-[32px] font-semibold text-[#f0ebe0] leading-[1.3] mb-4 max-[900px]:text-[26px]">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="font-cormorant italic font-semibold text-[19px] text-[rgba(212,176,106,0.8)] leading-[1.6] mb-6">
              {subtitle}
            </p>
          )}

          {(author || category || readTime) && (
            <div
              className="flex items-center gap-4 flex-wrap pt-5"
              style={{ borderTop: "0.5px solid rgba(240,235,224,0.1)" }}
            >
              {author && (
                <span className="text-[12px] font-normal text-[rgba(240,235,224,0.55)]">
                  By <strong className="font-medium text-[rgba(240,235,224,0.8)]">{author}</strong>
                </span>
              )}
              {category && (
                <span
                  className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#b8924a] px-2.5 py-1 rounded-[2px]"
                  style={{ background: "rgba(184,146,74,0.15)", border: "0.5px solid rgba(184,146,74,0.3)" }}
                >
                  {category}
                </span>
              )}
              {readTime && <span className="text-[11px] font-normal text-[rgba(240,235,224,0.35)]">{readTime}</span>}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
