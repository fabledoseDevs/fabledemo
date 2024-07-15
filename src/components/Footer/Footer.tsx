import type { ReactElement } from 'react';

import SocialIcons from '@/components/SocialIcons';
import { Logo } from '@/componentsLogo/Logo';
import { COLOUR_VARIANT } from '@/componentsLogo/Logo.types';

import { Copyrights, StyledFooter } from './Footer.styled';

const date = new Date();

export const Footer = (): ReactElement => (
  <StyledFooter>
    <SocialIcons />
    <br />
    <Logo colourVariant={COLOUR_VARIANT.GREEN} logoWidth={140} />
    <Copyrights>
      &#169; {date.getFullYear().toString()} Fabledose. Wszelkie prawa
      zastrzeżone.
    </Copyrights>
  </StyledFooter>
);
