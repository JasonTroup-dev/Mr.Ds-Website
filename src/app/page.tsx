import Image from "next/image";

const phoneDisplay = "714-420-7796";
const phoneHref = "tel:7144207796";

const services = [
  {
    title: "Food Industry Transportation",
    description:
      "Transportation support for businesses working with food-related shipments.",
  },
  {
    title: "Shipment Coordination",
    description:
      "Clear communication and coordination to help keep shipments organized and moving.",
  },
  {
    title: "Quote Requests",
    description:
      "A simple way for potential clients to reach out and request transportation pricing.",
  },
  {
    title: "Southern California Based",
    description:
      "Located in Orange, California and serving transportation clients with direct communication.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-bold text-[#0F172A] uppercase sm:text-base">
            Mr. D&apos;s Transportation Services
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#F97316]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md bg-[#F97316] px-3 text-xs font-bold text-white shadow-sm shadow-orange-900/10 transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316] sm:px-4 sm:text-sm"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#0F172A] text-white">
        <Image
          src="/mr-ds-logistics-hero.png"
          alt="A refrigerated delivery truck parked at a commercial loading dock at sunrise."
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-[68%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,23,42,0.34)_0%,rgba(15,23,42,0.78)_34%,rgba(15,23,42,0.98)_100%)] lg:bg-[linear-gradient(90deg,rgba(15,23,42,0.94)_0%,rgba(15,23,42,0.78)_42%,rgba(15,23,42,0.24)_100%)]" />
        <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl content-end px-4 pb-20 pt-52 sm:content-center sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-orange-100 uppercase backdrop-blur">
              Orange, California
            </p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-normal text-white sm:text-5xl lg:text-7xl">
              Reliable Transportation Support for Food Industry Shipments
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100 sm:text-xl">
              Mr. D&apos;s Transportation Services helps food-industry businesses
              coordinate dependable transportation with clear communication,
              fast response times, and personal service.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#F97316] px-6 text-base font-bold text-white shadow-lg shadow-orange-950/25 transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 text-base font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#F97316] uppercase">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#0F172A] sm:text-4xl">
              Transportation Services Built Around Reliability
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#0F172A] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-extrabold text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-[#F97316] uppercase">
              About
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#0F172A] sm:text-4xl">
              Dependable Transportation Support with Personal Service
            </h2>
          </div>
          <div className="border-l-4 border-[#F97316] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-lg leading-8 text-[#475569]">
              Mr. D&apos;s Transportation Services, Inc. is a transportation
              business focused on reliable communication, practical solutions,
              and dependable service for food-industry clients. The company
              helps clients get the transportation support they need with a
              direct, responsive approach.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0F172A] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold text-orange-200 uppercase">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
              Tell us what kind of transportation support you need and
              we&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-10 grid gap-4 text-slate-200 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-orange-200">Phone</p>
                <a href={phoneHref} className="mt-2 block text-xl font-extrabold text-white">
                  {phoneDisplay}
                </a>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-orange-200">
                  Mailing Address
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  PO BOX 6405, Orange, CA 92863, US
                </p>
              </div>
            </div>
          </div>

          <form
            action="#"
            method="post"
            className="rounded-lg bg-white p-5 text-[#0F172A] shadow-2xl shadow-black/20 sm:p-7"
          >
            {/* TODO: Connect this quote form to the chosen backend or form service. */}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="min-h-12 rounded-md border border-slate-300 px-4 text-base font-medium outline-none transition focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Company Name
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="min-h-12 rounded-md border border-slate-300 px-4 text-base font-medium outline-none transition focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-h-12 rounded-md border border-slate-300 px-4 text-base font-medium outline-none transition focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="min-h-12 rounded-md border border-slate-300 px-4 text-base font-medium outline-none transition focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
                Shipment Details / Message
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="rounded-md border border-slate-300 px-4 py-3 text-base font-medium outline-none transition focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#F97316] px-6 text-base font-bold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
            >
              Send Quote Request
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-white px-4 py-8 text-[#475569] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#0F172A]">
            Mr. D&apos;s Transportation Services, Inc.
          </p>
          <div className="flex flex-col gap-2 sm:items-end">
            <a href={phoneHref} className="hover:text-[#F97316]">
              Phone: {phoneDisplay}
            </a>
            <p>PO BOX 6405, Orange, CA 92863, US</p>
            <p>&copy; {year} Mr. D&apos;s Transportation Services, Inc.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
