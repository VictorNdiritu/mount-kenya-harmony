import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-mt-kenya.jpg";

const blogPosts = [
  { title: "Top 5 Things to Do in Nanyuki", date: "Jan 15, 2026", excerpt: "Discover the hidden gems of this charming town at the foothills of Mount Kenya." },
  { title: "A Guide to Climbing Mount Kenya", date: "Jan 8, 2026", excerpt: "Everything you need to know before embarking on your mountain adventure." },
  { title: "Wildlife Safari at Ol Pejeta", date: "Dec 20, 2025", excerpt: "Why Ol Pejeta Conservancy should be on every traveler's bucket list." },
  { title: "Best Dining Experiences in Laikipia", date: "Dec 10, 2025", excerpt: "From farm-to-table to traditional Kenyan cuisine — a foodie's guide." },
  { title: "Planning a Corporate Retreat", date: "Nov 28, 2025", excerpt: "How The Warwick Hotel can host your perfect team-building event." },
  { title: "Trout Fishing in Nanyuki Streams", date: "Nov 15, 2025", excerpt: "A peaceful day of fly-fishing in the crystal-clear highland waters." },
];

const Blog = () => (
  <>
    <PageHero image={heroImage} title="Blog" subtitle="Travel stories & local insights" />

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-background rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="h-40 bg-secondary overflow-hidden">
                <img src={heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs text-primary font-display uppercase tracking-wide mb-2">{post.date}</p>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
