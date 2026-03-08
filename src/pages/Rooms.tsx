import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/rooms/IMG-20250408-WA0050.jpg";
import dlxImage from "@/assets/rooms/IMG-20250408-WA0020.jpg";
import supImage from "@/assets/rooms/sup-deluxe.jpg";
import familyImage from "@/assets/rooms/Family_Room.jpg";
import twinImage from "@/assets/rooms/Twins.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
} as const;

const rooms = [
  {
    name: "Deluxe Room",
    image: dlxImage,
    description: "A spacious room with elegant furnishings, modern amenities, and garden or mountain views. Each Deluxe Room features a comfortable king-size bed, en-suite bathroom with hot shower, complimentary toiletries, flat-screen TV, and a work desk — perfect for both leisure and business travellers visiting the Mount Kenya region.",
    amenities: ["Free Wi-Fi", "Room Service", "Mountain View", "En-suite Bathroom"],
    tiers: [
      { label: "Bed & Breakfast", resSgl: "10,500", resDbl: "11,500", nrSgl: "$100", nrDbl: "$120" },
      { label: "Half Board", resSgl: "12,500", resDbl: "14,500", nrSgl: "$120", nrDbl: "$140" },
      { label: "Full Board", resSgl: "13,500", resDbl: "16,000", nrSgl: "$140", nrDbl: "$160" },
    ],
  },
  {
    name: "Superior Deluxe",
    image: supImage,
    description: "Upgraded luxury with premium bedding, a sitting area, and panoramic views of Mount Kenya. The Superior Deluxe room offers an enhanced experience with a larger floor plan, premium bathroom amenities, mini bar, and a private balcony or terrace overlooking our landscaped gardens — ideal for guests seeking extra comfort.",
    amenities: ["Free Wi-Fi", "Mini Bar", "Panoramic View", "Private Balcony"],
    tiers: [
      { label: "Bed & Breakfast", resSgl: "11,500", resDbl: "13,500", nrSgl: "$120", nrDbl: "$140" },
      { label: "Half Board", resSgl: "13,000", resDbl: "16,500", nrSgl: "$140", nrDbl: "$160" },
      { label: "Full Board", resSgl: "14,500", resDbl: "17,500", nrSgl: "$160", nrDbl: "$180" },
    ],
  },
  {
    name: "Family Room",
    image: familyImage,
    description: "Generous space for the whole family with interconnected areas and kid-friendly amenities. Our Family Room comfortably accommodates up to four guests with separate sleeping areas, ensuring parents and children alike enjoy a restful stay. Located on the quieter wing of the hotel for a peaceful family holiday.",
    amenities: ["Free Wi-Fi", "Extra Beds", "Family Friendly", "Garden View"],
    tiers: [
      { label: "Bed & Breakfast", resSgl: "16,500", nrDbl: "$180" },
      { label: "Half Board", resSgl: "22,500", nrDbl: "$210" },
      { label: "Full Board", resSgl: "28,500", nrDbl: "$270" },
    ],
  },
  {
    name: "Deluxe Twin",
    image: twinImage,
    description: "Two comfortable beds in a well-appointed room, ideal for friends or colleagues travelling together. The Deluxe Twin includes matching single beds, individual reading lights, a shared work area, and all the modern comforts expected in a boutique hotel. A great option for business trips and group travel.",
    amenities: ["Free Wi-Fi", "Twin Beds", "Work Desk", "En-suite Bathroom"],
    tiers: [
      { label: "Bed & Breakfast", resDbl: "12,500", nrDbl: "$130" },
      { label: "Half Board", resDbl: "15,000", nrDbl: "$150" },
      { label: "Full Board", resDbl: "17,000", nrDbl: "$170" },
    ],
  },
];

const roomsFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What room types are available at The Warwick Hotel?", "acceptedAnswer": { "@type": "Answer", "text": "We offer four room categories: Deluxe Room, Superior Deluxe, Family Room, and Deluxe Twin, each with free Wi-Fi, en-suite bathrooms, and views." } },
    { "@type": "Question", "name": "What meal plans are included?", "acceptedAnswer": { "@type": "Answer", "text": "All rooms are available on Bed & Breakfast, Half Board, and Full Board basis. Meals are served in our on-site restaurant." } },
    { "@type": "Question", "name": "Are there different rates for residents and non-residents?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer separate pricing in KES for East African residents and in USD for international guests." } },
    { "@type": "Question", "name": "What is the children's policy?", "acceptedAnswer": { "@type": "Answer", "text": "Children aged 5 and below stay free of charge. Children aged 6–12 are charged at 50% of the adult single rate." } },
  ]
};

const Rooms = () => (
  <>
    <SEOHead
      title="Rooms & Rates"
      description="Browse room types and 2026 rates at The Warwick Hotel Nanyuki — Deluxe, Superior Deluxe, Family, and Twin rooms with Bed & Breakfast, Half Board, and Full Board options. Book your Mount Kenya accommodation today."
      canonical="/rooms"
      jsonLd={roomsFaqJsonLd}
    />
    <PageHero image={heroImage} title="Rooms & Rates" subtitle="2026 Accommodation Rates" />

    {/* Intro */}
    <section className="section-padding pb-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-4">Comfortable Accommodation at Mount Kenya</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
            The Warwick Hotel Nanyuki offers four thoughtfully designed room categories to suit every type of guest. Whether you're a solo business traveller, a couple on a romantic escape, or a family exploring the highland region, our rooms provide modern comforts in a tranquil setting surrounded by lush gardens and mountain views.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
            All rooms feature free high-speed Wi-Fi, en-suite bathrooms, premium bedding, flat-screen TVs, and daily housekeeping. Rates include statutory taxes and vary based on meal plan and residency status. Explore our options below and <Link to="/booking" className="text-primary hover:underline">book directly online</Link> or <Link to="/contact" className="text-primary hover:underline">contact us</Link> for group rates.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-20">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center`}
            >
              <motion.div variants={fadeUp} custom={0} className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <img src={room.image} alt={`${room.name} at The Warwick Hotel Nanyuki`} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
              <motion.div variants={fadeUp} custom={1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-3xl font-bold text-foreground mb-3">{room.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{room.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-2">Rates (KES / USD)</p>
                  <div className="rounded-xl bg-secondary overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="text-left p-3 text-xs text-muted-foreground font-medium">Plan</th>
                          <th className="text-center p-3 text-xs text-muted-foreground font-medium">Resident</th>
                          <th className="text-center p-3 text-xs text-muted-foreground font-medium">Non-Resident</th>
                        </tr>
                      </thead>
                      <tbody>
                        {room.tiers.map((tier) => (
                          <tr key={tier.label} className="border-b border-border/30 last:border-0">
                            <td className="p-3 text-xs font-medium text-foreground">{tier.label}</td>
                            <td className="p-3 text-center text-xs text-foreground">
                              {tier.resSgl && tier.resDbl
                                ? `${tier.resSgl} / ${tier.resDbl}`
                                : tier.resSgl
                                  ? tier.resSgl
                                  : tier.resDbl}
                            </td>
                            <td className="p-3 text-center text-xs text-foreground">
                              {tier.nrSgl && tier.nrDbl
                                ? `${tier.nrSgl} / ${tier.nrDbl}`
                                : tier.nrDbl}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Book this room <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Children's Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 border border-primary/10"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Children's Policy</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-background">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">5 years and below</p>
                <p className="text-xs text-muted-foreground">Free of charge</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-background">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">6–12 years</p>
                <p className="text-xs text-muted-foreground">50% of adult single rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground mb-8 text-center"
        >
          Rooms FAQ
        </motion.h2>
        <div className="space-y-4">
          {[
            { q: "What is included in the room rate?", a: "All rates include accommodation, the selected meal plan, free Wi-Fi, access to the swimming pool and gardens, and applicable taxes. Extra services such as laundry and mini bar are charged separately." },
            { q: "Can I upgrade my meal plan during my stay?", a: "Yes, guests can upgrade from Bed & Breakfast to Half Board or Full Board at any time during their stay. Simply inform our front desk." },
            { q: "Is there parking available?", a: "Yes, we provide free secure parking for all hotel guests." },
            { q: "What is the check-in and check-out time?", a: "Check-in is from 2:00 PM and check-out is by 10:00 AM. Early check-in and late check-out can be arranged subject to availability." },
          ].map((item, i) => (
            <details key={i} className="bg-background rounded-xl p-6 group cursor-pointer">
              <summary className="font-display font-semibold text-foreground list-none flex items-center justify-between">
                {item.q}
                <ChevronRight size={16} className="text-primary group-open:rotate-90 transition-transform shrink-0 ml-4" />
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Rooms;
