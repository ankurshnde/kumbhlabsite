import logoAsset from "@/assets/kumbh-labs-icon.svg.asset.json";
import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/research", label: "Research" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
        <nav
          aria-label="Primary"
          className="pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-foreground/10 bg-background/85 px-2 py-2 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.28)] backdrop-blur-2xl backdrop-saturate-[150%] grain"
        >
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2 pl-2"
            onClick={() => setOpen(false)}
          >
            <img
              src={logoAsset.url}
              alt="KumbhLabs logo"
              className="h-7 w-auto"
              width={28}
              height={28}
            />
            <span className="font-sans flex items-baseline gap-[0.35em] text-lg font-semibold tracking-tight">
              <span className="text-foreground">Kumbh</span>
              <span className="text-accent">Labs</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-full px-4 py-2 text-[0.85rem] font-medium text-foreground transition-colors hover:opacity-80"
              >
                {l.label}
                {pathname.startsWith(l.to) && (
                  <span className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 pr-1">
            <Link
              to="/get-involved"
              className="hidden rounded-full bg-foreground px-4 py-2 text-[0.8rem] font-medium tracking-wide text-background transition-colors duration-300 hover:bg-foreground/85 md:inline-block"
            >
              Get Involved
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[4.5rem] z-40 mx-auto max-w-5xl px-4 md:hidden">
          <div className="rounded-3xl border border-foreground/10 bg-background/90 p-3 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.28)] backdrop-blur-2xl backdrop-saturate-[150%] grain">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors",
                    pathname.startsWith(l.to)
                      ? "bg-foreground/5"
                      : "hover:bg-foreground/5 hover:opacity-80",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/get-involved"
                onClick={() => setOpen(false)}
                className="mt-1 w-full rounded-2xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
