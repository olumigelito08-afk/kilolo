import { Page, PageHero } from "@/components/site";
import type { Meta } from "@/components/seo";

const meta: Meta[] = [
  { title: "Privacy Policy | Supreme Energy" },
  {
    name: "description",
    content:
      "How Supreme Energy collects, uses and protects information submitted through this website.",
  },
  { property: "og:title", content: "Privacy Policy — Supreme Energy" },
  {
    property: "og:description",
    content: "Our approach to handling enquiry and quotation information.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const sections = [
  [
    "Information we collect",
    "We collect the details you provide in our enquiry and quotation forms, such as your name, company, email address, telephone number and the description of your requirement.",
  ],
  [
    "How we use information",
    "Information is used only to respond to your enquiry, prepare quotations, arrange supply and maintain normal business records.",
  ],
  [
    "Sharing",
    "We do not sell your information. It may be shared with supply, logistics or marine partners strictly where necessary to fulfil your request.",
  ],
  [
    "Retention",
    "Enquiry and transaction records are retained for as long as required for business and regulatory purposes.",
  ],
  [
    "Your choices",
    "You may ask us to correct or remove your details at any time by writing to info@supreme-energy.com.ng.",
  ],
];

export default function Privacy() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="How Supreme Energy handles information submitted through this website."
      />
      <section className="section space-y-10">
        {sections.map(([title, copy]) => (
          <div key={title}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-3 leading-8 text-muted-foreground">{copy}</p>
          </div>
        ))}
      </section>
    </Page>
  );
}
