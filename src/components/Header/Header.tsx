import type { ReactElement } from 'react';

import { Logo } from '@/componentsLogo/Logo';
import { COLOUR_VARIANT } from '@/componentsLogo/Logo.types';

import { Wrapper } from './Header.styled';

export const Header = (): ReactElement => (
  <Wrapper>
    <Logo colourVariant={COLOUR_VARIANT.GREEN} logoWidth={240} />
  </Wrapper>
);
