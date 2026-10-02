import { cn } from "@/lib/utils";

/** Minimal KumbhDoot interface mockup - rendered, not a stock image. */
export function Phone({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[16rem] rounded-[2.2rem] border border-foreground/20 bg-ink p-2.5 shadow-[0_40px_80px_-40px_oklch(0.215_0.045_275_/_0.55)] sm:w-[17.5rem]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-ivory">
        <div className="flex items-center justify-between px-5 pt-4 font-mono text-[9px] text-muted-foreground">
          <span>4:32</span>
          <span>नाशिक · LIVE</span>
        </div>

        <div className="px-5 pb-5 pt-4">
          <p className="eyebrow">KumbhDoot</p>
          <p className="mt-2 font-display text-lg leading-snug text-foreground">
            नमस्कार. मी तुम्हाला कशी मदत करू?
          </p>

          <div className="mt-5 space-y-2.5">
            <div className="rounded-sm border border-border bg-secondary px-3 py-2.5 text-[11px] text-foreground">
              Nearest drinking water &amp; toilets
            </div>
            <div className="rounded-sm border border-border bg-secondary px-3 py-2.5 text-[11px] text-foreground">
              Ramkund ghat - crowd status
            </div>
            <div className="rounded-sm border border-accent/40 bg-accent/10 px-3 py-2.5 text-[11px] text-foreground">
              Lost person assistance
            </div>
          </div>

          <div className="mt-5 rounded-sm border border-border px-3 py-3">
            <p className="font-mono text-[9px] tracking-widest text-muted-foreground">
              ANSWERED FROM APPROVED SOURCE
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-foreground">
              Water point 300 m north-east. Queue moderate. Route avoids the Sadhugram corridor.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="relative flex size-10 items-center justify-center rounded-full bg-foreground">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
              <span className="relative block h-4 w-2.5 rounded-full bg-background" />
            </span>
            <p className="text-[11px] text-muted-foreground">Tap to speak · 20+ languages</p>
          </div>
        </div>
      </div>
    </div>
  );
}
