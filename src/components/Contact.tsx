
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <a href="mailto:shantelaslie@gmail.com" className="contact-method">
                <span className="icon">✉️</span>
                <span>shantelaslie@gmail.com</span>
              </a>
              <a href="tel:+27638998411" className="contact-method">
                <span className="icon">📱</span>
                <span>063 899 8411</span>
              </a>
              <a href="https://www.linkedin.com/in/shantela-noyila-1864b2212" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="icon">💼</span>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/Shantela21" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="icon">💻</span>
                <span>GitHub - Shantela21</span>
              </a>
              <div className="contact-method">
                <span className="icon">📍</span>
                <span>Pietermaritzburg, South Africa</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
