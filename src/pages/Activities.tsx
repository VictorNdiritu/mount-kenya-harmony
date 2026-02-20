import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
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
    items: [
      { name: "Sirimon Route – Day Hike", desc: "A scenic day hike through moorlands and alpine meadows." },
      { name: "Sirimon Route – Multi-Day Trek", desc: "An unforgettable multi-day ascent to Point Lenana." },
      { name: "Nature Walks", desc: "Guided walks through indigenous forests around the mountain." },
    ],
  },
  {
    title: "Wildlife & Conservation",
    image: wildlifeImg,
    items: [
      { name: "Ol Pejeta Conservancy", desc: "Home to the last two northern white rhinos and the Big Five." },
      { name: "Bongo Tracking", desc: "Track the rare mountain bongo in the forests of Mount Kenya." },
      { name: "Bird Watching", desc: "Spot over 300 species of birds in the highland ecosystem." },
    ],
  },
  {
    title: "Adventure & Leisure",
    image: adventureImg,
    items: [
      { name: "Ngare Ndare Forest", desc: "Walk the famous canopy walkway suspended above the forest." },
      { name: "Rock Climbing", desc: "Challenge yourself on the volcanic rock formations." },
      { name: "Trout Fishing", desc: "Enjoy fly-fishing in the crystal-clear mountain streams." },
    ],
  },
];

const Activities = () => (
  <>
    <PageHero image={hikingImg} title="Activities & Excursions" subtitle="Adventures around Mount Kenya" />

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl space-y-24">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
          >
            <motion.div variants={fadeUp} custom={0} className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="rounded-2xl overflow-hidden group">
                <img src={cat.image} alt={cat.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">{cat.title}</h2>
              <div className="space-y-4">
                {cat.items.map((item, j) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp}
                    custom={j + 2}
                    className="p-5 rounded-xl bg-secondary hover:bg-primary/5 transition-colors group cursor-default"
                  >
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Activities;
