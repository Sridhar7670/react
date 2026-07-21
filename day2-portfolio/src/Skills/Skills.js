import Card from '../components/Card/Card';
import { FaCode, FaDatabase, FaReact, FaAws, FaDocker } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

const SKILLS = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Proficient in HTML, CSS, JavaScript, Built multiple projects used modern frameworks.',
    linkText: 'View Projects',
    url: 'https://github.com/Sridhar7670/JavaScript',
  },
  {
    icon: <FaAws />,
    title: 'Cloud & AWS',
    description: 'Deployed apps on AWS (EC2, S3) with Docker. Basic Terraform for infrastructure setup.',
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    description: 'Worked with PostgreSQL and MongoDB in real projects — schemas, queries, and API integrations.',
  },
  {
    icon: <FaReact />,
    title: 'MERN Stack',
    description: 'Efficient in using modern Frameworks and Libraries Such as React Express Node',
    linkText: 'View Projects',
    url: 'https://github.com/Sridhar7670/react',
  },
  {
    icon: <FaCode />,
    title: 'Next.js',
    description: 'Built scalable web apps using Next.js Typescript. Learned SSR, routing, and deployment strategies.',
    linkText: 'View Repository',
    url: 'https://github.com/Sridhar7670/Next-js',
  },
  {
    icon: <FaCode />,
    title: 'NestJS',
    description: 'Developed backend services using NestJS Typescript. Explored modular architecture and REST APIs.',
    linkText: 'View Repository',
    url: 'https://github.com/Sridhar7670/nest-js',
  },
  {
    icon: <FaCode />,
    title: 'TypeScript',
    description: 'Gained strong understanding of TypeScript for scalable and type-safe JavaScript development.',
    linkText: 'View Repository',
    url: 'https://github.com/Sridhar7670/typescript',
  },
  {
    icon: <FaDocker />,
    title: 'Docker',
    description: 'Learned containerization using Docker. Built and deployed apps with Dockerfiles and Compose.',
    linkText: 'View Repository',
    url: 'https://github.com/Sridhar7670/docker',
  },
];

const Skills = () => {
  const [titleRef, isTitleVisible] = useScrollReveal();
  // One observer for the whole grid. Each card then staggers itself using
  // the `index` prop, so we don't need eight separate observers.
  const [gridRef, isGridVisible] = useScrollReveal();

  return (
    <section className="skills-section" id="skills">
      <h2
        ref={titleRef}
        className={`section-title reveal ${isTitleVisible ? 'is-visible' : ''}`}
      >
        My Skills
      </h2>
      <div
        ref={gridRef}
        className={`skills-container ${isGridVisible ? 'is-visible' : ''}`}
      >
        {SKILLS.map((skill, index) => (
          <Card
            key={skill.title}
            index={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            linkText={skill.linkText}
            linkUrl={skill.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
