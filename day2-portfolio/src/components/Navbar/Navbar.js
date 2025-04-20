import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand">
          MyPortfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className='toggle'>
          {isOpen ? (<FaTimes className="close-icon" size={24} />) : (<FaBars className="hamburger-icon" size={24} />)}
        </button>

      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink to="/skills" onClick={toggleMenu}>Skills</MobileNavLink>
          <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
        </div>
      </div>
    </header>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, children }) => (
  <Link to={to} className="nav-link">
    {children}
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="mobile-nav-link"
  >
    {children}
  </Link>
);