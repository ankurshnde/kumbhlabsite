import { Reveal } from "@/components/site/Reveal";

type Layer = {
  label: string;
  title: string;
  note: string;
  blocks: [string, string][];
  rail?: string;
};

const layers: Layer[] = [
  {
    label: "Layer 1",
    title: "Edge Agent Layer",
    note: "Citizen-facing · On-device",
    blocks: [
      ["Personal AI Agent", "Smartphone / feature phone"],
      ["Bhashini Voice", "STT / TTS · 22+ languages"],
      ["Local Data Vault", "AES-256 · on-device"],
      ["Cloud Sync", "DR · cross-device"],
    ],
  },
  {
    label: "Layer 2",
    title: "Ecosystem Integration",
    note: "Federated agent discovery",
    blocks: [
      ["Civic Agents", "Police · health · transport"],
      ["State Camp Agents", "Regional · language"],
      ["Commercial Agents", "Hotels · food · IRCTC"],
      ["Discovery Service", "Capability routing"],
    ],
    rail: "ONDC · ABDM · UPI · AA · IRCTC · DigiLocker",
  },
  {
    label: "Layer 3",
    title: "Sovereign Agent Platform",
    note: "DPI · trust · governance",
    blocks: [
      ["Identity & Consent", "Aadhaar · DEPA"],
      ["Agent Registry", "Federated · reputation"],
      ["Policy Engine", "RBAC · emergency"],
      ["Audit & Analytics", "Tamper-proof · FL"],
    ],
  },
  {
    label: "Layer 4",
    title: "Sovereign Cloud",
    note: "MeitY · India data residency",
    blocks: [
      ["PostgreSQL", "Relational core"],
      ["MongoDB", "Document store"],
      ["InfluxDB", "Time series"],
      ["Snowflake", "Analytics"],
    ],
  },
];

const government = [
  ["MeitY / NIC", "Cloud & DPI"],
  ["State Admin", "Mela Ops"],
  ["Civic Agencies", "Police · health"],
  ["Regulators", "CERT-In · DPDP"],
];

const pilgrims = [
  ["Individuals", "10M+ users"],
  ["Families", "Group tracking"],
  ["Intl. Visitors", "Digital visa"],
  ["Vendors", "Commerce"],
];

const footers = [
  ["Security architecture", "WAF · TLS 1.3 · AES-256 · OWASP · differential privacy"],
  ["Scalability & performance", "10k–50k msg/s · <2s response · 99.99% uptime"],
];

function StakeholderCol({ title, items }: { title: string; items: string[][] }) {
  return (
    <div className="rounded-2xl border border-dashed border-border p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map(([name, sub]) => (
          <li key={name} className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
            <p className="text-sm text-foreground">{name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SovereignArchitecture() {
  return (
    <div>
      <Reveal>
        <p className="eyebrow">AI for Kumbh</p>
        <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
          Sovereign agent architecture.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Nashik Kumbh 2027 - a government and citizen stakeholder model, from on-device agents to
          sovereign cloud, running on India's public digital rails.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[13rem_1fr_13rem]">
        <StakeholderCol title="Government" items={government} />

        <div className="space-y-5">
          {layers.map((l, i) => (
            <Reveal key={l.title} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-background p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs uppercase tracking-[0.18em] text-accent">{l.label}</span>
                  <h3 className="font-display text-xl text-foreground">{l.title}</h3>
                  <span className="text-xs text-muted-foreground">{l.note}</span>
                </div>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {l.blocks.map(([name, sub]) => (
                    <li
                      key={name}
                      className="rounded-xl border border-border bg-secondary/40 px-4 py-3"
                    >
                      <p className="text-sm text-foreground">{name}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{sub}</p>
                    </li>
                  ))}
                </ul>

                {l.rail ? (
                  <p className="mt-4 rounded-xl bg-foreground px-4 py-3 text-center text-xs tracking-[0.12em] text-background">
                    {l.rail}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <StakeholderCol title="Pilgrims" items={pilgrims} />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {footers.map(([title, sub]) => (
          <div key={title} className="rounded-2xl border border-border px-5 py-4">
            <p className="text-sm text-foreground">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
