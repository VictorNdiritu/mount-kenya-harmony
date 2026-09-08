import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Phone, MessageCircle, Handshake, BedDouble, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/homepage-photos/IMG-20250408-WA0018.jpg";
import stoPdf from "@/assets/sto-rates-2026.pdf.asset.json";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const track = (action: string, label: string) => {
  window.gtag?.("event", action, {
    event_category: "tour_operators",
    event_label: label,
  });
};

const RATE_PDF_URL = `${stoPdf.url}?utm_source=website&utm_medium=tour_operators_page&utm_campaign=sto_rates_2026`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

type Row = {
  room: string;
  plan: string;
  resSingle: string;
  resDouble: string;
  nonSingle: string;
  nonDouble: string;
};

const rates: Row[] = [
  { room: "Deluxe Room", plan: "Bed & Breakfast", resSingle: "9,500", resDouble: "10,500", nonSingle: "90", nonDouble: "110" },
  { room: "Deluxe Room", plan: "Half Board", resSingle: "11,500", resDouble: "13,500", nonSingle: "110", nonDouble: "130" },
  { room: "Deluxe Room", plan: "Full Board", resSingle: "12,500", resDouble: "15,000", nonSingle: "130", nonDouble: "150" },
  { room: "Superior Deluxe Room", plan: "Bed & Breakfast", resSingle: "10,500", resDouble: "12,500", nonSingle: "110", nonDouble: "130" },
  { room: "Superior Deluxe Room", plan: "Half Board", resSingle: "12,000", resDouble: "15,500", nonSingle: "130", nonDouble: "150" },
  { room: "Superior Deluxe Room", plan: "Full Board", resSingle: "13,500", resDouble: "16,500", nonSingle: "150", nonDouble: "170" },
  { room: "Family Room", plan: "Bed & Breakfast", resSingle: "15,500", resDouble: "—", nonSingle: "—", nonDouble: "170" },
  { room: "Family Room", plan: "Half Board", resSingle: "21,500", resDouble: "—", nonSingle: "—", nonDouble: "200" },
  { room: "Family Room", plan: "Full Board", resSingle: "27,500", resDouble: "—", nonSingle: "—", nonDouble: "260" },
  { room: "Deluxe Twin Room", plan: "Bed & Breakfast", resSingle: "—", resDouble: "11,500", nonSingle: "—", nonDouble: "120" },
  { room: "Deluxe Twin Room", plan: "Half Board", resSingle: "—", resDouble: "14,000", nonSingle: "—", nonDouble: "140" },
  { room: "Deluxe Twin Room", plan: "Full Board", resSingle: "—", resDouble: "16,000", nonSingle: "—", nonDouble: "160" },
];

const benefits = [
  { icon: Handshake, title: "Net, Non-Commissionable Rates", desc: "Confidential STO rates published for contracted tour operators, DMCs, and travel agents — inclusive of all statutory taxes." },
  { icon: BedDouble, title: "Allocations & Group Blocks", desc: "Room allocations and release periods for series bookings, FIT programmes, and safari circuit stopovers to and from Mount Kenya." },
  { icon: Users, title: "Groups, MICE & Team Building", desc: "Conference and team building day packages from KES 3,000 per delegate, with flexible layouts and full-board group arrangements." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tour Operator STO Rates 2026 — The Warwick Hotel Nanyuki",
  description:
    "Confidential 2026 Standard Tour Operator (STO) rates for The Warwick Hotel Nanyuki, including resident and non-resident room rates, conference rates, and children's policy.",
  url: "https://thewarwickhotel.co.ke/tour-operators",
};

const TourOperators = () => (
  <>
    <SEOHead
      title="Tour Operators & Trade Partners"
      description="Partner with The Warwick Hotel Nanyuki. Download our 2026 STO rates — net, non-commissionable resident and non-resident rates, conference packages, and group allocations at the foothills of Mount Kenya."
      canonical="/tour-operators"
      jsonLd={jsonLd}
    />
    <PageHero
      image={heroImg}
      title="Tour Operators & Trade Partners"
      subtitle="Welcome, partners — your Mount Kenya base for FIT, group, and safari circuit programmes"
    />

    {/* Welcome */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Karibu, Trade Partners
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground mb-6">
            A Reliable Mount Kenya Partner for Your Clients
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
            The Warwick Hotel Nanyuki is an independent boutique hotel at the foothills of Mount Kenya, ideally placed for
            operators routing clients between Nairobi, Laikipia, Samburu, and the northern safari circuit. We work with tour
            operators, destination management companies, travel agents, and corporate travel desks on contracted net rates,
            allocations, and dependable turnaround on quotations.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
            Our team handles FIT bookings, series groups, conference delegations, and team building programmes, with
            full-board options, early breakfasts for Mount Kenya climbs, and packed lunches for game drives at Ol Pejeta
            and Ngare Ndare.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-border p-8 bg-card"
            >
              <b.icon className="text-primary mb-4" size={26} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Rates */}
    <section className="section-padding bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Rate Card</p>
            <h2 className="font-display text-4xl font-bold text-foreground">2026 STO Rates</h2>
            <p className="text-muted-foreground mt-3">Per room, per night. Inclusive of all statutory taxes.</p>
          </div>
          <a
            href={RATE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("file_download", "STO Rates 2026 PDF")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 shrink-0"
          >
            <Download size={16} /> Download STO Rates (PDF)
          </a>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm min-w-[720px]">
            <caption className="sr-only">The Warwick Hotel Nanyuki 2026 Standard Tour Operator rates</caption>
            <thead>
              <tr className="bg-primary/10 text-foreground">
                <th scope="col" className="text-left font-display font-semibold px-5 py-4">Room</th>
                <th scope="col" className="text-left font-display font-semibold px-5 py-4">Meal Plan</th>
                <th scope="col" className="text-right font-display font-semibold px-5 py-4">Resident Single (KES)</th>
                <th scope="col" className="text-right font-display font-semibold px-5 py-4">Resident Double (KES)</th>
                <th scope="col" className="text-right font-display font-semibold px-5 py-4">Non-Resident Single (USD)</th>
                <th scope="col" className="text-right font-display font-semibold px-5 py-4">Non-Resident Double (USD)</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r, i) => (
                <tr key={`${r.room}-${r.plan}`} className={i % 2 ? "bg-secondary/30" : ""}>
                  <td className="px-5 py-4 text-foreground font-medium">{r.room}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.plan}</td>
                  <td className="px-5 py-4 text-right text-muted-foreground">{r.resSingle}</td>
                  <td className="px-5 py-4 text-right text-muted-foreground">{r.resDouble}</td>
                  <td className="px-5 py-4 text-right text-muted-foreground">{r.nonSingle}</td>
                  <td className="px-5 py-4 text-right text-muted-foreground">{r.nonDouble}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-2xl border border-border p-8 bg-card">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Conference & Team Building</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between border-b border-border pb-3"><span>Conference — Full Day</span><span className="text-foreground font-medium">KES 3,500</span></li>
              <li className="flex justify-between border-b border-border pb-3"><span>Conference — Half Day</span><span className="text-foreground font-medium">KES 3,000</span></li>
              <li className="flex justify-between border-b border-border pb-3"><span>Team Building — Full Day</span><span className="text-foreground font-medium">KES 3,500</span></li>
              <li className="flex justify-between"><span>Team Building — Half Day</span><span className="text-foreground font-medium">KES 3,000</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-8 bg-card">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Conditions & Children's Policy</h3>
            <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li>Rates are net (STO) and non-commissionable.</li>
              <li>All rates are inclusive of statutory taxes; terms and conditions apply.</li>
              <li>Children 5 years and below sharing with an adult stay free.</li>
              <li>Children 6–12 years sharing: 50% of the applicable adult single rate.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl font-bold text-foreground mb-4">Contract With Us</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Send us your company profile and requirements and our sales team will respond with a contract, allocation
          proposal, and availability for your dates.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sales@thewarwickhotel.co.ke?subject=Tour%20Operator%20Rate%20Enquiry%20—%202026%20STO"
            onClick={() => track("generate_lead", "Email sales")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-aqua-dark transition-all hover:gap-3"
          >
            <Mail size={16} /> sales@thewarwickhotel.co.ke
          </a>
          <a
            href="https://wa.me/254799388888?text=Hello%20Warwick%20Hotel%2C%20I%27m%20a%20tour%20operator%20interested%20in%20your%202026%20STO%20rates."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("generate_lead", "WhatsApp sales")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
          <a
            href="tel:+254799388888"
            onClick={() => track("generate_lead", "Phone call")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <Phone size={16} /> +254 799 388 888
          </a>
        </div>
        <div className="mt-10">
          <Link to="/rooms" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
            View our rooms <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default TourOperators;
