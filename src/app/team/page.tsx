import client from "@/lib/apollo/client";
import { GET_ALL_TEAM_MEMBERS } from "@/lib/graphql/team.queries";
import TeamListHero from "@/components/team/TeamListHero";
import TeamGrid, { type TeamMemberNode } from "@/components/team/TeamGrid";
import CtaSection from "@/components/shared/CtaSection";

async function fetchTeamMembers(): Promise<TeamMemberNode[]> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) return [];
  const timeout = new Promise<[]>((resolve) => setTimeout(() => resolve([]), 3000));
  const fetch = client
    .query({ query: GET_ALL_TEAM_MEMBERS, fetchPolicy: "no-cache" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(({ data }) => (data as any)?.teamMembers?.edges?.map((edge: any) => edge.node) ?? [])
    .catch(() => []);
  return Promise.race([fetch, timeout]);
}

export default async function TeamPage() {
  const members = await fetchTeamMembers();

  return (
    <main>
      <TeamListHero />
      <TeamGrid members={members} />
      <CtaSection
        data={{
          eyebrowText: "Want to Work With Us?",
          heading: "Meet the Team on Your Next Engagement",
          description: "Reach out to discuss which advisor is the right fit for your growth priorities.",
          primaryButtonText: "Start a Conversation",
          primaryButtonUrl: "mailto:hello@tanjimenezconsulting.com",
        }}
      />
    </main>
  );
}
