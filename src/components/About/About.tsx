import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Emoji from '../Emoji';
import Me from '../../assets/me.png';
import { ReactComponent as WaveSVG } from '../../assets/wave.svg';
import { ReactComponent as StackOverflowLogo } from '../../assets/logos/stackoverflow.svg';
import { ReactComponent as GithubLogo } from '../../assets/logos/github.svg';

import './About.sass';

const paragraphs: string[] = [
  "I'm a Full Stack Web Developer based in Haifa, Israel looking for a company to grow as a person as well as a developer.",
  "I'm highly motivated with a can do attitude, love learning and breaking stuff on a daily basis.",
  'I love working with(but not limited too) React, Redux, TypeScript, Node and GraphQL but happy to work and learn other technologies as well.',
];

const renderParagraph = (text: string, i: number) => (
  <p key={i} className="about__paragraph">{text}</p>
);

const About: React.FC = () => (
  <section id="about">
    <header className="about__header">
      <div className="about__title-container">
        <Zoom duration={500} fraction={0.5}>
          <img className="me" src={Me} alt="Asaf Aviv" />
        </Zoom>
        <Bounce delay={300} fraction={0.5}>
          <h1 className="about__title">
            Hi
            {' '}
            <Emoji emoji="👋" label="waving hand" />
            {' '}
            I&apos;m Asaf Aviv
          </h1>
        </Bounce>
      </div>
      <div className="about__paragraphs-container">
        <Zoom left cascade delay={300} fraction={0.3}>
          <div>
            {paragraphs.map(renderParagraph)}
            <p className="about__paragraph">
              Outside of vscode you can find me mustly on
              {' '}
              <a href="https://www.reactiflux.com/" target="_blank" rel="noopener noreferrer" className="link">Reactiflux</a>
              {' '}
              discord channel and on StackOverflow browsing questions and trying to help others
              through code.
            </p>
            <Fade delay={1500} duration={0}>
              <Zoom delay={1650} cascade duration={600}>
                <div className="my-links">
                  <a
                    className="my-links__link"
                    href="https://github.com/Asaf-Aviv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubLogo className="github-logo" />
                  </a>
                  <a
                    className="my-links__link"
                    href="https://stackoverflow.com/users/8605960/asaf-aviv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StackOverflowLogo />
                  </a>
                </div>
              </Zoom>
            </Fade>
          </div>
          <Fade cascade up delay={1800} duration={500}>
            <h5 className="ps">PS: Don&apos;t try to click on the logos</h5>
          </Fade>
        </Zoom>
      </div>
    </header>
    <WaveSVG className="waves" />
  </section>
);

export default About;
