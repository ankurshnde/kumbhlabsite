import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Contours, PointField } from "@/components/site/Contours";
import { ShaderBackground } from "@/components/ui/waves-background";
import { HeroAura } from "@/components/site/HeroAura";
import { ProgressTimeline } from "@/components/site/ProgressTimeline";
import { KumbhSlideshow } from "@/components/site/KumbhSlideshow";
import { Roadmap } from "@/components/site/Roadmap";

import kumbhPhoto from "@/assets/kumbh-nashik.jpg.asset.json";
import kumbhPhoto2 from "@/assets/kumbh-hero-2.avif.asset.json";
import kumbhPhoto4 from "@/assets/kumbh-hero-4.webp.asset.json";

const kumbhPhotos = [kumbhPhoto.url, kumbhPhoto4.url, kumbhPhoto2.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KumbhLabs - Intelligence for places where millions gather" },
      {
        name: "description",
        content: "A R&D initiative for an AI-first Kumbh Mela, building for the Kumbh ecosystem.",
      },
      {
        property: "og:title",
        content: "KumbhLabs - Intelligence for places where millions gather",
      },
      {
        property: "og:description",
        content: "A R&D initiative for an AI-first Kumbh Mela, building for the Kumbh ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kumbhlabs.org/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ResearchOrganization",
          name: "KumbhLabs",
          url: "https://kumbhlabs.org",
          description:
            "Research and development initiative for an AI-first Kumbh Mela, building agentic systems for the Kumbh ecosystem.",
          parentOrganization: { "@type": "Organization", name: "Project NANDA" },
        }),
      },
    ],
  }),
  component: Home,
});

function SectionLabel({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

function Flow({
  steps,
  dark = false,
  connected = false,
}: {
  steps: (string | { title: string; note: string })[];
  dark?: boolean;
  connected?: boolean;
}) {
  return (
    <ol className={`relative space-y-0 ${connected ? "pl-6" : ""}`}>
      {connected && (
        <span
          aria-hidden
          className={`absolute left-0 top-5 bottom-5 w-px ${
            dark
              ? "bg-gradient-to-b from-saffron/20 via-saffron/50 to-saffron"
              : "bg-gradient-to-b from-accent/20 via-accent/50 to-accent"
          }`}
        />
      )}
      {steps.map((s, i) => {
        const title = typeof s === "string" ? s : s.title;
        const note = typeof s === "string" ? null : s.note;
        return (
          <li key={title}>
            <Reveal
              delay={i * 90}
              className={`group flex items-baseline gap-5 border-b py-5 transition-colors ${
                dark ? "border-ivory/15 hover:border-saffron" : "border-border hover:border-accent"
              }`}
            >
              <span
                className={`font-mono text-[11px] tabular-nums text-accent ${
                  connected ? "relative z-10" : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span
                  className={`font-display text-xl transition-transform duration-500 group-hover:translate-x-1 md:text-2xl ${
                    dark ? "text-ivory" : "text-foreground"
                  }`}
                >
                  {title}
                </span>
                {note && (
                  <p
                    className={`mt-2 max-w-md text-sm leading-relaxed ${
                      dark ? "text-ivory/60" : "text-muted-foreground"
                    }`}
                  >
                    {note}
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}

function Home() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <HeroAura />

        <div className="relative mx-auto flex w-full max-w-[88rem] flex-1 flex-col items-center justify-center px-6 pb-24 pt-32 text-center lg:justify-start lg:px-12 lg:pb-0 lg:pt-44">
          <Reveal delay={80}>
            <h1 className="mt-8 max-w-4xl font-display text-[2.1rem] leading-[1.08] tracking-tight text-foreground sm:text-[2.8rem] lg:text-[3.6rem]">
              Research &amp; Development Initiative
              <br />
              for an Agent-First Kumbh Mela
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Building and implementing AI-agent systems that connect pilgrims, businesses,
              startups, and services across the Kumbh ecosystem.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-12 flex justify-center">
              <Link
                to="/research"
                className="rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore Research
              </Link>
            </div>
          </Reveal>
        </div>

        {/* credibility strip */}
        <div className="relative z-10 border-y border-border/60 bg-background/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[88rem] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
            <p className="eyebrow shrink-0 text-foreground/60">In collaboration with</p>
            <ul className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <li>
                <a
                  href="https://projectnanda.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl text-foreground/90 transition-colors hover:text-accent"
                >
                  Project NANDA
                </a>
              </li>
              <li>
                <a
                  href="https://kumbhdoot.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl text-foreground/90 transition-colors hover:text-accent"
                >
                  KumbhDoot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. THE CONTEXT */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <dl className="grid grid-cols-3 gap-6 py-2">
              {[
                ["50M+", "people"],
                ["45", "days"],
                ["20+", "languages"],
              ].map(([stat, label], i) => (
                <Reveal key={label} delay={i * 100}>
                  <dt className="font-display text-4xl tabular-nums tracking-tight text-foreground md:text-5xl">
                    {stat}
                  </dt>
                  <dd className="eyebrow mt-2">{label}</dd>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={120}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                The Nashik Simhastha Kumbh Mela is a temporary city - one that appears for a few
                weeks, houses tens of millions of people, and then disappears. Within it,
                information, mobility, language, services and coordination must work at
                unprecedented scale, with none of the permanent infrastructure a city of that size
                would normally have.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-6">
            <KumbhSlideshow images={kumbhPhotos} />
          </Reveal>
        </div>
      </section>

      {/* 3. THE THESIS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="max-w-2xl font-display text-3xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
                What happens when every person has an intelligent interface to the world around
                them?
              </h2>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                People are becoming AI-capable faster than institutions are becoming AI-ready.
                KumbhLabs explores what becomes possible when intelligent agents connect people with
                the services, organizations and infrastructure around them.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Flow
              connected
              steps={[
                "Person",
                "Personal Agent",
                "Services & Institutions",
                "Shared Infrastructure",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. MILESTONES */}
      <section id="progress" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Our progress so far
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A look at the milestones as we build decentralized, agentic intelligence for
              population-scale environments - from field research in Nashik to Simhastha 2027.
            </p>
          </Reveal>
          <ProgressTimeline />
        </div>
      </section>

      {/* 4b. ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            From the KumbhDoot to
            <br />
            Agentic Infrastructure at Scale.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Where the work goes next - from the application people use today, to a coordinated
            agentic ecosystem, to intelligence built for populations.
          </p>
        </Reveal>
        <Roadmap />
      </section>

      {/* 4c. MILESTONE VIDEO */}
      <section className="mx-auto max-w-[88rem] px-6 pb-24 lg:px-12 lg:pb-32">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-secondary/30 shadow-sm">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/LOalNvS0Rqw?si=e7VwYz6OqppHbkkg"
                title="KumbhLabs milestones and app walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. FLAGSHIP PRODUCT */}
      <section className="border-y border-border bg-ink text-ivory">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-ivory/60">Our first deployment</p>
              <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
                One pilgrim. One AI agent.
              </h2>
              <p className="mt-8 font-display text-2xl text-saffron">KumbhDoot</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">
                KumbhDoot is an open AI agent framework built for the Nashik Kumbh Mela. It powers
                multilingual, voice-first assistance across navigation, services, information and
                safety.
              </p>
            </Reveal>

            <ul className="mt-12 flex flex-wrap gap-3">
              {[
                "Voice-first",
                "20+ Indian languages",
                "Offline-capable",
                "Personalized",
                "Privacy-first",
              ].map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={i * 70}
                  className="rounded-full border border-ivory/25 px-4 py-2 text-sm text-ivory/85 transition-colors hover:border-saffron hover:text-saffron"
                >
                  {c}
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="https://www.kumbhdoot.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-ivory/30 px-7 py-3.5 text-sm text-ivory transition-colors hover:border-ivory"
                >
                  Explore KumbhDoot →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. AI, DIFFERENTLY */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <SectionLabel>The KumbhDoot architecture</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            We don't ask an AI model to answer everything.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-12 max-w-3xl border-l border-accent pl-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
            The cheapest, fastest and safest path should answer first.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {[
                ["User Query", "Everything begins with a person, usually speaking."],
                ["Semantic Cache", "Similar questions have already been answered well."],
                ["Approved Information", "Verified civic, schedule and service data."],
                ["Intent Routing", "Classify what is actually being asked."],
                ["Domain Agent", "Transport, health, safety, services."],
                ["LLM, only when necessary", "Synthesis, personalization, live reasoning."],
              ].map(([step, note], i) => (
                <li key={step}>
                  <Reveal
                    delay={i * 80}
                    className="group border-t border-border pt-5 transition-colors duration-500 hover:border-accent"
                  >
                    <p className="text-xs font-medium tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-xl text-foreground transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                      {step}
                    </p>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                      <p className="overflow-hidden pt-0 text-sm leading-relaxed text-muted-foreground transition-[padding] duration-500 group-hover:pt-3">
                        {note}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                KumbhDoot uses similarity-first retrieval and approved information as its default
                path. Generative AI is used only when retrieval is insufficient or when a request
                genuinely requires synthesis, personalization or live information.
              </p>
            </Reveal>
            <dl className="mt-12 grid grid-cols-2 gap-px border border-border bg-border">
              {[
                ["Lower cost", "Fewer model calls per query"],
                ["Lower latency", "Sub-second on the common path"],
                ["Grounded answers", "Approved sources by default"],
                ["Offline resilience", "Local paths survive dead networks"],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 70} className="bg-background p-5">
                  <dt className="font-display text-lg text-foreground">{t}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 6b. PHILOSOPHY */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <SectionLabel>Our philosophy</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            AI should empower the person,
            <br />
            not control the system.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {[
            ["01", "Agency", "Power should remain with the person the agent serves."],
            [
              "02",
              "Dignity",
              "AI must work across language, literacy, device and connectivity barriers.",
            ],
            [
              "03",
              "Decentralization",
              "Coordination should not require a single centralized command system.",
            ],
            [
              "04",
              "Continuity",
              "A solution built for a temporary city should solve permanent problems.",
            ],
          ].map(([n, title, line], i) => (
            <Reveal
              key={n}
              delay={i * 70}
              className="group grid items-baseline gap-4 border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/60 md:grid-cols-12 md:gap-8"
            >
              <span className="font-mono text-sm text-accent md:col-span-1">{n}</span>
              <h3 className="font-display text-3xl text-foreground transition-transform duration-500 group-hover:translate-x-1 md:col-span-3 md:text-4xl">
                {title}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground md:col-span-8">{line}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. THE BIGGER IDEA */}
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Contours lines={22} tone="ivory" />
        </div>
        <div className="relative mx-auto max-w-[88rem] px-6 py-28 lg:px-12 lg:py-40">
          <Reveal>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight md:text-7xl">
              Built for the Kumbh.
              <br />
              <span className="text-saffron">Designed for everyone.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-16 lg:grid-cols-12">
            <Reveal delay={120} className="lg:col-span-6">
              <p className="text-lg leading-relaxed text-ivory/70">
                The Kumbh is a temporary city, but the challenges it exposes are permanent:
                mobility, access, multilingual communication, fragmented services, emergency
                response and coordination.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ivory/70">
                KumbhLabs uses the Kumbh as a real-world environment for developing systems that can
                eventually operate at population scale.
              </p>
            </Reveal>
            <div className="lg:col-span-6">
              <Flow
                dark
                steps={[
                  "Kumbh",
                  "Kumbh Ecosystem",
                  "Agentic Infrastructure at Scale",
                  "Population Intelligence",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="mx-auto max-w-[88rem] px-6 py-28 text-center lg:px-12 lg:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            The next generation of AI
            <br />
            will need to work for everyone.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            KumbhLabs is building the systems to make that possible, starting in the world's most
            demanding temporary city.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              to="/research"
              className="rounded-full border border-foreground/30 px-8 py-3.5 text-sm text-foreground transition-colors hover:border-foreground"
            >
              Explore Research
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
