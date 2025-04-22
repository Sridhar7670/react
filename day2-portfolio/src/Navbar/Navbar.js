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
          <NavLink to="/" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</NavLink>
          <NavLink to="/about" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</NavLink>
          <NavLink to="/skills" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</NavLink>
          <NavLink to="/projects" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</NavLink>
          <NavLink to="/contact"onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</NavLink>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className='toggle'>
          {isOpen ? (<FaTimes className="close-icon" size={24} />) : (<FaBars className="hamburger-icon" size={24} />)}
        </button>

      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <MobileNavLink to="/"  onClick={() => {toggleMenu(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>Home</MobileNavLink>
          <MobileNavLink to="/about"  onClick={() => {toggleMenu(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>About</MobileNavLink>
          <MobileNavLink to="/skills"  onClick={() => {toggleMenu(); document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); }}>Skills</MobileNavLink>
          <MobileNavLink to="/projects"  onClick={() => {toggleMenu(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>Projects</MobileNavLink>
          <MobileNavLink to="/contact"  onClick={() => {toggleMenu(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</MobileNavLink>

        </div>
      </div>
    </header>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, children ,onClick }) => (
  <Link to={to} className="nav-link" onClick={onClick}>
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