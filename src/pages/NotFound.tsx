import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Bed, Phone, Mountain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | The Warwick Hotel Nanyuki</title>
        <meta name="description" content="The page you are looking for does not exist. Browse our rooms, amenities, and activities at The Warwick Hotel Nanyuki." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20">
        <div className="text-center max-w-lg">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Error 404</p>
          <h1 className="font-display text-6xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved. Let us help you find your way back.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-aqua-dark transition-all"
            >
              <Home size={16} /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-body text-sm font-semibold hover:bg-secondary transition-all"
            >
              <Phone size={16} /> Contact Us
            </Link>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Rooms & Rates", path: "/rooms", icon: Bed },
                { label: "Activities", path: "/activities", icon: Mountain },
                { label: "Book a Stay", path: "/booking", icon: ArrowLeft },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-sm text-foreground hover:text-primary transition-colors"
                >
                  <link.icon size={14} /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
