import type { ReactElement } from 'react';

import SocialIcons from '@/components/SocialIcons';
import { Logo } from '@/componentsLogo/Logo';
import { COLOUR_VARIANT } from '@/componentsLogo/Logo.types';

import { StyledFooter } from './Footer.styled';

export const Footer = (): ReactElement => (
  <StyledFooter>
    <SocialIcons />
    <Logo colourVariant={COLOUR_VARIANT.GREEN} logoWidth={140} />
  </StyledFooter>
);
