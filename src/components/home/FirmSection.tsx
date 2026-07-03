import Container from "@/components/ui/Container";

interface FounderBioData {
  eyebrowText?: string;
  heading?: string;
  bioParagraph1?: string;
  bioParagraph2?: string;
  quote?: string;
  founderImage?: { node?: { sourceUrl?: string; altText?: string } };
  founderName?: string;
  founderTitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  structureItems?: { label: string; sublabel: string }[];
}

export default function FirmSection({ data }: { data: FounderBioData | null }) {
  if (!data) return null;

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Left — bio */}
          <div>
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {data.heading && (
              <h2 className="font-playfair text-[30px] font-semibold text-[#3a2e28] leading-[1.25] mb-5">
                {data.heading}
              </h2>
            )}
            {data.bioParagraph1 && (
              <p className="text-sm font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bioParagraph1}</p>
            )}
            {data.bioParagraph2 && (
              <p className="text-sm font-medium text-[#7b6b5a] leading-[1.85] mb-4">{data.bioParagraph2}</p>
            )}

            {data.quote && (
              <blockquote className="border-l-2 border-[#b8924a] pl-5 my-7">
                <p className="font-cormorant italic font-semibold text-[18px] text-[#3a2e28] leading-[1.65]">
                  {data.quote}
                </p>
                {(data.founderName || data.founderTitle) && (
                  <cite
                    className="block text-xs text-[#7b6b5a] mt-2 tracking-[0.04em]"
                    style={{ fontStyle: "normal" }}
                  >
                    — {[data.founderName, data.founderTitle].filter(Boolean).join(" · ")}
                  </cite>
                )}
              </blockquote>
            )}

            {data.buttonText && data.buttonUrl && (
              <a
                href={data.buttonUrl}
                className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-5 py-3 rounded-[2px] inline-block hover:bg-[#3a2e28] hover:text-white transition-colors"
              >
                {data.buttonText}
              </a>
            )}
          </div>

          {/* Right — structure diagram */}
          <div>
            <div
              className="rounded-[10px] p-8"
              style={{ background: "var(--linen)", border: "0.5px solid var(--border)" }}
            >
            

              {/* Founder box */}
              {(data.founderName || data.founderTitle) && (
                <div className="flex justify-center mb-5">
                  <div
                    className="rounded-[4px] px-8 py-3.5 text-center"
                    style={{ background: "var(--forest)", border: "1px solid var(--gold)" }}
                  >
                    {data.founderName && (
                      <span className="block text-sm font-semibold text-[#f0ebe0] mb-1">
                        {data.founderName}
                      </span>
                    )}
                    {data.founderTitle && (
                      <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#d4b06a]">
                        {data.founderTitle}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {data.structureItems && data.structureItems.length > 0 && (
                <>
                  <div className="flex justify-center mb-5">
                    <div className="w-px h-7" style={{ background: "rgba(184,146,74,0.35)" }} />
                  </div>

                  <div
                    className="grid gap-3 mb-5"
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(data.structureItems.length, 3)}, 1fr)`,
                    }}
                  >
                    {data.structureItems.map((item) => (
                      <div
                        key={item.label}
                        className="bg-white rounded-[4px] px-3 py-3.5 text-center"
                        style={{ border: "0.5px solid var(--border)" }}
                      >
                        <div
                          className="w-5 h-5 rounded-full mx-auto mb-2 flex items-center justify-center"
                          style={{ border: "1px solid rgba(184,146,74,0.45)" }}
                        >
                          <div className="w-1.5 h-1.5 bg-[#b8924a] rounded-full" />
                        </div>
                        <div className="text-[11px] font-semibold text-[#3a2e28] mb-1">{item.label}</div>
                        <div className="text-[10px] font-medium text-[#7b6b5a] leading-[1.5] whitespace-pre-line">
                          {item.sublabel}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Founder photo if provided by CMS */}
              {data.founderImage?.node?.sourceUrl && (
                <div className=" rounded-[4px] overflow-hidden">
                  <img
                    src={data.founderImage.node.sourceUrl}
                    alt={data.founderImage.node.altText ?? data.founderName ?? "Founder"}
                    className="w-full object-cover"
                    style={{ maxHeight: "auto" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
