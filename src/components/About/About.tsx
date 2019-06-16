import React from 'react';
import ContentCard from '../ContentCard';
import Container from '../Container';
import Emoji from '../Emoji';

import './About.sass';

const paragraphs: string[] = [
  "I'm a Full stack web developer based in Haifa, Israel looking for a company to grow as a person as well as a developer.",
  "I'm highly motivated with a can do attitude, love learning new technologies as problems occur.",
  'Outside of vscode you can find me in stackoverflow browsing questions and trying to help others through code.',
];

const renderParagraph = (text: string) => <p className="about__info">{text}</p>;

const About: React.FC = () => (
  <section id="about" className="about__section">
    <Container>
      <ContentCard>
        <div className="about">
          <h1 className="about__title">
            Hi
            {' '}
            <Emoji emoji="👋" label="waving hand" />
            {' '}
            I&apos;m Asaf Aviv.
          </h1>
          {paragraphs.map(renderParagraph)}
        </div>
      </ContentCard>
    </Container>
  </section>
);

export default About;
