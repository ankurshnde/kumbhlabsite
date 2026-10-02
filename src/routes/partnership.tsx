import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm, type ContactFormValues } from "@/components/forms/contact-form";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partner with KumbhLabs - AI-first Kumbh Mela" },
      {
        name: "description",
        content:
          "Collaborate with KumbhLabs across Agentic Commerce, Digital Public Infrastructure, Multilingual AI, and human-agent interaction for the Kumbh ecosystem.",
      },
      { property: "og:title", content: "Partner with KumbhLabs" },
      {
        property: "og:description",
        content:
          "Explore partnership opportunities with KumbhLabs for the Nashik Simhastha Kumbh Mela 2027.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kumbhlabs.org/partnership" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kumbhlabs.org/partnership" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Partnerships",
          description:
            "Partner with KumbhLabs to build and deploy agentic infrastructure for the Kumbh ecosystem.",
          url: "https://kumbhlabs.org/partnership",
        }),
      },
    ],
  }),
  component: PartnershipPage,
});

async function handlePartnerSubmit(values: ContactFormValues) {
  const res = await fetch("/api/partnership", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    needsActivation?: boolean;
    message?: string;
    error?: string;
  };

  if (!res.ok || data.error) {
    throw new Error(data.error || "Failed to submit inquiry. Please try again.");
  }

  if (data.needsActivation) {
    throw new Error(
      "One-time setup: FormSubmit has sent a confirmation email to the inbox. Please click 'Activate Form' in that email to enable forwarding.",
    );
  }
}

function PartnershipPage() {
  return (
    <main className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Partnerships &amp; Collaboration</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            Partner with Kumbh Labs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We collaborate with technology leaders, startups, research institutions, and governance
            bodies to build and deploy agentic systems across the Kumbh ecosystem.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex justify-center">
        <Reveal delay={120} className="w-full max-w-lg">
          <ContactForm
            className="w-full max-w-none"
            title="Partnership Inquiry"
            subtitle="Tell us about your organization and how you envision collaborating with Kumbh Labs."
            submitLabel="Submit Proposal"
            successTitle="Inquiry received"
            successMessage="Thank you for reaching out. The team will review your proposal and get in touch with you shortly."
            onSubmit={handlePartnerSubmit}
          />
        </Reveal>
      </div>
    </main>
  );
}
