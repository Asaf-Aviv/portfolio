import React from 'react';
import Fade from 'react-reveal/Fade'
import Container from '../Container';

import './Contact.sass';

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

const Contact: React.FC = () => (
  <section id="contact">
    <Fade right duration={1500} fraction={1}>
      <h2 className="contact__title">Contact</h2>
    </Fade>
      <Container>
        <Fade left duration={1500}>
          <div className="contact__container">
            <div className="contact__form-container">
              <form
                action="https://formspree.io/asafaviv89@gmail.com"
                method="POST"
                className="contact__form"
              >
                <h5 className="contact__form-title">Send me a message</h5>
                <Input type="text" name="name" placeholder="Name" />
                <Input type="email" name="email" placeholder="Email" autocomplete="true" />
                <textarea className="textarea" name="message" placeholder="Message" required rows={6} />
                <button type="submit" className="contact__form-submit">
                  SEND
                </button>
              </form>
            </div>
            <div className="contact__details">
              <h5 className="contact__details-title">Contact Information</h5>
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
        </Fade>
      </Container>
  </section>
);

export default Contact;
