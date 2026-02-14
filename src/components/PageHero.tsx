interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 hero-gradient" />
    <div className="relative z-10 text-center px-6 animate-fade-in-up">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{title}</h1>
      {subtitle && (
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
