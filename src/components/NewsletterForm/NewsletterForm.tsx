import React, { useState } from 'react';

import useScript from './NewsletterForm.script';
import {
  EmailInput,
  EmbedForm,
  MainForm,
  NewsletterFormBody,
  RegistrationConfirmation,
  Sub,
  SubmitButton,
} from './NewsletterForm.styled';
import type { NewsletterForm as NewsletterFormType } from './NewsletterForm.types';

export const NewsletterForm: NewsletterFormType = () => {
  useScript('https://www.google.com/recaptcha/api.js');
  useScript(
    `https://groot.mailerlite.com/js/w/webforms.min.js?${process.env.NEWSLETTER_SUBMISSION_KEY}`,
  );
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setValidEmail(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setValidEmail(false);
      setTimeout(() => {
        setValidEmail(true);
      }, 5000);
      return;
    }

    setSubmitted(true);
  };

  return (
    <NewsletterFormBody
      id="mlb2-13555055"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-13555055"
    >
      <EmbedForm className="ml-form-embedWrapper embedForm">
        {submitted ? (
          <RegistrationConfirmation className="ml-form-successBody row-success">
            <div className="ml-form-successContent">
              <Sub>Dziękujemy za zapis!</Sub>
              <p>Spodziewaj się pierwszych wiadomości w niedługim czasie.</p>
            </div>
          </RegistrationConfirmation>
        ) : (
          <>
            <Sub>Zapis do newslettera:</Sub>
            <MainForm
              className="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/887649/forms/116978304079103981/subscribe"
              data-code=""
              method="post"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <EmailInput
                type="email"
                className={`form-control ${validEmail ? '' : 'invalid'}`}
                data-inputmask=""
                name="fields[email]"
                placeholder="Email"
                autoComplete="email"
                onChange={handleEmailChange}
              />
              <SubmitButton type="submit" className="primary">
                Zapisz się
              </SubmitButton>
              {/* ADD CAPTCHA HERE IF NEEDED */}
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
            </MainForm>
          </>
        )}
      </EmbedForm>
    </NewsletterFormBody>
  );
};
