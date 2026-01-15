import cvFile from "../assets/Shantela-Noyila-Resume (2).pdf";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-intro">
              <div className="intro-text">
                <h3 className="intro-title">Building Digital Experiences</h3>
                <p className="intro-description">
                  I'm a passionate Full Stack Developer based in Pietermaritzburg, South Africa, 
                  currently pursuing my Diploma in ICT Business Analysis at Durban University of Technology. 
                  I specialize in creating modern, responsive web applications that solve real-world problems.
                </p>
                <div className="intro-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <div>
                      <strong>Problem Solver</strong>
                      <p>Turning complex challenges into elegant solutions</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <div>
                      <strong>Fast Learner</strong>
                      <p>Quickly adapting to new technologies and frameworks</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💡</span>
                    <div>
                      <strong>Innovative</strong>
                      <p>Creative thinking for modern web solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-services">
              <h3 className="services-title">What I Do</h3>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h4>Full Stack Development</h4>
                  <p>End-to-end web application development using React, Node.js, and modern databases</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <h4>Business Analysis</h4>
                  <p>Analyzing requirements and designing technology-driven solutions</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <h4>API Development</h4>
                  <p>Creating and integrating RESTful APIs for seamless data flow</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h4>Cybersecurity</h4>
                  <p>Implementing security best practices and network solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="info-card">
              <h3>Personal Info</h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Pietermaritzburg, South Africa</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education:</span>
                  <span className="info-value">Diploma in ICT Business Analysis</span>
                </div>
                <div className="info-item">
                  <span className="info-label">University:</span>
                  <span className="info-value">Durban University of Technology</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Period:</span>
                  <span className="info-value">2022 - 2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status:</span>
                  <span className="info-value">mLab Trainee</span>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <h3>Quick Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">1
                  </span>
                  <span className="stat-label">Year Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Core Skills</span>
                </div>
              </div>
            </div>

            <div className="cv-card">
              <h3>Get My Resume</h3>
              <p>Download my complete CV for more detailed information</p>
              <a href={cvFile} download="Shantela_Noyila_CV.pdf" className="cv-download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
