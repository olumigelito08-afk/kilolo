import { Page, PageHero, SectionHead, ImageGrid } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "Selected Experience & Projects | Supreme Energy" },
  {
    name: "description",
    content:
      "Historical experience of Supreme Energy: offshore flowlines, pipeline maintenance, fabrication, scaffolding, cathodic protection, civil construction and marine works in Nigeria.",
  },
  { property: "og:title", content: "Supreme Energy Project Experience" },
  {
    property: "og:description",
    content:
      "A record of executed engineering, marine, civil and inspection projects delivered across Nigeria.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const executed = [
  "Robokre offshore platform flowline — Belema Oil",
  "Tie-in point at Innda offshore platform — Belema Oil",
  "PWD Project, Chevron — sublet from PIVOT GIS LTD",
  "SPDC 3-km pipeline maintenance, Eleme, Rivers State",
  "NBC Plants Fuel Storage Facility — inspection, design and construction",
  "Ten Bedroom Hotel for Nacoon Guest",
  "Load-bearing scaffold for Total-ELF Nigeria",
  "Nneobi-Nnewi access road — Anambra State Government",
  "Critical lift supervision — ExxonMobil Shorebase, Onne",
  "Protective fenders — NLNG ISB/OSB Cargo Jetty",
  "Protective fenders — NLNG MOF-Jetty 1 & 2",
  "Cathodic protection system with monitoring and repairs",
  "₦25m residential duplex for Pastor Bennth Okafor",
  "Lecture Hall Building — Nnamdi Azikiwe University, Awka",
  "Five single 1000 MT ramp barges",
];

const galleryImages = [
  "Automotive Gas Oil (Diesel).jpeg",
  "project20 - Copy (2).jpeg",
  "project19 - Copy (2).jpeg",
  "project17 - Copy - Copy.jpg",
  "project16 - Copy (2).jpeg",
  "project15 - Copy (2).jpeg",
  "project14 - Copy (2).jpeg",
  "project13 - Copy (2).jpeg",
  "project12 - Copy (2).jpeg",
  "project11 - Copy (2).jpg",
  "project10 - Copy (2).webp",
  "project9.jpg",
  "project7.jpg",
  "project8.jpg",
  "project6.jpg",
  "project5.jpg",
  "project4.jpeg",
  "project3.jpeg",
  "project2.jpg",
  "project1.jpg",
  "project.jpg",
].map((name) => ({ name, url: pubImage(name) }));

export default function Projects() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Historical Experience"
        title="Selected experience & projects"
        copy="Executed engineering, marine, civil and inspection projects from the company's earlier portfolio. These organisations are project clients from that work and are not presented as current petroleum-trading customers."
        copyAccent
      />

      <section className="section">
        <SectionHead eyebrow="Executed Projects" title="A record of delivery" />
        <div className="mt-10 grid gap-px bg-transparent sm:grid-cols-2">
          {executed.map((p, i) => (
            <div key={p} className="reveal hover-tile flex gap-5 border border-border bg-background p-6 group">
              <span className="text-xs font-bold text-brand transition-all duration-300 group-hover:text-flame group-hover:scale-110 inline-block self-start mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold leading-7 transition-colors duration-300 group-hover:text-brand">
                {p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <SectionHead eyebrow="Project Gallery" title="Work in the field" />
          <ImageGrid items={galleryImages} />
        </div>
      </section>
    </Page>
  );
}
