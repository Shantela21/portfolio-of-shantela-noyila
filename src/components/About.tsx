import cvFile from "../assets/Shantela-Noyila-Resume (2).pdf";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 className="what-i-do-title">What I Do</h3>
            <div className="what-i-do">
              <div className="service-item">
                <h4>🌐 Full Stack Web Development</h4>
                <p>
                  Building responsive, user-friendly web applications from
                  frontend to backend using modern technologies like React,
                  JavaScript, TypeScript, and CSS.
                </p>
              </div>
              <div className="service-item">
                <h4>📊 Business Analysis</h4>
                <p>
                  Analyzing business requirements and designing
                  technology-driven solutions that align with organizational
                  goals and user needs.
                </p>
              </div>
              <div className="service-item">
                <h4>🔧 API Integration & Development</h4>
                <p>
                  Creating and integrating APIs to enable seamless data flow
                  between applications and third-party services.
                </p>
              </div>
              <div className="service-item">
                <h4>🛡️ Network & Cybersecurity</h4>
                <p>
                  Implementing security best practices and network solutions to
                  protect digital assets and ensure system reliability.
                </p>
              </div>
            </div>

            <p>
              <strong>Location:</strong> Pietermaritzburg, South Africa
              <br />
              <strong>Education:</strong> Diploma in ICT: Business Analysis,
              Durban University of Technology (2022-2024)
            </p>
            <div className="about-cv-btn">
              <a
                href={cvFile}
                download="Shantela_Noyila_CV.pdf"
                className="cv-download-btn"
              >
                📄 Download Full CV
              </a>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>2024</h3>
              <p>Diploma Graduate</p>
            </div>
            <div className="stat-card">
              <h3>8+</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-card">
              <h3>mLab</h3>
              <p>Apprenticeship</p>
              <p>Mobile and Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
