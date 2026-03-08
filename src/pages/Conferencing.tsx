import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Monitor, Wifi, Coffee, Projector, Mic, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
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
  { icon: Projector, title: "Projectors & Screens", desc: "HD projectors with large screens for presentations and visual displays during meetings and workshops." },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Dedicated high-speed internet for seamless virtual meetings, video conferencing, and online collaboration." },
  { icon: Mic, title: "Sound Systems", desc: "Professional audio equipment including wireless microphones for clear communication in larger setups." },
  { icon: Coffee, title: "Tea & Coffee Breaks", desc: "Complimentary mid-morning and afternoon refreshment breaks with tea, coffee, pastries, and fresh fruit." },
  { icon: Monitor, title: "AV Equipment", desc: "Modern audiovisual setup including screens, speakers, and connectivity for hybrid meetings." },
  { icon: Users, title: "Flexible Layouts", desc: "Versatile seating configurations: classroom, boardroom, U-shape, and theatre setups to suit any event format." },
];

const galleryImages = [
  confImg1, confImg2, confImg3, confImg4, confImg5, confImg6,
  confImg7, confImg8, confImg9, confImg10, confImg11, confImg12,
];

const Conferencing = () => (
  <>
    <SEOHead
      title="Conferencing & Events"
      description="Host conferences, workshops, and corporate retreats at The Warwick Hotel Nanyuki. Modern meeting rooms with projectors, Wi-Fi, sound systems, and flexible seating. Full-day and half-day packages from KES 3,000."
      canonical="/conferencing"
    />
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
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4">
              Whether it's an intimate boardroom session for ten or a large-scale conference for over one hundred delegates, our dedicated events team ensures every detail is handled with precision and care. We offer customized packages that include accommodation, meals, tea breaks, and full audiovisual support.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed">
              Our conference facilities are popular with corporate clients, NGOs, government agencies, and international organizations seeking a productive yet serene venue away from the city. The combination of modern amenities and a tranquil natural setting makes The Warwick an ideal choice for events that require focus and creativity.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={confImg2} alt="Conference hall at The Warwick Hotel Nanyuki" loading="lazy" className="w-full rounded-2xl shadow-2xl aspect-[4/3] object-cover" />
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
            { title: "Conference Rates", fullDay: "3,500", halfDay: "3,000", desc: "Includes venue hire, projector, screen, Wi-Fi, tea breaks, lunch, and stationery." },
            { title: "Team Building Rates", fullDay: "3,500", halfDay: "3,000", desc: "Includes outdoor activity space, facilitator coordination, refreshments, and lunch." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{item.desc}</p>
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
          Rates are per person and inclusive of all statutory taxes. Residential conference packages are also available — <Link to="/contact" className="text-primary hover:underline">contact us</Link> for a custom quote.
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
              <img src={img} alt={`Conference and event space ${i + 1} at The Warwick Hotel`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
          Conferencing FAQ
        </motion.h2>
        <div className="space-y-4">
          {[
            { q: "What is the maximum capacity of your conference rooms?", a: "Our main conference hall can accommodate up to 150 delegates in theatre-style seating. We also have smaller breakout rooms for 10–30 participants." },
            { q: "Do you offer residential conference packages?", a: "Yes. We offer packages that combine accommodation, meals, tea breaks, and conference facilities at a competitive all-inclusive rate. Contact us for a tailored quote." },
            { q: "Can you arrange team-building activities?", a: "Absolutely. We coordinate outdoor team-building activities including nature walks, swimming, and group challenges. Our events team can design a custom programme for your group." },
            { q: "Is there audiovisual equipment available?", a: "All conference rooms come equipped with HD projectors, screens, wireless microphones, speakers, and high-speed Wi-Fi. Additional equipment can be arranged on request." },
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
      </div>
    </section>

    {/* CTA */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl font-bold text-foreground mb-4">Ready to Plan Your Event?</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8 text-lg">
            Get in touch with our events team to discuss your requirements and receive a customized proposal for your conference, workshop, or team-building retreat.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 hover:shadow-xl hover:shadow-primary/20"
            >
              Contact Our Events Team <ArrowRight size={16} />
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-body text-sm font-semibold hover:bg-background transition-all"
            >
              View Accommodation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Conferencing;
