import PageHero from "@/components/PageHero";
import roomImage from "@/assets/room-deluxe.jpg";
import heroImage from "@/assets/hero-mt-kenya.jpg";

const rooms = [
  {
    name: "Deluxe Room",
    description: "A spacious room with elegant furnishings, modern amenities, and garden or mountain views.",
    residents: { sgl: "9,500 KES", dbl: "10,500 KES" },
    nonResidents: { sgl: "$90", dbl: "$110" },
  },
  {
    name: "Superior Deluxe",
    description: "Upgraded luxury with premium bedding, a sitting area, and panoramic views of Mount Kenya.",
    residents: { sgl: "10,500 KES", dbl: "12,500 KES" },
    nonResidents: { sgl: "$110", dbl: "$130" },
  },
  {
    name: "Family Room",
    description: "Generous space for the whole family with interconnected areas and kid-friendly amenities.",
    residents: { sgl: "From 15,500 KES" },
    nonResidents: { sgl: "From $170" },
  },
  {
    name: "Deluxe Twin",
    description: "Two comfortable beds in a well-appointed room, ideal for friends or colleagues traveling together.",
    residents: { sgl: "From 11,500 KES" },
    nonResidents: { sgl: "From $120" },
  },
];

const Rooms = () => (
  <>
    <PageHero image={heroImage} title="Rooms & Rates" subtitle="2026 Accommodation Rates" />

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-background rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={roomImage} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{room.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{room.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-md p-3">
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wide mb-1">Residents</p>
                    <p className="text-sm font-semibold text-foreground">{room.residents.sgl}</p>
                    {room.residents.dbl && (
                      <p className="text-xs text-muted-foreground">DBL: {room.residents.dbl}</p>
                    )}
                  </div>
                  <div className="bg-secondary rounded-md p-3">
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wide mb-1">Non-Residents</p>
                    <p className="text-sm font-semibold text-foreground">{room.nonResidents.sgl}</p>
                    {room.nonResidents.dbl && (
                      <p className="text-xs text-muted-foreground">DBL: {room.nonResidents.dbl}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Children's Policy */}
        <div className="mt-12 bg-aqua-light rounded-lg p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Children's Policy</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <strong>5 years and below:</strong> Free
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <strong>6–12 years:</strong> 50% of adult single rate
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default Rooms;
