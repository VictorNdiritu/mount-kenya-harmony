import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-image-1.jpg";

const blogPosts = [
  { title: "Top 5 Things to Do in Nanyuki", date: "Jan 15, 2026", excerpt: "Discover the hidden gems of Nanyuki town at the foothills of Mount Kenya. From exploring local markets to visiting the equator line, Nanyuki offers a rich blend of culture, nature, and adventure that makes it one of Kenya's most charming destinations." },
  { title: "A Guide to Climbing Mount Kenya", date: "Jan 8, 2026", excerpt: "Everything you need to know before embarking on your Mount Kenya adventure. We cover the popular Sirimon Route, what gear to bring, fitness preparation, altitude acclimatization, and the best time of year for a summit attempt." },
  { title: "Wildlife Safari at Ol Pejeta", date: "Dec 20, 2025", excerpt: "Why Ol Pejeta Conservancy should be on every traveller's bucket list. Home to the Big Five and the last two northern white rhinos, this 90,000-acre sanctuary offers incredible game drives, a chimpanzee sanctuary, and conservation education." },
  { title: "Best Dining Experiences in Laikipia", date: "Dec 10, 2025", excerpt: "From farm-to-table cuisine to traditional Kenyan dishes, explore the culinary landscape of the Laikipia region. We highlight restaurants, local eateries, and our own dining experience at The Warwick Hotel's ground floor restaurant and rooftop lounge." },
  { title: "Planning a Corporate Retreat in Nanyuki", date: "Nov 28, 2025", excerpt: "How The Warwick Hotel can host your perfect team-building event. Learn about our conference facilities, team-building activities, accommodation packages, and why the serene Mount Kenya setting boosts creativity and collaboration." },
  { title: "Trout Fishing in Nanyuki Streams", date: "Nov 15, 2025", excerpt: "A peaceful day of fly-fishing in the crystal-clear highland waters of the Nanyuki and Burguret rivers. We share tips on the best fishing spots, seasons, permits, and how to arrange a guided fishing trip from the hotel." },
];

const Blog = () => (
  <>
    <SEOHead
      title="Blog"
      description="Travel stories, guides, and local insights from The Warwick Hotel Nanyuki. Read about Mount Kenya hiking, Ol Pejeta safaris, Nanyuki dining, corporate retreats, and trout fishing in Kenya's highland region."
      canonical="/blog"
    />
    <PageHero image={heroImg} title="Blog" subtitle="Travel stories & local insights" />

    {/* Intro */}
    <section className="section-padding pb-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Stories from Mount Kenya</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our blog shares travel tips, local insights, and destination guides to help you get the most out of your visit to the Mount Kenya region. From hiking guides and safari recommendations to dining tips and event planning advice, we cover everything you need for an unforgettable stay in Nanyuki.
          </p>
        </motion.div>
      </div>
    </section>

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
              <div className="aspect-[16/9] bg-secondary flex items-center justify-center">
                <Image size={40} className="text-muted-foreground/30" />
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

    {/* Related Links */}
    <section className="bg-secondary section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">Explore More</h2>
        <p className="text-muted-foreground mb-8">Discover our hotel facilities and plan your stay in the Mount Kenya region.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/activities" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground text-sm font-medium hover:text-primary transition-colors">
            Activities & Excursions <ChevronRight size={14} />
          </Link>
          <Link to="/rooms" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground text-sm font-medium hover:text-primary transition-colors">
            Rooms & Rates <ChevronRight size={14} />
          </Link>
          <Link to="/conferencing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground text-sm font-medium hover:text-primary transition-colors">
            Conferencing <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Blog;
