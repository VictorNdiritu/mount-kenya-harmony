import { Link } from "react-router-dom";
import { Bed, Mountain, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-mt-kenya.jpg";
import roomImage from "@/assets/room-deluxe.jpg";
import poolImage from "@/assets/pool-gardens.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Mount Kenya at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Nanyuki, Kenya
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Where comfort, nature, and adventure come together in perfect harmony
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide hover:bg-aqua-dark transition-colors"
            >
              View Rooms
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary-foreground/40 text-primary-foreground font-display text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Welcome</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Gateway to the Mount Kenya Region
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nestled at the foothills of Africa's second-highest mountain, The Warwick Hotel Nanyuki is an independent boutique hotel offering a unique blend of modern comfort and natural beauty. Whether you're here for business, adventure, or a peaceful getaway, we provide an unforgettable experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our serene gardens, world-class dining, and warm Kenyan hospitality make us the perfect base for exploring the wonders of the Mount Kenya region — from wildlife safaris to mountain treks.
              </p>
            </div>
            <div className="relative">
              <img src={poolImage} alt="Hotel gardens and pool" className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Bed, title: "View Rooms", desc: "Explore our comfortable rooms and 2026 rates", path: "/rooms" },
              { icon: Mountain, title: "Explore Activities", desc: "Discover adventures around Mount Kenya", path: "/activities" },
              { icon: MessageCircle, title: "WhatsApp Us", desc: "Get instant assistance on WhatsApp", href: "https://wa.me/254799388888" },
            ].map((item) => {
              const content = (
                <div className="bg-background rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-aqua-light flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
              ) : (
                <Link key={item.title} to={item.path!}>{content}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Preview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Accommodations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Rest in Comfort</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Each room is thoughtfully designed to provide a restful retreat with views of Mount Kenya and our lush gardens.
          </p>
          <div className="relative rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto">
            <img src={roomImage} alt="Deluxe Room" className="w-full aspect-video object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Deluxe Rooms</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">From KES 9,500 per night</p>
              <Link
                to="/rooms"
                className="inline-flex items-center px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide hover:bg-aqua-dark transition-colors"
              >
                View All Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
