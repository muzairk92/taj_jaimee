import Container from "@/components/ui/Container";

interface PartnerItem {
  logo?: { node?: { sourceUrl?: string; altText?: string } };
  name?: string;
}

interface PartnerEcosystemData {
  eyebrowText?: string;
  heading?: string;
  description?: string;
  partnerLogos?: PartnerItem[];
  buttonText?: string;
  buttonUrl?: string;
}

function PartnerCard({ partner }: { partner: PartnerItem }) {
  return (
    <div
      className="rounded-[6px] px-4 py-6 text-center flex flex-col items-center gap-3 hover:bg-[rgba(240,235,224,0.1)] transition-colors cursor-default"
      style={{
        background: "rgba(240,235,224,0.05)",
        border: "1px solid rgba(240,235,224,0.12)",
      }}
    >
      {partner.logo?.node?.sourceUrl ? (
        <img
          src={partner.logo.node.sourceUrl}
          alt={partner.logo.node.altText ?? partner.name ?? "Partner"}
          className="h-10 w-auto object-contain opacity-70"
        />
      ) : (
        <div
          className="w-10 h-10 rounded-[2px] flex items-center justify-center"
          style={{ background: "rgba(184,146,74,0.15)", border: "1px solid rgba(184,146,74,0.25)" }}
        >
          <div className="w-3 h-3 rounded-full bg-[rgba(184,146,74,0.6)]" />
        </div>
      )}
      {partner.name && (
        <span className="text-sm font-medium text-[rgba(240,235,224,0.85)] text-center leading-[1.4]">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function PartnersSection({ data }: { data: PartnerEcosystemData | null }) {
  if (!data) return null;

  const partners = data.partnerLogos ?? [];
  const half = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, half);
  const row2 = partners.slice(half);

  return (
    <section id="partners" style={{ background: "var(--forest)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {data.eyebrowText && (
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 text-center font-medium">
            {data.eyebrowText}
          </p>
        )}
        {data.heading && (
          <h2 className="font-playfair text-[32px] font-normal text-[#f0ebe0] text-center leading-[1.2] mb-3">
            {data.heading}
          </h2>
        )}
        {data.description && (
          <p className="text-[15px] font-light text-[rgba(240,235,224,0.55)] text-center leading-[1.8] max-w-[600px] mx-auto mb-12">
            {data.description}
          </p>
        )}

        {row1.length > 0 && (
          <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: `repeat(${row1.length}, 1fr)` }}>
            {row1.map((p, i) => <PartnerCard key={i} partner={p} />)}
          </div>
        )}
        {row2.length > 0 && (
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${row2.length}, 1fr)` }}>
            {row2.map((p, i) => <PartnerCard key={i} partner={p} />)}
          </div>
        )}

        {data.buttonText && data.buttonUrl && (
          <div className="text-center mt-10">
            <a
              href={data.buttonUrl}
              className="border-2 border-[#b8924a] text-[#b8924a] text-sm font-semibold tracking-[0.1em] uppercase px-8 py-3.5 rounded-[2px] inline-block hover:bg-[#b8924a] hover:text-[#0b1f1c] transition-all"
            >
              {data.buttonText} →
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
