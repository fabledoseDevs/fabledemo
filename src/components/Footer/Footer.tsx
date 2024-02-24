import Image from 'next/image';
import type { ReactElement } from 'react';

import FooterLogoImage from '@/../public/images/logo-02.svg';
import SocialIcons from '@/components/SocialIcons';

import { StyledFooter } from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

export const Footer: FooterType = (): ReactElement => (
  <StyledFooter>
    <SocialIcons />
    <Image src={FooterLogoImage} alt={''} />
  </StyledFooter>
);
