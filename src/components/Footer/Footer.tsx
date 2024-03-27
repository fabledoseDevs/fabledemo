import Image from 'next/image';
import type { ReactElement } from 'react';

import FooterLogoImage from '@/../public/images/logo-02.svg';
import SocialIcons from '@/components/SocialIcons';

import { StyledFooter } from './Footer.styled';

export const Footer = (): ReactElement => (
  <StyledFooter>
    <SocialIcons />
    <Image src={FooterLogoImage} alt={''} />
  </StyledFooter>
);
