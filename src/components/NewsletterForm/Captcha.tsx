import React from 'react';

import { CaptchaDiv } from './NewsletterForm.styled';
import type { Captcha as CaptchaType } from './NewsletterForm.types';

export const Captcha: CaptchaType = () => (
  <CaptchaDiv
    className="ml-form-recaptcha ml-validate-required"
    style={{ float: 'left' }}
  >
    <div
      className="g-recaptcha"
      data-sitekey={process.env.NEWSLETTER_CAPTCHA_ID}
    />
  </CaptchaDiv>
);
