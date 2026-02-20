import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Users, Utensils, Flower2, Waves } from "lucide-react";
import heroImg from "@/assets/conferences/IMG_9438.jpg";
import poolImg from "@/assets/Amenities/Outside view, with swimming pool.jpeg";
import conferenceImg from "@/assets/conferences/IMG_9442.jpg";
import confImg1 from "@/assets/conferences/IMG_9439.jpg";
import confImg2 from "@/assets/conferences/IMG_9443.jpg";
import confImg3 from "@/assets/conferences/IMG_9444.jpg";
import confImg4 from "@/assets/conferences/IMG_9446.jpg";
import confImg5 from "@/assets/conferences/IMG_9447.jpg";
import confImg6 from "@/assets/conferences/IMG_9449.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const Amenities = () => (
  <>
    <PageHero image={heroImg} title="Amenities & Conferences" subtitle="Business meets tranquility" />

    {/* Conference Rates */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Conferences</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground mb-6">Meeting & Event Spaces</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-8">
              Host your next conference, workshop, or corporate retreat in our fully equipped meeting rooms with natural lighting and garden views.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-secondary p-6 text-center">
                <p className="text-3xl font-bold text-primary font-display">3,500</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Full Day</p>
              </div>
              <div className="rounded-xl bg-secondary p-6 text-center">
                <p className="text-3xl font-bold text-primary font-display">3,000</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Half Day</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Team Building</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground mb-6">Corporate Retreats</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-8">
              Strengthen your team with outdoor activities and customized programs set against the backdrop of Mount Kenya.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-secondary p-6 text-center">
                <p className="text-3xl font-bold text-primary font-display">3,500</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Full Day</p>
              </div>
              <div className="rounded-xl bg-secondary p-6 text-center">
                <p className="text-3xl font-bold text-primary font-display">3,000</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Half Day</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Conference Image */}
    <section className="px-6 md:px-12 lg:px-20 pb-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={conferenceImg} alt="Conference facilities" className="w-full rounded-2xl shadow-2xl aspect-[21/9] object-cover" />
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Hotel Features</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Our Facilities</motion.h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Flower2, title: "Serene Gardens", desc: "Beautifully landscaped grounds perfect for relaxation" },
            { icon: Waves, title: "Swimming Pool", desc: "A refreshing pool surrounded by tropical greenery" },
            { icon: Utensils, title: "On-site Dining", desc: "Fresh local and international cuisine daily" },
            { icon: Users, title: "Conference Halls", desc: "Modern meeting spaces for every occasion" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={poolImg} alt="Swimming pool" className="w-full rounded-2xl shadow-2xl aspect-[21/9] object-cover" />
        </motion.div>
      </div>
    </section>

    {/* Conference Gallery */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Gallery</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Conference & Event Spaces</motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[confImg1, confImg2, confImg3, confImg4, confImg5, confImg6].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl overflow-hidden aspect-[4/3] group"
            >
              <img src={img} alt={`Conference space ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Amenities;
