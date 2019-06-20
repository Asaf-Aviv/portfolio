import React from 'react';
import Section from '../Section';
import ProjectCard from '../ProjectCard';
import BlogglyScreenShot from '../../assets/projects screenshots/blogggly.png';
import BlogglyDarkScreenShot from '../../assets/projects screenshots/blogggly-dark.png';

import './Projects.sass';

interface ProjectCardProps {
  name: string;
  description: string;
  screenshot: string;
  darkScreenshot?: string;
  backend: string[];
  frontend: string[];
  db: string[];
  href: string;
  github: string;
}

const Blogggly = {
  name: 'Blogggly',
  description: 'Platform for bloggers',
  screenshot: BlogglyScreenShot,
  darkScreenshot: BlogglyDarkScreenShot,
  backend: ['Node.js', 'GraphQL'],
  db: ['MongoDB'],
  frontend: ['React', 'SASS', 'WebSockets'],
  href: 'https://blogggly.com/',
  github: 'https://github.com/Asaf-Aviv/blogggly',
};

const Blogggly2 = {
  name: 'Blogggly2',
  description: 'Platform for bloggers',
  screenshot: BlogglyScreenShot,
  darkScreenshot: BlogglyDarkScreenShot,
  backend: ['Node.js', 'GraphQL'],
  db: ['MongoDB'],
  frontend: ['React', 'SASS', 'WebSockets'],
  href: 'https://blogggly.com/',
  github: 'https://github.com/Asaf-Aviv/blogggly',
};

const projects: ProjectCardProps[] = [Blogggly, Blogggly2];

const ProjectsList: React.FC<React.ReactNode> = ({ children }) => (
  <ul className="projects__list">{children}</ul>
);

const renderProjectCard = (project: ProjectCardProps) => (
  <li className="projects__list-item" key={project.name}>
    <ProjectCard {...project} />
  </li>
);

const Projects: React.FC = () => (
  <Section id="projects" classes="projects" title="Projects">
    <ProjectsList>
      {projects.map(renderProjectCard)}
    </ProjectsList>
  </Section>
);

export default Projects;
