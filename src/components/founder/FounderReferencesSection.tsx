import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Reference {
  person?: string;
  title?: string;
  context?: string;
  quote?: string;
  note?: string;
}

interface Category {
  label?: string;
  references?: Reference[];
}

export interface FounderReferencesData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  lead?: string;
  noteLabel?: string;
  noteBody?: string;
  categories?: Category[];
}

function ReferenceCard({ reference, delay }: { reference: Reference; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="bg-white rounded-[10px] overflow-hidden"
      style={{ border: "0.5px solid var(--border)" }}
    >
      <div className="p-4 px-6" style={{ background: "var(--forest)" }}>
        {reference.person && <div className="text-[14px] font-semibold text-[#f0ebe0] mb-1">{reference.person}</div>}
        {reference.title && (
          <div className="text-[11px] font-normal tracking-[0.06em] text-[#d4b06a]">{reference.title}</div>
        )}
        {reference.context && (
          <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[rgba(212,176,106,0.5)] mt-1.5">
            {reference.context}
          </div>
        )}
      </div>
      {reference.quote && (
        <div className="p-5 px-6">
          <span className="font-playfair font-semibold text-[36px] text-[#b8924a] block leading-[0.7] mb-3 opacity-[0.18] select-none">
            &ldquo;
          </span>
          <p className="font-cormorant italic font-semibold text-[16px] text-[#3a2e28] leading-[1.75]">
            {reference.quote}
          </p>
        </div>
      )}
      {reference.note && (
        <div
          className="px-6 py-3"
          style={{ background: "rgba(184,146,74,0.05)", borderTop: "0.5px solid rgba(184,146,74,0.12)" }}
        >
          <p className="text-[11px] font-normal italic text-[#7b6b5a] leading-[1.5]">{reference.note}</p>
        </div>
      )}
    </Reveal>
  );
}

export default function FounderReferencesSection({ data }: { data: FounderReferencesData | null }) {
  if (!data) return null;

  const categories = (data.categories ?? [])
    .map((c) => ({ label: c.label, refs: c.references?.filter((r) => r.person || r.quote) ?? [] }))
    .filter((c) => c.label || c.refs.length > 0);

  const hasHeader = !!(data.eyebrowText || data.heading || data.headingEmphasis || data.lead);
  const hasNote = !!(data.noteLabel || data.noteBody);

  const hasContent = hasHeader || hasNote || categories.length > 0;
  if (!hasContent) return null;

  return (
    <section id="references" className="scroll-mt-[68px] bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <div className="max-w-[1440px] mx-auto">
          {hasHeader && (
            <Reveal className="mb-10">
              {data.eyebrowText && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.eyebrowText}
                </p>
              )}
              {(data.heading || data.headingEmphasis) && (
                <h2 className="font-playfair text-[32px] font-semibold text-[#3a2e28] leading-[1.2] mb-4">
                  {data.heading}{" "}
                  {data.headingEmphasis && (
                    <em className="font-cormorant italic font-semibold text-[#b8924a]">{data.headingEmphasis}</em>
                  )}
                </h2>
              )}
              {data.lead && (
                <p className="font-cormorant italic font-semibold text-[#b8924a] text-[18px] leading-[1.6]">
                  {data.lead}
                </p>
              )}
            </Reveal>
          )}

          {hasNote && (
            <Reveal className="rounded-[8px] p-6 mb-10" style={{ background: "var(--midnight)" }}>
              {data.noteLabel && (
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] block mb-2">
                  {data.noteLabel}
                </span>
              )}
              {data.noteBody && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.65)] leading-[1.75]">
                  {data.noteBody}
                </p>
              )}
            </Reveal>
          )}

          {categories.map((category, ci) => (
            <div key={ci} className="mb-10">
              {category.label && (
                <Reveal>
                  <span
                    className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#b8924a] block mb-4 pb-2"
                    style={{ borderBottom: "0.5px solid var(--border)" }}
                  >
                    {category.label}
                  </span>
                </Reveal>
              )}
              {category.refs.length > 0 && (
                <div className="flex flex-col gap-4">
                  {category.refs.map((ref, i) => (
                    <ReferenceCard key={i} reference={ref} delay={i * 60} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
