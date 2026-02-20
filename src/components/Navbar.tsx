import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/warwick-logo-nobg.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Rooms", path: "/rooms" },
  { label: "Amenities", path: "/amenities" },
  { label: "Activities", path: "/activities" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg border-b border-border/50 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="The Warwick Hotel"
              className="h-11 w-11 object-contain"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="hidden sm:block">
              <span className={`font-display font-semibold text-base tracking-wide transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                THE WARWICK
              </span>
              <span className={`block text-[10px] font-body tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}>
                Hotel Nanyuki
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
                    scrolled
                      ? location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      : location.pathname === link.path
                        ? "text-primary-foreground bg-primary-foreground/15"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 hover:shadow-lg hover:shadow-primary/25"
            >
              Book Now <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <img src={logo} alt="The Warwick Hotel" className="h-11 w-11 object-contain" />
                  <span className="font-display font-semibold text-base tracking-wide text-foreground">
                    THE WARWICK
                  </span>
                </Link>
                <button onClick={() => setOpen(false)} className="p-2 text-foreground" aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-8">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`block py-4 text-3xl font-display font-semibold tracking-wide transition-colors ${
                          location.pathname === link.path ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10"
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-base font-medium tracking-wide"
                  >
                    Book Now <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
