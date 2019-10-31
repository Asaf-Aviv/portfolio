import React, { SVGProps } from 'react';
import Fade from 'react-reveal/Fade';
import Container from '../Container';

import { ReactComponent as HTML5Logo } from '../../assets/logos/html5.svg';
import { ReactComponent as CSS3Logo } from '../../assets/logos/css3.svg';
import { ReactComponent as JavaScriptLogo } from '../../assets/logos/javascript.svg';
import { ReactComponent as ReduxLogo } from '../../assets/logos/redux.svg';
import { ReactComponent as TypeScriptLogo } from '../../assets/logos/typescript.svg';
import { ReactComponent as ReactLogo } from '../../assets/logos/react.svg';
import { ReactComponent as SASSLogo } from '../../assets/logos/sass.svg';
import { ReactComponent as GraphQLLogo } from '../../assets/logos/graphql.svg';
import { ReactComponent as NodeJSLogo } from '../../assets/logos/nodejs.svg';
import { ReactComponent as MongoDBLogo } from '../../assets/logos/mongodb.svg';

import './Skills.sass';

type SVG = React.FC<SVGProps<SVGSVGElement>>

interface Skill {
  Component: SVG;
  text: string;
}

const skills: Skill[] = [
  { Component: JavaScriptLogo, text: 'JavaScript' },
  { Component: TypeScriptLogo, text: 'TypeScript' },
  { Component: ReactLogo, text: 'React' },
  { Component: ReduxLogo, text: 'Redux' },
  { Component: HTML5Logo, text: 'HTML5' },
  { Component: CSS3Logo, text: 'CSS3' },
  { Component: SASSLogo, text: 'SASS' },
  { Component: NodeJSLogo, text: 'Node' },
  { Component: MongoDBLogo, text: 'MongoDB' },
  { Component: GraphQLLogo, text: 'GraphQL' },
];

// const renderCategory = (skills: Skill[], title: string, delay = 0) => (
//     <h3 className="skills__category-title">{title}</h3>
//     <ul className="skills__list">
//       <Fade fraction={0.3} cascade up delay={delay} duration={900}>
//         {skills.map(({ text, Component }) => (
//           <li className="skills__list-item" key={text}>
//             <div className="skills__list-item-logo">
//               <Component />
//             </div>
//             <span className="skills__list-item-text">{text}</span>
//           </li>
//         ))}
//       </Fade>
//     </ul>
// );

const Skills: React.FC = () => (
  <section id="skills">
    <Container>
      <h2 className="section__title">Skills</h2>
      <div className="skills__category-container">
        <ul className="skills__list">
          <Fade fraction={0.3} cascade up>
            {skills.map(({ text, Component }) => (
              <li className="skills__list-item" key={text}>
                <div className="skills__list-item-logo">
                  <Component />
                </div>
                <span className="skills__list-item-text">{text}</span>
              </li>
            ))}
          </Fade>
        </ul>
      </div>
    </Container>
    <div className="line" />
  </section>
);

export default Skills;
