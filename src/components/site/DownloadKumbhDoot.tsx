import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const options = [
  { label: "App Store", note: "iPhone & iPad", url: "" },
  { label: "Google Play", note: "Android", url: "" },
];

export function DownloadKumbhDoot({
  className,
  children = "Download Kumbh Labs",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[26rem] gap-0 rounded-2xl border-border bg-background p-8">
        <DialogTitle className="font-display text-3xl font-medium tracking-tight text-foreground">
          Get Kumbh Labs
        </DialogTitle>
        <DialogDescription className="mt-2 text-sm text-muted-foreground">
          Choose your platform.
        </DialogDescription>

        <div className="mt-7 flex flex-col gap-3">
          {options.map((o) => {
            const disabled = !o.url;
            const inner = (
              <>
                <span className="font-display text-lg text-foreground">{o.label}</span>
                <span className="text-xs text-muted-foreground">
                  {disabled ? "Coming soon" : o.note}
                </span>
              </>
            );
            const base =
              "flex items-center justify-between rounded-xl border border-border px-5 py-4 text-left transition-colors";
            return disabled ? (
              <div
                key={o.label}
                aria-disabled="true"
                className={cn(base, "cursor-not-allowed opacity-50")}
              >
                {inner}
              </div>
            ) : (
              <a
                key={o.label}
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={cn(base, "hover:border-accent hover:bg-secondary/60")}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
