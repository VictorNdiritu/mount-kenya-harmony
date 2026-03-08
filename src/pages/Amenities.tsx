import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flower2, Waves, Utensils, Car, Shirt, ShieldCheck, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
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
  { icon: Flower2, title: "Serene Gardens", desc: "Beautifully landscaped grounds with indigenous and tropical plants, offering tranquil spaces for relaxation, outdoor dining, and scenic walks. Our gardens are a highlight for guests seeking peace and natural beauty." },
  { icon: Waves, title: "Swimming Pool", desc: "A refreshing outdoor pool surrounded by tropical greenery, perfect for cooling off after a day of exploring. Poolside loungers and towel service ensure a comfortable experience." },
  { icon: Utensils, title: "On-site Dining", desc: "Our restaurant serves fresh local Kenyan cuisine and international dishes daily. Enjoy breakfast, lunch, and dinner prepared with locally sourced ingredients and seasonal specials." },
  { icon: Car, title: "Secure Parking", desc: "Complimentary secure and spacious parking for all guests. Our parking area is monitored 24/7 and can accommodate both private vehicles and tour vans." },
  { icon: Shirt, title: "Laundry Service", desc: "Professional laundry and dry cleaning services available for guests needing garments refreshed during their stay. Same-day service is available on request." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock security personnel and CCTV monitoring throughout the property ensure our guests enjoy complete peace of mind during their stay." },
];

const galleryImages = [
  { src: lobbyImg, label: "Hotel Lobby" },
  { src: restaurantImg, label: "Ground Floor Restaurant" },
  { src: restaurant2Img, label: "Dining Area" },
  { src: barImg, label: "Bar & Lounge" },
  { src: rooftopImg, label: "Rooftop Lounge" },
  { src: rooftop2Img, label: "Rooftop View" },
  { src: bathroomImg, label: "En-suite Bathroom" },
  { src: gardenImg, label: "Hotel Gardens" },
];

const Amenities = () => (
  <>
    <SEOHead
      title="Hotel Amenities"
      description="Explore the amenities at The Warwick Hotel Nanyuki — swimming pool, landscaped gardens, on-site restaurant, bar and lounge, rooftop dining, laundry service, secure parking, and 24/7 security."
      canonical="/amenities"
    />
    <PageHero image={heroImg} title="Hotel Amenities" subtitle="Comfort in every detail" />

    {/* Intro */}
    <section className="section-padding pb-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-4">World-Class Facilities in the Heart of Nanyuki</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
            At The Warwick Hotel Nanyuki, every detail is designed for your comfort. From our beautifully landscaped gardens and refreshing swimming pool to our on-site restaurant and rooftop lounge, we provide a comprehensive range of amenities that make your stay relaxing and enjoyable.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
            Our hotel also offers complimentary secure parking, professional laundry services, 24/7 security, and a welcoming lobby lounge. Whether you're unwinding after a safari at Ol Pejeta or preparing for a <Link to="/conferencing" className="text-primary hover:underline">conference</Link>, our facilities cater to every need.
          </motion.p>
        </motion.div>
      </div>
    </section>

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
              className="bg-secondary rounded-2xl p-7 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
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
          <img src={poolImg} alt="The Warwick Hotel Nanyuki swimming pool and garden view" className="w-full rounded-2xl shadow-2xl aspect-[21/9] object-cover" />
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

    {/* FAQ */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground mb-8 text-center"
        >
          Amenities FAQ
        </motion.h2>
        <div className="space-y-4">
          {[
            { q: "Is the swimming pool open to non-guests?", a: "The pool is primarily for hotel guests. Day-use passes may be available on request — please contact our front desk for availability and pricing." },
            { q: "What dining options are available?", a: "Our ground floor restaurant serves breakfast, lunch, and dinner with a mix of local Kenyan and international cuisine. We also have a bar and lounge and a rooftop dining area with panoramic views." },
            { q: "Is Wi-Fi available throughout the hotel?", a: "Yes, complimentary high-speed Wi-Fi is available in all rooms, public areas, and conference spaces." },
            { q: "Does the hotel offer airport transfers?", a: "Yes, we can arrange transfers from Nanyuki Airstrip and Nairobi. Please contact us in advance to arrange your transport." },
          ].map((item, i) => (
            <details key={i} className="bg-secondary rounded-xl p-6 group cursor-pointer">
              <summary className="font-display font-semibold text-foreground list-none flex items-center justify-between">
                {item.q}
                <ChevronRight size={16} className="text-primary group-open:rotate-90 transition-transform shrink-0 ml-4" />
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed text-sm">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
            Have more questions? Contact us <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Amenities;
