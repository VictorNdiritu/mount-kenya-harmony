import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-image-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const inputClass = "w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

const Contact = () => {
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", phone: "", dates: "", roomType: "", message: "" });
  const [feedbackForm, setFeedbackForm] = useState({ name: "", email: "", rating: "", comments: "" });

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with The Warwick Hotel Nanyuki. Reach us by email at info@thewarwickhotel.co.ke, phone +254 799 388 888, or WhatsApp. Send a reservation inquiry or guest feedback."
        canonical="/contact"
      />
      <PageHero image={heroImg} title="Contact Us" subtitle="We'd love to hear from you" />

      {/* Intro */}
      <section className="section-padding pb-0">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-4">We're Here to Help</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              Whether you have a question about our rooms, need to plan a conference, or want to arrange activities during your stay, our friendly team is ready to assist. Reach out using any of the methods below and we'll respond within 24 hours.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
              For direct reservations, you can also use our <Link to="/booking" className="text-primary hover:underline">online booking page</Link> or call us during business hours. We look forward to welcoming you to The Warwick Hotel Nanyuki.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-14">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground">Get in Touch</motion.h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "info@thewarwickhotel.co.ke", href: "mailto:info@thewarwickhotel.co.ke" },
                  { icon: Phone, label: "Phone", value: "+254 799 388 888", href: "tel:+254799388888" },
                  { icon: MapPin, label: "Address", value: "P.O Box 64376-00620, Nanyuki, Kenya" },
                ].map((item, i) => (
                  <motion.div key={item.label} variants={fadeUp} custom={i + 1} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="font-display font-semibold text-foreground mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/rooms" className="text-muted-foreground hover:text-primary transition-colors">View Rooms & Rates</Link></li>
                  <li><Link to="/conferencing" className="text-muted-foreground hover:text-primary transition-colors">Conference Facilities</Link></li>
                  <li><Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors">Activities & Excursions</Link></li>
                  <li><Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors">Book Online</Link></li>
                </ul>
              </div>
            </motion.div>

            {/* Booking Inquiry */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-8">Reservation Inquiry</motion.h2>
              <form
                className="grid sm:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const msg = `Booking Inquiry:\nName: ${bookingForm.name}\nEmail: ${bookingForm.email}\nPhone: ${bookingForm.phone}\nDates: ${bookingForm.dates}\nRoom: ${bookingForm.roomType}\nMessage: ${bookingForm.message}`;
                  window.open(`https://wa.me/254799388888?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                <input type="text" placeholder="Full Name" required className={inputClass}
                  value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} />
                <input type="email" placeholder="Email Address" required className={inputClass}
                  value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} />
                <input type="tel" placeholder="Phone Number" className={inputClass}
                  value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} />
                <input type="text" placeholder="Preferred Dates" className={inputClass}
                  value={bookingForm.dates} onChange={(e) => setBookingForm({ ...bookingForm, dates: e.target.value })} />
                <select className={inputClass}
                  value={bookingForm.roomType} onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}>
                  <option value="">Select Room Type</option>
                  <option>Deluxe Room</option>
                  <option>Superior Deluxe</option>
                  <option>Family Room</option>
                  <option>Deluxe Twin</option>
                </select>
                <div />
                <textarea placeholder="Additional message..." rows={4}
                  className={`sm:col-span-2 resize-none ${inputClass}`}
                  value={bookingForm.message} onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })} />
                <button type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20">
                  <Send size={16} /> Send Inquiry via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guest Feedback */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-2xl">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">Feedback</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">Guest Feedback</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mt-3">We value your experience. Share your thoughts with us so we can continue to improve our service and hospitality.</motion.p>
          </motion.div>
          <form
            className="space-y-4 bg-background rounded-2xl p-8 md:p-10 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your feedback!");
              setFeedbackForm({ name: "", email: "", rating: "", comments: "" });
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required className={inputClass}
                value={feedbackForm.name} onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })} />
              <input type="email" placeholder="Email Address" className={inputClass}
                value={feedbackForm.email} onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })} />
            </div>
            <select className={inputClass}
              value={feedbackForm.rating} onChange={(e) => setFeedbackForm({ ...feedbackForm, rating: e.target.value })}>
              <option value="">Rate your experience</option>
              <option>⭐⭐⭐⭐⭐ Excellent</option>
              <option>⭐⭐⭐⭐ Very Good</option>
              <option>⭐⭐⭐ Good</option>
              <option>⭐⭐ Fair</option>
              <option>⭐ Poor</option>
            </select>
            <textarea placeholder="Share your experience..." rows={4} required
              className={`resize-none ${inputClass}`}
              value={feedbackForm.comments} onChange={(e) => setFeedbackForm({ ...feedbackForm, comments: e.target.value })} />
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Contact FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What are your office hours?", a: "Our front desk is staffed 24/7. For reservations and general inquiries, our office operates from 7:00 AM to 10:00 PM East Africa Time." },
              { q: "How do I get to the hotel from Nairobi?", a: "The hotel is approximately 200 km from Nairobi, about a 3-hour drive via the Nairobi-Nanyuki highway. You can also fly to Nanyuki Airstrip — we can arrange airport transfers." },
              { q: "Can I make a reservation by phone?", a: "Yes, call us at +254 799 388 888 or email info@thewarwickhotel.co.ke. You can also book online through our booking page." },
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
    </>
  );
};

export default Contact;
