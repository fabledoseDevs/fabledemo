import type { ReactElement } from 'react';

import Logo from '@/components/Logo';
import { COLOUR_VARIANT } from '@/components/Logo/Logo.types';

import { Wrapper } from './Header.styled';

export const Header = (): ReactElement => (
  <Wrapper>
    <Logo colourVariant={COLOUR_VARIANT.GREEN} logoWidth={240} />
  </Wrapper>
);
