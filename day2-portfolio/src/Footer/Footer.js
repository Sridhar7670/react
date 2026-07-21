import { SOCIAL_LINKS } from '../data/socialLinks';
import './Footer.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  // Works out the year when the page loads, so this never needs updating.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Sridhar Reddy</h3>
          <p>Full Stack Developer — Hyderabad, India</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size="1.25em" />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Sridhar Reddy. Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
