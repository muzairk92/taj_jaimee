import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export interface ValuesData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  description?: string;
  valueItems?: { title: string; body: string }[];
}

export default function ValuesSection({ data }: { data: ValuesData | null }) {
  if (!data) return null;

  const valueItems = data.valueItems ?? [];

  return (
    <section style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {(data.eyebrowText || data.heading || data.headingEmphasis || data.description) && (
          <Reveal className="text-center mb-12">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h2 className="font-playfair text-[32px] font-semibold text-[#3a2e28] leading-[1.2] mb-3">
                {data.heading}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic text-[#b8924a]">{data.headingEmphasis}</em>
                )}
              </h2>
            )}
            {data.description && (
              <p className="text-[14px] font-normal text-[#7b6b5a] leading-[1.8] max-w-[600px] mx-auto">
                {data.description}
              </p>
            )}
          </Reveal>
        )}

        {valueItems.length > 0 && (
          <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {valueItems.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 80}
                className="bg-white border border-[#c8b8a2] rounded-[6px] p-6 text-center hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)]"
              >
                <div className="w-9 h-9 border border-[#b8924a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-[#b8924a] rounded-full" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#3a2e28] mb-2">{value.title}</h3>
                <p className="text-[13px] font-normal text-[#7b6b5a] leading-[1.6]">{value.body}</p>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
