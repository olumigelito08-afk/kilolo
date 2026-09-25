import { useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { Page, PageHero, SectionHead, ContactForm } from "@/components/site";
import type { Meta } from "@/components/seo";

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

const quoteSteps = [
  { title: "Submit Request", copy: "Fill our simple form with your project details" },
  { title: "Quick Review", copy: "Our experts analyze your requirements" },
  { title: "Get Your Quote", copy: "Receive a detailed proposal within 24-48 hours" },
];

export default function Quote() {
  const { service } = useSearch({ from: "/quote" });

  useEffect(() => {
    if (!service) return;
    const timeout = window.setTimeout(() => {
      document.getElementById("quote-details")?.scrollIntoView({
        block: "start",
        behavior: "auto",
      });
    }, 150);
    return () => window.clearTimeout(timeout);
  }, [service]);

  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need supplied"
        copy="Share your project details and we'll prepare a customized solution tailored to your needs."
      />
      <section className="section grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div id="quote-details" className="reveal scroll-mt-24">
          <SectionHead eyebrow="Quotation Request" title="Project & supply details" />
          <div id="quote-form" className="mt-8 scroll-mt-24">
            <ContactForm quote initialService={service} />
          </div>
        </div>
        <aside className="reveal lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Quote Process" title="How It Works" />
          <div className="mt-6 space-y-3">
            {quoteSteps.map((step, index) => (
              <article key={step.title} className="border border-border bg-muted p-4">
                <p className="text-xs font-bold text-brand">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 border border-border bg-muted p-5">
            <h3 className="text-xl font-extrabold">Need Assistance?</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Our team is ready to help you with your project requirements.
            </p>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p>
                <span className="block font-bold">Head Office</span>
                45, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos
              </p>
              <p>
                <span className="font-bold">Telephone</span>
                <br />
                <a className="text-brand hover:text-energy" href="tel:09024876164">
                  0902 487 6164
                </a>
              </p>
              <p>
                <span className="font-bold">Email</span>
                <br />
                <a className="text-brand hover:text-energy" href="mailto:info@supreme-energy.com.ng">
                  info@supreme-energy.com.ng
                </a>
              </p>
            </address>
          </div>
        </aside>
      </section>
    </Page>
  );
}
