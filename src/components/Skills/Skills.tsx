import React from 'react';
import Section from '../Section';
import ContentCard from '../ContentCard';

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

const logos = [
  HTML5Logo,
  CSS3Logo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  ReduxLogo,
  SASSLogo,
  NodeJSLogo,
  MongoDBLogo,
  GraphQLLogo,
];

const Skills: React.FC = () => (
  <Section id="skills" title="Skills">
    <ContentCard>
      <div className="skills__list">
        {logos.map((Logo, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="skill__card">
            <Logo />
          </div>
        ))}
      </div>
    </ContentCard>
  </Section>
);

export default Skills;
