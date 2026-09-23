import { Page, PageHero } from "@/components/site";
import type { Meta } from "@/components/seo";

const meta: Meta[] = [
  { title: "Terms & Conditions | Supreme Energy" },
  {
    name: "description",
    content:
      "Terms governing use of the Supreme Energy website and the information published on it.",
  },
  { property: "og:title", content: "Terms & Conditions — Supreme Energy" },
  {
    property: "og:description",
    content: "Website use, content accuracy, quotations and governing law.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const sections = [
  [
    "Use of this website",
    "This website is provided for information about Supreme Energy (RC7982142) and its products and services.",
  ],
  [
    "Content accuracy",
    "Information is published in good faith. Product availability, specifications and pricing are confirmed only in a written quotation or contract.",
  ],
  [
    "Quotations",
    "Quotations issued through this website are indicative until confirmed by our commercial team and are subject to product availability and prevailing market conditions.",
  ],
  [
    "Intellectual property",
    "The Supreme Energy name, logo and website content remain the property of Supreme Energy and may not be reproduced without permission.",
  ],
  ["Governing law", "These terms are governed by the laws of the Federal Republic of Nigeria."],
];

export default function Terms() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        copy="The terms that apply to the use of this website."
      />
      <section className="section max-w-3xl space-y-10">
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
