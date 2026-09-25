import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page, PageHero, SectionHead, services } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "Services | Supreme Energy" },
  {
    name: "description",
    content:
      "Petroleum supply, LPG distribution, terminal and gantry operations, haulage, marine logistics, retail operations plus engineering, fabrication, NDT, scaffolding and project management.",
  },
  { property: "og:title", content: "Supreme Energy Services" },
  {
    property: "og:description",
    content:
      "Downstream energy services and historical engineering capability across twelve service lines.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const detail: { title: string; copy: string; image: string }[] = [
  {
    title: "Terminal, Gantry & Bulk Supply",
    copy: "Efficient loading, product handling, storage coordination, dispatch planning, quantity verification, operational documentation and safe movement of product, aligned to customer schedules.",
    image: "124.jpg",
  },
  {
    title: "Logistics & Distribution",
    copy: "Delivery discipline, route coordination, customer visibility, clear communication, complete documentation and responsive service on every trip.",
    image: "Logistics & Distribution.jpg",
  },
  {
    title: "Marine & Petroleum Logistics",
    copy: "Marine logistics solutions, vessel coordination, terminal interface, coastal petroleum logistics, operational planning and strategic marine partnerships.",
    image: "122.jpg",
  },
  {
    title: "Retail & Filling Station Operations",
    copy: "Safe access, retail forecourt operations, fuel pump operations, customer convenience, service discipline, tanker-supported replenishment and a brand-aligned retail experience.",
    image: "Retail Fuel Operations.png",
  },
  {
    title: "Energy Procurement",
    copy: "Procurement of energy and associated mechanical and electrical materials for industrial and commercial operations.",
    image: "Energy Procurement services page.jpg",
  },
];

const heritage: { title: string; copy: string; image: string }[] = [
  {
    title: "Civil Engineering & Construction",
    copy: "Roads, buildings, structures and civil works delivered for public and private clients.",
    image: "civil-engineering.jpg",
  },
  {
    title: "Water Engineering",
    copy: "Water systems engineering and supporting civil infrastructure.",
    image: "Water Engineering.jpg",
  },
  {
    title: "Environmental Engineering",
    copy: "Environmental services supporting compliant industrial operations.",
    image: "Environmental Engineering.webp",
  },
  {
    title: "Fabrication Works",
    copy: "Structural and piping fabrication supporting brownfield and construction campaigns.",
    image: "Fabrication Works - Copy (2).jpg",
  },
  {
    title: "NDT & Inspection",
    copy: "Non-destructive testing and inspection carried out by qualified personnel.",
    image: "NDT & Inspection.jpg",
  },
  {
    title: "Scaffolding",
    copy: "Access and load-bearing scaffolding designed and erected to project requirements.",
    image: "Scaffolding in services page.jpeg",
  },
  {
    title: "Project Management",
    copy: "Managing projects and programmes, project support, controls, planning, scheduling, reporting, audits, risk assessments, post-project reviews, mentoring, project rescue and PMO deployment.",
    image: "Project Management.jpg",
  },
];

const slug = (s: string) =>
  s
    .toLowerCase()
    .replaceAll("&", "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function Services() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Services"
        title="Downstream delivery backed by technical depth"
        copy="Twelve service lines spanning petroleum supply and logistics, plus the engineering, fabrication and project capability built over decades."
        copyAccent
      >
        <div className="mt-9 flex flex-wrap gap-3">
          {services.map((s) => (
            <span
              key={s}
              className="service-jump cursor-default bg-on-dark px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy hover:shadow-xl"
            >
              {s}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <SectionHead
          eyebrow="Core Downstream Services"
          title="Product moved safely, accounted for accurately"
        />
        <div className="mt-12 space-y-16">
          {detail.map((item, i) => (
            <article
              key={item.title}
              id={slug(item.title)}
              className="reveal grid scroll-mt-28 items-center gap-10 group lg:grid-cols-2"
            >
              <div className={`overflow-hidden hover-image-border ${i % 2 ? "lg:order-2" : ""}`}>
                <img
                  src={pubImage(item.image)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:saturate-125"
                />
              </div>
              <div>
                <p className="eyebrow text-brand transition-all duration-300 group-hover:text-flame inline-block">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-3xl font-extrabold transition-colors duration-300 group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="engineering-and-technical-services"
        className="scroll-mt-28 bg-muted"
      >
        <div className="section">
          <SectionHead
            eyebrow="Historical Experience"
            title="Engineering & technical services"
            copy="Capability retained from the company's engineering portfolio and available to clients today."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {heritage.map((item) => (
              <article
                key={item.title}
                id={slug(item.title)}
                className="reveal card-tech scroll-mt-28"
              >
                <img
                  src={pubImage(item.image)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
          <Link to="/quote" className="btn-energy mt-12">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Page>
  );
}
