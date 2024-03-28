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
      data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"
    />
  </CaptchaDiv>
);
