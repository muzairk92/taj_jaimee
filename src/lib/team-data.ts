// Dummy placeholder data until Team Members are wired up as a WordPress CPT.
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  qualification: string;
  bio: string[];
  quote?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "sarah-lindqvist",
    name: "Sarah Lindqvist",
    role: "Senior Strategy Advisor",
    qualification: "MSc International Business, Copenhagen Business School",
    bio: [
      "Sarah leads strategic growth engagements across the energy and industrial sectors, with a focus on market entry and commercial due diligence.",
      "Prior to joining Tan Jimenez Consulting, she spent over a decade advising Nordic companies on cross-border expansion into APAC markets.",
    ],
    quote: "Clarity of strategy is what turns opportunity into execution.",
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    role: "Partnerships Director",
    qualification: "MBA, INSEAD",
    bio: [
      "Marcus builds and manages the firm's global partner ecosystem, connecting clients with vetted technology, talent and infrastructure partners.",
      "He has structured partnership agreements across Southeast Asia, the Middle East and Europe.",
    ],
    quote: "The right partnership can shortcut years of trial and error.",
  },
  {
    slug: "elena-andersen",
    name: "Elena Andersen",
    role: "Talent Advisory Lead",
    qualification: "BSc Organisational Psychology, University of Oslo",
    bio: [
      "Elena leads talent and organisation advisory work, helping growth-stage companies build leadership teams and workforce plans that scale.",
      "Her background spans recruitment, workforce planning and executive search across international markets.",
    ],
    quote: "Growth is only sustainable when the team behind it is built to last.",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
