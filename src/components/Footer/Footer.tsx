import type { ReactElement } from 'react';

import FooterLogoImage from '@/../public/images/logo-02.svg';

import { StyledFooter } from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

export const Footer: FooterType = ({ children }): ReactElement => (
  <StyledFooter>
    {children}
    <img src={FooterLogoImage.src} alt="footer_logo" />
  </StyledFooter>
);
