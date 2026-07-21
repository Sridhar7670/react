import { useState } from 'react';
import { FiExternalLink, FiCode, FiGithub, FiRotateCw } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';
import alpineWork from '../components/images/alpine_work.svg';
import ecommerce from '../components/images/ecommerce.svg';
import moviesApp from '../components/images/movies_app.jpg';
import portfolio from '../components/images/portfolio.jpg';
import employeeManagement from '../components/images/employee_managment_system.png';

const PROJECTS = [
  {
    title: 'Production Work @ Alpine Code',
    description:
      'Full-stack modules with Next.js, NestJS and PostgreSQL — JWT auth, RBAC, Dockerized AWS deployments. Company work, so no public code.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
    thumbnail: alpineWork,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Online store with product browsing, auth and cart. Next.js + NestJS + PostgreSQL, Dockerized',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    thumbnail: ecommerce,
    codeUrl: 'https://github.com/Sridhar7670/E-Commers',
  },
  {
    title: 'Movies App',
    description: 'MERN stack app with JWT auth, bcrypt password hashing and a wishlist feature',
    tech: ['React', 'Express', 'RestApi'],
    thumbnail: moviesApp,
    codeUrl: 'https://github.com/Sridhar7670/react/tree/main/ibomma',
    liveUrl: 'https://react-li9a.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive single-page portfolio built with React, animate.css and plain CSS — this site',
    tech: ['React', 'CSS', 'Netlify'],
    thumbnail: portfolio,
    codeUrl: 'https://github.com/Sridhar7670/react/tree/main/day2-portfolio',
    liveUrl: 'https://sridhars-portfolio.netlify.app/',
  },
  
  {
    title: 'Employee Management App',
    description: 'Add data into the input fields and perform operations on them',
    tech: ['JavaScript', 'Front-end', 'Local-storage'],
    thumbnail: employeeManagement,
    codeUrl: 'https://github.com/Sridhar7670/employee-management-system-',
    liveUrl: 'https://sridhar7670.github.io/employee-management-system-/',
  },
  {
    title: 'Early Projects',
    description: 'Small apps from my learning phase — Task Manager, Tic-Tac-Toe, Blinkit clone. Check my GitHub for more',
    tech: ['JavaScript', 'HTML', 'CSS'],
    // No `thumbnail` here on purpose. One screenshot cannot represent a
    // group of projects, so the front of this tile shows `frontNote`
    // instead. Any project can do this by leaving out the thumbnail.
    frontNote:
      'Beginner-level projects I built while learning — Tic-Tac-Toe, a Blinkit clone, a Task Manager and more. Visit my GitHub to browse them all.',
    codeUrl: 'https://github.com/Sridhar7670',
  },
];

const Projects = () => {
  const [titleRef, isTitleVisible] = useScrollReveal();
  const [gridRef, isGridVisible] = useScrollReveal();

  // Title of the tile currently turned over, or null when none is. Holding a
  // single title rather than a flag per card means opening one automatically
  // closes the previous one.
  const [flippedTitle, setFlippedTitle] = useState(null);

  const handleTileClick = (event, title) => {
    // A tap on Code / Live Demo should follow the link, not flip the card.
    // closest() checks whether the tapped element sits inside a link.
    if (event.target.closest('a')) return;

    setFlippedTitle((current) => (current === title ? null : title));
  };

  return (
    <section className="projects-section" id="projects">
      <h2
        ref={titleRef}
        className={`section-title reveal ${isTitleVisible ? 'is-visible' : ''}`}
      >
        My Projects
      </h2>
      <div
        ref={gridRef}
        className={`tile-grid ${isGridVisible ? 'is-visible' : ''}`}
      >
        {PROJECTS.map((project, index) => (
          /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
             jsx-a11y/no-static-element-interactions -- keyboard users do not
             need this handler: tabbing to the links inside the card triggers
             the :focus-within flip in CSS. Making the card itself a button
             would nest the links inside a button, which is invalid HTML. */
          <div
            key={project.title}
            className={`project-tile reveal ${flippedTitle === project.title ? 'is-flipped' : ''}`}
            style={{ transitionDelay: `${index * 80}ms` }}
            onClick={(event) => handleTileClick(event, project.title)}
          >
            <div className="tile-front">
              {/* Show the screenshot when there is one, otherwise a short
                  written summary. */}
              {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.title} className="tile-image" loading="lazy" />
              ) : (
                <div className="tile-note">
                  <FiGithub className="tile-note-icon" />
                  <p>{project.frontNote}</p>
                </div>
              )}
              <span className="tap-hint">
                <FiRotateCw /> Tap
              </span>
              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="tile-back">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiCode /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
