import Container from "@/components/ui/Container";

interface FeatureCardsData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  cards?: { number: string; title: string; description: string }[];
}

export default function WhySection({ data }: { data: FeatureCardsData | null }) {
  if (!data) return null;

  return (
    <section id="about" style={{ background: "var(--linen)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {data.eyebrowText && (
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 text-center font-medium">
            {data.eyebrowText}
          </p>
        )}
        {data.heading && (
          <h2 className="font-playfair text-[32px] font-normal text-[#3a2e28] text-center leading-[1.2] mb-3">
            {data.heading}
          </h2>
        )}
        {data.description && (
          <p className="text-[15px] font-light text-[#7b6b5a] text-center leading-[1.8] max-w-[600px] mx-auto mb-12">
            {data.description}
          </p>
        )}

        {data.cards && data.cards.length > 0 && (
          <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
            {data.cards.map((card) => (
              <div
                key={card.number}
                className="why-card bg-white border border-[#c8b8a2] rounded-[6px] p-8 hover:shadow-[0_4px_28px_rgba(58,46,40,0.08)] transition-shadow"
              >
                <p className="font-playfair text-[13px] italic text-[#b8924a] mb-3">{card.number}</p>
                <h3 className="text-base font-semibold text-[#3a2e28] mb-3">{card.title}</h3>
                <p className="text-sm font-light text-[#7b6b5a] leading-[1.8]">{card.description}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
