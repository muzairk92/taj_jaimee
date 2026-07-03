import Reveal from "@/components/ui/Reveal";

export interface HeroData {
  eyebrowText?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  backgroundImage?: { node?: { sourceUrl?: string; altText?: string } };
}

export default function HeroSection({ data }: { data: HeroData | null }) {
  if (!data) return null;

  const photoSrc = data.backgroundImage?.node?.sourceUrl ?? null;
  const photoAlt = data.backgroundImage?.node?.altText ?? data.heading ?? "";

  return (
    <section
      className="max-w-[1920px] mx-auto min-h-[600px] relative overflow-hidden flex items-center"
      style={{ background: "var(--midnight)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(47,75,69,0.4) 0%, transparent 65%)",
        }}
      />

      {/* Right side image overlay */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0">
        {photoSrc ? (
          <>
            <img
              src={photoSrc}
              alt={photoAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
            />
            {/* Gradient to fade the image into the dark background on the left */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #0b1f1c 0%, rgba(11,31,28,0.4) 30%, transparent 100%), linear-gradient(to top, rgba(11,31,28,0.7) 0%, transparent 40%)",
              }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{
              background: "linear-gradient(160deg, #1a3a34 0%, #0f2420 40%, #0b1f1c 100%)",
            }}
          >
            <div
              className="w-28 h-28 rounded-full border-2 border-[rgba(184,146,74,0.6)] flex items-center justify-center mb-2"
              style={{ background: "rgba(47,75,69,0.5)" }}
            >
              <span className="font-playfair italic text-[32px] text-[#d4b06a]">TJ</span>
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #0b1f1c 0%, rgba(11,31,28,0.4) 30%, transparent 100%)",
              }}
            />
          </div>
        )}
      </div>

      {/* Left — content */}
      <Reveal className="px-16 py-20 flex flex-col justify-center relative z-[2] w-full max-w-[60%] max-[1280px]:px-12 max-[900px]:px-6 max-[900px]:max-w-full max-[900px]:pt-24 max-[900px]:pb-20">
        {data.eyebrowText && (
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-5 font-medium">
            {data.eyebrowText}
          </p>
        )}

        <h1 className="font-playfair text-[42px] font-semibold text-[#f0ebe0] leading-[1.1] mb-3 max-[900px]:text-[30px]">
          {data.heading}
          {data.subheading && (
            <em
              className="font-cormorant block leading-[1.2] mt-2 text-[#d4b06a]"
              style={{ fontStyle: "italic", fontSize: "46px" }}
            >
              {data.subheading}
            </em>
          )}
        </h1>

        {data.description && (
          <p className="text-[14px] font-medium text-[rgba(240,235,224,0.65)] leading-[1.85] mb-8 max-w-[420px]">
            {data.description}
          </p>
        )}

        <div className="flex gap-3 items-center flex-wrap">
          {data.primaryButtonText && data.primaryButtonUrl && (
            <a
              href={data.primaryButtonUrl}
              className="bg-[#b8924a] text-[#0b1f1c] text-xs font-semibold tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-white hover:text-[#0b1f1c] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 inline-block"
            >
              {data.primaryButtonText}
            </a>
          )}
          {data.secondaryButtonText && data.secondaryButtonUrl && (
            <a
              href={data.secondaryButtonUrl}
              className="border border-[rgba(240,235,224,0.35)] text-[rgba(240,235,224,0.8)] text-xs tracking-[0.1em] uppercase px-6 py-3.5 rounded-[2px] hover:border-white hover:text-white hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 inline-block"
            >
              {data.secondaryButtonText}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
