import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Send, CheckCircle2 } from "lucide-react";
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

const Feedback = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mojbegdn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      if (response.ok && !data.errors) {
        setSuccess(true);
        form.reset();
      }
    } catch (err) {
      console.error("Submission issue:", err);
    }
    setLoading(false);
  };

  return (
    <>
      <SEOHead
        title="Guest Feedback"
        description="Share your experience at The Warwick Hotel Nanyuki. Your feedback helps us improve our service, hospitality, and guest experience."
        canonical="/contact/feedback"
      />
      <PageHero image={heroImg} title="Guest Feedback" subtitle="We value your experience" />

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Feedback
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl font-bold text-foreground">
              Tell Us About Your Stay
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mt-3">
              Your honest review helps us continue to deliver memorable hospitality. Please take a moment to share your thoughts.
            </motion.p>
          </motion.div>

          {success ? (
            <div className="bg-background rounded-2xl p-10 shadow-sm text-center space-y-4">
              <CheckCircle2 className="mx-auto text-primary" size={48} />
              <h2 className="font-display text-2xl font-bold text-foreground">Thank You!</h2>
              <p className="text-muted-foreground">We've received your feedback and truly appreciate you taking the time to share it.</p>
              <Link to="/contact" className="inline-block text-primary hover:underline text-sm font-medium">Back to Contact</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" type="text" placeholder="Your Name" required maxLength={100} className={inputClass} />
                <input name="email" type="email" placeholder="Email Address" maxLength={255} className={inputClass} />
              </div>
              <input name="stayDates" type="text" placeholder="Approximate stay dates (optional)" maxLength={100} className={inputClass} />
              <select name="rating" required className={inputClass} defaultValue="">
                <option value="" disabled>Rate your experience *</option>
                <option>⭐⭐⭐⭐⭐ Excellent</option>
                <option>⭐⭐⭐⭐ Very Good</option>
                <option>⭐⭐⭐ Good</option>
                <option>⭐⭐ Fair</option>
                <option>⭐ Poor</option>
              </select>
              <select name="category" className={inputClass} defaultValue="">
                <option value="" disabled>What area is your feedback about?</option>
                <option>Rooms & Comfort</option>
                <option>Food & Beverage</option>
                <option>Service & Staff</option>
                <option>Facilities & Amenities</option>
                <option>Activities & Excursions</option>
                <option>Overall Experience</option>
              </select>
              <textarea
                name="comments"
                placeholder="Share your experience..."
                rows={6}
                required
                maxLength={2000}
                className={`resize-none ${inputClass}`}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
              >
                <Send size={16} /> {loading ? "Sending..." : "Submit Feedback"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Feedback;
