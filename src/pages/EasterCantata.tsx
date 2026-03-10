import { motion } from "framer-motion";
import { Music, MapPin, Ticket, Mail, Phone, MessageCircle, ParkingCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/easter-cantata-hero.jpg";
import citamLogo from "@/assets/citam-logo.png";
import warwickLogo from "@/assets/logo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const EasterCantata = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "Easter Cantata Night",
    description: "A unique jazz-infused Easter concert by CITAM Choir and The Jazzinfolk at The Warwick Hotel Nanyuki.",
    url: "https://thewarwickhotel.co.ke/easter-cantata",
    location: {
      "@type": "Place",
      name: "The Warwick Hotel Nanyuki",
      address: { "@type": "PostalAddress", addressLocality: "Nanyuki", addressCountry: "KE" },
    },
    offers: {
      "@type": "Offer",
      price: "1500",
      priceCurrency: "KES",
      availability: "https://schema.org/LimitedAvailability",
    },
    performer: [
      { "@type": "PerformingGroup", name: "CITAM Choir" },
      { "@type": "PerformingGroup", name: "The Jazzinfolk" },
    ],
  };

  return (
    <>
      <SEOHead
        title="Easter Cantata Night"
        description="Experience a jazz-infused Easter Cantata Night at The Warwick Hotel Nanyuki. CITAM Choir meets The Jazzinfolk for an unforgettable evening of faith, music, and community. Tickets KES 1500."
        canonical="/easter-cantata"
        jsonLd={jsonLd}
      />

      <PageHero
        image={heroImg}
        title="Easter Cantata Night"
        subtitle="Where faith meets jazz — an unforgettable evening of sacred music"
      />

      {/* Collaboration Logos */}
      <section className="section-padding pb-0">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
              A Collaboration Between
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="flex items-center gap-8 md:gap-12 mb-10">
              <img src={warwickLogo} alt="The Warwick Hotel Nanyuki logo" className="h-16 md:h-20 w-auto object-contain" />
              <span className="text-3xl text-muted-foreground font-light">×</span>
              <img src={citamLogo} alt="Christ Is The Answer Ministries (CITAM) logo" className="h-16 md:h-20 w-auto object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding pt-8">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Prepare Your Senses for a Jazzy Revelation
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary font-display text-lg italic mb-6">
              Are You Ready for a New Perspective on Easter Music?
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
              Get ready to experience the beloved Easter message in a way you've never heard before! This season, prepare yourself for an unprecedented event where traditional reverence meets soulful innovation. The Warwick Hotel is proud to collaborate with Christ Is The Answer Ministries (CITAM) to present an extraordinary "Easter Cantata Night," a unique concert that promises to be nothing short of breathtaking. This isn't just another performance; it's a unique opportunity to witness the harmonic fusion of faith, jazz, and community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-3xl space-y-16">
          {/* Symphony */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <Music size={20} className="text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">A Harmonic Symphony of Faith and Soul</h2>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
              At the heart of this Easter Cantata lies a truly inspired collaboration. Imagine the powerful, uplifting voices of the CITAM Choir, renowned for their passionate renditions of Easter hymns and contemporary spiritual pieces, blending seamlessly with the smooth rhythms and soulful interpretations of "The Jazzinfolk." This isn't simply adding a jazz element; it's a masterful reinterpretation that infuses sacred melodies with a fresh, dynamic energy. The resulting symphony of faith and soul will resonate deeply with your senses, moving your spirit in unexpected and profound ways.
            </motion.p>
          </motion.div>

          {/* Venue */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <MapPin size={20} className="text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">The Warwick Hotel: A Stage of Sophisticated Elegance</h2>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
              To host an event of such distinction, only the grandest setting would suffice. The magnificent ballroom of The Warwick Hotel will be transformed into a stage of sophisticated elegance, perfectly complementing the prestigious nature of the Cantata. With meticulous attention to detail and impeccable acoustics, the venue ensures that every note, every chord, and every whisper will be crystal clear. Indulge in an atmosphere of warmth, inviting light, and unparalleled comfort as you immerse yourself in this unparalleled musical journey.
            </motion.p>
          </motion.div>

          {/* Unity */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <MessageCircle size={20} className="text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">A Celebration of Unity and Shared Purpose</h2>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
              More than just a spectacular performance, the Easter Cantata Night is a true celebration of community and unity. It's an opportunity to come together with like-minded individuals, united by a shared appreciation for music, faith, and the spirit of the season. This event fosters a profound sense of connection and shared purpose, reminding us of the powerful bonds that unite us all. Come, be inspired, be uplifted, and experience the undeniable magic of a community gathered in joyful jubilation.
            </motion.p>
          </motion.div>

          {/* Experience */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">An Unforgettable Experience Awaits</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
              The Easter Cantata Night is not simply an event; it's an experience that will leave an indelible mark on your soul. It's a journey of discovery, a testament to the power of collaboration, and a vibrant celebration of the Easter message in a fresh and innovative way. We invite you to join us for an evening of music that transcends boundaries, faith that moves mountains, and community that warms the heart. Don't miss this unique opportunity to witness a harmonic revelation that will stay with you long after the final note has faded.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ticket CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-2xl p-8 md:p-12 text-center"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-2 mb-4">
              <Ticket size={24} className="text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-bold">Secure Your Tickets</h2>
            </motion.div>

            <motion.p variants={fadeUp} custom={1} className="text-background/70 mb-6">
              Limited tickets available — this exclusive event is expected to sell out quickly.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 text-xl font-bold mb-2">
              KES 1,500
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="flex items-center justify-center gap-2 text-sm text-background/60 mb-8">
              <ParkingCircle size={14} />
              Includes FREE PARKING
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="space-y-4 text-left max-w-md mx-auto">
              <h3 className="font-display font-semibold text-lg text-center mb-4">How to Purchase</h3>

              <a
                href="mailto:reservations@thewarwickhotel.co.ke?subject=Easter%20Cantata%20Ticket%20Booking"
                className="flex items-center gap-4 p-4 rounded-xl bg-background/10 hover:bg-background/15 transition-colors"
              >
                <Mail size={18} className="text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-background/60 text-xs">reservations@thewarwickhotel.co.ke</p>
                </div>
              </a>

              <a
                href="https://wa.me/254799388888?text=Hi%2C%20I'd%20like%20to%20book%20tickets%20for%20the%20Easter%20Cantata%20Night."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-background/10 hover:bg-background/15 transition-colors"
              >
                <MessageCircle size={18} className="text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-background/60 text-xs">wa.me/254799388888</p>
                </div>
              </a>

              <a
                href="tel:+254799388888"
                className="flex items-center gap-4 p-4 rounded-xl bg-background/10 hover:bg-background/15 transition-colors"
              >
                <Phone size={18} className="text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Call Us</p>
                  <p className="text-background/60 text-xs">+254 799 388 888</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-secondary section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
              This is an evening of inspiration, joy, and profound musical innovation that you will cherish for years to come.
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="text-primary font-display text-lg mt-4 italic">
              Secure your spot now and prepare for a truly unforgettable Easter celebration!
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EasterCantata;
