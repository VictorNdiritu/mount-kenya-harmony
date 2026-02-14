import { useState } from "react";
import PageHero from "@/components/PageHero";
import conferenceImage from "@/assets/conference.jpg";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", phone: "", dates: "", roomType: "", message: "" });
  const [feedbackForm, setFeedbackForm] = useState({ name: "", email: "", rating: "", comments: "" });

  return (
    <>
      <PageHero image={conferenceImage} title="Contact Us" subtitle="We'd love to hear from you" />

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@thewarwickhotel.co.ke", href: "mailto:info@thewarwickhotel.co.ke" },
                  { icon: Phone, label: "Phone", value: "+254 799 388 888", href: "tel:+254799388888" },
                  { icon: MapPin, label: "Address", value: "P.O Box 64376-00620, Nanyuki, Kenya" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-aqua-light flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-display uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Inquiry */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Reservation Inquiry</h2>
              <form
                className="grid sm:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const msg = `Booking Inquiry:\nName: ${bookingForm.name}\nEmail: ${bookingForm.email}\nPhone: ${bookingForm.phone}\nDates: ${bookingForm.dates}\nRoom: ${bookingForm.roomType}\nMessage: ${bookingForm.message}`;
                  window.open(`https://wa.me/254799388888?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                <input
                  type="text" placeholder="Full Name" required
                  className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                />
                <input
                  type="email" placeholder="Email Address" required
                  className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                />
                <input
                  type="tel" placeholder="Phone Number"
                  className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                />
                <input
                  type="text" placeholder="Preferred Dates"
                  className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={bookingForm.dates} onChange={(e) => setBookingForm({ ...bookingForm, dates: e.target.value })}
                />
                <select
                  className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={bookingForm.roomType} onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                >
                  <option value="">Select Room Type</option>
                  <option>Deluxe Room</option>
                  <option>Superior Deluxe</option>
                  <option>Family Room</option>
                  <option>Deluxe Twin</option>
                </select>
                <div /> {/* spacer */}
                <textarea
                  placeholder="Additional message..." rows={4}
                  className="sm:col-span-2 px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  value={bookingForm.message} onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide hover:bg-aqua-dark transition-colors"
                >
                  <Send size={16} /> Send Inquiry via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Feedback */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Feedback</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Guest Feedback</h2>
            <p className="text-muted-foreground text-sm mt-2">We value your experience. Share your thoughts with us.</p>
          </div>
          <form
            className="space-y-4 bg-background rounded-lg p-8 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your feedback!");
              setFeedbackForm({ name: "", email: "", rating: "", comments: "" });
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text" placeholder="Your Name" required
                className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={feedbackForm.name} onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
              />
              <input
                type="email" placeholder="Email Address"
                className="px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={feedbackForm.email} onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
              />
            </div>
            <select
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={feedbackForm.rating} onChange={(e) => setFeedbackForm({ ...feedbackForm, rating: e.target.value })}
            >
              <option value="">Rate your experience</option>
              <option>⭐⭐⭐⭐⭐ Excellent</option>
              <option>⭐⭐⭐⭐ Very Good</option>
              <option>⭐⭐⭐ Good</option>
              <option>⭐⭐ Fair</option>
              <option>⭐ Poor</option>
            </select>
            <textarea
              placeholder="Share your experience..." rows={4} required
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              value={feedbackForm.comments} onChange={(e) => setFeedbackForm({ ...feedbackForm, comments: e.target.value })}
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide hover:bg-aqua-dark transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
