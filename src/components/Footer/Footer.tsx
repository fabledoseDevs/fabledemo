import type { ReactElement } from 'react';

import Logo from '@/components/Logo';
import { COLOUR_VARIANT } from '@/components/Logo/Logo.types';
import SocialIcons from '@/components/SocialIcons';

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
