import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
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
    description: "A spacious room with elegant furnishings, modern amenities, and garden or mountain views.",
    amenities: ["Free Wi-Fi", "Room Service", "Mountain View"],
    tiers: [
      { label: "Bed & Breakfast", resSgl: "10,500", resDbl: "11,500", nrSgl: "$100", nrDbl: "$120" },
      { label: "Half Board", resSgl: "12,500", resDbl: "14,500", nrSgl: "$120", nrDbl: "$140" },
      { label: "Full Board", resSgl: "13,500", resDbl: "16,000", nrSgl: "$140", nrDbl: "$160" },
    ],
  },
  {
    name: "Superior Deluxe",
    image: supImage,
    description: "Upgraded luxury with premium bedding, a sitting area, and panoramic views of Mount Kenya.",
    amenities: ["Free Wi-Fi", "Mini Bar", "Panoramic View"],
    tiers: [
      { label: "Bed & Breakfast", resSgl: "11,500", resDbl: "13,500", nrSgl: "$120", nrDbl: "$140" },
      { label: "Half Board", resSgl: "13,000", resDbl: "16,500", nrSgl: "$140", nrDbl: "$160" },
      { label: "Full Board", resSgl: "14,500", resDbl: "17,500", nrSgl: "$160", nrDbl: "$180" },
    ],
  },
  {
    name: "Family Room",
    image: familyImage,
    description: "Generous space for the whole family with interconnected areas and kid-friendly amenities.",
    amenities: ["Free Wi-Fi", "Extra Beds", "Family Friendly"],
    tiers: [
      { label: "Bed & Breakfast", resSgl: "16,500", nrDbl: "$180" },
      { label: "Half Board", resSgl: "22,500", nrDbl: "$210" },
      { label: "Full Board", resSgl: "28,500", nrDbl: "$270" },
    ],
  },
  {
    name: "Deluxe Twin",
    image: twinImage,
    description: "Two comfortable beds in a well-appointed room, ideal for friends or colleagues traveling together.",
    amenities: ["Free Wi-Fi", "Twin Beds", "Work Desk"],
    tiers: [
      { label: "Bed & Breakfast", resDbl: "12,500", nrDbl: "$130" },
      { label: "Half Board", resDbl: "15,000", nrDbl: "$150" },
      { label: "Full Board", resDbl: "17,000", nrDbl: "$170" },
    ],
  },
];

const Rooms = () => (
  <>
    <PageHero image={heroImage} title="Rooms & Rates" subtitle="2026 Accommodation Rates" />

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-20">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <motion.div variants={fadeUp} custom={0} className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <img src={room.image} alt={room.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
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
                  to="/contact"
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
  </>
);

export default Rooms;
