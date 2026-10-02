import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Contours } from "@/components/site/Contours";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research - KumbhLabs" },
      {
        name: "description",
        content:
          "KumbhLabs research on agentic AI, decentralized systems, edge intelligence and civic AI for population-scale environments.",
      },
      { property: "og:title", content: "Research - KumbhLabs" },
      {
        property: "og:description",
        content:
          "Agentic AI, decentralized AI, edge intelligence, civic AI, population intelligence, privacy and trust.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kumbhlabs.org/research" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/research" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Research - KumbhLabs",
          url: "https://kumbhlabs.org/research",
          isPartOf: { "@type": "WebSite", name: "KumbhLabs", url: "https://kumbhlabs.org" },
          about: [
            "Agentic AI",
            "Decentralized AI",
            "Edge intelligence",
            "Civic AI",
            "Population intelligence",
          ],
          hasPart: [
            {
              "@type": "ScholarlyArticle",
              headline: "Agentic AI for population-scale gatherings",
              url: "https://arxiv.org/abs/2608.07520",
              author: { "@type": "Organization", name: "KumbhLabs" },
            },
            {
              "@type": "ScholarlyArticle",
              headline: "AI Agents for Kumbh Mela",
              url: "https://www.media.mit.edu/publications/ai-agents-for-kumbh-mela/",
              publisher: { "@type": "Organization", name: "MIT Media Lab" },
            },
          ],
        }),
      },
    ],
  }),
  component: ResearchPage,
});

const previousWork = [
  {
    url: "https://www.media.mit.edu/publications/decai-perspective/",
    kind: "Publication",
    source: "MIT Media Lab",
    title: "Decentralized AI: A Perspective",
    body: "A framing of decentralized AI systems and why coordination without central control matters for real-world deployment.",
  },
  {
    url: "https://arxiv.org/abs/2510.16572",
    kind: "Preprint",
    source: "arXiv",
    title: "Agentic Systems at Population Scale",
    body: "Research on architectures for large populations of interoperating agents operating under real-world constraints.",
  },
  {
    url: "https://www.media.mit.edu/projects/ai-lpm/overview/",
    kind: "Project",
    source: "MIT Media Lab",
    title: "AI-LPM: Large Population Models",
    body: "An overview of large population models - simulating and coordinating the behaviour of millions of agents.",
  },
];

const videos = [
  { id: "mZ6gZzMU8og", title: "KumbhLabs - Talk 01" },
  { id: "xJyWSwut7lQ", title: "KumbhLabs - Talk 02" },
  { id: "k_cS0sfyGGc", title: "KumbhLabs - Talk 03" },
  { id: "HJnlC5a83x0", title: "KumbhLabs - Talk 04" },
];

function ResearchPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-45">
          <Contours lines={20} />
        </div>
        <div className="relative mx-auto max-w-[88rem] px-6 pb-24 pt-24 lg:px-12 lg:pt-32">
          <Reveal>
            <p className="eyebrow">KumbhLabs Research</p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
              Building the Agentic Systems
              <br />
              for the Kumbh Ecosystem.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We design, deploy and prove AI-agent systems that connect pilgrims, businesses,
              startups and services - inside the world's most demanding temporary city.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12">
        <Reveal className="border-t border-border pt-12">
          <p className="eyebrow">Publications</p>

          <div className="mt-10 divide-y divide-border">
            <a
              href="https://arxiv.org/abs/2608.07520"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 py-8 md:flex-row md:gap-12"
            >
              <div className="md:w-40 lg:w-48">
                <p className="text-sm font-medium text-foreground">Publication</p>
                <p className="mt-1 text-sm text-muted-foreground">Aug 1, 2026</p>
              </div>
              <div className="flex-1">
                <h2 className="max-w-4xl font-display text-2xl leading-snug text-foreground transition-colors group-hover:text-accent md:text-3xl">
                  KumbhDoot: A Scale-Ready, LLM-Bounded Architecture for Mass-Gathering
                  Public-Service Assistants
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  A similarity-first architecture that bounds generative model usage behind semantic
                  caching, approved information and intent routing - reducing cost and latency while
                  keeping answers grounded.
                </p>
              </div>
            </a>

            <a
              href="https://www.media.mit.edu/publications/ai-agents-for-kumbh-mela/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 py-8 md:flex-row md:gap-12"
            >
              <div className="md:w-40 lg:w-48">
                <p className="text-sm font-medium text-foreground">Research</p>
                <p className="mt-1 text-sm text-muted-foreground">Jul 29, 2026</p>
              </div>
              <div className="flex-1">
                <h2 className="max-w-4xl font-display text-2xl leading-snug text-foreground transition-colors group-hover:text-accent md:text-3xl">
                  AI Agents for Kumbh Mela
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  A proposal for deploying agentic AI systems at the world&apos;s largest mass
                  gathering, built around citizen-facing assistants, shared public infrastructure
                  and scalable population intelligence.
                </p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-24 border-t border-border pt-12">
          <p className="eyebrow">Previous Work</p>
          <div className="mt-10 divide-y divide-border">
            {previousWork.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-6 py-8 md:flex-row md:gap-12"
              >
                <div className="md:w-40 lg:w-48">
                  <p className="text-sm font-medium text-foreground">{item.kind}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.source}</p>
                </div>
                <div className="flex-1">
                  <h2 className="max-w-4xl font-display text-2xl leading-snug text-foreground transition-colors group-hover:text-accent md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-24 border-t border-border pt-12">
          <p className="eyebrow">Video Vault</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {videos.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-2xl border border-border bg-secondary"
              >
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p className="px-5 py-4 text-sm font-medium text-foreground">{v.title}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
