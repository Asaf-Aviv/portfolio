import React from 'react';
import Container from '../Container';
import MyLinks from '../MyLinks';

import './Footer.sass';

const Footer: React.FC = () => (
  <footer className="footer">
    <Container>
      <p className="footer__text">Thanks for stopping by, make sure you check out my GitHub and StackOverflow profiles.</p>
      <MyLinks />
    </Container>
  </footer>
);

export default Footer;
