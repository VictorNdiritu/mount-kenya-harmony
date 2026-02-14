import PageHero from "@/components/PageHero";
import hikingImage from "@/assets/activities-hiking.jpg";
import wildlifeImage from "@/assets/activities-wildlife.jpg";
import adventureImage from "@/assets/activities-adventure.jpg";

const categories = [
  {
    title: "Mountain Hiking",
    image: hikingImage,
    items: [
      { name: "Sirimon Route – Day Hike", desc: "A scenic day hike through moorlands and alpine meadows." },
      { name: "Sirimon Route – Multi-Day Trek", desc: "An unforgettable multi-day ascent to Point Lenana." },
      { name: "Nature Walks", desc: "Guided walks through indigenous forests around the mountain." },
    ],
  },
  {
    title: "Wildlife & Conservation",
    image: wildlifeImage,
    items: [
      { name: "Ol Pejeta Conservancy", desc: "Home to the last two northern white rhinos and the Big Five." },
      { name: "Bongo Tracking", desc: "Track the rare mountain bongo in the forests of Mount Kenya." },
      { name: "Bird Watching", desc: "Spot over 300 species of birds in the highland ecosystem." },
    ],
  },
  {
    title: "Adventure & Leisure",
    image: adventureImage,
    items: [
      { name: "Ngare Ndare Forest", desc: "Walk the famous canopy walkway suspended above the forest." },
      { name: "Rock Climbing", desc: "Challenge yourself on the volcanic rock formations." },
      { name: "Trout Fishing", desc: "Enjoy fly-fishing in the crystal-clear mountain streams." },
    ],
  },
];

const Activities = () => (
  <>
    <PageHero image={hikingImage} title="Activities & Excursions" subtitle="Adventures around Mount Kenya" />

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl space-y-16">
        {categories.map((cat, i) => (
          <div key={cat.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img src={cat.image} alt={cat.title} className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">{cat.title}</h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-secondary rounded-lg p-4">
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Activities;
