import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Button from '../components/Button/Button';
import myImage from '../components/images/my_image.jpg';
import './Home.css';
import 'animate.css';

const RESUME_URL = 'https://drive.google.com/file/d/1S0HdJVfIKkTSXX9DTKH7JjBxMqdbqVLQ/view?usp=sharing';

// Short lines that cycle below the headline. The role and summary above them
// stay put, so a visitor always sees what I do even if they land midway
// through the rotation.
const ROTATING_LINES = [
  'I build full-stack web apps with Next.js and NestJS.',
  'I ship features end to end — database, API and UI.',
  'I deploy with Docker and AWS.',
  "Let's build something together.",
];

const ROTATION_INTERVAL_MS = 4000;

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Home = () => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % ROTATING_LINES.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <div className="home-text">
          <p className="home-greeting animate__animated animate__fadeInDown">
            Hello, I'm
          </p>

          {/* This is the page's only h1. Before, the biggest heading here was
              an h2 and the page had no h1 at all. */}
          <h1 className="home-name animate__animated animate__fadeInDown animate__delay-1s">
            Sridhar Reddy
          </h1>

          <p className="home-role animate__animated animate__fadeIn animate__delay-1s">
            Full Stack Developer
          </p>

          <p className="home-summary animate__animated animate__fadeIn animate__delay-1-5s">
            About a year of hands-on experience building and shipping production
            web apps with Next.js, NestJS, TypeScript, PostgreSQL and AWS. Based in
            Hyderabad, India.
          </p>

          {/* Changing `key` makes React swap this paragraph for a brand new
              one, which restarts the CSS fade animation each time the line
              changes. Without it React reuses the element and the text would
              simply pop from one line to the next. */}
          <p key={lineIndex} className="rotating-text">
            {ROTATING_LINES[lineIndex]}
          </p>

          <div className="button-group animate__animated animate__fadeInUp animate__delay-2s">
            <Button variant="primary" size="large" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
            {/* Outline rather than a second solid button, so the eye is drawn
                to one main action instead of two competing ones. */}
            <Button
              variant="outline"
              size="large"
              onClick={() => window.open(RESUME_URL, '_blank', 'noopener')}
            >
              Resume
            </Button>
          </div>
        </div>

        <div className="home-image animate__animated animate__fadeInRight animate__delay-1s">
          <img src={myImage} alt="Sridhar Reddy" className="image-placeholder" />
        </div>
      </div>

      {/* Hints that there is more below the fold */}
      <button
        type="button"
        className="scroll-cue"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Home;
