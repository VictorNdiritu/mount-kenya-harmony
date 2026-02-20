import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => (
  <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover scale-105" />
    <div className="absolute inset-0 hero-gradient" />
    <div className="relative z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-3">{title}</h1>
          {subtitle && (
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl font-light">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  </section>
);

export default PageHero;
