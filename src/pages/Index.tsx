import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Mountain, MessageCircle, ArrowRight, Star, ChevronRight, Utensils, Users, Waves } from "lucide-react";
import SEOHead from "@/components/SEOHead";

import heroImage from "@/assets/homepage-photos/IMG-20250408-WA0050.jpg";
import poolImage from "@/assets/hero-image-1.jpg";
import roomImage from "@/assets/homepage-photos/sup-deluxe.jpg";
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

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is The Warwick Hotel Nanyuki located?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Warwick Hotel Nanyuki is located at the foothills of Mount Kenya in Nanyuki town, Laikipia County, Kenya. It is approximately 200 km north of Nairobi along the Nanyuki-Nairobi highway." }
    },
    {
      "@type": "Question",
      "name": "What types of rooms does The Warwick Hotel offer?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer four room categories: Deluxe Room, Superior Deluxe, Family Room, and Deluxe Twin. All rooms include free Wi-Fi, room service, and views of the gardens or Mount Kenya." }
    },
    {
      "@type": "Question",
      "name": "Does The Warwick Hotel have conference facilities?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have fully equipped conference and event spaces with projectors, sound systems, high-speed Wi-Fi, and flexible seating layouts including classroom, boardroom, U-shape, and theatre setups." }
    },
    {
      "@type": "Question",
      "name": "What activities are available near the hotel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Guests can enjoy Mount Kenya hiking, Ol Pejeta Conservancy safaris, Ngare Ndare Forest walks, bird watching, trout fishing, rock climbing, and mountain bongo tracking." }
    },
    {
      "@type": "Question",
      "name": "How do I make a reservation at The Warwick Hotel?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can book directly through our website booking page, contact us via email at info@thewarwickhotel.co.ke, call +254 799 388 888, or reach us on WhatsApp." }
    }
  ]
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Home"
        description="The Warwick Hotel Nanyuki is an independent boutique hotel at the foothills of Mount Kenya. Enjoy luxury rooms, conference facilities, fine dining, a swimming pool, and easy access to Ol Pejeta, Ngare Ndare Forest, and Mount Kenya hiking trails."
        canonical="/"
        jsonLd={homeFaqJsonLd}
      />

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="The Warwick Hotel Nanyuki — boutique hotel with Mount Kenya views"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
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
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-medium tracking-[0.2em] uppercase mb-6"
                style={{ color: "#53abb5", WebkitTextFillColor: "#53abb5" }}
              >
                <Star size={12} style={{ color: "#53abb5" }} /> Nanyuki, Kenya
              </motion.p>

              <h1
                className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-primary-foreground"
              >
                Where comfort meets{" "}
                <span className="text-primary-foreground">nature</span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
                style={{ color: "#000000", WebkitTextFillColor: "#000000" }}
              >
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
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20"
                >
                  Book Your Stay
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

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

      {/* About */}
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
                Nestled at the foothills of Africa's second-highest mountain, The Warwick Hotel Nanyuki is an independent boutique hotel offering a unique blend of modern comfort and natural beauty. Located in the heart of Nanyuki town in Laikipia County, our hotel serves as the perfect base for exploring the magnificent Mount Kenya region.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-5">
                Whether you're here for business, adventure, or a peaceful getaway, our serene gardens, world-class dining, and warm Kenyan hospitality make us the perfect base for exploring the wonders of the Mount Kenya region. From the renowned Ol Pejeta Conservancy to the breathtaking Ngare Ndare Forest canopy walk, adventure is always just a short drive away.
              </motion.p>

              <motion.p variants={fadeUp} custom={3.5} className="text-muted-foreground leading-relaxed mb-8">
                Our hotel features a refreshing swimming pool, beautifully landscaped gardens, modern conference facilities, and an on-site restaurant serving both local and international cuisine. Whether you're planning a corporate retreat, a family holiday, or a romantic getaway, The Warwick delivers an unforgettable experience.
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
                <img
                  src={poolImage}
                  alt="The Warwick Hotel swimming pool and gardens"
                  className="rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/5 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Offer</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-foreground">Experience The Warwick</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: roomImage, title: "Luxury Accommodation", desc: "Four room categories with garden and mountain views, modern amenities, and premium bedding for a restful stay.", link: "/rooms" },
              { img: gardenImage, title: "Serene Gardens & Pool", desc: "Beautifully landscaped tropical gardens and a refreshing swimming pool surrounded by lush greenery.", link: "/amenities" },
              { img: diningImage, title: "Fine Dining", desc: "Our on-site restaurant serves fresh local and international cuisine, with rooftop dining and lounge options.", link: "/amenities" },
              { img: activityImage, title: "Adventure & Safari", desc: "Easy access to Mount Kenya hikes, Ol Pejeta safaris, Ngare Ndare Forest, bird watching, and trout fishing.", link: "/activities" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link to={item.link} className="block group">
                  <div className="rounded-2xl overflow-hidden mb-4">
                    <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Why Choose Us</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">The Warwick Difference</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Mountain, title: "Prime Location", desc: "Situated at the foothills of Mount Kenya with easy access to Nanyuki town, Ol Pejeta Conservancy, and Ngare Ndare Forest." },
              { icon: Bed, title: "Comfortable Rooms", desc: "Well-appointed rooms with modern furnishings, free Wi-Fi, room service, and views of the gardens or Mount Kenya." },
              { icon: Users, title: "Conference Facilities", desc: "Fully equipped meeting rooms ideal for corporate retreats, workshops, and team-building events in a serene setting." },
              { icon: Utensils, title: "Exceptional Dining", desc: "Fresh farm-to-table cuisine with both local Kenyan dishes and international options, plus rooftop dining." },
              { icon: Waves, title: "Pool & Gardens", desc: "A refreshing swimming pool surrounded by beautifully landscaped tropical gardens for relaxation." },
              { icon: MessageCircle, title: "Warm Hospitality", desc: "Our dedicated staff provides personalized service, local insights, and genuine Kenyan warmth throughout your stay." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Frequently Asked Questions</motion.h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Where is The Warwick Hotel Nanyuki located?", a: "The Warwick Hotel is located in Nanyuki town at the foothills of Mount Kenya, approximately 200 km north of Nairobi. Nanyuki is the gateway to the Mount Kenya region and Laikipia's famous conservancies." },
              { q: "What room types are available?", a: "We offer four room categories: Deluxe Room, Superior Deluxe, Family Room, and Deluxe Twin. All rooms include free Wi-Fi, room service, and views of the gardens or Mount Kenya. Rates are available for Bed & Breakfast, Half Board, and Full Board." },
              { q: "Does the hotel have conference and event facilities?", a: "Yes. Our modern conference rooms are fully equipped with projectors, sound systems, high-speed Wi-Fi, and flexible seating arrangements. We cater for corporate retreats, workshops, and team-building events." },
              { q: "What activities are available near the hotel?", a: "Guests can enjoy Mount Kenya hiking via the Sirimon Route, wildlife safaris at Ol Pejeta Conservancy, the Ngare Ndare Forest canopy walk, bird watching, trout fishing, and rock climbing." },
              { q: "How do I book a room?", a: "You can book directly through our website, email us at info@thewarwickhotel.co.ke, call +254 799 388 888, or reach us on WhatsApp for a quick reservation." },
            ].map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-xl p-6 group cursor-pointer"
              >
                <summary className="font-display font-semibold text-foreground list-none flex items-center justify-between">
                  {item.q}
                  <ChevronRight size={16} className="text-primary group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <p className="text-muted-foreground mt-3 leading-relaxed text-sm">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl font-bold text-foreground mb-4">Ready to Experience Mount Kenya?</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8 text-lg">
              Book your stay at The Warwick Hotel Nanyuki and discover the beauty, adventure, and serenity of Kenya's highland region.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 hover:shadow-xl hover:shadow-primary/20"
              >
                Book Your Stay <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-body text-sm font-semibold hover:bg-secondary transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
