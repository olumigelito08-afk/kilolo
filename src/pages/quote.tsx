import { Page, PageHero, SectionHead, ContactForm, ContactCards } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "Request a Quote | Supreme Energy" },
  {
    name: "description",
    content:
      "Request pricing for AGO, PMS, LPG, LPFO, Naphtha, logistics, marine services, engineering, fabrication or project management from Supreme Energy.",
  },
  { property: "og:title", content: "Request a Quote — Supreme Energy" },
  {
    property: "og:description",
    content:
      "Tell us your product, volume, location and timeline and our team will respond with a quotation.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

export default function Quote() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need supplied"
        copy="Share your product, volume, delivery location and timeline. Submitting opens a pre-addressed email to our commercial team."
      />
      <section className="section grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <SectionHead eyebrow="Quotation Request" title="Project & supply details" />
          <div className="mt-8">
            <ContactForm quote />
          </div>
        </div>
        <div className="reveal">
          <ContactCards />
          <div className="hover-image-border mt-6 overflow-hidden">
            <img
              src={pubImage("hero image7.jpg")}
              alt="Supreme Energy bulk supply operations"
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
