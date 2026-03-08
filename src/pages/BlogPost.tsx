import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const blogContent: Record<string, {
  title: string;
  date: string;
  description: string;
  sections: { heading: string; content: string[] }[];
}> = {
  "top-5-things-nanyuki": {
    title: "Top 5 Things to Do in Nanyuki",
    date: "January 15, 2026",
    description: "Discover the hidden gems of Nanyuki town at the foothills of Mount Kenya — from local markets to the equator line crossing.",
    sections: [
      {
        heading: "1. Visit the Equator Line",
        content: [
          "Nanyuki is one of the few towns in the world where you can literally stand on the equator. The famous Nanyuki Equator sign on the A2 highway is a must-visit photo stop. Local demonstrators show the Coriolis effect — watch water swirl in different directions on each side of the line.",
          "Several equator markers are dotted around town, but the most popular one includes small shops selling handmade crafts and souvenirs. It's a great first stop when you arrive in Nanyuki."
        ]
      },
      {
        heading: "2. Explore Nanyuki Town Market",
        content: [
          "The bustling Nanyuki town market is the heartbeat of local life. Here you'll find fresh produce from the surrounding farms — avocados, mangoes, passion fruit, and vegetables grown in the fertile volcanic soil of Mount Kenya's lower slopes.",
          "The market is also a wonderful place to buy local honey, macadamia nuts, and handwoven baskets. Arrive early in the morning for the best selection and a genuine glimpse into rural Kenyan commerce."
        ]
      },
      {
        heading: "3. Day Trip to Ol Pejeta Conservancy",
        content: [
          "Just 25 km from Nanyuki, Ol Pejeta Conservancy is home to the Big Five and the last two northern white rhinos on Earth. A full-day game drive here is an unforgettable experience — you'll see lions, elephants, buffalo, and hundreds of bird species.",
          "Don't miss the Sweetwaters Chimpanzee Sanctuary, the only place in Kenya where you can see chimpanzees. Night game drives are also available for a chance to spot nocturnal wildlife."
        ]
      },
      {
        heading: "4. Hike the Sirimon Route on Mount Kenya",
        content: [
          "The Sirimon Gate is just a 30-minute drive from Nanyuki, making it the most accessible starting point for Mount Kenya hikes. Day hikers can enjoy the lower trails through bamboo forests and moorlands without needing technical climbing experience.",
          "For more ambitious trekkers, the multi-day route to Point Lenana (4,985 m) offers breathtaking views of glacial valleys and alpine lakes. The Warwick Hotel can arrange guides, porters, and equipment hire."
        ]
      },
      {
        heading: "5. Trout Fishing on the Nanyuki River",
        content: [
          "The crystal-clear highland streams around Nanyuki are excellent for fly-fishing. Rainbow and brown trout thrive in the cold mountain waters of the Nanyuki and Burguret rivers.",
          "Several private farms and fishing clubs offer day permits. It's a peaceful way to spend an afternoon surrounded by stunning scenery. The Warwick Hotel's concierge can help arrange a guided fishing trip."
        ]
      }
    ]
  },
  "climbing-mount-kenya": {
    title: "A Guide to Climbing Mount Kenya",
    date: "January 8, 2026",
    description: "Everything you need to know about climbing Mount Kenya — routes, preparation, gear, and the best time to summit Africa's second-highest peak.",
    sections: [
      {
        heading: "Why Climb Mount Kenya?",
        content: [
          "Mount Kenya is Africa's second-highest mountain at 5,199 metres and a UNESCO World Heritage Site. Unlike Kilimanjaro, Mount Kenya offers a more rugged and varied climbing experience with diverse ecosystems — from dense bamboo forests to alpine moorlands and glacial peaks.",
          "The most popular trekking summit is Point Lenana at 4,985 metres, which doesn't require technical climbing equipment and rewards hikers with spectacular sunrise views over the African plains."
        ]
      },
      {
        heading: "Choosing Your Route",
        content: [
          "The Sirimon Route is the most popular and best-maintained trail, starting just 30 minutes from Nanyuki. It offers gradual acclimatization through moorland landscapes and is considered the driest route.",
          "The Chogoria Route on the eastern side is widely regarded as the most scenic, passing through stunning gorges and tarns. The Naro Moru Route is the shortest but steepest, featuring the challenging 'Vertical Bog' section."
        ]
      },
      {
        heading: "What to Pack",
        content: [
          "For day hikes on the lower slopes, sturdy walking shoes, warm layers, rain gear, sunscreen, and plenty of water are sufficient. The weather can change rapidly at altitude, so layering is essential.",
          "For multi-day treks to Point Lenana, you'll need a quality sleeping bag rated to -10°C, thermal base layers, waterproof outer shells, trekking poles, a headlamp, and altitude sickness medication. The Warwick Hotel can connect you with local equipment hire services."
        ]
      },
      {
        heading: "Best Time to Climb",
        content: [
          "The dry seasons — January to March and July to October — offer the best conditions for climbing. During these months you'll have clearer skies, less mud on the trails, and better summit views.",
          "The long rains (April-June) and short rains (November-December) make trails slippery and cloud cover is heavy. However, the mountain is beautiful year-round and the lower forest trails remain accessible in all seasons."
        ]
      },
      {
        heading: "Staying at The Warwick Before Your Climb",
        content: [
          "Many climbers use The Warwick Hotel Nanyuki as their base before and after their Mount Kenya trek. We're ideally located near the Sirimon Gate, and our comfortable rooms provide the perfect place to rest and prepare.",
          "Our concierge can arrange guides, porters, park entry permits, and equipment. After your climb, recover with a swim in our pool, a hearty meal at our restaurant, and a well-earned night in a comfortable bed."
        ]
      }
    ]
  },
  "ol-pejeta-safari": {
    title: "Wildlife Safari at Ol Pejeta Conservancy",
    date: "December 20, 2025",
    description: "Discover why Ol Pejeta Conservancy is one of Kenya's top safari destinations — home to the Big Five and the last northern white rhinos.",
    sections: [
      {
        heading: "About Ol Pejeta Conservancy",
        content: [
          "Ol Pejeta Conservancy spans 90,000 acres of pristine savannah between the foothills of Mount Kenya and the Aberdare Mountain Range. It's the largest black rhino sanctuary in East Africa and home to the last two northern white rhinos in the world — Najin and Fatu.",
          "Located just 25 km from The Warwick Hotel Nanyuki, Ol Pejeta is one of the most accessible and rewarding safari destinations in Kenya. Unlike the Masai Mara, it offers excellent wildlife viewing without the crowds."
        ]
      },
      {
        heading: "The Big Five and Beyond",
        content: [
          "Ol Pejeta is home to all of the Big Five — lion, leopard, elephant, buffalo, and rhino. The conservancy's relatively compact size means you have excellent chances of spotting them all in a single day's game drive.",
          "Beyond the Big Five, look out for cheetah, hyena, zebra, giraffe, waterbuck, and over 500 bird species. The open grasslands and scattered acacia trees provide a classic East African safari landscape."
        ]
      },
      {
        heading: "Sweetwaters Chimpanzee Sanctuary",
        content: [
          "Ol Pejeta is home to the only chimpanzee sanctuary in Kenya. The Sweetwaters Chimpanzee Sanctuary cares for orphaned and rescued chimps from across Africa, giving visitors a rare chance to observe these fascinating primates up close.",
          "The sanctuary is managed in partnership with the Jane Goodall Institute and provides a safe haven for chimps that cannot be returned to the wild. Guided tours explain the conservation challenges facing great apes."
        ]
      },
      {
        heading: "Night Game Drives",
        content: [
          "One of Ol Pejeta's unique offerings is guided night game drives. After sunset, the savannah transforms — this is when you might spot elusive leopards, aardvarks, bush babies, and other nocturnal creatures rarely seen during the day.",
          "Night drives must be booked in advance and are conducted by experienced KWS-certified guides with spotlights. It's an unforgettable experience that most Kenyan parks don't offer."
        ]
      },
      {
        heading: "Planning Your Visit from The Warwick",
        content: [
          "The Warwick Hotel is the ideal base for Ol Pejeta visits. We can arrange transport, entry permits, and guided game drives. Most guests leave early in the morning for a full-day safari and return in the evening to relax at the hotel.",
          "Half-day visits are also possible if you're short on time. Ask our concierge about combining an Ol Pejeta trip with other activities like the Ngare Ndare Forest canopy walk."
        ]
      }
    ]
  },
  "best-dining-laikipia": {
    title: "Best Dining Experiences in Laikipia",
    date: "December 10, 2025",
    description: "From farm-to-table cuisine to traditional Kenyan dishes, explore the culinary landscape of the Laikipia region and Nanyuki.",
    sections: [
      {
        heading: "Farm-to-Table in the Highlands",
        content: [
          "The Laikipia region is blessed with fertile volcanic soil and a temperate highland climate, making it one of Kenya's most productive agricultural areas. Farms around Nanyuki grow everything from organic vegetables and herbs to strawberries, avocados, and macadamia nuts.",
          "Many restaurants in the area embrace the farm-to-table philosophy, sourcing ingredients locally and preparing dishes that celebrate the freshness and diversity of highland produce."
        ]
      },
      {
        heading: "Dining at The Warwick Hotel",
        content: [
          "Our ground floor restaurant serves a carefully curated menu blending local Kenyan flavours with international cuisine. Start your day with a full breakfast featuring fresh tropical fruits, eggs from local farms, and freshly baked bread.",
          "For lunch and dinner, enjoy dishes like nyama choma (grilled meat), tilapia from Lake Naivasha, or international favourites prepared with local ingredients. Our rooftop lounge offers cocktails and light bites with panoramic views of the gardens and town."
        ]
      },
      {
        heading: "Traditional Kenyan Cuisine",
        content: [
          "No visit to Nanyuki is complete without trying authentic Kenyan dishes. Ugali (maize meal) served with sukuma wiki (collard greens) and nyama choma is a staple. Pilau — a fragrant spiced rice dish — and chapati are local favourites.",
          "For the adventurous eater, try mutura (Kenyan sausage), githeri (a hearty bean and maize stew), or irio — a comforting mash of potatoes, peas, and corn from the Kikuyu tradition."
        ]
      },
      {
        heading: "Coffee and Tea Culture",
        content: [
          "Kenya produces some of the world's finest coffee, and the highland region around Mount Kenya is prime growing territory. Several estates near Nanyuki offer tours and tastings where you can learn about the journey from cherry to cup.",
          "Kenyan chai — sweet, milky tea infused with ginger and spices — is a cultural institution. You'll find it everywhere, from roadside kiosks to hotel lounges. It's the perfect warm drink after a day of highland adventures."
        ]
      },
      {
        heading: "Where to Eat Around Nanyuki",
        content: [
          "Beyond The Warwick, Nanyuki offers several dining gems. The town has a growing food scene with restaurants serving everything from wood-fired pizza to Ethiopian cuisine and classic Kenyan nyama choma joints.",
          "For a special occasion, some of the luxury lodges and conservancies in Laikipia offer bush dining experiences under the stars — a truly magical way to end a safari day."
        ]
      }
    ]
  },
  "corporate-retreat-nanyuki": {
    title: "Planning a Corporate Retreat in Nanyuki",
    date: "November 28, 2025",
    description: "How The Warwick Hotel can host your perfect corporate retreat — conference facilities, team-building, and accommodation packages.",
    sections: [
      {
        heading: "Why Nanyuki for Your Corporate Retreat?",
        content: [
          "The best corporate retreats take teams out of their usual environment and into a setting that inspires fresh thinking. Nanyuki, at the foothills of Mount Kenya, offers exactly that — clean mountain air, stunning natural scenery, and a peaceful atmosphere that's world away from the office.",
          "Despite its tranquil setting, Nanyuki is well-connected. It's a 3-hour drive from Nairobi or a short flight to Nanyuki Airstrip. The Warwick Hotel is centrally located in town with easy access to activities and amenities."
        ]
      },
      {
        heading: "Our Conference Facilities",
        content: [
          "The Warwick Hotel's conference rooms are fully equipped with projectors, PA systems, high-speed Wi-Fi, and flexible furniture layouts. Whether you need a boardroom setup for 20 or a theatre arrangement for 100+, we can accommodate your needs.",
          "Our dedicated events team works with you to plan every detail — from AV requirements and room configuration to meal schedules and activity breaks. Full-day packages include morning tea, lunch, and afternoon tea."
        ]
      },
      {
        heading: "Team-Building Activities",
        content: [
          "Nanyuki offers incredible team-building opportunities. Organize a group hike on Mount Kenya's lower slopes, a guided safari at Ol Pejeta Conservancy, or a thrilling walk across the Ngare Ndare Forest canopy walkway — suspended 50 metres above the forest floor.",
          "For something more relaxed, arrange a poolside barbecue, a cooking class featuring Kenyan cuisine, or a guided bird-watching walk in the hotel gardens. These shared experiences build stronger teams."
        ]
      },
      {
        heading: "Accommodation Packages",
        content: [
          "We offer special corporate rates for group bookings across our Deluxe, Superior Deluxe, Family, and Twin rooms. All rooms feature modern amenities, free Wi-Fi, and comfortable bedding.",
          "Our Full Board package is ideal for retreats — it includes breakfast, lunch, and dinner so your team can focus on the programme without worrying about logistics. We also cater for dietary requirements and special requests."
        ]
      },
      {
        heading: "Getting Started",
        content: [
          "Planning a corporate retreat at The Warwick is simple. Contact our events team with your preferred dates, expected group size, and any specific requirements. We'll provide a tailored proposal with accommodation, conferencing, meals, and activities.",
          "Many of our corporate clients return year after year, finding that the combination of productive conference facilities and rejuvenating outdoor experiences delivers results that city-based venues simply can't match."
        ]
      }
    ]
  },
  "trout-fishing-nanyuki": {
    title: "Trout Fishing in Nanyuki Streams",
    date: "November 15, 2025",
    description: "A guide to fly-fishing for rainbow and brown trout in the crystal-clear highland streams around Nanyuki, Mount Kenya.",
    sections: [
      {
        heading: "A Highland Fishing Paradise",
        content: [
          "The streams and rivers flowing down from Mount Kenya's glaciers create some of the finest trout fishing waters in East Africa. The cold, clear waters of the Nanyuki River, Burguret River, and Likii River are home to healthy populations of rainbow and brown trout.",
          "Trout were first introduced to Kenyan highland streams by British settlers in the early 1900s and have thrived in the pristine mountain waters ever since. Today, fly-fishing in Nanyuki is a beloved pastime for both locals and visitors."
        ]
      },
      {
        heading: "Best Fishing Spots",
        content: [
          "The Nanyuki River offers excellent fishing from the town upstream towards the mountain. Several private farms along the river offer day fishing permits with well-maintained riverbanks and good access.",
          "The Burguret River on the western slopes of Mount Kenya is another favourite — its remote stretches offer solitude and excellent catches. The Mount Kenya Fishing Club and several private estates welcome visiting anglers."
        ]
      },
      {
        heading: "When to Fish",
        content: [
          "The best fishing months are January to March and July to October, coinciding with the dry seasons when rivers are lower and clearer. Early morning and late afternoon are prime fishing times when trout are most active.",
          "During the rainy seasons, rivers can run high and muddy, making fishing more challenging but not impossible. Some anglers prefer the challenge and find that larger fish are caught after rain."
        ]
      },
      {
        heading: "What You Need",
        content: [
          "A standard fly-fishing rod (5-6 weight) with floating line is ideal for Nanyuki's streams. Popular fly patterns include Adams, Royal Wulff, and local patterns that imitate the highland's aquatic insects.",
          "If you don't have your own gear, several outfitters in Nanyuki offer equipment hire. The Warwick Hotel's concierge can connect you with experienced fishing guides who know the best spots and techniques."
        ]
      },
      {
        heading: "Catch and Release",
        content: [
          "Most fishing spots around Nanyuki practice catch-and-release to protect trout populations and ensure sustainable fishing for future generations. Barbless hooks are encouraged, and guides will show you proper catch-and-release techniques.",
          "It's a rewarding and meditative activity — standing in a cold mountain stream with stunning views of Mount Kenya, listening to birdsong, and waiting for that perfect strike. After a day on the river, return to The Warwick for a warm meal and a comfortable night's rest."
        ]
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        canonical={`/blog/${slug}`}
      />

      <section className="pt-32 pb-8 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <Calendar size={12} /> {post.date}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 mb-12">{post.description}</p>
          </motion.div>
        </div>
      </section>

      <article className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="container mx-auto max-w-3xl">
          {post.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              {section.content.map((para, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>
          ))}

          <hr className="border-border my-12" />

          <div className="bg-secondary rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Plan Your Visit</h3>
            <p className="text-muted-foreground mb-6 text-sm">Book your stay at The Warwick Hotel Nanyuki and explore the Mount Kenya region.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-aqua-dark transition-colors">
                Book Your Stay
              </Link>
              <Link to="/activities" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:text-primary transition-colors">
                View Activities <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
