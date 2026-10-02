import { useEffect, useRef, useState } from "react";
import { PointField } from "@/components/site/Contours";
import febLaunch from "@/assets/feb-launch.webp.asset.json";
import marSurvey from "@/assets/mar-survey.jpg.asset.json";
import aprilDemo from "@/assets/april-demo.mp4.asset.json";
import mayDemo from "@/assets/may-demo.mp4.asset.json";
import juneDemo from "@/assets/june-demo.mp4.asset.json";
import julyDemo from "@/assets/july-demo.mp4.asset.json";
import augustDemo from "@/assets/august-demo.mp4.asset.json";

export type Milestone = {
  date: string;
  title: string;
  body: string;
  panelTitle: string;
  panelBody: string;
  metrics: [string, string][];
  image?: string;
  video?: string;
  wide?: boolean;
};

export const milestones: Milestone[] = [
  {
    date: "FEB 2026",
    title: "Launched at the India AI Impact Summit 2026 in New Delhi",
    body: "Hon. Chief Minister Devendra Fadnavis introduced KumbhLabs as a flagship AI initiative for population-scale public service.",
    panelTitle: "A public debut",
    panelBody:
      "The launch positioned KumbhLabs at the intersection of agentic AI, civic infrastructure and the largest human gatherings on earth.",
    metrics: [
      ["Venue", "New Delhi"],
      ["Spotlight", "CM Devendra Fadnavis"],
    ],
    image: febLaunch.url,
  },
  {
    date: "MAR 2026",
    title: "Data gathering across the Kumbh ecosystem",
    body: "Collected ground-truth information on pilgrim needs, services, movement patterns and language preferences.",
    panelTitle: "Ground truth first",
    panelBody:
      "Structured field inputs became the foundation for every model, cache and interface that followed.",
    metrics: [
      ["Focus", "Pilgrim-centric data"],
      ["Output", "Verified datasets"],
    ],
    image: marSurvey.url,
  },
  {
    date: "APR 2026",
    title: "First full demo of KumbhDoot Labs + R&D on UI/UX",
    body: "Shipped the first end-to-end demonstration of the assistant and began refining the voice-first, low-literacy interface.",
    panelTitle: "Show, don't tell",
    panelBody:
      "The demo proved the stack could answer real questions end-to-end; R&D then made the experience feel effortless.",
    metrics: [
      ["Milestone", "Full demo"],
      ["R&D focus", "UI/UX"],
    ],
    video: aprilDemo.url,
  },
  {
    date: "MAY 2026",
    title: "Dynamic food personalization",
    body: "Built intent-aware food recommendations that adapt to dietary preference, location and crowd conditions.",
    panelTitle: "Personalized services",
    panelBody:
      "Food became the first service layer to demonstrate dynamic personalization at population scale.",
    metrics: [
      ["Feature", "Food personalization"],
      ["Driver", "Context + preference"],
    ],
    video: mayDemo.url,
  },
  {
    date: "JUN 2026",
    title: "KumbhLabs admin panel with CRUD operations",
    body: "Shipped an internal admin panel so teams can create, read, update and delete information without engineering support.",
    panelTitle: "Operations at speed",
    panelBody:
      "Dynamic updates from the admin panel now flow directly into the information layer pilgrims interact with.",
    metrics: [
      ["Capability", "Full CRUD"],
      ["Impact", "Dynamic updates"],
    ],
    video: juneDemo.url,
    wide: true,
  },
  {
    date: "JUL 2026",
    title: "Working demo to the Nashik administration",
    body: "Presented a live, dynamically updatable demo to Nashik administration aligned with the original proposal.",
    panelTitle: "Administration ready",
    panelBody:
      "The demo showed how information can be added or changed on the fly, matching real civic workflows.",
    metrics: [
      ["Stakeholder", "Nashik administration"],
      ["Status", "Proposal-aligned"],
    ],
    video: julyDemo.url,
  },
  {
    date: "AUG 2026",
    title: "KumbhLabs Phase Two",
    body: "Entered the next phase of the initiative with refined architecture, expanded capabilities and a clear deployment path.",
    panelTitle: "Scaling up",
    panelBody:
      "Phase Two consolidates the foundation built over six months into a production-ready system for Simhastha 2027.",
    metrics: [
      ["Phase", "Two"],
      ["Target", "Simhastha 2027"],
    ],
    video: augustDemo.url,
  },
];

type StackItem = {
  id: number;
  index: number;
  milestone: Milestone;
};

function MilestoneAsset({
  milestone,
  index,
  isEntering,
}: {
  milestone: Milestone;
  index: number;
  isEntering: boolean;
}) {
  const animation = isEntering
    ? "animate-[crossfade-in_600ms_ease-out_forwards]"
    : "animate-[crossfade-out_600ms_ease-out_forwards]";

  return (
    <div className={`absolute inset-0 h-full w-full ${animation}`}>
      {milestone.video ? (
        milestone.video.endsWith(".mp4") ? (
          <video
            src={milestone.video}
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <iframe
            src={milestone.video}
            title={milestone.panelTitle}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="h-full w-full border-0"
          />
        )
      ) : milestone.image ? (
        <>
          <img
            src={milestone.image}
            alt={milestone.panelTitle}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 opacity-70">
            <PointField />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,hsl(var(--accent)/0.35),transparent_60%)]" />
        </>
      )}
      {!milestone.video && (
        <div className="relative flex h-full flex-col justify-between p-8">
          <span
            className={`font-display text-6xl leading-none ${
              milestone.image ? "text-ivory/20" : "text-foreground/15"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p
              className={`font-display text-2xl leading-snug md:text-3xl ${
                milestone.image ? "text-ivory" : "text-foreground"
              }`}
            >
              {milestone.panelTitle}
            </p>
            <p
              className={`mt-3 max-w-md text-sm leading-relaxed ${
                milestone.image ? "text-ivory/80" : "text-muted-foreground"
              }`}
            >
              {milestone.panelBody}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProgressTimeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [stack, setStack] = useState<StackItem[]>([{ id: 0, index: 0, milestone: milestones[0]! }]);
  const idRef = useRef(1);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-driven: the milestone whose block is closest to the viewport
  // anchor line wins. Each block owns a tall scroll region, so every
  // milestone gets an equal, generous amount of dwell time.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.42;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - anchor);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive((prev) => (prev === best ? prev : best));
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Crossfade the sticky panel when the active milestone changes.
  useEffect(() => {
    if (stack[stack.length - 1]?.index === active) return;

    const newId = idRef.current++;
    setStack((prev) => [
      ...prev.slice(-1),
      { id: newId, index: active, milestone: milestones[active]! },
    ]);

    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      setStack([{ id: newId, index: active, milestone: milestones[active]! }]);
      transitionTimer.current = null;
    }, 600);

    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, [active]);

  const current = milestones[active] ?? milestones[0]!;
  const topItem = stack[stack.length - 1];

  return (
    <div ref={containerRef} className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
      <ol className="lg:col-span-6">
        {milestones.map((m, i) => {
          const isActive = i === active;
          return (
            <li
              key={m.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex min-h-[38vh] items-center py-6 lg:min-h-[68vh]"
            >
              <button
                type="button"
                onClick={() => {
                  setActive(i);
                  refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`w-full border p-6 text-left transition-all duration-700 ${
                  isActive
                    ? "border-border bg-background opacity-100 shadow-[0_18px_50px_-30px_hsl(var(--foreground)/0.45)]"
                    : "border-transparent bg-transparent opacity-45"
                }`}
              >
                <span
                  className={`inline-block px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {m.date}
                </span>
                <p
                  className={`mt-4 font-display text-xl leading-snug transition-colors duration-500 md:text-2xl ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {m.title}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:col-span-6 lg:block">
        <div className="lg:sticky lg:top-28">
          <div
            className={`relative overflow-hidden border border-border bg-secondary/60 transition-all duration-500 ${
              current.video
                ? current.wide
                  ? "aspect-video w-full rounded-2xl"
                  : "mx-auto aspect-[9/16] w-full max-w-[280px] rounded-2xl"
                : "aspect-[4/3] rounded-2xl"
            }`}
          >
            {stack.map((item, i) => (
              <MilestoneAsset
                key={item.id}
                milestone={item.milestone}
                index={item.index}
                isEntering={i === stack.length - 1}
              />
            ))}
          </div>

          <dl
            key={topItem?.id}
            className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border animate-[panel-fade_500ms_ease-out]"
          >
            {current.metrics.map(([k, v]) => (
              <div key={k} className="bg-background p-5">
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 font-display text-lg text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
