import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { dummyPhoto } from "@/lib/dummyPhoto";

export interface TeamMemberData {
  title?: string;
  slug?: string;
  teamMemberFields?: {
    role?: string;
    qualification?: string;
    quote?: string;
    bioParagraphs?: { text?: string }[];
    photo?: { node?: { sourceUrl?: string; altText?: string } };
  };
}

export default function TeamMemberProfile({ member }: { member: TeamMemberData }) {
  const fields = member.teamMemberFields ?? {};
  const bio = fields.bioParagraphs?.filter((p) => p.text) ?? [];
  const photoSrc = fields.photo?.node?.sourceUrl ?? dummyPhoto(`team-${member.slug}`, 480, 600);

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--midnight)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(184,146,74,0.16) 0%, transparent 60%)",
        }}
      />
      <Container className="py-24 max-[900px]:py-16 relative">
        <Link
          href="/team"
          className="text-xs font-medium tracking-[0.08em] uppercase text-[#b8924a] hover:text-white transition-colors inline-block mb-10"
        >
          ← Back to Team
        </Link>

        <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <Reveal>
            <div
              className="rounded-[8px] overflow-hidden max-[900px]:max-w-[280px] max-[900px]:mx-auto"
              style={{ aspectRatio: "4 / 5", border: "1px solid var(--gold)" }}
            >
              <img
                src={photoSrc}
                alt={fields.photo?.node?.altText ?? member.title ?? ""}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            {fields.role && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#b8924a] mb-3 font-medium">{fields.role}</p>
            )}
            {member.title && (
              <h1 className="font-playfair text-[32px] font-semibold text-[#f0ebe0] leading-[1.25] mb-3 max-[900px]:text-[26px]">
                {member.title}
              </h1>
            )}
            {fields.qualification && (
              <p className="text-[13px] font-medium text-[rgba(212,176,106,0.8)] mb-6">{fields.qualification}</p>
            )}
            {bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-[14px] font-normal text-[rgba(240,235,224,0.7)] leading-[1.85] mb-4 last:mb-0"
              >
                {paragraph.text}
              </p>
            ))}
            {fields.quote && (
              <blockquote className="border-l-2 border-[#b8924a] pl-5 mt-6">
                <p className="font-cormorant italic font-semibold text-[18px] text-[#d4b06a] leading-[1.65]">
                  &ldquo;{fields.quote}&rdquo;
                </p>
              </blockquote>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
