import React from 'react';
import { ReactComponent as GithubLogo } from '../../assets/logos/github.svg';

interface GitHubLinkProps {
  href: string;
  classes?: string;
}

const GitHubLink: React.FC<GitHubLinkProps> = ({ href, classes = '' }) => (
  <a
    className={classes}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <GithubLogo className="github-logo" />
    <span>hello test1111</span>
  </a>
);

export default GitHubLink;
