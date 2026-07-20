import { FiExternalLink, FiCode } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';
import alpineWork from '../components/images/alpine_work.svg';
import ecommerce from '../components/images/ecommerce.svg';
import moviesApp from '../components/images/movies_app.jpg';
import portfolio from '../components/images/portfolio.jpg';
import taskManager from '../components/images/TaskManager.png';
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
    thumbnail: taskManager,
    codeUrl: 'https://github.com/Sridhar7670',
  },
];

const Projects = () => {
  const [titleRef, isTitleVisible] = useScrollReveal();
  const [gridRef, isGridVisible] = useScrollReveal();

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
          <div
            key={project.title}
            className="project-tile reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="tile-front">
              <img src={project.thumbnail} alt={project.title} className="tile-image" loading="lazy" />
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
