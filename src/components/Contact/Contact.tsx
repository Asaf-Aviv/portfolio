import React from 'react';
import Section from '../Section';

import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';

import './Contact.sass';
import ContentCard from '../ContentCard';

interface InputProps {
  placeholder: string;
  name: string;
  type?: string;
  autocomplete?: string;
}

const Input: React.FC<InputProps> = ({
  type, name, placeholder, autocomplete,
}) => (
  <div className="input__container">
    <EmailIcon className="input__icon" />
    <input
      name={name}
      className="input"
      type={type}
      placeholder={placeholder}
      autoComplete={autocomplete}
      required
    />
  </div>
);

Input.defaultProps = {
  type: 'text',
  autocomplete: 'false',
};

const Contact: React.FC = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send POST request to formspree manually
  };

  return (
    <Section id="contact">
      <ContentCard>
        <form
          action="https://formspree.io/asafaviv89@gmail.com"
          method="POST"
          className="contact__form"
          onSubmit={onSubmit}
        >
          <h2 className="contact__form-title">Contact Me</h2>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" autocomplete="true" />
          <textarea className="textarea" name="message" placeholder="Message" required rows={6} />
          <button type="submit" className="contact__form-submit">
          Send
            <EmailIcon />
          </button>
        </form>
      </ContentCard>
    </Section>
  );
};

export default Contact;
