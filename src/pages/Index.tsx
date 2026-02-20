import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Mountain, MessageCircle, ArrowRight, Star, ChevronRight } from "lucide-react";

import heroImage from "@/assets/hero-image-1.jpg";
import poolImage from "@/assets/Amenities/Outside view, with swimming pool.jpeg";
import roomImage from "@/assets/rooms/IMG-20250408-WA0020.jpg";
import gardenImage from "@/assets/Amenities/IMG_9385.jpg";
import diningImage from "@/assets/Amenities/Restaurant.jpg";
import activityImage from "@/assets/gen-hiking.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const Index = () => {
  return (
    <>
      {/* Hero - Full viewport */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <img src={heroImage} alt="The Warwick Hotel Nanyuki" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary-foreground text-xs font-medium tracking-[0.2em] uppercase mb-6"
              >
                <Star size={12} className="text-primary" /> Nanyuki, Kenya
              </motion.p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Where comfort meets{" "}
                <span className="text-primary-foreground">nature</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                An independent boutique hotel at the foothills of Mount Kenya — your gateway to adventure and serenity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 hover:shadow-xl hover:shadow-primary/20"
                >
                  Explore Rooms <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20"
                >
                  Book Your Stay
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-primary-foreground/60" />
          </div>
        </motion.div>
      </section>

      {/* About - Asymmetric layout */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Welcome
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your Gateway to the<br />Mount Kenya Region
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Nestled at the foothills of Africa's second-highest mountain, The Warwick Hotel Nanyuki is an independent boutique hotel offering a unique blend of modern comfort and natural beauty.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
                Whether you're here for business, adventure, or a peaceful getaway, our serene gardens, world-class dining, and warm Kenyan hospitality make us the perfect base for exploring the wonders of the Mount Kenya region.
              </motion.p>
              <motion.div variants={fadeUp} custom={4}>
                <Link
                  to="/amenities"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all group"
                >
                  Discover our amenities <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img src={poolImage} alt="Hotel pool and gardens" className="rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/5 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links - Modern cards */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Bed, title: "View Rooms", desc: "Explore our comfortable rooms and 2026 rates", path: "/rooms", img: roomImage },
              { icon: Mountain, title: "Explore Activities", desc: "Discover adventures around Mount Kenya", path: "/activities", img: activityImage },
              { icon: MessageCircle, title: "WhatsApp Us", desc: "Get instant assistance on WhatsApp", href: "https://wa.me/254799388888", img: gardenImage },
            ].map((item, i) => {
              const card = (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
                >
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="w-12 h-12 mb-3 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                      <item.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">{card}</a>
              ) : (
                <Link key={item.title} to={item.path!}>{card}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Preview - Cinematic */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={roomImage} alt="Deluxe Room" className="w-full h-full object-cover min-h-[400px]" />
          </motion.div>
          <motion.div
            className="flex items-center bg-secondary px-8 py-16 md:px-16 lg:px-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Accommodations
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Rest in<br />Comfort
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
                Each room is thoughtfully designed to provide a restful retreat with views of Mount Kenya and our lush gardens.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground mb-8">
                <span className="text-foreground font-semibold">Deluxe Rooms</span> from KES 9,500 per night
              </motion.p>
              <motion.div variants={fadeUp} custom={4}>
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:gap-3"
                >
                  View All Rooms <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Experience
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-foreground">
              A Glimpse of Your Stay
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[poolImage, diningImage, gardenImage, activityImage].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative rounded-xl overflow-hidden aspect-square group"
              >
                <img src={img} alt="Hotel gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
