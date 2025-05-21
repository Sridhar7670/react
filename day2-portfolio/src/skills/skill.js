import React from 'react';
import Card from '../components/cards/cards';
import { FaCode, FaPython, FaDatabase ,FaReact} from 'react-icons/fa';
import './Skills.css';
const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Proficient in HTML, CSS, JavaScript, Built multiple projects used modern frameworks.",
      linkText: "View Projects",
      url:"https://github.com/Sridhar7670/JavaScript"

    },
    {
      icon: <FaPython />,
      title: "Programming ",
      description: "Learn't most used programming languages like Python, Java & JavaScript",
      linkText: "Explored concepts",
      url:"https://github.com/Sridhar7670/python"
    },
    {
      icon: <FaDatabase />,
      title: "Database Programming",
      description: "Profecient In SQl and MongoDb. Looking for opportunities to apply database skills.",
      url:"#"

    },
    {
      icon: <FaReact />,
      title: "MERN Stack",
      description: "Efficent in using modern  Frameworks and Libraries Such as React Express Node",
      linkText: "View Projects",
      url:"https://github.com/Sridhar7670/react"
    }
  ];

  const handleCardClick = (title) => {
    if(title==="#"){}
    else{
    window.open(title, "_blank");}
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <Card
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            linkText={skill.linkText}
            onLinkClick={() => handleCardClick(skill.url)}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;