import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/kumbh-labs-icon.svg.asset.json";
import thumbAsset from "@/assets/blog-kumbh-illustration.png.asset.json";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog - KumbhLabs" },
      {
        name: "description",
        content:
          "Writing from KumbhLabs on agentic systems, population-scale infrastructure and the AI-first Kumbh Mela.",
      },
      { property: "og:title", content: "Blog - KumbhLabs" },
      {
        property: "og:description",
        content:
          "Writing from KumbhLabs on agentic systems, population-scale infrastructure and the AI-first Kumbh Mela.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kumbhlabs.org/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Startups & Innovators: Unlock the $2B Kumbh Mela 2027 AI-First Opportunity",
    excerpt:
      "How an AI-first approach to the Simhastha Kumbh Mela opens a new category of population-scale civic infrastructure for builders.",
    author: "Ramesh Raskar",
    date: "NOV 2024",
    url: "https://www.linkedin.com/pulse/startups-innovators-unlock-2b-kumbh-mela-2027-ai-first-ramesh-raskar-baane/",
    image: thumbAsset.url,
  },
];

function BlogPage() {
  return (
    <main className="mx-auto max-w-[80rem] px-6 py-16 lg:px-12 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <img src={logoAsset.url} alt="Kumbh Labs" className="h-12 w-12" />
          <h1 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-foreground">
            Kumbh Labs Blog
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Research, notes, and ideas from the lab.
          </p>
          <div className="mt-8 h-px w-24 bg-border" />
        </aside>

        {/* Post list */}
        <div className="divide-y divide-border border-t border-border">
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[96px_minmax(0,1fr)] items-start gap-5 py-8 sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-7 lg:grid-cols-[140px_minmax(0,1fr)_auto]"
            >
              <img
                src={post.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full rounded-md object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="min-w-0">
                <h2 className="font-display text-lg font-normal leading-snug text-foreground transition-colors group-hover:text-accent sm:text-xl">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <p className="col-span-2 text-[11px] font-medium tracking-[0.14em] text-muted-foreground lg:col-span-1 lg:pl-6 lg:pt-1">
                {post.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
