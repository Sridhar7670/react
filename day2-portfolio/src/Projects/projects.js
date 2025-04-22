import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './project.css';
import tic_tac_toe from "../components/images/tic_tac_toe.jpg"
import emp_mangment_sys from "../components/images/employee_managment_system.png"
import Blinkit from "../components/images/Blinkit.png"
import TaskManager from "../components/images/TaskManager.png"


const Projects = () => {
  const [activeTile, setActiveTile] = useState(null);

  const projects = [
    
    {
      
      title: "Employee Management App",
      description: "Add data into the input fields and perform opeartions on them ",
      tech: ["javascript", "Front-end","Local-storage"],
      thumbnail: emp_mangment_sys,
      codeUrl: "https://github.com/Sridhar7670/employee-management-system-",
      liveUrl: "https://sridhar7670.github.io/employee-management-system-/"
    },
    {
      
      title: "Task Manager",
      description: "Add task and edit delete tasks based on users choise",
      tech: ["JavaScript","HTML","CSS"],
      thumbnail: TaskManager,
      codeUrl: "https://github.com/Sridhar7670/Task-manager",
      liveUrl: "https://sridhar7670.github.io/Task-manager/"
    },
    {
      
      title: "E-Commerce Platform",
      description: "Full-featured online store with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      thumbnail: "/images/ecommerce-thumb.jpg",
      codeUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://yourapp.com"
    },
    {
      
      title: "TIC-TAC-TOE",
      description: "Some Fun Time Gaming App",
      tech: ["JavaScript", "Vanilla JS"],
      thumbnail: tic_tac_toe,
      codeUrl: "https://github.com/Sridhar7670/TIC-TAC-TOE",
      liveUrl: "https://sridhar7670.github.io/TIC-TAC-TOE/"
    },
    {
      
      title: "Blinkit Clone",
      description: "Made Basic Home page of Blinkit using only HTML,CSS",
      tech: ["HTML","CSS"],
      thumbnail: Blinkit,
      codeUrl: "https://github.com/Sridhar7670/Blinkit-Clone",
      liveUrl: "https://sridhar7670.github.io/Blinkit-Clone/"
    },
    {
      
      title: "Portfolio Website",
      description: "Responsive portfolio built with React and GSAP animations",
      tech: ["React", "react-router-dom","CSS Modules"],
      thumbnail: "sddv",
      codeUrl: "https://github.com/Sridhar7670/react/tree/main/day2-portfolio",
      liveUrl: "https://yourportfolio.com"
    }
    
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
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiCode /> Code
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;