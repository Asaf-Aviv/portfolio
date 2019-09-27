import React, { useContext } from 'react';
import Divider from '../Divider';
import GitHubLink from '../GitHubLink';
import { DarkModeContext } from '../../App';
import { ProjectCardProps } from '../../data/projects';

import './ProjectCard.sass';

const renderTechStack = (title: string, stack: string[]) => (
  <div className="tech-stack__category">
    <h3 className="tech-stack__title">{title}</h3>
    <ul className="tech-stack__list">
      {stack.map(tech => (
        <li key={tech} className="tech-stack__list-item">{tech}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  screenshot,
  darkScreenshot,
  backend,
  frontend,
  db,
  href,
  github,
}) => {
  const isDarkMode = useContext(DarkModeContext);

  return (
    <div className="project__card">
      <h3 className="project__card-name">{name}</h3>
      <h4 className="project__card-description">{description}</h4>
      <div className="project__img-container">
        <img
          className="project__img"
          src={isDarkMode && darkScreenshot ? darkScreenshot : screenshot}
          alt={`${name} homepage`}
        />
      </div>
      <div className="tech-stack">
        <h2 className="tech-stack__header">Tech Stack</h2>
        <Divider />
        <div className="tech-stack__category-container">
          {renderTechStack('Front End', frontend)}
          {backend && renderTechStack('Back End', backend)}
          {db && renderTechStack('Database', db)}
        </div>
      </div>
      <div style={{ marginTop: 'auto' }}><Divider /></div>
      <div className="project__card-footer">
        <div className="fill" />
        <a
          className="project__card-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Project
        </a>
        {github
          ? <GitHubLink href={github} classes="project__card-github-link" />
          : <div className="fill" />
        }
      </div>
    </div>
  );
};

export default ProjectCard;
