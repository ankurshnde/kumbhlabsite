import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import researcherAsset from "@/assets/researcher-working-group.png.asset.json";
import startupAsset from "@/assets/startup-team.png.asset.json";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved - KumbhLabs, an R&D initiative for an AI-first Kumbh Mela" },
      {
        name: "description",
        content:
          "Join KumbhLabs as a researcher through working groups, as a startup through our interest form, or as an industry partner or investor by contacting us at contact@kumbhalabs.org.",
      },
      { property: "og:title", content: "Get Involved - KumbhLabs" },
      {
        property: "og:description",
        content:
          "Researchers, startups, industry partners and investors - here is how to work with KumbhLabs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kumbhlabs.org/get-involved" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/get-involved" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Get Involved",
          description:
            "How researchers, startups, industry partners and investors can get involved with KumbhLabs.",
          url: "https://kumbhlabs.org/get-involved",
        }),
      },
    ],
  }),
  component: GetInvolvedPage,
});

const workingGroups = [
  {
    name: "Crowd UX & Human-Agent Interaction",
    focus:
      "Crowd behaviour, user experience, multimodal interfaces, voice-first interaction, multilingual agents, accessibility.",
  },
  {
    name: "Digital Public Infrastructure",
    focus:
      "Agent interoperability with DPI, public digital systems, identity infrastructure, data exchange, open protocols.",
  },
  {
    name: "Trust, Security & Agent Governance",
    focus:
      "Authentication, authorization, agent identity, credentials, privacy, security, trust, governance and policy.",
  },
  {
    name: "Agentic Commerce & Economic Systems",
    focus:
      "Agentic commerce, payments, merchant discovery, marketplaces, incentives, agent-to-business transactions and the Kumbh economy.",
  },
  {
    name: "Health & Human Services",
    focus:
      "Healthcare navigation, emergency response, health information, multilingual health agents, hospitals/clinics and public-service delivery.",
  },
];

function ComingSoonButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-foreground/15 px-6 py-2.5 text-sm font-medium text-foreground/60"
    >
      {label}
      <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-muted-foreground">
        Coming soon
      </span>
    </button>
  );
}

function GetInvolvedPage() {
  return (
    <main className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <p className="eyebrow">Get Involved</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
          Build the agentic layer of the Kumbh with us.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          KumbhLabs is an open R&D effort. Researchers, startups, industry partners and investors
          all have a way in - here is how to join.
        </p>
      </Reveal>

      <div className="mt-20 space-y-20">
        <Reveal>
          <section aria-labelledby="researchers">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col justify-center">
                <p className="eyebrow">For researchers</p>
                <h2
                  id="researchers"
                  className="mt-4 font-display text-2xl tracking-tight text-foreground md:text-3xl"
                >
                  Join a working group
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Researchers get involved through working groups - focused teams that carry each
                  research thread from design to deployment on the ground.
                </p>
                <div className="mt-8">
                  <ComingSoonButton label="Working group registration form" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={researcherAsset.url}
                  alt="Illustration of a researcher studying notes and agent diagrams at a desk overlooking a riverfront city"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workingGroups.map((g, i) => (
                <li
                  key={g.name}
                  className="flex flex-col rounded-lg border border-border bg-card p-6"
                >
                  <p className="text-xs text-muted-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-display text-xl text-foreground">{g.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.focus}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="startups">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
              <div className="order-last overflow-hidden rounded-lg border border-border lg:order-first">
                <img
                  src={startupAsset.url}
                  alt="Illustration of a startup team collaborating around laptops in front of a whiteboard and a riverside temple skyline"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="eyebrow">For startups</p>
                <h2
                  id="startups"
                  className="mt-4 font-display text-2xl tracking-tight text-foreground md:text-3xl"
                >
                  Submit an interest form
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Startups get involved through our interest form - tell us what you are building
                  and how it fits the Kumbh ecosystem.
                </p>
                <div className="mt-8">
                  <ComingSoonButton label="Startup interest form" />
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="partners">
            <div className="rounded-lg border border-border bg-card p-8 md:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
                <div>
                  <p className="eyebrow">For industry partners & investors</p>
                  <h2
                    id="partners"
                    className="mt-4 font-display text-2xl tracking-tight text-foreground md:text-3xl"
                  >
                    Write to us
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    Industry partners and investors can reach the team directly. We read every
                    message.
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <a
                    href="mailto:contact@kumbhalabs.org"
                    className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-foreground/85"
                  >
                    contact@kumbhalabs.org
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
