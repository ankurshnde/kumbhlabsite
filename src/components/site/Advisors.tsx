import { Reveal } from "@/components/site/Reveal";
import raskarAsset from "@/assets/advisor-raskar.png.asset.json";
import dhavseAsset from "@/assets/advisor-dhavse.png.asset.json";
import gedamAsset from "@/assets/advisor-gedam.png.asset.json";
import shekharAsset from "@/assets/advisor-shekhar.png.asset.json";
import vibhorAsset from "@/assets/advisor-vibhor.png.asset.json";
import ketanAsset from "@/assets/advisor-ketan.png.asset.json";
import saurabhAsset from "@/assets/core-saurabh.png.asset.json";
import ankurAsset from "@/assets/core-ankur.png.asset.json";
import yashAsset from "@/assets/core-yash.png.asset.json";

type Advisor = {
  name: string;
  role: string;
  photo: string;
};

type Group = {
  tag: string;
  advisors: Advisor[];
};

const coreTeam: Advisor[] = [
  {
    name: "Dr. Ramesh Raskar",
    role: "MIT & Project NANDA",
    photo: raskarAsset.url,
  },
  {
    name: "Saurabh Sakalkar",
    role: "Project NANDA",
    photo: saurabhAsset.url,
  },
  {
    name: "Ankur Shinde",
    role: "Project NANDA",
    photo: ankurAsset.url,
  },
  {
    name: "Yash More",
    role: "Kumbhthon",
    photo: yashAsset.url,
  },
];

const groups: Group[] = [
  {
    tag: "Governance",
    advisors: [
      {
        name: "Kaustubh Dhavse",
        role: "Chief Advisor to CM, Maharashtra",
        photo: dhavseAsset.url,
      },
      {
        name: "Dr. Praveen Gedam",
        role: "Divisional Commissioner, Nashik",
        photo: gedamAsset.url,
      },
      {
        name: "Shekhar Singh",
        role: "Commissioner of Kumbh Mela, Nashik",
        photo: shekharAsset.url,
      },
    ],
  },
  {
    tag: "Commerce",
    advisors: [
      {
        name: "Vibhor Jain",
        role: "Acting CEO, ONDC",
        photo: vibhorAsset.url,
      },
      {
        name: "Ketan Bhagwate",
        role: "CEO, MySellarCentral",
        photo: ketanAsset.url,
      },
    ],
  },
];

function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <div className="group">
      <div className="overflow-hidden border border-border bg-muted/40">
        <img
          src={advisor.photo}
          alt={advisor.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      </div>
      <h3 className="mt-4 font-display text-xl leading-snug text-foreground">{advisor.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{advisor.role}</p>
    </div>
  );
}

function GroupTag({ label }: { label: string }) {
  return (
    <span className="inline-block border border-border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {label}
    </span>
  );
}

export function Advisors() {
  return (
    <section className="mt-28">
      <Reveal>
        <p className="eyebrow">Advisors</p>
        <h2 className="mt-6 max-w-3xl font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
          Advisors who guide the lab across every dimension.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-16">
        {groups.map((group, groupIndex) => (
          <Reveal key={group.tag} delay={groupIndex * 80}>
            <GroupTag label={group.tag} />
            <div
              className={
                group.advisors.length === 1
                  ? "mt-6 grid gap-8 lg:max-w-[calc(33.333%-1.5rem)]"
                  : "mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {group.advisors.map((advisor) => (
                <AdvisorCard key={advisor.name} advisor={advisor} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="eyebrow mt-28">Leadership</p>
        <h2 className="mt-6 max-w-3xl font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
          The people leading the lab forward.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {coreTeam.map((advisor) => (
          <AdvisorCard key={advisor.name} advisor={advisor} />
        ))}
      </div>
    </section>
  );
}
