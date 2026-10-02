/**
 * Minimal, warm hero atmosphere - a whisper of saffron at the very top
 * that quickly dissolves into clean ivory. Purely decorative.
 */
export function HeroAura({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* warm saffron band - fuller fill */}
      <div
        className="absolute inset-x-0 top-0 h-[44%]"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--saffron) 32%, #ffe8d0) 0%, color-mix(in oklab, var(--saffron) 14%, transparent) 52%, transparent 90%)",
          opacity: 0.36,
        }}
      />
      {/* primary saffron bloom */}
      <div
        className="absolute -top-[8%] left-[16%] h-[32vh] w-[32vh] rounded-full blur-[120px] animate-[aura-a_30s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--saffron) 44%, #fff0e0) 0%, transparent 68%)",
          opacity: 0.3,
        }}
      />
      {/* secondary bloom for balanced fill */}
      <div
        className="absolute -top-[6%] right-[22%] h-[24vh] w-[24vh] rounded-full blur-[100px] animate-[aura-b_34s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--saffron) 36%, #fff0e0) 0%, transparent 74%)",
          opacity: 0.24,
        }}
      />
      {/* soft dissolve into ivory */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--ivory) 84%, transparent) 40%, var(--ivory) 70%)",
        }}
      />
    </div>
  );
}
