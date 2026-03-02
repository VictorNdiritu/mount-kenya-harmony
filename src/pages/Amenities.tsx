import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Flower2, Waves, Utensils, Car, Shirt, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/Amenities/Outside view, with swimming pool.jpeg";
import poolImg from "@/assets/Amenities/Outside view, with swimming pool.jpeg";
import lobbyImg from "@/assets/Amenities/Lobby.jpg";
import restaurantImg from "@/assets/Amenities/Restaurant - Ground Floor.jpg";
import restaurant2Img from "@/assets/Amenities/Restaurant.jpg";
import barImg from "@/assets/Amenities/Bar- Lounge.jpeg";
import rooftopImg from "@/assets/Amenities/Rooftop Lounge.jpeg";
import rooftop2Img from "@/assets/Amenities/Rooftop Lounge.jpg";
import bathroomImg from "@/assets/Amenities/BATHROOM.jpeg";
import gardenImg from "@/assets/Amenities/IMG_9385.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const features = [
  { icon: Flower2, title: "Serene Gardens", desc: "Beautifully landscaped grounds perfect for relaxation" },
  { icon: Waves, title: "Swimming Pool", desc: "A refreshing pool surrounded by tropical greenery" },
  { icon: Utensils, title: "On-site Dining", desc: "Fresh local and international cuisine daily" },
  { icon: Car, title: "Parking", desc: "Secure and spacious parking for all guests" },
  { icon: Shirt, title: "Laundry Service", desc: "Professional laundry and dry cleaning available" },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock security for your peace of mind" },
];

const galleryImages = [
  { src: lobbyImg, label: "Lobby" },
  { src: restaurantImg, label: "Restaurant" },
  { src: restaurant2Img, label: "Dining Area" },
  { src: barImg, label: "Bar & Lounge" },
  { src: rooftopImg, label: "Rooftop Lounge" },
  { src: rooftop2Img, label: "Rooftop View" },
  { src: bathroomImg, label: "Bathroom" },
  { src: gardenImg, label: "Gardens" },
];

const Amenities = () => (
  <>
    <PageHero image={heroImg} title="Hotel Amenities" subtitle="Comfort in every detail" />

    {/* Features */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Offer</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Our Facilities</motion.h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-secondary rounded-2xl p-7 text-center hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pool highlight */}
    <section className="px-6 md:px-12 lg:px-20 pb-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={poolImg} alt="Swimming pool" className="w-full rounded-2xl shadow-2xl aspect-[21/9] object-cover" />
        </motion.div>
      </div>
    </section>

    {/* Gallery */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Gallery</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Around The Hotel</motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-xl overflow-hidden aspect-[4/3] group relative"
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Amenities;
