import React from 'react';

import './ContentCard.sass';

interface ContentCardProps {
  classes?: string;
  children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ classes, children }) => (
  <div className={`content-card ${classes}`}>
    {children}
  </div>
);

ContentCard.defaultProps = {
  classes: '',
};

export default ContentCard;
