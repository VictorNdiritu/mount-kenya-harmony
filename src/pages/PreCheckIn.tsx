import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Send, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-image-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

const inputClass =
  "w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

const labelClass = "block text-sm font-medium text-foreground mb-2";
const sectionTitleClass = "font-display text-2xl font-bold text-foreground mb-2";
const sectionSubClass = "text-muted-foreground text-sm mb-6";

const RadioYesNo = ({ name }: { name: string }) => (
  <div className="flex gap-6">
    {["Yes", "No"].map((v) => (
      <label key={v} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
        <input type="radio" name={name} value={v} className="accent-primary" /> {v}
      </label>
    ))}
  </div>
);

const PreCheckIn = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xredpnqv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      if (response.ok && !data.errors) {
        setSuccess(true);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Submission issue:", err);
    }
    setLoading(false);
  };

  return (
    <>
      <SEOHead
        title="Guest Pre-Check-In"
        description="Complete your pre-check-in at The Warwick Hotel Nanyuki. Share your stay preferences, dietary needs, and arrival details to help us prepare for a seamless arrival."
        canonical="/booking/pre-check-in"
      />
      <PageHero image={heroImg} title="Guest Pre-Check-In" subtitle="Help us prepare for your arrival" />

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <motion.p variants={fadeUp} custom={0} className="text-muted-foreground leading-relaxed">
              Thank you for choosing to stay with us! Please fill out this form to help us prepare for your arrival and make your experience as comfortable and personalized as possible.
            </motion.p>
          </motion.div>

          {success ? (
            <div className="bg-background rounded-2xl p-10 shadow-sm text-center space-y-4 border border-border">
              <CheckCircle2 className="mx-auto text-primary" size={48} />
              <h2 className="font-display text-2xl font-bold text-foreground">Pre-Check-In Received</h2>
              <p className="text-muted-foreground">
                Thank you! Our front office team will review your details and reach out if anything else is needed before your arrival.
              </p>
              <Link to="/" className="inline-block text-primary hover:underline text-sm font-medium">Back to Home</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border">
              {/* Basic Information */}
              <div>
                <h2 className={sectionTitleClass}>Basic Information</h2>
                <p className={sectionSubClass}>Tell us who you are so we can match you to your reservation.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="fullName" type="text" required maxLength={120} placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Contact Number *</label>
                    <input name="phone" type="tel" required maxLength={30} placeholder="+254 700 000 000" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input name="email" type="email" required maxLength={255} placeholder="your.email@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Booking Reference (if available)</label>
                    <input name="bookingReference" type="text" maxLength={50} placeholder="REF123456" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Stay Details */}
              <div>
                <h2 className={sectionTitleClass}>Stay Details</h2>
                <p className={sectionSubClass}>Confirm your dates and party size.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Check-In Date</label>
                    <input name="checkIn" type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Check-Out Date</label>
                    <input name="checkOut" type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Adults</label>
                    <input name="adults" type="number" min={1} max={20} defaultValue={2} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Children</label>
                    <input name="children" type="number" min={0} max={20} defaultValue={0} className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Children's Ages</label>
                    <input name="childrenAges" type="text" maxLength={100} placeholder="e.g., 5, 8, 12" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Room Preferences */}
              <div>
                <h2 className={sectionTitleClass}>Room Preferences</h2>
                <p className={sectionSubClass}>We'll do our best to honour your preferences subject to availability.</p>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Preferred Bed Type</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["King-size", "Double", "Twin beds", "No preference"].map((v) => (
                        <label key={v} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="radio" name="bedType" value={v} className="accent-primary" /> {v}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Room Location Preference</label>
                    <input name="locationPreference" type="text" maxLength={200} placeholder="e.g., Ground floor, garden view, quiet area" className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Early Check-In?</label>
                      <RadioYesNo name="earlyCheckIn" />
                    </div>
                    <div>
                      <label className={labelClass}>Late Check-Out?</label>
                      <RadioYesNo name="lateCheckOut" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Are you celebrating a special occasion?</label>
                    <RadioYesNo name="specialOccasion" />
                    <input
                      name="specialOccasionDetails"
                      type="text"
                      maxLength={200}
                      placeholder="If yes, please specify (Anniversary, Birthday, Honeymoon, etc.)"
                      className={`${inputClass} mt-3`}
                    />
                  </div>
                </div>
              </div>

              {/* Health & Accessibility */}
              <div>
                <h2 className={sectionTitleClass}>Health & Accessibility</h2>
                <p className={sectionSubClass}>Help us make your stay safe and comfortable.</p>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Any medical conditions or mobility concerns?</label>
                    <RadioYesNo name="medicalConcerns" />
                    <textarea
                      name="medicalDetails"
                      rows={2}
                      maxLength={500}
                      placeholder="If yes, please provide details"
                      className={`${inputClass} mt-3 resize-none`}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Need accessibility features?</label>
                    <RadioYesNo name="accessibility" />
                    <input
                      name="accessibilityDetails"
                      type="text"
                      maxLength={300}
                      placeholder="If yes, please specify"
                      className={`${inputClass} mt-3`}
                    />
                  </div>
                </div>
              </div>

              {/* Dietary Preferences */}
              <div>
                <h2 className={sectionTitleClass}>Dietary Preferences</h2>
                <p className={sectionSubClass}>So our kitchen can prepare for you.</p>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Food allergies?</label>
                    <RadioYesNo name="foodAllergies" />
                    <input
                      name="foodAllergyDetails"
                      type="text"
                      maxLength={300}
                      placeholder="If yes, please specify"
                      className={`${inputClass} mt-3`}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Dietary preferences (select all that apply)</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["Vegetarian", "Vegan", "Halal", "Gluten-Free"].map((v) => (
                        <label key={v} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" name="dietary" value={v} className="accent-primary" /> {v}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Other dietary preferences</label>
                    <input name="dietaryOther" type="text" maxLength={300} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Travelling with infants/young children?</label>
                    <RadioYesNo name="infants" />
                    <input name="infantAges" type="text" maxLength={100} placeholder="If yes, ages" className={`${inputClass} mt-3`} />
                  </div>
                  <div>
                    <label className={labelClass}>Do you require any of the following?</label>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {["Baby Cot", "High Chair", "Baby Bath"].map((v) => (
                        <label key={v} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" name="childEquipment" value={v} className="accent-primary" /> {v}
                        </label>
                      ))}
                    </div>
                    <input
                      name="otherRequirements"
                      type="text"
                      maxLength={300}
                      placeholder="Other requirements"
                      className={`${inputClass} mt-3`}
                    />
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <h2 className={sectionTitleClass}>Travel Details</h2>
                <p className={sectionSubClass}>Help us plan your arrival logistics.</p>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Estimated Time of Arrival</label>
                    <input name="eta" type="time" className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Require airport/local transfer?</label>
                      <RadioYesNo name="transfer" />
                    </div>
                    <div>
                      <label className={labelClass}>Require parking?</label>
                      <RadioYesNo name="parking" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>If yes, vehicle details</label>
                    <input
                      name="vehicleDetails"
                      type="text"
                      maxLength={200}
                      placeholder="Make, model, license plate"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Anything else we should know?</label>
                    <textarea
                      name="notes"
                      rows={4}
                      maxLength={1500}
                      placeholder="Please share any other requests, preferences, or information that would help us make your stay more comfortable..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
              >
                <Send size={16} /> {loading ? "Submitting..." : "Complete Pre-Check-In"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default PreCheckIn;
