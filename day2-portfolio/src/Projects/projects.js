import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './project.css';
import emp_mangment_sys from "../components/images/employee_managment_system.png"
import TaskManager from "../components/images/TaskManager.png"
import alpine_work from "../components/images/alpine_work.svg"
import ecommerce from "../components/images/ecommerce.svg"
import portfolio from "../components/images/portfolio.png"
import Movies from "../components/images/Movies App.png"
const Projects = () => {
  const [activeTile, setActiveTile] = useState(null);

  const projects = [
    {

      title: "Production Work @ Alpine Code",
      description: "Full-stack modules with Next.js, NestJS and PostgreSQL — JWT auth, RBAC, Dockerized AWS deployments. Company work, so no public code.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
      thumbnail: alpine_work,
    },
    {

      title: "E-Commerce Platform",
      description: "Online store with product browsing, auth and cart. Next.js + NestJS + PostgreSQL, Dockerized",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
      thumbnail: ecommerce,
      codeUrl: "https://github.com/Sridhar7670/E-Commers",
      liveUrl: "https://github.com/Sridhar7670/E-Commers"
    },
    {

      title: "Movies App",
      description: "MERN stack app with JWT auth, bcrypt password hashing and a wishlist feature",
      tech: ["React", "Express","RestApi"],
      thumbnail: Movies,
      codeUrl: "https://github.com/Sridhar7670/react/tree/main/ibomma",
      liveUrl: "https://react-li9a.vercel.app/"
    },
    {
      
      title: "Portfolio Website",
      description: "Responsive portfolio built with React and GSAP animations",
      tech: ["React", "react-router-dom","CSS Modules"],
      thumbnail: portfolio,
      codeUrl: "https://github.com/Sridhar7670/react/tree/main/day2-portfolio",
      liveUrl: "https://sridhars-portfolio.netlify.app/"
    },
    
    {

      title: "Early Projects",
      description: "Small apps from my learning phase — Employee Management, Task Manager, Tic-Tac-Toe, Blinkit clone. Check my GitHub for more",
      tech: ["JavaScript", "HTML", "CSS"],
      thumbnail: TaskManager,
      codeUrl: "https://github.com/Sridhar7670",
    },
     {
      
      title: "Employee Management App",
      description: "Add data into the input fields and perform opeartions on them ",
      tech: ["javascript", "Front-end","Local-storage"],
      thumbnail: emp_mangment_sys,
      codeUrl: "https://github.com/Sridhar7670/employee-management-system-",
      liveUrl: "https://sridhar7670.github.io/employee-management-system-/"
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="tile-grid">
        {projects.map((project,i) => (
          <div key={i+1} className={`project-tile `}
          >
            <div className="tile-front">
              <img src={project.thumbnail} alt={project.title}  className="tile-image"/>
              <div className="tech-tags">
                 {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="tile-back">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiCode /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
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