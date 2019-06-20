import React from 'react';
import Divider from '../Divider';
import { ReactComponent as GithubLogo } from '../../assets/logos/github.svg';

import './ProjectCard.sass';

interface ProjectCardProps {
  name: string;
  description: string;
  screenshot: string;
  backend: string[];
  frontend: string[];
  db: string[];
  href: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  screenshot,
  backend,
  frontend,
  db,
  href,
  github,
}) => (
  <div className="project__card">
    <h1 className="project__card-name">{name}</h1>
    <h3 className="project__card-description">{description}</h3>
    <div className="project__img-container">
      <img className="project__img" src={screenshot} alt={`${name} homepage`} />
    </div>
    <div className="tech-stack">
      <h2 className="tech-stack__header">Tech Stack</h2>
      <Divider />
      <div className="tech-stack__category-container">
        <div className="tech-stack__category">
          <h3 className="tech-stack__title">Front End</h3>
          <ul className="tech-stack__list">
            {frontend.map(f => (
              <li className="tech-stack__list-item">{f}</li>
            ))}
          </ul>
        </div>
        <div className="tech-stack__category">
          <h3 className="tech-stack__title">Back End</h3>
          <ul className="tech-stack__list">
            {backend.map(b => (
              <li className="tech-stack__list-item">{b}</li>
            ))}
          </ul>
        </div>
        <div className="tech-stack__category">
          <h3 className="tech-stack__title">DataBase</h3>
          <ul className="tech-stack__list">
            {db.map(d => (
              <li className="tech-stack__list-item">{d}</li>
            ))}
          </ul>
        </div>
      </div>
      <Divider />
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
        <a
          className="project__card-github-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="github-logo" />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
