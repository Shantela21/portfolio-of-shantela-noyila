
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Shantela Noyila</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer | Creative Problem Solver</p>
        <p className="hero-description">
          I build exceptional digital experiences that make people's lives easier
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
