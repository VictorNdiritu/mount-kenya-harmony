import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Warwick Hotel" className="h-10 w-10 object-contain" />
            <span className="font-display font-semibold text-lg tracking-wide">THE WARWICK HOTEL</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Your gateway to the Mount Kenya region. Where comfort, nature, and adventure come together in perfect harmony.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {[
              { label: "Rooms & Rates", path: "/rooms" },
              { label: "Amenities & Conferences", path: "/amenities" },
              { label: "Activities & Excursions", path: "/activities" },
              { label: "Blog", path: "/blog" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href="mailto:info@thewarwickhotel.co.ke">info@thewarwickhotel.co.ke</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <a href="tel:+254799388888">+254 799 388 888</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-primary mt-0.5" />
              <span>P.O Box 64376-00620, Nanyuki, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Stay Updated</h4>
          <p className="text-sm opacity-70 mb-3">Subscribe for exclusive offers and travel stories.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 text-sm rounded-l-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-r-md hover:bg-aqua-dark transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-50">
        © {new Date().getFullYear()} The Warwick Hotel Nanyuki. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
