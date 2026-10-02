import logoAsset from "@/assets/kumbh-labs-icon.svg.asset.json";
import skylineAsset from "@/assets/temple-skyline.png.asset.json";
import { Link } from "@tanstack/react-router";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[88rem] px-6 pt-16 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2">
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
            </p>

            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              A R&D initiative for an AI-first Kumbh Mela.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:justify-end"
          >
            <Link
              to="/research"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Research
            </Link>
            <Link
              to="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              to="/kumbhdoot"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              KumbhDoot
            </Link>
            <a
              href="https://projectnanda.org"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Project NANDA
            </a>
            <Link
              to="/get-involved"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Get Involved
            </Link>
          </nav>
        </div>
        <img
          src={skylineAsset.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none mt-10 block w-full select-none"
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KumbhLabs. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/showcase/kumbhlabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Kumbh Labs on LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4 transition-colors group-hover:text-accent" />
            <span>Kumbh Labs</span>
          </a>
          <p className="eyebrow text-xs text-muted-foreground">Nashik Simhastha Kumbh Mela 2027</p>
        </div>
      </div>
    </footer>
  );
}
