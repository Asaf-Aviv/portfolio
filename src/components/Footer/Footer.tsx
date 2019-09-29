import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Container from '../Container';
import { ReactComponent as StackOverflowLogo } from '../../assets/logos/stackoverflow.svg';
import { ReactComponent as GithubLogo } from '../../assets/logos/github.svg';

import './Footer.sass';

const Footer: React.FC = () => (
  <footer className="footer">
    <Container>
      <p className="footer__text">Thanks for stopping by, make sure you check out my GitHub and StackOverflow profiles.</p>
      <div className="my-links">
        <a
          className="my-links__link"
          href="https://github.com/Asaf-Aviv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Zoom fraction={0.9} duration={400}>
            <GithubLogo className="github-logo" />
          </Zoom>
        </a>
        <a
          className="my-links__link"
          href="https://stackoverflow.com/users/8605960/asaf-aviv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Zoom fraction={0.9} delay={150} duration={400}>
            <StackOverflowLogo />
          </Zoom>
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
