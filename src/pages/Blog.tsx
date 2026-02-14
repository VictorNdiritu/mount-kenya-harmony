import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/new-photos/IMG-20250408-WA0060.jpg";
import img1 from "@/assets/new-photos/IMG-20250408-WA0025.jpg";
import img2 from "@/assets/new-photos/IMG-20250408-WA0030.jpg";
import img3 from "@/assets/new-photos/IMG-20250408-WA0035.jpg";
import img4 from "@/assets/new-photos/IMG-20250408-WA0040.jpg";
import img5 from "@/assets/new-photos/IMG-20250408-WA0050.jpg";
import img6 from "@/assets/new-photos/IMG-20250408-WA0055.jpg";

const blogPosts = [
  { title: "Top 5 Things to Do in Nanyuki", date: "Jan 15, 2026", excerpt: "Discover the hidden gems of this charming town at the foothills of Mount Kenya.", img: img1 },
  { title: "A Guide to Climbing Mount Kenya", date: "Jan 8, 2026", excerpt: "Everything you need to know before embarking on your mountain adventure.", img: img2 },
  { title: "Wildlife Safari at Ol Pejeta", date: "Dec 20, 2025", excerpt: "Why Ol Pejeta Conservancy should be on every traveler's bucket list.", img: img3 },
  { title: "Best Dining Experiences in Laikipia", date: "Dec 10, 2025", excerpt: "From farm-to-table to traditional Kenyan cuisine — a foodie's guide.", img: img4 },
  { title: "Planning a Corporate Retreat", date: "Nov 28, 2025", excerpt: "How The Warwick Hotel can host your perfect team-building event.", img: img5 },
  { title: "Trout Fishing in Nanyuki Streams", date: "Nov 15, 2025", excerpt: "A peaceful day of fly-fishing in the crystal-clear highland waters.", img: img6 },
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
              <div className="h-48 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
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
