/** Shared copy for the About Us page */

export const ABOUT_INTRO = {
  title: "About Us",
  eyebrow: "Who we are",
  lead:
    "Irenic Events partners with you to create immersive events that engage, inspire, and connect. Together, we craft unforgettable experiences that leave a lasting impact.",
  paragraphs: [
    "We stand at the forefront of experiential event management, operating globally to transform creative concepts into tangible, unforgettable realities. From conferences and congresses to launches and exhibitions, we align creative ambition with operational rigor.",
    "We are more than planners — we are strategic partners dedicated to understanding your objectives and driving sustainable value. Our holistic approach combines meticulous planning, seamless execution, and a focus on relationships built through shared experiences.",
  ],
};

/** What Irenic brings to customers — tangible value props */
export const CUSTOMER_VALUES = [
  {
    title: "Strategic clarity",
    description:
      "We translate business goals into a clear event narrative, run-of-show, and success metrics before a single build hour is booked.",
  },
  {
    title: "End-to-end ownership",
    description:
      "One accountable team across creative, production, vendors, and on-site showcalling — fewer handoffs, fewer surprises.",
  },
  {
    title: "Global delivery",
    description:
      "Consistent quality across regions through vetted partners, documented playbooks, and senior leads on the ground.",
  },
  {
    title: "Audience-first design",
    description:
      "Flows, content, and environments are designed around how people actually move, learn, and connect — not just how stages look.",
  },
  {
    title: "Risk-aware execution",
    description:
      "Contingencies for power, comms, crowd, and content are built in, so your leadership team can focus on stakeholders, not firefighting.",
  },
  {
    title: "Lasting assets",
    description:
      "Recordings, recap content, and data summaries extend the value of the live moment into marketing, L&D, and follow-up campaigns.",
  },
] as const;

export const CAPABILITIES_MARQUEE = [
  "Experiential Production",
  "Event Branding & Identity",
  "MICE & Congress Programs",
  "Live Production & Staging",
  "Content & Storytelling",
  "Exhibition Design",
  "Analytics & Reporting",
  "Hybrid & Digital Extensions",
] as const;

export const ORG_PILLARS = [
  {
    title: "Mission",
    body: "We exist to transform ordinary briefs into extraordinary experiences. Our goal is to help brands create moments people don’t just attend — they remember. From emerging names to global enterprises, we craft meaningful connections.",
  },
  {
    title: "Vision",
    body: "We strive to redefine live and hybrid events through creativity, precision, and technology — building immersive, seamless programs that connect audiences and amplify your message.",
  },
  {
    title: "Impact",
    body: "From regional launches to worldwide congresses, we empower teams to host unforgettable events. Strategy, production, and innovation come together so every program drives engagement and lasting value.",
  },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alexandra Reed",
    role: "Chief Operating Officer",
    bio: "Leads delivery operations and client governance across multi-market programs. Former agency-side producer for Fortune 500 conferences.",
  },
  {
    name: "Marcus Chen",
    role: "Experiential Design Lead",
    bio: "Shapes narrative, spatial, and digital layers of each experience. Background in scenography and interactive brand environments.",
  },
  {
    name: "Priya Nair",
    role: "Operations Director",
    bio: "Owns vendor networks, budgets, and on-site logistics. Specialist in high-complexity congress and exhibition builds.",
  },
  {
    name: "James Okonkwo",
    role: "Senior Creative Consultant",
    bio: "Partners with clients on messaging, content arcs, and keynote support. Bridges brand teams and production crews.",
  },
  {
    name: "Sofia Martins",
    role: "Head of Client Strategy",
    bio: "Aligns event KPIs with marketing and sales goals. Designs measurement frameworks and post-event reporting.",
  },
  {
    name: "Daniel Kim",
    role: "Technical Production Manager",
    bio: "Oversees AV, broadcast, and hybrid integrations. Ensures redundancy and broadcast-grade reliability for live moments.",
  },
];
