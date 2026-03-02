import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Monitor, Wifi, Coffee, Projector, Mic } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/conferences/IMG_9438.jpg";
import confImg1 from "@/assets/conferences/IMG_9439.jpg";
import confImg2 from "@/assets/conferences/IMG_9442.jpg";
import confImg3 from "@/assets/conferences/IMG_9443.jpg";
import confImg4 from "@/assets/conferences/IMG_9444.jpg";
import confImg5 from "@/assets/conferences/IMG_9446.jpg";
import confImg6 from "@/assets/conferences/IMG_9447.jpg";
import confImg7 from "@/assets/conferences/IMG_9449.jpg";
import confImg8 from "@/assets/conferences/IMG_9450.jpg";
import confImg9 from "@/assets/conferences/IMG_9451.jpg";
import confImg10 from "@/assets/conferences/IMG_9454.jpg";
import confImg11 from "@/assets/conferences/IMG_9455.jpg";
import confImg12 from "@/assets/conferences/IMG_9456.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const features = [
  { icon: Projector, title: "Projectors & Screens", desc: "HD projectors with large screens for presentations" },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Reliable internet for seamless virtual connectivity" },
  { icon: Mic, title: "Sound Systems", desc: "Professional audio equipment for clear communication" },
  { icon: Coffee, title: "Tea & Coffee Breaks", desc: "Refreshment breaks with local and international options" },
  { icon: Monitor, title: "AV Equipment", desc: "Modern audiovisual setup for hybrid meetings" },
  { icon: Users, title: "Flexible Layouts", desc: "Classroom, boardroom, U-shape, and theatre setups" },
];

const galleryImages = [
  confImg1, confImg2, confImg3, confImg4, confImg5, confImg6,
  confImg7, confImg8, confImg9, confImg10, confImg11, confImg12,
];

const Conferencing = () => (
  <>
    <PageHero image={heroImg} title="Conferencing & Events" subtitle="Where business meets tranquility" />

    {/* Intro */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Spaces</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground mb-6">Modern Meeting & Event Spaces</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              Host your next conference, workshop, or corporate retreat in our fully equipped meeting rooms with natural lighting and stunning garden views. Set against the backdrop of Mount Kenya, our venues provide the perfect environment for productive meetings and memorable events.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
              Whether it's an intimate boardroom session or a large-scale conference, our dedicated events team ensures every detail is handled with precision and care.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={confImg2} alt="Conference hall" className="w-full rounded-2xl shadow-2xl aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Rates */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Pricing</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Conference & Team Building Rates</motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { title: "Conference Rates", fullDay: "3,500", halfDay: "3,000" },
            { title: "Team Building Rates", fullDay: "3,500", halfDay: "3,000" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6">{item.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary p-5 text-center">
                  <p className="text-3xl font-bold text-primary font-display">{item.fullDay}</p>
                  <p className="text-xs text-muted-foreground mt-1">KES / Full Day</p>
                </div>
                <div className="rounded-xl bg-secondary p-5 text-center">
                  <p className="text-3xl font-bold text-primary font-display">{item.halfDay}</p>
                  <p className="text-xs text-muted-foreground mt-1">KES / Half Day</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Rates are inclusive of all statutory taxes. Terms & conditions apply.
        </motion.p>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Offer</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Conference Facilities</motion.h2>
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

    {/* Gallery */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Gallery</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Our Conference & Event Spaces</motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl overflow-hidden aspect-[4/3] group"
            >
              <img src={img} alt={`Conference space ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl font-bold text-foreground mb-4">Ready to Plan Your Event?</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8 text-lg">
            Get in touch with our events team to discuss your requirements and receive a customized proposal.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 hover:shadow-xl hover:shadow-primary/20"
            >
              Contact Our Events Team <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Conferencing;
