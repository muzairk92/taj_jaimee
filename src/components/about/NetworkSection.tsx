import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface NetworkMember {
  initials?: string;
  name?: string;
  role?: string;
  bio?: string;
}

export interface AdvisoryNetworkData {
  eyebrowText?: string;
  heading?: string;
  headingEmphasis?: string;
  networkQuote?: string;
  networkMembers?: NetworkMember[];
}

export default function NetworkSection({ data }: { data: AdvisoryNetworkData | null }) {
  if (!data) return null;

  const members = data.networkMembers ?? [];

  return (
    <section style={{ background: "var(--midnight)" }}>
      <Container className="py-20 max-[900px]:py-14">
        {(data.eyebrowText || data.heading || data.headingEmphasis) && (
          <Reveal className="text-center mb-10">
            {data.eyebrowText && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">
                {data.eyebrowText}
              </p>
            )}
            {(data.heading || data.headingEmphasis) && (
              <h2 className="font-playfair text-[32px] font-semibold text-[#f0ebe0] leading-[1.2]">
                {data.heading}
                {data.headingEmphasis && (
                  <em className="font-cormorant italic text-[#d4b06a]">{data.headingEmphasis}</em>
                )}
              </h2>
            )}
          </Reveal>
        )}

        {data.networkQuote && (
          <Reveal delay={100} className="max-w-[760px] mx-auto text-center mb-12">
            <p className="font-cormorant italic font-semibold text-[18px] text-[rgba(240,235,224,0.85)] leading-[1.7]">
              &ldquo;{data.networkQuote}&rdquo;
            </p>
          </Reveal>
        )}

        {members.length > 0 && (
          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
            {members.map((member, i) => (
              <Reveal
                key={member.name ?? i}
                delay={i * 100}
                className="rounded-[6px] p-7"
                style={{ background: "rgba(240,235,224,0.04)", border: "0.5px solid rgba(240,235,224,0.12)" }}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--forest)", border: "1px solid rgba(184,146,74,0.4)" }}
                  >
                    <span className="font-playfair italic text-sm text-[#d4b06a]">{member.initials ?? ""}</span>
                  </div>
                  <div>
                    {member.name && (
                      <p className="text-[15px] font-semibold text-[#f0ebe0] leading-[1.3]">{member.name}</p>
                    )}
                    {member.role && (
                      <p className="text-[11px] font-medium text-[#d4b06a] leading-[1.4]">{member.role}</p>
                    )}
                  </div>
                </div>
                {member.bio && (
                  <p className="text-[13px] font-normal text-[rgba(240,235,224,0.62)] leading-[1.75]">
                    {member.bio}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
