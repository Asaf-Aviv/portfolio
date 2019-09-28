import React, { useContext } from 'react';
import Slide from 'react-reveal/Slide';
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
    <Slide left fraction={0.7} opposite>
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
            <h5 className="project__card-description">{description}</h5>
          </div>
          <div className="project__card-stack">
            <ul className="project__card-stack-list">
              {renderTechStack(frontend)}
              {backend && renderTechStack(backend)}
              {db && renderTechStack(db)}
            </ul>
          </div>
        </div>
        {/* <div className="tech-stack">
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
          ? (
            <a
              className="my-links__link project__card-github-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="github-logo" />
            </a>
          )
          : <div className="fill" />}
      </div> */}
      </div>
    </Slide>
  );
};
// const ProjectCard: React.FC<ProjectCardProps> = ({
//   name,
//   description,
//   screenshot,
//   darkScreenshot,
//   backend,
//   frontend,
//   db,
//   href,
//   github,
// }) => {
//   const isDarkMode = useContext(DarkModeContext);

//   return (
//     <div className="project__card">
//       <h3 className="project__card-name">{name}</h3>
//       <h4 className="project__card-description">{description}</h4>
//       <div className="project__img-container">
//         <img
//           className="project__img"
//           src={isDarkMode && darkScreenshot ? darkScreenshot : screenshot}
//           alt={`${name} homepage`}
//         />
//       </div>
//       <div className="tech-stack">
//         <h2 className="tech-stack__header">Tech Stack</h2>
//         <Divider />
//         <div className="tech-stack__category-container">
//           {renderTechStack('Front End', frontend)}
//           {backend && renderTechStack('Back End', backend)}
//           {db && renderTechStack('Database', db)}
//         </div>
//       </div>
//       <div style={{ marginTop: 'auto' }}><Divider /></div>
//       <div className="project__card-footer">
//         <div className="fill" />
//         <a
//           className="project__card-link"
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Open Project
//         </a>
//         {github
//           ? (
//             <a
//               className="my-links__link project__card-github-link"
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <GithubLogo className="github-logo" />
//             </a>
//           )
//           : <div className="fill" />}
//       </div>
//     </div>
//   );
// };

export default ProjectCard;
