import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Advisors } from "@/components/site/Advisors";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - KumbhLabs, an R&D initiative for an AI-first Kumbh Mela" },
      {
        name: "description",
        content:
          "KumbhLabs is an R&D initiative for an AI-first Kumbh Mela, building for the Kumbh ecosystem.",
      },
      { property: "og:title", content: "About KumbhLabs" },
      {
        property: "og:description",
        content: "A R&D initiative for an AI-first Kumbh Mela.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kumbhlabs.org/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KumbhLabs",
          description: "A R&D initiative for an AI-first Kumbh Mela.",
          parentOrganization: { "@type": "Organization", name: "Project NANDA" },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <p className="eyebrow">About</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
          A R&D initiative for an AI-first Kumbh Mela.
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Kumbh Labs is an R&D lab exploring how AI-agent systems can be built on top of agentic
            infrastructure and applied across the Kumbh ecosystem.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The agentic infrastructure originates from{" "}
            <a
              href="https://projectnanda.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-accent"
            >
              Project NANDA
            </a>
            , with Kumbh Labs serving as an environment to research, build, and experiment with
            these systems alongside researchers, startups, technology companies, and industry
            partners.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Agentic Commerce is a key area of exploration, alongside other applications of agentic
            systems at Kumbh scale.{" "}
            <a
              href="https://kumbhdoot.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-accent"
            >
              KumbhDoot
            </a>{" "}
            is a flagship framework emerging from this broader R&D effort.
          </p>
        </Reveal>

        <Reveal delay={120} className="md:col-span-5">
          <p className="eyebrow">Institutional context</p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            <li className="py-4">
              <a
                href="https://projectnanda.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-foreground transition-colors hover:text-accent"
              >
                Project NANDA
              </a>
            </li>
            <li className="py-4">
              <a
                href="https://kumbhdoot.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-foreground transition-colors hover:text-accent"
              >
                KumbhDoot
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <Advisors />
    </main>
  );
}
