import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page, PageHero, SectionHead, ImageGrid } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "Products | AGO, PMS, LPG, LPFO & Naphtha | Supreme Energy" },
  {
    name: "description",
    content:
      "Supreme Energy supplies AGO (diesel), PMS (petrol), LPG, LPFO and Naphtha to industrial, commercial, institutional and retail customers across Nigeria.",
  },
  { property: "og:title", content: "Supreme Energy Petroleum Products" },
  {
    property: "og:description",
    content:
      "AGO, PMS, LPG, LPFO and Naphtha supplied with verified quality, quantity and documentation.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const products = [
  {
    code: "AGO",
    name: "Automotive Gas Oil (Diesel)",
    copy: "A dependable diesel solution for sustained operational energy demand, supplied in bulk and scheduled around customer consumption.",
    tags: [
      "Industries & Manufacturing",
      "Telecommunications",
      "Banks & Financial Institutions",
      "Construction",
      "Commercial Facilities",
      "Fleet Operators",
      "Other Bulk Consumers",
    ],
    image: "Automotive Gas Oil (Diesel).jpeg",
  },
  {
    code: "PMS",
    name: "Premium Motor Spirit (Petrol)",
    copy: "Retail filling station supply, commercial, institutional and bulk distribution with product quality, safe handling, customer convenience and demand-based replenishment.",
    tags: ["Retail Stations", "Commercial", "Institutional", "Bulk Distribution"],
    image: "Premium Motor Spirit (Petrol).webp",
  },
  {
    code: "LPG",
    name: "Liquefied Petroleum Gas",
    copy: "Sourcing, supply and distribution of LPG for commercial and domestic applications, with safety-conscious handling and reliable delivery.",
    tags: ["Commercial", "Domestic", "Safe Handling", "Scheduled Delivery"],
    image: "Liquefied Petroleum Gas.jpg",
  },
  {
    code: "LPFO",
    name: "Low Pour Fuel Oil",
    copy: "Suitable for industrial and commercial energy applications where heavy fuel oil is required.",
    tags: ["Industrial", "Commercial"],
    image: "Low Pour Fuel Oil.jpeg",
  },
  {
    code: "NAPHTHA",
    name: "Naphtha",
    copy: "Part of our bulk petroleum products trading portfolio, with emphasis on commercial and industrial supply.",
    tags: ["Bulk Trading", "Commercial", "Industrial"],
    image: "Naphtha.jpg",
  },
];

const quality = [
  "Product Specification",
  "Quality Checks",
  "Documentation",
  "Quantity Verification",
  "Safe Handling",
  "Storage & Transport",
];

export default function Products() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Products"
        title="Quality petroleum products, supplied on schedule"
        titleAccent
        copy="AGO, PMS, LPG, LPFO and Naphtha supplied to industrial, commercial, institutional and retail customers with verified quality and quantity."
      />

      <section className="section space-y-16">
        {products.map((p, i) => (
          <article key={p.code} className="reveal grid items-center gap-10 lg:grid-cols-2 group">
            <div className={`overflow-hidden hover-image-border ${i % 2 ? "lg:order-2" : ""}`}>
              <img
                src={pubImage(p.image)}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:saturate-125"
              />
            </div>
            <div>
              <p className="eyebrow text-energy transition-all duration-300 group-hover:text-flame inline-block">
                {p.code}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl transition-colors duration-300 group-hover:text-brand">
                {p.name}
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                {p.copy}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="hover-tag px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy text-on-dark">
        <div className="section">
          <SectionHead
            dark
            eyebrow="Quality Assurance"
            title="Product integrity at every handover"
            copy="Specifications and requirements are confirmed, quality checks carried out, supply-chain documentation maintained, quantities verified at loading and receipt, records reconciled and product handled, stored and transported safely."
          />
          <div className="mt-12 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-6">
            {quality.map((q, i) => (
              <div key={q} className="hover-tile-dark border border-on-dark/15 bg-navy p-6 group">
                <p className="text-xs font-bold text-flame transition-all duration-250 group-hover:scale-110 inline-block">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-wide transition-colors duration-250 group-hover:text-flame">
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead
          eyebrow="Supply & Logistics"
          title="Terminals, haulage, marine and retail"
          copy="Loading, storage coordination, dispatch planning, route coordination, vessel coordination and forecourt operations working as one chain."
        />
        <ImageGrid items={[]} />
        <Link to="/quote" className="btn-energy mt-12">
          Request Product Pricing <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Page>
  );
}
