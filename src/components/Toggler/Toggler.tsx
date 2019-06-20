import React, { useRef } from 'react';

import './Toggler.sass';

interface TogglerProps {
  checked: boolean;
  onChange: () => void;
  classes?: string;
  children?: React.ReactNode;
}

const Toggler: React.FC<TogglerProps> = ({
  checked, onChange, classes = '', children,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const forwardClick = () => {
    checkboxRef.current!.click();
  };

  return (
    <div className="toggler__container">
      <input
        ref={checkboxRef}
        className="toggler__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className={`toggler ${classes}`} onClick={forwardClick}>
        {children}
      </div>
    </div>
  );
};

export default Toggler;
