import { Page, PageHero, SectionHead, ImageGrid } from "@/components/site";
import type { Meta } from "@/components/seo";
import { pubImage } from "@/lib/media";

const meta: Meta[] = [
  { title: "HSE & Quality | Supreme Energy" },
  {
    name: "description",
    content:
      "Safe product handling, fuel transportation, loading and discharge procedures, fire prevention, emergency preparedness, PPE and quality assurance at Supreme Energy.",
  },
  { property: "og:title", content: "HSE & Quality at Supreme Energy" },
  {
    property: "og:description",
    content:
      "Safety is our priority: incident prevention, environmental responsibility, public safety and in-house quality control.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

const hse = [
  "Safe product handling",
  "Fuel transportation",
  "Loading procedures",
  "Discharge procedures",
  "Fire prevention",
  "Emergency preparedness",
  "Personal protective equipment",
  "Incident prevention",
  "Employee safety",
  "Environmental responsibility",
  "Public safety",
  "Compliance with applicable HSE requirements",
];
const legacy = [
  "Accident prevention",
  "Environmental protection",
  "Personal injury and property damage prevention",
  "HSE programmes",
  "Regulatory compliance",
  "Hazardous waste management",
  "Employee safety training",
  "Emergency preparedness",
  "Security",
  "Healthy lifestyle",
];

const safetyImages = [
  "Automotive Gas Oil (Diesel).jpeg",
  "project.jpg",
  "project1.jpg",
  "project2.jpg",
  "project3.jpeg",
  "project4.jpeg",
  "project5.jpg",
  "project6.jpg",
  "project7.jpg",
  "project8.jpg",
  "project9.jpg",
  "project10 - Copy (2).webp",
  "project11 - Copy (2).jpg",
  "project12 - Copy (2).jpeg",
  "project13 - Copy (2).jpeg",
  "project14 - Copy (2).jpeg",
  "project15 - Copy (2).jpeg",
  "project16 - Copy (2).jpeg",
  "project17 - Copy - Copy.jpg",
  "project19 - Copy (2).jpeg",
  "project20 - Copy (2).jpeg",
  "safety.jpeg",
  "safety.jpg",
  "safety'.jpeg",
  "safety''.jpeg",
  "safety1 - Copy.jpg",
  "safety2 - Copy - Copy.jpeg",
  "safety5 - Copy - Copy.jpeg",
  "safety7 - Copy - Copy.jpeg",
  "safety8 - Copy - Copy.jpeg",
  "solar installation.webp",
].map((name) => ({ name, url: pubImage(name) }));

export default function Hse() {
  return (
    <Page meta={meta}>
      <PageHero
        eyebrow="HSE & Quality"
        title="Health, Safety and Environment (HSE) Policy"
        copyWide
        copy={
          <div className="space-y-4 text-base leading-8 text-on-dark-muted sm:text-lg">
            <p>
              Supreme Energy and Multipurpose Services Ltd is committed to providing a safe,
              healthy and environmentally responsible workplace for our employees, clients,
              contractors and the communities where we operate.
            </p>
            <p>
              We integrate health, safety and environmental considerations into all aspects of
              our operations and decision-making. Our goal is to prevent incidents, protect
              people, safeguard the environment and ensure compliance with applicable laws,
              regulations and industry standards.
            </p>
            <p>
              Every employee and contractor is empowered to stop any activity that may pose an
              unacceptable risk and is encouraged to proactively identify and report hazards.
              Through continuous improvement, training and leadership commitment, we strive to
              achieve zero harm in everything we do.
            </p>
            <p>
              The full HSE Policy Statement provides detailed guidance on our commitments,
              responsibilities and expectations for all stakeholders.
            </p>
          </div>
        }
      />

      <section className="bg-navy text-on-dark">
        <div className="section pt-10 sm:pt-12">
          <SectionHead
            dark
            eyebrow="Downstream HSE"
            title="Procedures that govern product movement"
          />
          <div className="mt-12 grid gap-px bg-transparent sm:grid-cols-2 lg:grid-cols-3">
            {hse.map((h) => (
              <p
                key={h}
                className="hover-tile-dark border border-on-dark/15 bg-navy px-6 py-6 text-sm font-semibold group"
              >
                <span className="flex items-center gap-2 transition-all duration-700 group-hover:text-flame group-hover:translate-x-0.5">
                  <span className="text-flame opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    →
                  </span>
                  {h}
                </span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <SectionHead
            eyebrow="Quality Assurance"
            title="High-quality services"
            copy="Quality control is managed by an in-house quality control department headed by a qualified engineer, with specifications confirmed, checks carried out and records reconciled."
          />
        </div>
        <div className="reveal">
          <p className="eyebrow text-brand">HSE Programme Areas</p>
          <ul className="mt-6 space-y-3">
            {legacy.map((l) => (
              <li
                key={l}
                className="hover-slide border-b border-border pb-3 text-sm font-semibold transition-all duration-200 group hover:text-brand hover:border-flame/50"
              >
                <span className="flex items-center gap-2">
                  <span className="text-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    →
                  </span>
                  {l}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted">
        <div className="section">
          <SectionHead eyebrow="In The Field" title="Safety in practice" />
          <ImageGrid items={safetyImages} />
        </div>
      </section>
    </Page>
  );
}
