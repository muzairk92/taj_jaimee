import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { dummyPhoto } from "@/lib/dummyPhoto";

export interface TeamMemberNode {
  title?: string;
  slug?: string;
  teamMemberFields?: {
    role?: string;
    photo?: { node?: { sourceUrl?: string; altText?: string } };
  };
}

export default function TeamGrid({ members }: { members: TeamMemberNode[] }) {
  if (members.length === 0) return null;

  return (
    <section className="bg-white">
      <Container className="py-20 max-[900px]:py-14">
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, i) => (
            <Reveal
              key={member.slug ?? i}
              delay={i * 80}
              className="flex-1 min-w-[260px] max-w-[340px] rounded-[6px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(58,46,40,0.08)]"
              style={{ border: "0.5px solid var(--border)" }}
            >
              <Link href={`/team/${member.slug}`} className="flex flex-col">
                <div className="overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                  <img
                    src={member.teamMemberFields?.photo?.node?.sourceUrl ?? dummyPhoto(`team-${member.slug}`, 400, 500)}
                    alt={member.teamMemberFields?.photo?.node?.altText ?? member.title ?? ""}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  {member.title && (
                    <h3 className="font-playfair text-[18px] font-semibold text-[#3a2e28] mb-1">{member.title}</h3>
                  )}
                  {member.teamMemberFields?.role && (
                    <p className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#b8924a]">
                      {member.teamMemberFields.role}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
