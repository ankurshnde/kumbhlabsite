import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SovereignArchitecture } from "@/components/site/SovereignArchitecture";

export const Route = createFileRoute("/kumbhdoot")({
  head: () => ({
    meta: [
      { title: "KumbhDoot - An AI agent framework for every pilgrim" },
      {
        name: "description",
        content:
          "KumbhDoot is an open AI agent framework for building multilingual, voice-first, offline-capable agents for pilgrims at the Nashik Simhastha Kumbh Mela 2027.",
      },
      { property: "og:title", content: "KumbhDoot - An AI agent framework for every pilgrim" },
      {
        property: "og:description",
        content:
          "An open AI agent framework powering multilingual, voice-first assistance across navigation, services, information and safety.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://kumbhlabs.org/kumbhdoot" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/kumbhdoot" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "KumbhDoot",
          applicationCategory: "TravelApplication",
          operatingSystem: "iOS, Android",
          url: "https://kumbhlabs.org/kumbhdoot",
          sameAs: [
            "https://kumbhdoot.org",
            "https://apps.apple.com/in/app/kumbh-labs/id6761781210",
            "https://play.google.com/store/apps/details?id=app.kumbhdoot",
          ],
          description:
            "An open AI agent framework for building multilingual, voice-first, offline-capable agents for pilgrims at the Nashik Simhastha Kumbh Mela 2027.",
          publisher: { "@type": "Organization", name: "KumbhLabs", url: "https://kumbhlabs.org" },
        }),
      },
    ],
  }),
  component: KumbhDootPage,
});

const PROPOSAL_URL = "https://www.media.mit.edu/publications/ai-agents-for-kumbh-mela/";

const tags = ["Voice-First", "20+ Languages", "Crowd Management", "Emergency Response"];

const contributors = [
  ["Kaustubh Dhavse", "Chief Advisor to CM, Maharashtra"],
  ["Dr. Praveen Gedam", "Divisional Commissioner, Nashik"],
  ["Shekhar Singh", "Commissioner of Kumbh Mela, Nashik"],
  ["Dr. Ramesh Raskar", "MIT & Project NANDA"],
];

const layers: { label: string; title: string; body: string; items: string[] }[] = [
  {
    label: "Layer 3",
    title: "Citizen agents",
    body: "Every pilgrim gets a personal AI twin - voice-first, multilingual and offline-capable - that carries their context, preferences and needs through the mela.",
    items: ["Personal AI twin", "Voice-first", "20+ languages", "On-device context"],
  },
  {
    label: "Layer 2",
    title: "Uber agents & infrastructure",
    body: "Shared public rails that route and orchestrate requests between citizens and providers, without any single actor owning the graph.",
    items: ["Identity", "Context", "Health", "Payment", "Commerce", "Governance"],
  },
  {
    label: "Layer 1",
    title: "Service startups & providers",
    body: "An open ecosystem of 14,500+ providers - homestays, doctors, food vendors, government schemes and NGOs - discoverable through the same protocol.",
    items: ["Homestays", "Doctors", "Food vendors", "Govt schemes", "NGOs"],
  },
];

const team = [
  "Mahesh Lambe",
  "Saurabh Sakalkar",
  "Ankur Shinde",
  "Rekha Singhal",
  "Gurusha Raskar",
];

function KumbhDootPage() {
  return (
    <main>
      <section className="mx-auto max-w-[72rem] px-6 py-28 lg:px-12 lg:py-36">
        <Reveal>
          <p className="eyebrow">Our first deployment</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            KumbhDoot
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            An AI Agent Framework for Every Pilgrim
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Empowering <span className="text-foreground">50M+ pilgrims</span> at the Nashik Kumbh
            Mela 2027. Launched by CM Devendra Fadnavis at the{" "}
            <span className="text-foreground">India AI Impact Summit 2026</span>.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-7 sm:p-9">
            <p className="eyebrow">Key contributors</p>
            <dl className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {contributors.map(([name, role]) => (
                <div key={name}>
                  <dt className="text-sm font-medium text-foreground">{name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{role}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-border pt-7">
              <p className="eyebrow">Team</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {team.join(" · ")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.kumbhdoot.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90"
            >
              Visit kumbhdoot.org
            </a>
            <a
              href={PROPOSAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-foreground/30 px-6 py-3 text-sm text-foreground transition-colors hover:border-foreground"
            >
              View proposal →
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-28">
            <p className="eyebrow">The 3-layer architecture</p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
              From a personal agent to an ecosystem of services.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              KumbhDoot is built as three interoperable layers - citizens, shared infrastructure and
              service providers - connected through open routing and orchestration.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-px border border-border bg-border">
          {layers.map((l, i) => (
            <Reveal key={l.title} delay={i * 70} className="bg-background p-7 sm:p-9">
              <div className="grid gap-6 md:grid-cols-[14rem_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">{l.label}</p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">{l.title}</h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {l.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs text-foreground"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-28">
          <SovereignArchitecture />
        </div>
      </section>
    </main>
  );
}
