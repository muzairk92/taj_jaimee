import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface TechPillarData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  serviceTitle?: string;
  bodyParagraph1?: string;
  bodyParagraph2?: string;
  bodyParagraph3?: string;
  bodyParagraph4?: string;
}

export default function TechPillarDetail({ data }: { data: TechPillarData | null }) {
  if (!data) return null;

  const hasHeader = !!(data.eyebrowText || data.heading || data.description);
  const hasService = !!(
    data.serviceTitle ||
    data.bodyParagraph1 ||
    data.bodyParagraph2 ||
    data.bodyParagraph3 ||
    data.bodyParagraph4
  );
  if (!hasHeader && !hasService) return null;

  return (
    <section id="tech-solutions" style={{ background: "var(--forest)" }} className="scroll-mt-[68px]">
      <Container className="py-20 max-[900px]:py-14">
        <Reveal className="max-w-[720px] mx-auto text-center">
          {hasHeader && (
            <>
              {data.eyebrowText && (
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                  {data.eyebrowText}
                </p>
              )}
              {data.heading && (
                <h2 className="font-playfair text-[30px] font-semibold text-[#f0ebe0] leading-[1.25] mb-3">
                  {data.heading}
                </h2>
              )}
              {data.description && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.8] mb-10">
                  {data.description}
                </p>
              )}
            </>
          )}

          {hasService && (
            <div
              className="why-card rounded-[6px] p-8 text-left"
              style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
            >
              {data.serviceTitle && <h3 className="text-[17px] font-semibold text-[#f0ebe0] mb-4">{data.serviceTitle}</h3>}
              {data.bodyParagraph1 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4">
                  {data.bodyParagraph1}
                </p>
              )}
              {data.bodyParagraph2 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4">
                  {data.bodyParagraph2}
                </p>
              )}
              {data.bodyParagraph3 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4">
                  {data.bodyParagraph3}
                </p>
              )}
              {data.bodyParagraph4 && (
                <p className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85]">
                  {data.bodyParagraph4}
                </p>
              )}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
