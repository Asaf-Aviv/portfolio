import React from 'react';

import './Container.sass';

const Container: React.FC<React.ReactNode> = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

export default Container;
