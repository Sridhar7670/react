import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, 'home')}>
          MyPortfolio
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link" onClick={(e) => handleNavClick(e, id)}>
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="close-icon" size={24} /> : <FaBars className="hamburger-icon" size={24} />}
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="mobile-nav-link" onClick={(e) => handleNavClick(e, id)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
