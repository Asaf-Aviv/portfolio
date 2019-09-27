import React from 'react';
import ProjectCard from '../ProjectCard';
import projects, { ProjectCardProps } from '../../data/projects';
import Container from '../Container';

import './Projects.sass';

const renderProjectCard = (project: ProjectCardProps) => (
  <li key={project.name} className="projects__list-item">
    <ProjectCard {...project} />
  </li>
);

const Projects: React.FC = () => (
  <section id="projects">
    <h2 className="projects__title">Projects</h2>
    <ul className="projects__list">
      {projects.map(renderProjectCard)}
    </ul>
  </section>
);

export default Projects;
