import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
      <PageHero image={heroImg} title="Contact Us" subtitle="We'd love to hear from you" />

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
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mt-3">We value your experience. Share your thoughts with us.</motion.p>
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
    </>
  );
};

export default Contact;
