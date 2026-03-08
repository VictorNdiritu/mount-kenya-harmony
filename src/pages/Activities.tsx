import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import hikingImg from "@/assets/gen-hiking.jpg";
import wildlifeImg from "@/assets/gen-wildlife.jpg";
import adventureImg from "@/assets/ngare-ndare.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const categories = [
  {
    title: "Mountain Hiking",
    image: hikingImg,
    intro: "Mount Kenya, Africa's second-highest peak, offers some of the most spectacular hiking trails on the continent. From the hotel, you can arrange guided day hikes or multi-day treks through diverse ecosystems including bamboo forests, alpine meadows, and glacial valleys.",
    items: [
      { name: "Sirimon Route – Day Hike", desc: "A scenic day hike through moorlands and alpine meadows starting from the Sirimon Gate, just a 30-minute drive from the hotel." },
      { name: "Sirimon Route – Multi-Day Trek", desc: "An unforgettable multi-day ascent to Point Lenana (4,985 m), the third-highest peak, with stunning views and diverse wildlife." },
      { name: "Nature Walks", desc: "Guided nature walks through indigenous forests around the mountain's lower slopes, perfect for bird watching and photography." },
    ],
  },
  {
    title: "Wildlife & Conservation",
    image: wildlifeImg,
    intro: "The Laikipia region is one of Kenya's premier wildlife destinations, home to the Big Five and rare species found nowhere else. The Warwick Hotel's proximity to world-class conservancies makes it an ideal base for unforgettable safari experiences.",
    items: [
      { name: "Ol Pejeta Conservancy", desc: "Home to the last two northern white rhinos and the Big Five. Enjoy game drives, the chimpanzee sanctuary, and night safaris in this 90,000-acre conservancy." },
      { name: "Bongo Tracking", desc: "Track the critically endangered mountain bongo antelope in the dense forests of Mount Kenya — a unique experience unavailable anywhere else." },
      { name: "Bird Watching", desc: "Spot over 300 species of birds across highland forests, wetlands, and open grasslands. Guided birding tours are available for enthusiasts." },
    ],
  },
  {
    title: "Adventure & Leisure",
    image: adventureImg,
    intro: "Beyond hiking and safaris, the Mount Kenya region offers thrilling outdoor adventures and peaceful leisure activities. Whether you seek adrenaline or tranquillity, there's something for every traveller.",
    items: [
      { name: "Ngare Ndare Forest", desc: "Walk the famous canopy walkway suspended 50 metres above the forest floor, swim in natural blue pools, and discover stunning waterfalls in this pristine forest." },
      { name: "Rock Climbing", desc: "Challenge yourself on the volcanic rock formations of Mount Kenya's lower ridges with routes for beginners and experienced climbers alike." },
      { name: "Trout Fishing", desc: "Enjoy fly-fishing for rainbow and brown trout in the crystal-clear mountain streams of the Nanyuki and Burguret rivers." },
    ],
  },
];

const Activities = () => (
  <>
    <SEOHead
      title="Activities & Excursions"
      description="Explore activities near The Warwick Hotel Nanyuki — Mount Kenya hiking, Ol Pejeta Conservancy safaris, Ngare Ndare Forest canopy walk, bird watching, trout fishing, rock climbing, and bongo tracking."
      canonical="/activities"
    />
    <PageHero image={hikingImg} title="Activities & Excursions" subtitle="Adventures around Mount Kenya" />

    {/* Intro */}
    <section className="section-padding pb-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-4">Your Adventure Starts Here</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
            The Warwick Hotel Nanyuki sits in one of Kenya's most exciting adventure regions. From the snow-capped peaks of Mount Kenya to the wildlife-rich savannahs of Laikipia, guests have access to a remarkable range of outdoor activities and cultural experiences — all within easy reach of the hotel.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
            Our concierge can arrange guided excursions, transport, and equipment hire for all activities listed below. Whether you're a seasoned mountaineer or a first-time safari-goer, we'll help you plan the perfect adventure. After a day of exploration, return to the comfort of your <Link to="/rooms" className="text-primary hover:underline">room</Link> and unwind at our <Link to="/amenities" className="text-primary hover:underline">pool and gardens</Link>.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl space-y-24">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp} custom={0} className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="rounded-2xl overflow-hidden group">
                <img src={cat.image} alt={`${cat.title} near The Warwick Hotel Nanyuki`} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{cat.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{cat.intro}</p>
              <div className="space-y-4">
                {cat.items.map((item, j) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp}
                    custom={j + 2}
                    className="p-5 rounded-xl bg-secondary hover:bg-primary/5 transition-colors group cursor-default"
                  >
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
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
          Activities FAQ
        </motion.h2>
        <div className="space-y-4">
          {[
            { q: "Can the hotel arrange safari and hiking excursions?", a: "Yes. Our concierge desk can arrange all excursions including Ol Pejeta safaris, Mount Kenya hikes, Ngare Ndare visits, and more. We work with licensed guides and trusted operators." },
            { q: "How far is Ol Pejeta Conservancy from the hotel?", a: "Ol Pejeta is approximately 25 km from The Warwick Hotel, about a 30-minute drive. We can arrange transport and entry permits." },
            { q: "Do I need special equipment for hiking Mount Kenya?", a: "For day hikes, good walking shoes and warm layers are sufficient. Multi-day treks require proper hiking gear — we can connect you with equipment hire services." },
            { q: "Is Ngare Ndare Forest suitable for children?", a: "Yes, the canopy walkway and forest trails are family-friendly. Children must be accompanied by adults, and the minimum age for the walkway is typically 5 years." },
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

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-4">Plan Your Adventure</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8">
            Contact us to arrange excursions, hire guides, or build a custom itinerary for your stay.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all">
              Book Your Stay
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-body text-sm font-semibold hover:bg-secondary transition-all">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Activities;
