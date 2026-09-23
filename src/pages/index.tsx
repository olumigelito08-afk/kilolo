import { Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import {
  ArrowRight,
  Fuel,
  Truck,
  Ship,
  Factory,
  ShieldCheck,
  Gauge,
  Handshake,
  Users,
  Award,
  Clock,
  Target,
  ChevronRight,
} from "lucide-react";
import { Page, SectionHead } from "@/components/site";
import type { Meta } from "@/components/seo";
import { heroCarouselImages, pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "Supreme Energy | Indigenous Nigerian Downstream Oil & Gas Company" },
  {
    name: "description",
    content:
      "Supreme Energy is an indigenous Nigerian downstream oil & gas company delivering AGO, PMS, LPG, LPFO and Naphtha with reliable supply, timely delivery and safe operations.",
  },
  {
    property: "og:title",
    content: "Supreme Energy | Quality Products. Timely Delivery. Reliable Energy Solutions.",
  },
  {
    property: "og:description",
    content:
      "Petroleum products trading, bulk supply, distribution, marine logistics and retail fuel operations across Nigeria and West Africa.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const business = [
  {
    title: "Petroleum Products Trading",
    copy: "Competitive sourcing and trading of refined petroleum products for commercial and industrial demand.",
    image: "Petroleum Products Trading.png",
  },
  {
    title: "Importation & Sourcing",
    copy: "Structured importation and sourcing arrangements that protect supply continuity and product quality.",
    image: "Importation & Sourcing.jpg",
  },
  {
    title: "Bulk Supply & Distribution",
    copy: "Bulk volumes supplied and distributed to industrial, commercial and institutional customers.",
    image: "Bulk Supply & Distribution.jpg",
  },
  {
    title: "Product Logistics",
    copy: "Coordinated haulage, route planning and delivery discipline from terminal to customer site.",
    image: "product logistics.jpg",
  },
  {
    title: "Retail Fuel Operations",
    copy: "Forecourt operations built on service discipline, safety and customer convenience.",
    image: "Retail Fuel Operations.png",
  },
  {
    title: "LPG Supply & Distribution",
    copy: "Safety-conscious LPG sourcing, supply and distribution for commercial and domestic use.",
    image: "LPG Supply & Distribution.jpeg",
  },
  {
    title: "Marine / Coastal Logistics",
    copy: "Vessel coordination, terminal interface and coastal petroleum logistics planning.",
    image: "Marine & Coastal Logistics.jpeg",
  },
  {
    title: "Industrial & Commercial Fuel",
    copy: "Scheduled fuel programmes that keep plants, fleets and facilities running.",
    image: "fuel in car.jpeg",
  },
  {
    title: "Energy Procurement",
    copy: "Procurement support for energy requirements across multiple product categories.",
    image: "Energy Procurement.jpeg",
  },
];

const whyUs = [
  { Icon: Award, title: "Quality Products" },
  { Icon: Fuel, title: "Reliable Supply" },
  { Icon: Clock, title: "Timely Delivery" },
  { Icon: ShieldCheck, title: "Safety First" },
  { Icon: Users, title: "Customer Focus" },
  { Icon: Target, title: "Professional Team" },
  { Icon: Handshake, title: "Integrated Energy Solutions" },
];

const serviceCards = [
  {
    title: "Petroleum Products Supply",
    copy: "AGO, PMS, LPFO and Naphtha supplied in bulk with verified quantity and documentation.",
    image: "Petroleum Products Supply.png",
    Icon: Fuel,
  },
  {
    title: "LPG Supply & Distribution",
    copy: "Commercial and domestic LPG handled under strict safety procedures.",
    image: "LPG Supply & Distribution.jpeg",
    Icon: Gauge,
  },
  {
    title: "Terminal, Gantry & Bulk Supply",
    copy: "Loading, storage coordination, dispatch planning and safe product movement.",
    image: "Terminal, Gantry & Bulk Supply.jpg",
    Icon: Factory,
  },
  {
    title: "Product Logistics & Haulage",
    copy: "Route coordination, customer visibility and dependable delivery windows.",
    image: "Product Logistics & Haulage.jpeg",
    Icon: Truck,
  },
  {
    title: "Marine & Coastal Logistics",
    copy: "Vessel coordination and terminal interface through strategic marine partnerships.",
    image: "Marine & Coastal Logistics.jpeg",
    Icon: Ship,
  },
  {
    title: "Engineering & Project Experience",
    copy: "Decades of engineering, fabrication, inspection and project management delivery.",
    image: "Engineering & Project Experience.jpg",
    Icon: ShieldCheck,
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const total = heroCarouselImages.length;

  const goTo = useCallback(
    (i: number) => {
      setSlide(((i % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(slide + 1), [goTo, slide]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (total === 0) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % total), 2000);
    return () => clearInterval(t);
  }, [total]);

  const currentHero = heroCarouselImages[slide];

  return (
    <Page meta={meta}>
      <section className="relative min-h-[92vh] overflow-hidden bg-deep pt-16">
        {currentHero?.src && (
          <img
            key={currentHero.src}
            src={currentHero.src}
            alt={currentHero.alt}
            loading={slide === 0 ? "eager" : "lazy"}
            fetchPriority={slide === 0 ? "high" : "low"}
            decoding="async"
            width="1920"
            height="1080"
            className="hero-image-enter absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/80 to-navy/40" />

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-on-dark/20 text-on-dark backdrop-blur transition hover:bg-flame hover:text-deep focus:outline-none focus:ring-2 focus:ring-flame sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
          <p className="eyebrow text-bright">
            Quality Products. Timely Delivery. Reliable Energy Solutions.
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] text-on-dark sm:text-7xl">
            Powering Energy.
            <br />
            Delivering Reliability.
            <br />
            <span className="text-flame">Building Trust.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-on-dark-muted">
            An indigenous Nigerian downstream oil & gas company delivering petroleum product
            sourcing, trading, supply, distribution, retail, product logistics, marine and coastal
            petroleum logistics and LPG supply to commercial, industrial, institutional and retail
            customers.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/quote" className="btn-energy btn-transparent-hover">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="btn-ghost-dark">
              Explore Our Products
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <div className="flex flex-1 gap-2">
              {heroCarouselImages.map((img, i) => (
                <button
                  key={`dot-${img.src}-${i}`}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === slide}
                  onClick={() => goTo(i)}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    i === slide
                      ? "bg-flame max-w-[64px]"
                      : "bg-on-dark/30 max-w-[40px] hover:bg-on-dark/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <SectionHead
            eyebrow="About Supreme Energy"
            title="An indigenous Nigerian downstream energy company"
            copy="Supreme Energy (RC7982142) was incorporated under the Allied Matters and Companies Decree of 1990. Today the company focuses on petroleum product sourcing, trading, supply, distribution and retail, supported by product logistics, marine and coastal petroleum logistics and LPG distribution."
          />
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Alongside this downstream focus, the company retains extensive historical experience in
            specialist engineering design, fabrication, marine logistics, oil & gas procurement,
            project management, construction engineering and mechanical and piping support delivered
            for EPC companies and operators in Nigeria and West Africa.
          </p>
          <Link to="/about" className="btn-outline mt-8">
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="reveal hover-image-border overflow-hidden">
          <img
            src={pubImage("Supreme Energy downstream operations in Nigeria.jpg")}
            alt="Supreme Energy downstream operations in Nigeria"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-all duration-500 hover:scale-[1.04] hover:saturate-125"
          />
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <SectionHead
            eyebrow="Our Business"
            title="Nine lines of downstream energy delivery"
            copy="An integrated downstream offering covering sourcing, trading, storage coordination, logistics, retail and procurement."
          />
          <div className="mt-12 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-3">
            {business.map((item, i) => (
              <div key={item.title} className="reveal hover-tile border border-border bg-background p-8 group">
                <p className="text-xs font-bold text-brand transition-colors duration-300 group-hover:text-flame">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-5 overflow-hidden">
                  <img
                    src={pubImage(item.image)}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:saturate-125"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold transition-colors duration-300 group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead eyebrow="What We Do" title="Services built on supply reliability" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map(({ title, copy, image, Icon }) => (
            <article key={title} className="reveal card-tech">
              <img
                src={pubImage(image)}
                alt={title}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
              <Icon className="mt-6 h-7 w-7 text-brand" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
        <Link to="/services" className="btn-outline mt-10">
          View All Services <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="bg-navy text-on-dark">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHead
                dark
                eyebrow="Vision & Mission"
                title="Reliability, product quality and operational excellence"
              />
              <div className="mt-8 space-y-6">
                <div>
                  <p className="eyebrow text-flame">Vision</p>
                  <p className="mt-3 text-base leading-8 text-on-dark-muted">
                    To become a trusted indigenous energy company recognised for reliability,
                    product quality, operational excellence and sustainable growth across Nigeria
                    and the wider West African energy market.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-flame">Mission</p>
                  <p className="mt-3 text-base leading-8 text-on-dark-muted">
                    To provide reliable access to quality petroleum products through efficient
                    sourcing, responsible operations, timely delivery and exceptional customer
                    service.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow text-bright">Core Values</p>
              <div className="mt-6 grid gap-px bg-transparent sm:grid-cols-2">
                {[
                  "Integrity",
                  "Reliability",
                  "Quality",
                  "Safety",
                  "Professionalism",
                  "Customer Focus",
                  "Accountability",
                ].map((v) => (
                  <p
                    key={v}
                    className="hover-tile-dark border border-on-dark/15 bg-navy px-5 py-5 text-base font-semibold transition-all duration-250"
                  >
                    <span className="transition-colors duration-250 hover:text-flame">{v}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead
          eyebrow="Integrated Supply Chain"
          title="Source to customer, without gaps"
          copy="Competitive sourcing, product quality, supply reliability, volume flexibility, efficient logistics, timely delivery and customer-focused service."
        />
        <div className="mt-12 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-6">
          {[
            "Source",
            "Sourcing / Importation",
            "Terminal / Storage",
            "Logistics",
            "Distribution",
            "Customer",
          ].map((step, i) => (
            <div key={step} className="reveal hover-tile border border-border bg-background p-6 group">
              <p className="text-xs font-bold text-energy transition-all duration-300 group-hover:text-flame group-hover:scale-110 group-hover:-translate-y-0.5 inline-block">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-brand">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <SectionHead eyebrow="Why Supreme Energy" title="Seven pillars our customers rely on" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ Icon, title }, i) => (
              <div key={title} className="reveal hover-card p-7 group">
                <span className="text-xs font-bold text-brand transition-all duration-300 group-hover:text-flame group-hover:scale-110 inline-block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-4 h-7 w-7 text-energy transition-all duration-300 group-hover:text-brand group-hover:scale-110 group-hover:-translate-y-0.5" />
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-brand">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead
          eyebrow="Historical Experience"
          title="Selected experience & projects"
          copy="Engineering, fabrication, marine and construction work delivered under the company's earlier project portfolio."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {(
            [
              [
                "Offshore platform flowline and tie-in works",
                "Offshore platform flowline and tie-in works.jpeg",
              ],
              [
                "Pipeline maintenance and civil construction",
                "Civil Engineering & Construction.webp",
              ],
              ["Fabrication, inspection and scaffolding delivery", "project10 - Copy - Copy.webp"],
            ] as [string, string][]
          ).map(([label, image]) => (
            <figure key={label} className="reveal hover-zoom-figure group">
              <img
                src={pubImage(image)}
                alt={String(label)}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-4 text-sm font-semibold transition-colors duration-300 group-hover:text-brand">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/projects" className="btn-outline mt-10">
          See Project Experience <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="relative isolate overflow-hidden bg-deep">
        <img
          src={pubImage("before footer.png")}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <h2 className="text-4xl font-extrabold text-on-dark sm:text-5xl">
            Ready to Work With Supreme Energy?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-on-dark-muted">
            Talk to our team about your petroleum product supply, LPG, logistics, retail or project
            requirement.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-energy btn-transparent-hover">
              Request a Quote
            </Link>
            <Link to="/contact" className="btn-ghost-dark">
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-xs text-on-dark-muted">RC7982142</p>
        </div>
      </section>
    </Page>
  );
}
