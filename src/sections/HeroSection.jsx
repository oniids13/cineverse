const HeroSection = ({ title, content }) => {
  return (
    <section className="hero-section bg-gradient-to-r from-tertiary to-secondary text-light text-center">
      <div className="hero-container">
        <h1 className="hero-title text-4xl font-extrabold">{title}</h1>
        <p className="hero-text  font-extralight">{content}</p>
      </div>
    </section>
  );
};

export default HeroSection;
