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
  years: number;
}

const languages: Skill[] = [
  { Component: JavaScriptLogo, text: 'JavaScript', years: 3 },
  { Component: TypeScriptLogo, text: 'TypeScript', years: 0.5 },
];

const frontEnd: Skill[] = [
  { Component: ReactLogo, text: 'React', years: 2 },
  { Component: ReduxLogo, text: 'Redux', years: 2 },
  { Component: HTML5Logo, text: 'HTML5', years: 3 },
  { Component: CSS3Logo, text: 'CSS3', years: 3 },
  { Component: SASSLogo, text: 'SASS', years: 2 },
];

const backEnd: Skill[] = [
  { Component: NodeJSLogo, text: 'Node', years: 2 },
  { Component: MongoDBLogo, text: 'MongoDB', years: 2 },
  { Component: GraphQLLogo, text: 'GraphQL', years: 0.5 },
];

const renderCategory = (skills: Skill[], title: string, delay: number = 0) => (
  <div className="skills__category">
    <h3 className="skills__category-title">{title}</h3>
    <ul className="skills__list">
      <Fade fraction={0.3} cascade up delay={delay} duration={900}>
        {skills.map(({ text, Component, years }) => (
          <li className="skills__list-item" key={text}>
            <div className="skills__list-item-logo">
              <Component />
            </div>
            <span className="skills__list-item-text">{text}</span>
            <span className="skills__list-item-text">{`${years} Years`}</span>
          </li>
        ))}
      </Fade>
    </ul>
  </div>
);

const Skills: React.FC = () => (
  <section id="skills">
    <Container>
      <h2 className="skills__title">Skills</h2>
      <div className="skills__category-container">
        {renderCategory(languages, 'Languages', 200)}
        {renderCategory(frontEnd, 'Front End', 400)}
        {renderCategory(backEnd, 'Back End', 700)}
      </div>
    </Container>
    <div className="line" />
  </section>
);

export default Skills;
