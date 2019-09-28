import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { DarkModeContext } from '../../App';
import { ProjectCardProps, techToSvg } from '../../data/projects';
import { ReactComponent as GithubLogo } from '../../assets/logos/github.svg';

import './ProjectCard.sass';

const renderTechStack = (stack: string[]) => (
  <>
    {stack.map((tech) => {
      const Component = techToSvg[tech];

      return (
        <li key={tech} className="project__card-stack-list-item">
          {tech in techToSvg && <Component className="tech-logo" />}
          <span className="tech-name">{tech}</span>
        </li>
      );
    })}
  </>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
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
    <Fade fraction={0.7}>
      <div className="project__card">
        <div className="project__card-img-container">
          <img
            className="project__card-img"
            src={isDarkMode && darkScreenshot ? darkScreenshot : screenshot}
            alt={`${name} homepage`}
          />
        </div>
        <div className="project__card-body">
          {github && (
            <a
              title="view code"
              className="project__card-github-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="github-logo" />
            </a>
          )}
          <div className="project__card-header">
            <h3 className="project__card-name">
              <a
                title={name}
                className="project__card-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </h3>
          </div>
          <div className="project__card-stack">
            <ul className="project__card-stack-list">
              {renderTechStack(frontend)}
              {backend && renderTechStack(backend)}
              {db && renderTechStack(db)}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
