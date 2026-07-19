import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import myImage from '../components/images/my_image.jpg';
import './Home.css';
import 'animate.css';

const RESUME_URL = 'https://drive.google.com/file/d/1S0HdJVfIKkTSXX9DTKH7JjBxMqdbqVLQ/view?usp=sharing';

const ROTATING_LINES = [
  { intro: 'I am a Web Developer.', action: "Let's build something amazing together!" },
  { intro: 'I am a Full Stack Developer (Next.js / NestJS).', action: "Come let's connect!" },
  { intro: 'I am a Frontend Developer.', action: "Let's create something awesome!" },
  { intro: 'I build and deploy web apps end to end.', action: "Let's collaborate on projects!" },
];

const ROTATION_INTERVAL_MS = 5000;

const Home = () => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % ROTATING_LINES.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const { intro, action } = ROTATING_LINES[lineIndex];

  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <div className="home-text">
          <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
            Hello I'm Sridhar Reddy
          </h2>
          <p className={`animate__animated animate__fadeIn animate__delay-1-5s rotating-text p1 line-${lineIndex}`}>
            {intro}
          </p>
          <p className={`animate__animated animate__fadeIn animate__delay-2s rotating-text p2 line-${lineIndex}`}>
            {action}
          </p>
          <div className="button-group animate__animated animate__fadeInUp animate__delay-2-5s">
            <Button
              variant="primary"
              size="medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button
              variant="primary"
              size="medium"
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
    </section>
  );
};

export default Home;
