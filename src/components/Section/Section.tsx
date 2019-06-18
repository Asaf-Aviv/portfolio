import React from 'react';
import Container from '../Container';

import './Section.sass';

interface SectionProps {
  id: string;
  children: React.ReactNode
  classes?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({
  id, classes, children, title,
}) => (
  <section id={id} className={`section ${classes}`}>
    <Container>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </Container>
  </section>
);

Section.defaultProps = {
  classes: '',
  title: '',
};

export default Section;
