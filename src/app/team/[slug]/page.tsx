import { notFound } from "next/navigation";
import client from "@/lib/apollo/client";
import { GET_TEAM_MEMBER } from "@/lib/graphql/team.queries";
import TeamMemberProfile, { type TeamMemberData } from "@/components/team/TeamMemberProfile";
import CtaSection from "@/components/shared/CtaSection";

async function fetchTeamMember(slug: string): Promise<TeamMemberData | null> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return null;
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
  const fetch = client
    .query({ query: GET_TEAM_MEMBER, variables: { slug }, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.teamMember ?? null)
    .catch(() => null);
  return Promise.race([fetch, timeout]);
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = await fetchTeamMember(slug);

  if (!member) notFound();

  return (
    <main>
      <TeamMemberProfile member={member} />
      <CtaSection
        data={{
          eyebrowText: "Want to Work With Us?",
          heading: `Start a Conversation with ${member.title}`,
          description: "Reach out to discuss your growth priorities and how we can help.",
          primaryButtonText: "Start a Conversation",
          primaryButtonUrl: "mailto:hello@tanjimenezconsulting.com",
        }}
      />
    </main>
  );
}
