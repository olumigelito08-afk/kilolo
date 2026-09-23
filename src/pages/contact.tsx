import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page, PageHero, SectionHead, ContactForm, ContactCards } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "Contact Us | Supreme Energy" },
  {
    name: "description",
    content:
      "Contact Supreme Energy at 45, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos. Tel 0902 487 6164, email info@supreme-energy.com.ng.",
  },
  { property: "og:title", content: "Contact Supreme Energy" },
  {
    property: "og:description",
    content:
      "Reach our Lagos head office for petroleum product supply, LPG, logistics and project enquiries.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

export default function Contact() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to our team"
        copy="Send us your requirement and our commercial team will respond with product availability, pricing and delivery options."
      />

      <section className="section grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="reveal">
          <SectionHead eyebrow="Head Office" title="Surulere, Lagos" />
          <div className="mt-8">
            <ContactCards />
          </div>
        </div>
        <div className="reveal">
          <SectionHead eyebrow="Enquiry" title="Send us a message" />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Location"
              title="Find us"
              copy="45, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria."
            />
            <a
              className="btn-outline mt-8"
              href="https://www.google.com/maps/search/?api=1&query=45+Imam+Dauda+Street+Off+Eric+Moore+Road+Surulere+Lagos"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/quote" className="btn-energy mt-4 ml-0 sm:ml-4">
              Request a Quote
            </Link>
          </div>
          <div className="hover-image-border overflow-hidden">
            <img
              src={pubImage("supreme8.png")}
              alt="Lagos operating environment"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-all duration-500 hover:scale-[1.04] hover:saturate-125"
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
