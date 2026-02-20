import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/hero-image-1.jpg";

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
    <PageHero image={heroImg} title="Blog" subtitle="Travel stories & local insights" />

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="p-6">
                <p className="text-xs text-primary font-body font-semibold uppercase tracking-wide mb-3">{post.date}</p>
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
