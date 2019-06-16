import React, { useState } from 'react';
import Container from '../Container';
import ThemeToggler from '../ThemeToggler';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import './Navbar.sass';

const renderListItem = (to: string, onClick: () => void) => (
  <li className="nav__list-item">
    <a
      href={`#${to.toLowerCase()}`}
      onClick={onClick}
      className="nav__link"
    >
      {to}
    </a>
  </li>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <Container>
        <nav className="nav">
          <button className="nav__menu-btn" type="button" onClick={toggleIsOpen}>
            <MenuIcon />
          </button>
          <div
            className={`nav__list-container ${isOpen ? 'nav__list-container--open' : ''}`}
            onClick={toggleIsOpen}
          >
            <ul className="nav__list" onClick={e => e.stopPropagation()}>
              {renderListItem('About', toggleIsOpen)}
              {renderListItem('Skills', toggleIsOpen)}
              {renderListItem('Projects', toggleIsOpen)}
              {renderListItem('Contact', toggleIsOpen)}
            </ul>
          </div>
          <ThemeToggler />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
