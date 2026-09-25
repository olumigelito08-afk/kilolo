import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { useReveal } from "@/components/reveal";
import { useSeo, type Meta } from "@/components/seo";

export function Page({ children, meta }: { children: ReactNode; meta?: Meta[] }) {
  useReveal();
  useSeo(meta);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppWidget />
    </div>
  );
}

function WhatsAppWidget() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const message = "Good day, I would like to enquire about...";
  const whatsappUrl = `https://wa.me/2348168547803?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Supreme Energy on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7 ${isScrolling ? "opacity-45" : "opacity-100"}`}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 2.7A13.1 13.1 0 0 0 4.8 22.6L3 29l6.6-1.7A13.2 13.2 0 1 0 16 2.7Zm0 23.9c-2 0-3.9-.5-5.6-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.6Zm5.9-8c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"
        />
      </svg>
    </a>
  );
}

export const services = [
  "Oil & Gas Services",
  "Engineering & Technical Services",
  "Civil Engineering & Construction",
  "Water Engineering",
  "Environmental Engineering",
  "Fabrication Works",
  "NDT & Inspection",
  "Scaffolding",
  "Logistics & Procurement",
  "Equipment",
  "ICT Supplies & Installation",
  "Project Management",
];

const bulkPurchaseServices = [
  "Automotive Gas Oil (Diesel) Bulk Purchase",
  "Premium Motor Spirit (Petrol) Bulk Purchase",
  "Liquefied Petroleum Gas Bulk Purchase",
  "Low Pour Fuel Oil Bulk Purchase",
  "Naphtha Bulk Purchase",
];

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Products", "/products"],
  ["Projects", "/projects"],
  ["HSE & Quality", "/hse-quality"],
  ["Clients & Partners", "/clients-partners"],
  ["Contact Us", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-header-border bg-header">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 sm:px-8">
        <Link
          to="/"
          className="group mr-auto flex w-44 items-center"
          aria-label="Supreme Energy home"
        >
          <img
            src="/images/logo444.svg"
            alt="Supreme Energy"
            width="2064"
            height="512"
            fetchPriority="high"
            decoding="async"
            className="h-10 w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="hidden items-center gap-5 xl:flex">
          {nav.map(([label, to]) => (
            <Link key={to} to={to} className="nav-link">
              {label}
            </Link>
          ))}
        </div>
        <button
          className={`menu-trigger xl:hidden ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div className="mobile-menu absolute inset-x-0 top-0 z-[60] h-dvh overflow-y-auto bg-navy text-on-dark xl:hidden">
          <div className="flex h-16 items-center justify-between border-b border-on-dark/15 px-5">
            <img
              src="/images/logo444.svg"
              alt="Supreme Energy"
              width="2064"
              height="512"
              decoding="async"
              className="site-logo-on-dark h-9 w-36 object-contain object-left"
            />
            <button
              className="menu-trigger menu-trigger-dark is-open"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="flex flex-col px-6 py-6">
            {nav.map(([label, to], index) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 35}ms` }}
                className="mobile-menu-link border-b border-on-dark/10 py-4 text-xl transition-all hover:pl-3 hover:text-flame"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="btn-energy mt-8 w-auto self-center px-3 py-1.5 text-xs"
            >
              Request a Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-on-dark">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start lg:-mt-[38px]">
            <Link to="/" className="inline-block" aria-label="Supreme Energy home">
              <span className="inline-flex bg-navy px-4 pt-3 pb-0">
                <img
                  src="/images/footer%20logo.svg"
                  alt="Supreme Energy"
                  width="1024"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="site-logo-on-dark h-36 w-36 object-contain"
                />
              </span>
            </Link>
            <p className="-mt-[21px] text-sm font-bold text-flame">
              ...your satisfaction is our priority
            </p>
            <p className="mt-4 text-sm leading-7 text-on-dark-muted">
              An indigenous Nigerian downstream oil & gas company delivering reliable energy
              solutions.
            </p>
          </div>
          <FooterLinks
            title="Company"
            links={[
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Products", "/products"],
            ]}
          />
          <FooterLinks
            title="Services"
            links={[
              ["Projects", "/projects"],
              ["HSE & Quality", "/hse-quality"],
              ["Clients & Partners", "/clients-partners"],
              ["Contact Us", "/contact"],
              ["Request a Quote", "/quote"],
            ]}
          />
          <div>
            <h3 className="footer-title">Contact</h3>
            <address className="space-y-4 text-sm not-italic text-on-dark-muted">
              <p>
                45, Imam Dauda Street,
                <br />
                Off Eric Moore Road,
                <br />
                Surulere, Lagos
              </p>
              <a className="flex gap-2 hover:text-on-dark" href="tel:09024876164">
                <Phone className="h-4 w-4" />
                0902 487 6164
              </a>
              <a className="flex gap-2 hover:text-on-dark" href="mailto:info@supreme-energy.com.ng">
                <Mail className="h-4 w-4" />
                info@supreme-energy.com.ng
              </a>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-on-dark/15 pt-6 text-xs text-on-dark-muted sm:flex-row sm:items-center">
          <p>RC7982142 · © {new Date().getFullYear()} Supreme Energy. All Rights Reserved.</p>
          <div className="flex gap-5 sm:ml-auto">
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string, string?])[];
}) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <div className="flex flex-col gap-3 text-sm text-on-dark-muted">
        {links.map(([label, to, hash]) => (
          <Link
            key={label}
            to={to}
            {...(hash ? { hash } : {})}
            className="footer-link"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
  titleAccent = false,
  copyAccent = false,
  compact = false,
  copyWide = false,
}: {
  eyebrow: string;
  title: string;
  copy: ReactNode;
  children?: ReactNode;
  titleAccent?: boolean;
  copyAccent?: boolean;
  compact?: boolean;
  copyWide?: boolean;
}) {
  return (
    <section className="bg-navy pt-28 text-on-dark">
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 ${compact ? "pb-10 sm:pb-12" : "pb-20 sm:pb-24"}`}
      >
        <p className="eyebrow text-bright">{eyebrow}</p>
        <h1
          className={`mt-5 max-w-5xl text-5xl font-extrabold leading-[.96] sm:text-7xl ${titleAccent ? "text-flame" : ""}`}
        >
          {title}
        </h1>
        <div
          className={`mt-7 text-lg leading-8 ${copyWide ? "max-w-none" : "max-w-2xl"} ${copyAccent ? "text-flame" : "text-on-dark-muted"}`}
        >
          {copy}
        </div>
        {children}
      </div>
    </section>
  );
}
export function SectionHead({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${dark ? "text-bright" : "text-primary"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl font-extrabold leading-tight sm:text-5xl ${dark ? "text-on-dark" : "text-foreground"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-base leading-7 ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
export function ImageGrid({
  items,
  labels,
}: {
  items: { url?: string; name: string }[];
  labels?: string[];
}) {
  return (
    <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item, i) =>
        item.url ? (
          <figure
            key={`${i}-${item.url}`}
            className="group relative mb-4 break-inside-avoid overflow-hidden bg-muted"
          >
            <img
              src={item.url}
              alt={labels?.[i] ?? `Supreme Energy operations ${i + 1}`}
              loading="lazy"
              decoding="async"
              width="900"
              height={i % 4 === 0 ? 1125 : 675}
              className={`w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-125 ${i % 4 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
            />
            {labels?.[i] && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-navy/90 p-4 text-sm font-semibold text-on-dark">
                {labels[i]}
              </figcaption>
            )}
          </figure>
        ) : null,
      )}
    </div>
  );
}

export function ContactForm({ quote = false }: { quote?: boolean }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [...data.entries()]
      .filter(([, v]) => typeof v === "string")
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:info@supreme-energy.com.ng?subject=${encodeURIComponent(quote ? "Request for quotation" : "Website enquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <Field name="Full Name" required />
      <Field name="Company" required={quote} />
      <Field name="Email" type="email" required />
      <Field name="Phone" type="tel" required />
      {quote && (
        <>
          <label className="field">
            <span>
              Service Required <span className="text-energy">*</span>
            </span>
            <select name="Service Required" required className="site-input">
              <option value="">Select a service</option>
              {[...bulkPurchaseServices, ...services].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <Field name="Project Location" required />
          <Field name="Required Timeline" required />
          <label className="field">
            <span>Attachment</span>
            <input
              name="Attachment"
              type="file"
              className="site-input file:mr-4 file:border-0 file:bg-muted file:px-3 file:py-1"
            />
          </label>
        </>
      )}
      <label className="field sm:col-span-2">
        <span>
          {quote ? "Project Description" : "Message"}
          {!quote && <span className="text-energy"> *</span>}
        </span>
        <textarea
          name={quote ? "Project Description" : "Message"}
          required={!quote}
          rows={6}
          className="site-input resize-none"
        />
      </label>
      <button type="submit" className="btn-energy sm:col-span-2 sm:w-fit">
        {quote ? "Submit Request" : "Send Enquiry"} <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
function Field({
  name,
  type = "text",
  required = false,
}: {
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="field">
      <span>
        {name} {required && <span className="text-energy">*</span>}
      </span>
      <input name={name} type={type} required={required} className="site-input" />
    </label>
  );
}
const contactCards = [
  {
    Icon: MapPin,
    label: "Head Office",
    value: "45, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos",
  },
  { Icon: Phone, label: "Telephone", value: "0902 487 6164" },
  { Icon: Mail, label: "Email", value: "info@supreme-energy.com.ng" },
];
export function ContactCards() {
  return (
    <div className="space-y-4">
      {contactCards.map(({ Icon, label, value }) => (
        <div key={label} className="hover-card flex gap-4 p-5 group">
          <span className="grid h-11 w-11 shrink-0 place-items-center bg-navy text-on-dark transition-all duration-300 group-hover:bg-flame group-hover:text-deep group-hover:scale-110">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="eyebrow text-muted-foreground transition-colors duration-300 group-hover:text-brand">
              {label}
            </p>
            <p className="mt-1 text-sm font-semibold transition-colors duration-300 group-hover:text-brand">
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
