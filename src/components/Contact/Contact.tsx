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
        <div className="contact__container">
          <div className="contact__form-container">
            <form
              action="https://formspree.io/asafaviv89@gmail.com"
              method="POST"
              className="contact__form"
              onSubmit={onSubmit}
            >
              <h3 className="contact__form-title">Send me a message</h3>
              <Input type="text" name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" autocomplete="true" />
              <textarea className="textarea" name="message" placeholder="Message" required rows={6} />
              <button type="submit" className="contact__form-submit">
                Send
                <EmailIcon />
              </button>
            </form>
          </div>
          <div className="contact__details">
            <h3 className="contact__details-title">Contact Information</h3>
            <div className="contact__details-item">
              <span>(972) 544 502 505</span>
            </div>
            <div className="contact__details-item">
              <a className="email__link" href="mailto:asafaviv89@gmail.com">
                asafaviv89@gmail.com
              </a>
            </div>
          </div>
        </div>
      </ContentCard>
    </Section>
  );
};

export default Contact;
