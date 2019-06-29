import React from 'react';
import GitHubLink from '../GitHubLink';
import { ReactComponent as StackOverflowLogo } from '../../assets/logos/stackoverflow.svg';

import './MyLinks.sass';

const MyLinks: React.FC = () => (
  <div className="my-links">
    <GitHubLink classes="my-links__link" href="https://github.com/Asaf-Aviv" />
    <a
      className="my-links__link"
      href="https://stackoverflow.com/users/8605960/asaf-aviv"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StackOverflowLogo />
    </a>
  </div>
);

export default MyLinks;
