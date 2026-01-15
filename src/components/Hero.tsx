import cvFile from '../assets/Shantela-Noyila-Resume (2).pdf';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">
              <span className="highlight">Shantela Noyila</span>
            </h1>
            <div className="hero-role">
              <span className="role-text">Full Stack Developer</span>
              <span className="role-cursor">|</span>
            </div>
          </div>
          
          <div className="hero-description">
            <p>
              Passionate about turning ideas into functional, visually appealing digital experiences. 
              Specializing in React, TypeScript, and modern web technologies.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Year Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <div className="primary-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </a>
            </div>
            <a href={cvFile} download="Shantela_Noyila_CV.pdf" className="btn btn-download">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">portfolio.js</span>
            </div>
            <div className="code-content">
              <pre><code>{`const developer = {
  name: "Shantela Noyila",
  role: "Full Stack Developer",
  skills: ["React", "TypeScript", "Node.js"],
  passion: "Creating amazing web experiences",
  status: "Available for hire"
};`}</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span>Discover More</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
