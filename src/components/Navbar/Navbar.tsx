import React, { useState } from 'react';
import Container from '../Container';
import Toggler from '../Toggler';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';

import './Navbar.sass';

interface NavProps {
  isDarkMode: boolean;
  showAnimations: boolean;
  toggleDarkMode: () => void;
  toggleAnimations: () => void;
}

const renderLinks = (links: string[], onClick: () => void) => (
  links.map(to => (
    <li key={to} className="nav__list-item">
      <a
        href={`#${to.toLowerCase()}`}
        onClick={(e) => {
          // stop url from changing and scroll manually to the target
          // because the url is changing automatically through useActivateLinks
          e.preventDefault();
          document.getElementById(to.toLowerCase())!.scrollIntoView();
          onClick();
        }}
        className="nav__link"
      >
        {to}
      </a>
    </li>
  ))
);

const Navbar: React.FC<NavProps> = ({
  isDarkMode, toggleDarkMode, showAnimations, toggleAnimations,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenStateHandler = (nextState: boolean) => () => {
    setIsOpen(nextState);
  };

  return (
    <header className="nav__header">
      <Container>
        <nav className="nav">
          <button className="nav__menu-btn" type="button" onClick={isOpenStateHandler(true)}>
            <MenuIcon />
          </button>
          <div
            className={`nav__list-container ${isOpen ? 'nav__list-container--open' : ''}`}
            onClick={isOpenStateHandler(false)}
          >
            <ul className="nav__list" onClick={e => e.stopPropagation()}>
              {renderLinks(['About', 'Skills', 'Projects', 'Contact'], isOpenStateHandler(false))}
            </ul>
          </div>
          <div className="togglers__container">
            Animations
            <Toggler checked={showAnimations} onChange={toggleAnimations} />
            <Toggler classes="theme-toggler" checked={isDarkMode} onChange={toggleDarkMode}>
              <SunIcon className="toggler__input-icon sun" />
              <MoonIcon className="toggler__input-icon moon" />
            </Toggler>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
