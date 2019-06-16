import React, { useRef } from 'react';
import useDarkMode from '../../useDarkMode';

import './ThemeToggler.sass';

const Toggler: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const checkboxRef = useRef<HTMLInputElement>(null);

  const forwardClick = (): void => {
    if (checkboxRef.current) {
      checkboxRef.current.click();
    }
  };

  return (
    <div className="toggler__container">
      <input
        ref={checkboxRef}
        className="toggler__input"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
      <label className="toggler" onClick={forwardClick} />
    </div>
  );
};

export default Toggler;
