import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface ResponsibleTechNoticeData {
  eyebrowText?: string;
  bodyText?: string;
}

export default function ResponsibleTechNotice({ data }: { data: ResponsibleTechNoticeData | null }) {
  if (!data) return null;

  return (
    <section style={{ background: "var(--forest)" }}>
      <Container className="py-16 max-[900px]:py-12">
        <Reveal
          className="why-card max-w-[820px] mx-auto text-center rounded-[8px] p-10 max-[900px]:p-7"
          style={{ background: "rgba(240,235,224,0.05)", border: "0.5px solid rgba(240,235,224,0.14)" }}
        >
          {data.eyebrowText && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-4 font-medium">
              {data.eyebrowText}
            </p>
          )}
          {data.bodyText && (
            <p className="text-[14px] font-normal text-[rgba(240,235,224,0.75)] leading-[1.85]">
              {data.bodyText}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
