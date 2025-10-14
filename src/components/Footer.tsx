
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Shantela Noyila. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Shantela21" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shantela-noyila-1864b2212" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="shantelaslie@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
