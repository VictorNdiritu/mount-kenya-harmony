{/* Hero */}
<section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
  <img
    src={heroImage}
    alt="The Warwick Hotel Nanyuki"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 hero-gradient" />

  <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-medium tracking-[0.2em] uppercase mb-6"
          style={{ color: "#53abb5" }}
        >
          <Star size={12} style={{ color: "#53abb5" }} /> Nanyuki, Kenya
        </motion.p>

        <h1
          className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] mb-6"
          style={{ color: "#53abb5" }}
        >
          Where comfort meets <span style={{ color: "#53abb5" }}>nature</span>
        </h1>

        <p
          className="font-semibold text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          style={{ color: "#53abb5" }}
        >
          An independent boutique hotel at the foothills of Mount Kenya — your gateway to adventure and serenity.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-aqua-dark transition-all hover:gap-3 hover:shadow-xl hover:shadow-primary/20"
          >
            Explore Rooms <ArrowRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20"
          >
            Book Your Stay
          </Link>
        </div>
      </motion.div>
    </div>
  </div>

  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
      <div className="w-1 h-2.5 rounded-full bg-primary-foreground/60" />
    </div>
  </motion.div>
</section>
