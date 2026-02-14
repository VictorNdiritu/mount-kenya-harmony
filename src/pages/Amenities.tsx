import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Users, Utensils, Flower2, Waves } from "lucide-react";
import conferenceImg from "@/assets/new-photos/IMG-20250408-WA0020.jpg";
import poolImg from "@/assets/new-photos/IMG-20250408-WA0042.jpg";
import gardenImg from "@/assets/new-photos/IMG-20250408-WA0045.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const Amenities = () => (
  <>
    <PageHero image={conferenceImg} title="Amenities & Conferences" subtitle="Business meets tranquility" />

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
  </>
);

export default Amenities;
