import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-background text-foreground border-t border-border">
    <div className="container mx-auto px-6 py-20 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Warwick Hotel Nanyuki logo" className="h-12 w-12 object-contain" />
            <div>
              <span className="font-display font-semibold text-lg tracking-wide block text-foreground">THE WARWICK</span>
              <span className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground">Hotel Nanyuki</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your gateway to the Mount Kenya region. An independent boutique hotel offering luxury accommodation, conferencing, dining, and safari excursions in Nanyuki, Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5 text-foreground">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Rooms & Rates", path: "/rooms" },
              { label: "Conferencing", path: "/conferencing" },
              { label: "Amenities", path: "/amenities" },
              { label: "Activities", path: "/activities" },
              { label: "Blog", path: "/blog" },
              { label: "Book Online", path: "/booking" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5 text-foreground">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-primary" />
              <a href="mailto:info@thewarwickhotel.co.ke" className="text-muted-foreground hover:text-primary transition-colors">info@thewarwickhotel.co.ke</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary" />
              <a href="tel:+254799388888" className="text-muted-foreground hover:text-primary transition-colors">+254 799 388 888</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-primary mt-0.5" />
              <span className="text-muted-foreground">P.O Box 64376-00620, Nanyuki, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5 text-foreground">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe for exclusive offers and travel stories from the Mount Kenya region.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 text-sm rounded-l-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-r-full hover:bg-aqua-dark transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground space-y-1">
        <div>© {new Date().getFullYear()} The Warwick Hotel Nanyuki. All rights reserved.</div>
        <div className="text-[10px]">
          Managed by <a href="https://creekoxley.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">CreekOxley</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
