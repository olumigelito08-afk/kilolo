import { Page, PageHero, SectionHead, ImageGrid } from "@/components/site";
import type { Meta } from "@/components/seo";
import { images } from "@/lib/media";

const meta: Meta[] = [
  { title: "Clients & Partners | Supreme Energy" },
  {
    name: "description",
    content:
      "Organisations Supreme Energy has worked with, including Belema Oil, PIVOT GIS, Rosetti Pivot, Nnamdi Azikiwe University, Siat Nigeria, Saipem, Shell, Nigeria LNG, Chevron, Presco, ExxonMobil, First Hydrocarbon Nigeria, Seplat Energy, Addax Petroleum, Energy Works Technology, Neconde Energy, NNPC, TotalEnergies, Asharami, FirstBank, Access Bank, Stanbic IBTC and SPAR.",
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
  { name: "Belema Oil", logo: "/images/client-logos/belema-oil.png" },
  { name: "PIVOT GIS", logo: "/images/client-logos/pivot-gis.webp" },
  { name: "Rosetti Pivot Limited", logo: "/images/client-logos/rosetti-pivot.png" },
  {
    name: "Nnamdi Azikiwe University",
    logo: "/images/client-logos/nnamdi-azikiwe-university.webp",
  },
  { name: "Siat Nigeria Limited", logo: "/images/client-logos/siat.png" },
  { name: "Saipem", logo: "/images/client-logos/saipem.svg" },
  { name: "Shell", logo: "/images/client-logos/shell.webp" },
  { name: "Nigeria LNG Limited", logo: "/images/client-logos/nigeria-lng.avif" },
  { name: "Chevron", logo: "/images/client-logos/chevron.webp" },
  { name: "Presco", logo: "/images/client-logos/presco.jpg" },
  { name: "ExxonMobil", logo: "/images/client-logos/exxonmobil.png" },
  { name: "First Hydrocarbon Nigeria", logo: "/images/client-logos/fhn.png" },
  { name: "Seplat Energy", logo: "/images/client-logos/seplat.png" },
  { name: "Addax Petroleum", logo: "/images/client-logos/addax.png" },
  { name: "Energy Works Technology (EWT)", logo: "/images/client-logos/ewt.svg" },
  { name: "Neconde Energy Limited", logo: "/images/client-logos/neconde.png" },
  { name: "NNPC", logo: "/images/client-logos/nnpc.png" },
  {
    name: "TotalEnergies",
    logo: "https://mms.businesswire.com/media/20260128407040/en/2704819/5/Logo_TotalEnergies.svg.jpg",
  },
  { name: "Asharami", logo: "/images/client-logos/asharami.png" },
  { name: "FirstBank", logo: "/images/client-logos/first-bank.png" },
  { name: "Access Bank", logo: "/images/client-logos/access-bank.png" },
  { name: "Stanbic IBTC", logo: "/images/client-logos/stanbic-ibtc.png" },
  { name: "SPAR", logo: "/images/client-logos/spar.jpg" },
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
          {clients.map(({ name, logo }) => {
            const whiteFullBleed = ["Shell", "Chevron", "Presco"].includes(name);
            const whiteTile = [
              "Shell",
              "Chevron",
              "Presco",
              "FirstBank",
              "TotalEnergies",
              "Neconde Energy Limited",
              "First Hydrocarbon Nigeria",
            ].includes(name);
            return (
              <div
                key={name}
                className={`hover-card group flex aspect-[4/3] min-h-36 items-center justify-center border border-border ${whiteFullBleed ? "p-0" : "p-4"} ${whiteTile ? "bg-white" : "bg-muted"}`}
              >
                <img
                  src={logo}
                  alt={`${name} logo`}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${whiteFullBleed ? "object-cover" : "object-contain mix-blend-multiply"}`}
                  style={whiteTile ? { backgroundColor: "#fff" } : undefined}
                />
              </div>
            );
          })}
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
