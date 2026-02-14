import PageHero from "@/components/PageHero";
import conferenceImage from "@/assets/conference.jpg";
import poolImage from "@/assets/pool-gardens.jpg";
import { Users, Utensils, Flower2, Waves } from "lucide-react";

const Amenities = () => (
  <>
    <PageHero image={conferenceImage} title="Amenities & Conferences" subtitle="Business meets tranquility" />

    {/* Conference Rates */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Conferences</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Meeting & Event Spaces</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Host your next conference, workshop, or corporate retreat in our fully equipped meeting rooms with natural lighting and garden views.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary font-display">3,500</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Full Day</p>
              </div>
              <div className="bg-secondary rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary font-display">3,000</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Half Day</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Team Building</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Corporate Retreats</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strengthen your team with outdoor activities and customized programs set against the backdrop of Mount Kenya.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary font-display">3,500</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Full Day</p>
              </div>
              <div className="bg-secondary rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-primary font-display">3,000</p>
                <p className="text-xs text-muted-foreground mt-1">KES / Half Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Hotel Features</p>
          <h2 className="font-display text-3xl font-bold text-foreground">Our Facilities</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Flower2, title: "Serene Gardens", desc: "Beautifully landscaped grounds perfect for relaxation" },
            { icon: Waves, title: "Swimming Pool", desc: "A refreshing pool surrounded by tropical greenery" },
            { icon: Utensils, title: "On-site Dining", desc: "Fresh local and international cuisine daily" },
            { icon: Users, title: "Conference Halls", desc: "Modern meeting spaces for every occasion" },
          ].map((f) => (
            <div key={f.title} className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-aqua-light flex items-center justify-center">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <img src={poolImage} alt="Swimming pool" className="w-full rounded-lg shadow-xl aspect-[21/9] object-cover" />
        </div>
      </div>
    </section>
  </>
);

export default Amenities;
