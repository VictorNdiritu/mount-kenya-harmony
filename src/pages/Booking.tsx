import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Send, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-image-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const inputClass =
  "w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mzdajkgq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && !data.errors) {
        setSuccess(true);
        e.currentTarget.reset();
      }
    } catch (err) {
      console.error("Submission issue:", err);
    }

    setLoading(false);
  };

  return (
    <>
      <SEOHead
        title="Book Your Stay"
        description="Reserve your room at The Warwick Hotel Nanyuki. Choose from Deluxe, Superior Deluxe, Family, and Twin rooms. Bed & Breakfast, Half Board, and Full Board meal plans available for residents and non-residents."
        canonical="/booking"
      />
      <PageHero
        image={heroImg}
        title="Book Your Stay"
        subtitle="Reserve your room at The Warwick"
      />

      {/* Intro */}
      <section className="section-padding pb-0">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground mb-4">Make a Reservation</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              Complete the form below to submit a booking request for The Warwick Hotel Nanyuki. Our reservations team will confirm availability and send you a confirmation within 24 hours. For immediate assistance, call us at <a href="tel:+254799388888" className="text-primary hover:underline">+254 799 388 888</a>.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
              Not sure which room to choose? <Link to="/rooms" className="text-primary hover:underline">Browse our rooms and rates</Link> to find the perfect option for your stay.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-secondary rounded-2xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                className={inputClass}
              />
            </div>

            <input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              className={inputClass}
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="date"
                name="Check-in Date"
                required
                className={inputClass}
              />
              <input
                type="date"
                name="Check-out Date"
                required
                className={inputClass}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select name="Guests" className={inputClass}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>

              <select name="Room Type" required className={inputClass}>
                <option value="">Select Room Type</option>
                <option>Deluxe Room</option>
                <option>Superior Deluxe</option>
                <option>Family Room</option>
                <option>Deluxe Twin</option>
              </select>
            </div>

            <select name="Meal Plan" className={inputClass}>
              <option value="">Select Meal Plan</option>
              <option>Bed & Breakfast</option>
              <option>Half Board</option>
              <option>Full Board</option>
            </select>

            <textarea
              name="Special Requests"
              placeholder="Special requests or notes..."
              rows={4}
              className={`resize-none ${inputClass}`}
            />

            {success && (
              <p className="text-green-600 text-sm text-center">
                Booking request sent successfully. We will contact you shortly to confirm your reservation.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Submit Booking Request"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Booking FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How will I receive my booking confirmation?", a: "After submitting your request, our team will review availability and send a confirmation via email within 24 hours. For urgent bookings, call us directly." },
              { q: "What is the cancellation policy?", a: "Cancellations made 48 hours or more before check-in receive a full refund. Cancellations within 48 hours may incur a one-night charge. Please contact us for specific terms." },
              { q: "Can I modify my reservation after booking?", a: "Yes. Contact us by email or phone to adjust dates, room type, or meal plan. Changes are subject to availability." },
              { q: "Do you accept credit card payments?", a: "Yes, we accept Visa, Mastercard, and M-Pesa payments. Payment details will be shared in your confirmation email." },
            ].map((item, i) => (
              <details key={i} className="bg-background rounded-xl p-6 group cursor-pointer">
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

export default Booking;
