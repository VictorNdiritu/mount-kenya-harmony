import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Send, CalendarDays, Users, BedDouble } from "lucide-react";
import heroImg from "@/assets/hero-image-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const inputClass = "w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

const Booking = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "1", roomType: "", specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Booking Request:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nGuests: ${form.guests}\nRoom: ${form.roomType}\nSpecial Requests: ${form.specialRequests}`;
    window.open(`https://wa.me/254799388888?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <PageHero image={heroImg} title="Book Your Stay" subtitle="Reserve your room at The Warwick" />

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center">Reservation</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground mb-4 text-center">Make a Reservation</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
              Fill in your details below and we'll confirm your booking via WhatsApp or email.
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-secondary rounded-2xl p-8 md:p-10 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" required className={inputClass}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email Address" required className={inputClass}
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <input type="tel" placeholder="Phone Number" className={inputClass}
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <CalendarDays size={14} /> Check-in Date
                </label>
                <input type="date" required className={inputClass}
                  value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <CalendarDays size={14} /> Check-out Date
                </label>
                <input type="date" required className={inputClass}
                  value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <Users size={14} /> Number of Guests
                </label>
                <select className={inputClass} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <BedDouble size={14} /> Room Type
                </label>
                <select required className={inputClass} value={form.roomType} onChange={(e) => setForm({ ...form, roomType: e.target.value })}>
                  <option value="">Select Room Type</option>
                  <option>Deluxe Room</option>
                  <option>Superior Deluxe</option>
                  <option>Family Room</option>
                  <option>Deluxe Twin</option>
                </select>
              </div>
            </div>
            <textarea placeholder="Special requests or notes..." rows={4}
              className={`resize-none ${inputClass}`}
              value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} />
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20">
              <Send size={16} /> Submit Booking Request
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Booking;
