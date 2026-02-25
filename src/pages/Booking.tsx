import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Send, CalendarDays, Users, BedDouble } from "lucide-react";
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
  return (
    <>
      <PageHero
        image={heroImg}
        title="Book Your Stay"
        subtitle="Reserve your room at The Warwick"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center"
            >
              Reservation
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl font-bold text-foreground mb-4 text-center"
            >
              Make a Reservation
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-center mb-10 max-w-lg mx-auto"
            >
              Fill in your details below and we will confirm your booking via email.
            </motion.p>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/mzdajkgq"
            method="POST"
            className="bg-secondary rounded-2xl p-8 md:p-10 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <CalendarDays size={14} /> Check-in Date
                </label>
                <input
                  type="date"
                  name="Check-in Date"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <CalendarDays size={14} /> Check-out Date
                </label>
                <input
                  type="date"
                  name="Check-out Date"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <Users size={14} /> Number of Guests
                </label>
                <select name="Guests" className={inputClass}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <BedDouble size={14} /> Room Type
                </label>
                <select name="Room Type" required className={inputClass}>
                  <option value="">Select Room Type</option>
                  <option>Deluxe Room</option>
                  <option>Superior Deluxe</option>
                  <option>Family Room</option>
                  <option>Deluxe Twin</option>
                </select>
              </div>
            </div>

            <textarea
              name="Special Requests"
              placeholder="Special requests or notes..."
              rows={4}
              className={`resize-none ${inputClass}`}
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <Send size={16} />
              Submit Booking Request
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Booking;
