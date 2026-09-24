import { Page, PageHero, SectionHead, ImageGrid } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "About Us | Supreme Energy" },
  {
    name: "description",
    content:
      "Supreme Energy (RC7982142) is an indigenous Nigerian downstream oil & gas company with deep engineering, marine and project management heritage.",
  },
  { property: "og:title", content: "About Supreme Energy" },
  {
    property: "og:description",
    content:
      "Vision, mission, core values, operating structure and heritage of an indigenous Nigerian downstream energy company.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const structure = [
  "Management",
  "Commercial & Trading",
  "Supply & Operations",
  "Logistics & Marine",
  "Retail Operations",
  "Finance & Administration",
  "HSE & Compliance",
  "Business Development",
];
const divisions = [
  "Oil and Gas Servicing",
  "Environmental Services",
  "Civil & Structural Engineering",
  "Procurement",
  "Project Management",
];
const serve = [
  "Manufacturing",
  "Banking & Financial Services",
  "Telecommunications",
  "Construction",
  "Hospitality",
  "Commercial Facilities",
  "Industrial Customers",
  "Fleet Operators",
  "Government & Institutional Customers",
  "Retail Consumers",
];

const insideImages = [
  "Retail & Filling Station Operations.png",
  "project2.jpg",
  "project5.jpg",
  "project7.jpg",
  "project8.jpg",
  "project9.jpg",
  "project13 - Copy (2).jpeg",
  "project14 - Copy - Copy.jpeg",
  "project15 - Copy - Copy.jpeg",
  "project16 - Copy - Copy.jpeg",
  "project17 - Copy - Copy.jpg",
  "project19 - Copy (2).jpeg",
  "Retail Fuel Operations.png",
  "project20 - Copy - Copy.jpeg",
  "safety - Copy - Copy.jpeg",
].map((name) => ({ name, url: pubImage(name) }));

export default function About() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="About Us"
        title="An indigenous Nigerian downstream energy company"
        copy="Supreme Energy (RC7982142) was incorporated under the Allied Matters and Companies Decree of 1990 and today delivers quality petroleum products, dependable supply and safe operations."
      />

      <section className="section grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal hover-image-border overflow-hidden">
          <img
            src={pubImage("Supreme Energy product haulage fleet.png")}
            alt="Supreme Energy product haulage fleet"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-all duration-500 hover:scale-[1.04] hover:saturate-125"
          />
        </div>
        <div className="reveal">
          <SectionHead
            eyebrow="Who We Are"
            title="Quality products. Timely delivery. Reliable energy solutions."
            copy="Our primary business is downstream oil & gas: petroleum product sourcing, trading, supply, distribution and retail, supported by energy procurement, product logistics, marine and coastal petroleum logistics, and LPG supply and distribution."
          />
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            We deliver dependable energy solutions to commercial, industrial, institutional and
            retail customers, and retain historical experience in specialist engineering design,
            fabrication, marine logistics, oil & gas procurement, project management, construction
            engineering and mechanical and piping support.
          </p>
        </div>
      </section>

      <section className="bg-navy text-on-dark">
        <div className="section grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-flame">Vision</p>
            <p className="mt-4 leading-8 text-on-dark-muted">
              To become a trusted indigenous energy company recognised for reliability, product
              quality, operational excellence and sustainable growth across Nigeria and the wider
              West African energy market.
            </p>
          </div>
          <div>
            <p className="eyebrow text-flame">Mission</p>
            <p className="mt-4 leading-8 text-on-dark-muted">
              To provide reliable access to quality petroleum products through efficient sourcing,
              responsible operations, timely delivery and exceptional customer service.
            </p>
          </div>
          <div>
            <p className="eyebrow text-flame">Core Values</p>
            <ul className="mt-4 space-y-2 text-on-dark-muted">
              {[
                "Integrity",
                "Reliability",
                "Quality",
                "Safety",
                "Professionalism",
                "Customer Focus",
                "Accountability",
              ].map((v) => (
                <li
                  key={v}
                  className="border-b border-on-dark/10 pb-2 hover-slide hover:text-flame transition-all duration-200 cursor-default"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-flame opacity-0 transition-opacity duration-200 hover:opacity-100">
                      →
                    </span>
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead eyebrow="Operating Structure" title="Eight functions, one delivery chain" />
        <div className="mt-10 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-4">
          {structure.map((s, i) => (
            <div
              key={s}
              className="reveal group hover-tile border border-border bg-background p-6 transition-all duration-700 ease-in-out hover:bg-flame hover:text-deep"
            >
              <p className="inline-block text-xs font-bold text-brand transition-all duration-700 group-hover:scale-110 group-hover:text-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-bold transition-colors duration-700 group-hover:text-deep">
                {s}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <SectionHead
            eyebrow="Historical Organizational Structure"
            title="Divisions from our engineering heritage"
            copy="Operations and Administration remain the two major functions supporting these divisions."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {divisions.map((d) => (
              <span key={d} className="hover-tag px-5 py-3 text-sm font-semibold">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <SectionHead eyebrow="Who We Serve" title="Customers across Nigeria's economy" />
          <div className="mt-10 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-5">
            {serve.map((s) => (
              <p
                key={s}
                className="group hover-tile border border-border bg-muted px-5 py-6 text-sm font-semibold transition-all duration-700 ease-in-out hover:bg-brand hover:text-on-dark"
              >
                <span className="transition-colors duration-700 group-hover:text-on-dark">{s}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead eyebrow="Our Operations" title="Inside Supreme Energy" />
        <ImageGrid items={insideImages} />
      </section>
    </Page>
  );
}
