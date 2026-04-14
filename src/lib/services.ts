/** Core offerings for the home page Services section */

export type ServiceItem = {
  title: string;
  description: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Experiential & brand events",
    description:
      "Launches, roadshows, and immersive activations — narrative, spatial design, and production tuned to your brand and audience.",
  },
  {
    title: "MICE & congress programs",
    description:
      "Multi-day conferences, summits, and scientific congresses with registration flows, session design, and sponsor integration.",
  },
  {
    title: "Exhibitions & pavilions",
    description:
      "Trade-floor presence from concept to build: stand design, traffic planning, demos, and teardown with minimal friction.",
  },
  {
    title: "Live production & staging",
    description:
      "Showcalling, lighting, audio, and LED — one run-of-show and one accountable production desk from rehearsal to curtain.",
  },
  {
    title: "Content & storytelling",
    description:
      "Keynotes, films, motion graphics, and speaker coaching so your message lands clearly in the room and in the recording.",
  },
  {
    title: "Hybrid & digital extensions",
    description:
      "Streams, remote Q&A, and post-event assets that extend reach without compromising the quality of the live experience.",
  },
];
