import { Reveal } from "@/components/site/Reveal";

const stages = [
  {
    index: "01",
    phase: "Now",
    title: "KumbhDoot",
    body: "Continue expanding KumbhDoot framework deployments - capabilities, language support, reliability and real-world usage.",
  },
  {
    index: "02",
    phase: "Kumbh 2027",
    title: "Kumbh Ecosystem",
    body: "Build an agent-powered ecosystem connecting pilgrims, businesses, startups, and services, with Agentic Commerce as a key application.",
  },
  {
    index: "03",
    phase: "Beyond",
    title: "Agentic Infrastructure at Scale",
    body: "Extend the systems and learnings developed at Kumbh toward larger populations, institutions, and real-world environments.",
  },
];

export function Roadmap() {
  return (
    <div className="mt-16 grid gap-px overflow-hidden border-t border-border md:grid-cols-3 md:border-l">
      {stages.map((s, i) => (
        <Reveal
          key={s.index}
          delay={i * 120}
          className="group relative border-b border-border px-0 py-10 md:border-r md:px-8"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-4xl leading-none text-foreground/20 transition-colors duration-500 group-hover:text-accent">
              {s.index}
            </span>
            <span className="eyebrow">{s.phase}</span>
          </div>

          <h3 className="mt-8 font-display text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
            {s.title}
          </h3>
          {"body" in s ? (
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          ) : null}
        </Reveal>
      ))}
    </div>
  );
}
