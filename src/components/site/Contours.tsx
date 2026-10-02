import { cn } from "@/lib/utils";

function contourPath(i: number, width = 1200, height = 700) {
  const amp = 26 + (i % 7) * 9;
  const yBase = (height / 26) * i + 30;
  const phase = i * 0.55;
  const pts: string[] = [];
  for (let x = 0; x <= width; x += 40) {
    const t = x / width;
    const y =
      yBase +
      Math.sin(t * Math.PI * 2 + phase) * amp +
      Math.sin(t * Math.PI * 5.5 + phase * 1.7) * (amp * 0.28) +
      Math.cos(t * Math.PI * 1.2 - phase) * (amp * 0.5);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/** Abstract topographic contour field - the core KumbhLabs visual motif. */
export function Contours({
  lines = 26,
  className,
  tone = "ink",
  animate = true,
}: {
  lines?: number;
  className?: string;
  tone?: "ink" | "ivory";
  animate?: boolean;
}) {
  const stroke = tone === "ink" ? "var(--ink)" : "var(--ivory)";
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="contour-fade" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.05" />
          <stop offset="42%" stopColor={stroke} stopOpacity="0.42" />
          <stop offset="78%" stopColor="var(--saffron)" stopOpacity="0.5" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#contour-fade)" strokeWidth="1">
        {Array.from({ length: lines }, (_, i) => (
          <path
            key={i}
            d={contourPath(i)}
            strokeDasharray={animate ? "900 140" : undefined}
            style={
              animate
                ? {
                    animation: `dash-flow ${52 + (i % 9) * 7}s linear infinite`,
                    animationDelay: `${-i * 1.4}s`,
                  }
                : undefined
            }
          />
        ))}
      </g>
    </svg>
  );
}

/** Sparse point field suggesting people / movement across a temporary city. */
export function PointField({ className }: { className?: string }) {
  const pts: { x: number; y: number; r: number; o: number }[] = [];
  for (let i = 0; i < 260; i++) {
    const a = i * 2.399963;
    const rad = Math.sqrt(i / 260);
    const x = 300 + Math.cos(a) * rad * 280 + Math.sin(i) * 12;
    const y = 200 + Math.sin(a) * rad * 165 + Math.cos(i * 1.3) * 8;
    pts.push({
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      r: 0.9 + (i % 5) * 0.25,
      o: Number((0.18 + ((i * 37) % 60) / 140).toFixed(3)),
    });
  }
  return (
    <svg viewBox="0 0 600 400" aria-hidden="true" className={cn("h-full w-full", className)}>
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={i % 11 === 0 ? "var(--saffron)" : "var(--ink)"}
          opacity={p.o}
        />
      ))}
    </svg>
  );
}
