import React from 'react';
import developerImage from '../components/images/my_image.jpg'; // Replace with your image path
import './about.css';

const About = () => {
  const hireReasons = [
    "Full-stack Fresher developer ",
    "Always like to work on new Projects, Things ",
    "Quick learner who learned MERN stack in just few months",
    "Works exceptionally well in Team settings and achieving common goals."
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-container">
          <img  src={developerImage}  alt="Sridhar Reddy"  className="profile-image" />
          <div className="image-border"></div>
        </div>

        <div className="about-content">
          <h2 className="section-title">
            Why <span className="highlight">Hire Me?</span>
          </h2>
          
          <div className="hire-reasons">
            {hireReasons.map((reason, index) => (
              <div key={index} className="reason-item">
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
              Transitioned to web development through self-intrest, completing 
              multiple MERN stack projects with focus on responsive design 
              and clean code practices.
            </p>
          </div>

          <div className="passion-statement">
            <p>
            Every day is a chance to learn something new — and I stay curious and driven to explore fresh concepts and sharpen my skills in web development. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;