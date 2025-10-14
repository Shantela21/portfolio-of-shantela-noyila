import cvFile from '../assets/Shantela-Noyila-Resume (1).pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Shantela Noyila</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          Passionate about turning ideas into functional, visually appealing digital experiences
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          <a href={cvFile} download="Shantela_Noyila_CV.pdf" className="btn btn-download">Download CV</a>
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
