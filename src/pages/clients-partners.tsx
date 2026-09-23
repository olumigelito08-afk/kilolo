import { Page, PageHero, SectionHead, ImageGrid } from "@/components/site";
import type { Meta } from "@/components/seo";
import { images } from "@/lib/media";

const meta: Meta[] = [
  { title: "Clients & Partners | Supreme Energy" },
  {
    name: "description",
    content:
      "Organisations Supreme Energy has worked with, including Belema Oil, PIVOT GIS, Rosetti Pivot, Nnamdi Azikiwe University, Siat Nigeria, Saipem, Shell, Nigeria LNG, Chevron, Presco and ExxonMobil.",
  },
  { property: "og:title", content: "Supreme Energy Clients & Partners" },
  {
    property: "og:description",
    content:
      "A record of client and partner relationships built through project delivery in Nigeria.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const clients = [
  "Belema Oil",
  "PIVOT GIS",
  "Rosetti Pivot Limited",
  "Nnamdi Azikiwe University",
  "Siat Nigeria Limited",
  "Saipem",
  "Shell",
  "Nigeria LNG Limited",
  "Chevron",
  "Presco",
  "ExxonMobil",
];

export default function Clients() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Clients & Partners"
        title="Relationships built on delivery"
        copy="Organisations we have worked with through our project portfolio. These are project relationships from our historical experience and are not presented as current petroleum-trading customers."
      />

      <section className="section">
        <SectionHead eyebrow="Clients" title="Project clients" />
        <div className="mt-10 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c}
              className="hover-card grid min-h-28 place-items-center border border-border bg-background p-6 text-center text-sm font-bold uppercase tracking-wide group"
            >
              <span className="transition-all duration-300 group-hover:text-brand group-hover:scale-105">
                {c}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <SectionHead
            eyebrow="Partners"
            title="Strategic partnerships"
            copy="Supply, marine and logistics partnerships that support sourcing, vessel coordination and dependable distribution."
          />
          <div className="mt-10 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Supply & Sourcing Partners",
              "Marine & Vessel Partners",
              "Haulage & Distribution Partners",
            ].map((p) => (
              <div key={p} className="hover-tile border border-border bg-muted p-8 group">
                <p className="font-bold transition-colors duration-300 group-hover:text-brand">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead eyebrow="Collaboration" title="Working alongside our clients" />
        <ImageGrid items={images([86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98])} />
      </section>
    </Page>
  );
}
