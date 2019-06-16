import React from 'react';
import Section from '../Section';
import ContentCard from '../ContentCard';
import Emoji from '../Emoji';

import './About.sass';

const paragraphs: string[] = [
  "I'm a Full stack web developer based in Haifa, Israel looking for a company to grow as a person as well as a developer.",
  "I'm highly motivated with a can do attitude, love learning new technologies as problems occur.",
  'Outside of vscode you can find me in stackoverflow browsing questions and trying to help others through code.',
];

const renderParagraph = (text: string, i: number) => (
  <p key={i} className="about__info">{text}</p>
);

const About: React.FC = () => (
  <Section id="about" classes="about__section">
    <ContentCard>
      <header className="about">
        <h1 className="about__title">
          Hi
          {' '}
          <Emoji emoji="👋" label="waving hand" />
          {' '}
          I&apos;m Asaf Aviv.
        </h1>
        {paragraphs.map(renderParagraph)}
      </header>
    </ContentCard>
  </Section>
);

export default About;
