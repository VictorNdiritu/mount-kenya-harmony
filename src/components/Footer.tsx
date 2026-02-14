import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground">
    <div className="container mx-auto px-6 py-20 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Warwick Hotel" className="h-12 w-12 object-contain" />
            <div>
              <span className="font-display font-semibold text-lg tracking-wide block">THE WARWICK</span>
              <span className="text-[10px] font-body tracking-[0.25em] uppercase text-primary-foreground/50">Hotel Nanyuki</span>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            Your gateway to the Mount Kenya region. Where comfort, nature, and adventure come together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Rooms & Rates", path: "/rooms" },
              { label: "Amenities", path: "/amenities" },
              { label: "Activities", path: "/activities" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-primary-foreground/50 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-primary" />
              <a href="mailto:info@thewarwickhotel.co.ke" className="text-primary-foreground/50 hover:text-primary transition-colors">info@thewarwickhotel.co.ke</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary" />
              <a href="tel:+254799388888" className="text-primary-foreground/50 hover:text-primary transition-colors">+254 799 388 888</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-primary mt-0.5" />
              <span className="text-primary-foreground/50">P.O Box 64376-00620, Nanyuki, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5">Stay Updated</h4>
          <p className="text-sm text-primary-foreground/50 mb-4">Subscribe for exclusive offers and travel stories.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 text-sm rounded-l-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-r-full hover:bg-aqua-dark transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/30">
        © {new Date().getFullYear()} The Warwick Hotel Nanyuki. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
