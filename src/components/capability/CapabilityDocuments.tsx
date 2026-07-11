import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface CapabilityDocument {
  title?: string;
  description?: string;
  fileType?: string;
  fileUrl?: string;
}

export interface CapabilityDocumentsData {
  eyebrowText?: string;
  heading?: string;
  documents?: CapabilityDocument[];
}

export default function CapabilityDocuments({ data }: { data: CapabilityDocumentsData | null }) {
  if (!data) return null;

  const documents = data.documents?.filter((doc) => doc.title || doc.fileUrl) ?? [];
  const hasHeader = !!(data.eyebrowText || data.heading);
  if (!hasHeader && documents.length === 0) return null;

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        {hasHeader && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25]">
                {data.heading}
              </h2>
            )}
          </Reveal>
        )}

        {documents.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {documents.map((doc, i) => (
              <Reveal
                key={doc.title ?? i}
                delay={i * 80}
                className="flex-1 min-w-[280px] max-w-[360px] rounded-[6px] p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
                style={{ border: "0.5px solid var(--border)" }}
              >
                <div className="flex items-center gap-3">
                  {doc.fileType && (
                    <div
                      className="w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0"
                      style={{ background: "var(--linen)", border: "1px solid var(--border)" }}
                    >
                      <span className="text-[10px] font-semibold tracking-[0.06em] text-[#b8924a]">
                        {doc.fileType}
                      </span>
                    </div>
                  )}
                  {doc.title && <h3 className="text-[15px] font-semibold text-[#3a2e28] leading-[1.3]">{doc.title}</h3>}
                </div>
                {doc.description && (
                  <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.75] flex-1">{doc.description}</p>
                )}
                {doc.fileUrl && (
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-[0.1em] uppercase text-[#b8924a] hover:text-[#3a2e28] transition-colors inline-flex items-center gap-1.5"
                  >
                    Download ↓
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
