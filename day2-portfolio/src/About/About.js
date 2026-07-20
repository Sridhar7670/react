import developerImage from '../components/images/my_image.jpg';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const HIRE_REASONS = [
  'Full-stack developer with ~1 year of hands-on experience at Alpine Code',
  'Shipped production features using Next.js, NestJS, TypeScript and PostgreSQL',
  'Comfortable with Docker, AWS and Git workflows — debugged real production issues',
  'Work well in a team — used to PRs, code reviews and shared deadlines',
];

const About = () => {
  // The photo slides in from the left and the text from the right, so the
  // two halves of the section meet in the middle as the user scrolls.
  const [imageRef, isImageVisible] = useScrollReveal();
  const [contentRef, isContentVisible] = useScrollReveal();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div
          ref={imageRef}
          className={`about-image-container reveal reveal-left ${isImageVisible ? 'is-visible' : ''}`}
        >
          <img src={developerImage} alt="Sridhar Reddy" className="profile-image" />
          <div className="image-border"></div>
        </div>

        <div
          ref={contentRef}
          className={`about-content reveal reveal-right ${isContentVisible ? 'is-visible' : ''}`}
        >
          <h2 className="section-title section-title--left">
            Why <span className="highlight">Hire Me?</span>
          </h2>

          <div className="hire-reasons">
            {HIRE_REASONS.map((reason, index) => (
              <div
                key={reason}
                className="reason-item reveal"
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="reason-icon">✓</div>
                <p>{reason}</p>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h3>Education & Background</h3>
            <p>
              <strong>Electronics & Communication Engineering</strong>
            </p>
            <p>
              Transitioned to web development through self-interest, and now
              work as a Software Developer building full-stack apps with
              PostgreSQL, Docker and AWS deployments.
            </p>
          </div>

          <div className="passion-statement">
            <p>
              Every day is a chance to learn something new — and I stay curious and driven to explore fresh
              concepts and sharpen my skills in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
