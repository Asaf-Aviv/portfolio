import React from 'react';
import Section from '../Section';
import ProjectCard from '../ProjectCard';
import projects, { ProjectCardProps } from '../../data/projects';

import './Projects.sass';

const ProjectsList: React.FC<React.ReactNode> = ({ children }) => (
  <ul className="projects__list">{children}</ul>
);

const renderProjectCard = (project: ProjectCardProps) => (
  <li key={project.name} className="projects__list-item">
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
