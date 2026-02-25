import { useState } from "react";
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

      if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <PageHero
        image={heroImg}
        title="Book Your Stay"
        subtitle="Reserve your room at The Warwick"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-secondary rounded-2xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="Full Name" placeholder="Full Name" required className={inputClass} />
              <input type="email" name="Email" placeholder="Email Address" required className={inputClass} />
            </div>

            <input type="tel" name="Phone" placeholder="Phone Number" className={inputClass} />

            <div className="grid sm:grid-cols-2 gap-4">
              <input type="date" name="Check-in Date" required className={inputClass} />
              <input type="date" name="Check-out Date" required className={inputClass} />
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

            <textarea name="Special Requests" placeholder="Special requests or notes..." rows={4} className={`resize-none ${inputClass}`} />

            {success && (
              <p className="text-green-600 text-sm text-center">
                Booking request sent successfully. We will contact you shortly.
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
    </>
  );
};

export default Booking;
