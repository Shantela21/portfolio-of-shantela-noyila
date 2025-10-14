
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer who loves creating beautiful, functional web applications.
              With a strong foundation in both front-end and back-end technologies, I bring ideas
              to life through clean code and intuitive user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <p>
              I believe in continuous learning and always strive to stay updated with the latest
              trends and best practices in web development.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
