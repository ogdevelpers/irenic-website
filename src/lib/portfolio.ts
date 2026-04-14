/** Portfolio taxonomy — matches listing filters */
export type PortfolioCategory =
  | "Content Creation"
  | "Experience Design"
  | "Experiential Marketing"
  | "Multimedia Production";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  coverImage: string;
  /** Short card + hero subline */
  summary: string;
  location: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: string;
  gallery: string[];
};

export const PORTFOLIO_FILTERS = [
  "All Categories",
  "Content Creation",
  "Experience Design",
  "Experiential Marketing",
  "Multimedia Production",
] as const;

export type PortfolioFilter = (typeof PORTFOLIO_FILTERS)[number];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "global-leadership-summit",
    title: "Global Leadership Summit",
    category: "Experience Design",
    coverImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A three-day executive summit with plenary staging, breakout villages, and broadcast-quality capture.",
    location: "Singapore",
    year: "2025",
    overview:
      "We designed the full delegate journey for 1,200 leaders — from registration and wayfinding to main-stage narrative and networking lounges.",
    challenge:
      "Unify multiple brand partners under one visual system while keeping each sponsor visible and avoiding a cluttered floor plan.",
    solution:
      "A modular scenic system with digital skins, clear zoning, and a single content spine so sessions flowed without hard resets.",
    outcomes:
      "98% on-time session rate, 4.7/5 delegate satisfaction, and 12 sponsor renewals for the following year.",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-27aef4e9b1fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "brand-pavilion-launch",
    title: "Brand Pavilion Launch",
    category: "Experiential Marketing",
    coverImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Immersive pavilion for a national product launch with interactive demos and live programming.",
    location: "Mumbai",
    year: "2025",
    overview:
      "Temporary architecture, lighting, and content loops turned a blank hall into a walk-through brand world over ten days.",
    challenge:
      "High footfall peaks and tight load-in windows next to an operational retail zone.",
    solution:
      "Phased build, night-only rigging where needed, and a guest-flow model tested in 3D before site.",
    outcomes:
      "40k+ visitors, sustained dwell time in hero zones, and press coverage across tier-1 outlets.",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81242ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "annual-congress-expo",
    title: "Annual Congress & Expo",
    category: "Experience Design",
    coverImage:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Congress with exhibition hall, scientific sessions, and gala — single operations desk for the client.",
    location: "Dubai",
    year: "2024",
    overview:
      "End-to-end delivery: abstract management, floor plan, rigging, AV, catering coordination, and on-site showcalling.",
    challenge:
      "Parallel builds for expo and plenary with shared back-of-house corridors.",
    solution:
      "Color-coded traffic plans, staggered vendor slots, and a unified comms channel for all leads.",
    outcomes:
      "Zero safety incidents, full hall occupancy, and repeat booking for a multi-year cycle.",
    gallery: [
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1438558170333-8cabdac9eba9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "product-reveal-film-suite",
    title: "Product Reveal Film Suite",
    category: "Multimedia Production",
    coverImage:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Launch film, stage reveal mechanics, and social cut-downs from one production pipeline.",
    location: "London",
    year: "2024",
    overview:
      "Creative direction through post — aligned key visuals with the live moment so the reveal felt inevitable, not disjointed.",
    challenge:
      "Tight turnaround between final product specs and live date.",
    solution:
      "Locked storyboards with modular scenes so late changes swapped without reshooting entire sequences.",
    outcomes:
      "Launch day content package delivered 48h early; strong engagement on owned and earned channels.",
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debd1be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "retail-flagship-activation",
    title: "Retail Flagship Activation",
    category: "Experiential Marketing",
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Weekend takeover with live demos, influencer slots, and data capture at point of experience.",
    location: "Delhi NCR",
    year: "2024",
    overview:
      "We choreographed staff roles, crowd control, and content moments so retail traffic converted to measurable leads.",
    challenge:
      "Store operations could not pause — activation had to coexist with trading hours.",
    solution:
      "Quiet hours install, mobile-first queueing, and off-peak strike so the store never closed.",
    outcomes:
      "2× baseline footfall during the window and a reusable playbook for other cities.",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81242ee5ff30?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "keynote-stage-content",
    title: "Keynote & Stage Content",
    category: "Content Creation",
    coverImage:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Speaker support, deck design, teleprompter, and show graphics for a flagship keynote series.",
    location: "Berlin",
    year: "2024",
    overview:
      "Content team embedded with leadership to refine narrative arcs and visual language across six keynotes.",
    challenge:
      "Last-minute script changes minutes before doors.",
    solution:
      "Versioned prompter files, dedicated graphics op, and a sign-off ritual with the speaker team each morning.",
    outcomes:
      "Flawless run of show; leadership cited the clarity of on-screen story as a highlight.",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "immersive-walkthrough-experience",
    title: "Immersive Walkthrough Experience",
    category: "Experience Design",
    coverImage:
      "https://images.unsplash.com/photo-1492684223066-81242ee5ff30?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Linear journey with scenography, spatial audio, and timed reveals for B2B stakeholders.",
    location: "Bangalore",
    year: "2023",
    overview:
      "Guests moved through chapters of the brand story with pacing controlled by show control and ushers.",
    challenge:
      "Variable group sizes without breaking immersion.",
    solution:
      "Buffer rooms with ambient content and a flexible clock so no cohort felt rushed or idle.",
    outcomes:
      "Average NPS +18 vs prior roadshow format; client adopted the format for APAC tour.",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1438558170333-8cabdac9eba9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "broadcast-hybrid-studio",
    title: "Broadcast & Hybrid Studio",
    category: "Multimedia Production",
    coverImage:
      "https://images.unsplash.com/photo-1438558170333-8cabdac9eba9?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Temporary studio build with remote presenter workflows and redundancy for a global town hall.",
    location: "Remote + NYC hub",
    year: "2023",
    overview:
      "Set, lights, cameras, and remote integration — one technical director calling the hybrid show.",
    challenge:
      "Latency and failover for executives dialing in from three continents.",
    solution:
      "Dedicated lines, backup encoders, and a rehearsed comms script for failover messaging.",
    outcomes:
      "Zero dropouts during the live; recording packaged for internal LMS within 24 hours.",
    gallery: [
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "roadshow-series",
    title: "Roadshow Series",
    category: "Experiential Marketing",
    coverImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Eight-city tour with identical show quality — packing lists, crew rotations, and venue liaison templates.",
    location: "Pan-India",
    year: "2023",
    overview:
      "We standardized the build while allowing venue-specific adjustments documented per stop.",
    challenge:
      "Different ceiling heights and power specs in every ballroom.",
    solution:
      "Scalable truss maps and a pre-visit checklist signed off by venue engineering.",
    outcomes:
      "On-time opens in all eight cities; cost per stop reduced on the second annual run.",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-27aef4e9b1fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "social-campaign-assets",
    title: "Social & Campaign Assets",
    category: "Content Creation",
    coverImage:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Shot on-site during the main event and delivered platform-native cuts within 6 hours.",
    location: "Paris",
    year: "2023",
    overview:
      "A sprint team captured hero moments, interviews, and b-roll for paid and organic use.",
    challenge:
      "Brand legal needed same-day clearance on talent and logos.",
    solution:
      "Pre-cleared music and graphic templates; on-site producer with direct client chat for rapid approvals.",
    outcomes:
      "First post live within 90 minutes of show end; campaign exceeded engagement benchmarks.",
    gallery: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81242ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debd1be?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "gala-awards-night",
    title: "Gala & Awards Night",
    category: "Experience Design",
    coverImage:
      "https://images.unsplash.com/photo-1530103862676-de8c9debd1be?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Seated dinner for 800 with awards choreography, entertainment cues, and VIP green room.",
    location: "Hong Kong",
    year: "2022",
    overview:
      "Full showflow, trophy paths, and broadcast lighting looks for both room and camera.",
    challenge:
      "Tight stage reset between performance and awards blocks.",
    solution:
      "Pre-set wagons and a timed stagehand grid rehearsed twice before guests arrived.",
    outcomes:
      "Smooth show; client extended the format to a regional series.",
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "3d-mapping-lighting-design",
    title: "3D Mapping & Lighting Design",
    category: "Multimedia Production",
    coverImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Projection mapping on custom set pieces with programmed lighting scenes synced to music.",
    location: "Abu Dhabi",
    year: "2022",
    overview:
      "Pre-vis in the warehouse, on-site alignment, and a single timecode master for lighting and media.",
    challenge:
      "Outdoor wind load and generator noise near the audience zone.",
    solution:
      "Weighted ballast plan, acoustic screening, and redundant power paths.",
    outcomes:
      "Standing ovation closer; assets repurposed for a year-long digital campaign.",
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-27aef4e9b1fe?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return PORTFOLIO_PROJECTS.map((p) => p.slug);
}

/** First N projects for home teaser */
export function getFeaturedPortfolio(count = 3): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.slice(0, count);
}
