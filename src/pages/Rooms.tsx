import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Wifi, Coffee, Eye } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/new-photos/IMG-20250408-WA0001.jpg";
import dlxImage from "@/assets/new-photos/DLXX.jpeg";
import supImage from "@/assets/new-photos/SUPERIOR.jpg";
import bathImage from "@/assets/new-photos/BATHROOM.jpeg";
import twinImage from "@/assets/new-photos/IMG-20250408-WA0003.jpg";

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
    residents: { sgl: "9,500 KES", dbl: "10,500 KES" },
    nonResidents: { sgl: "$90", dbl: "$110" },
  },
  {
    name: "Superior Deluxe",
    image: supImage,
    description: "Upgraded luxury with premium bedding, a sitting area, and panoramic views of Mount Kenya.",
    amenities: ["Free Wi-Fi", "Mini Bar", "Panoramic View"],
    residents: { sgl: "10,500 KES", dbl: "12,500 KES" },
    nonResidents: { sgl: "$110", dbl: "$130" },
  },
  {
    name: "Family Room",
    image: bathImage,
    description: "Generous space for the whole family with interconnected areas and kid-friendly amenities.",
    amenities: ["Free Wi-Fi", "Extra Beds", "Family Friendly"],
    residents: { sgl: "From 15,500 KES" },
    nonResidents: { sgl: "From $170" },
  },
  {
    name: "Deluxe Twin",
    image: twinImage,
    description: "Two comfortable beds in a well-appointed room, ideal for friends or colleagues traveling together.",
    amenities: ["Free Wi-Fi", "Twin Beds", "Work Desk"],
    residents: { sgl: "From 11,500 KES" },
    nonResidents: { sgl: "From $120" },
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

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-secondary p-5">
                    <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-2">Residents</p>
                    <p className="text-lg font-bold text-foreground font-display">{room.residents.sgl}</p>
                    {room.residents.dbl && (
                      <p className="text-xs text-muted-foreground mt-1">DBL: {room.residents.dbl}</p>
                    )}
                  </div>
                  <div className="rounded-xl bg-secondary p-5">
                    <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-2">Non-Residents</p>
                    <p className="text-lg font-bold text-foreground font-display">{room.nonResidents.sgl}</p>
                    {room.nonResidents.dbl && (
                      <p className="text-xs text-muted-foreground mt-1">DBL: {room.nonResidents.dbl}</p>
                    )}
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
