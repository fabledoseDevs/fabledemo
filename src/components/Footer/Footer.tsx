import Link from 'next/link';

import Logo from '@/components/Logo';
import { COLOUR_VARIANT } from '@/components/Logo/Logo.types';
import SocialIcons from '@/components/SocialIcons';
import { FooterTranslations, useTranslation } from '@/translations';

import { Copyrights, StyledFooter } from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

const date = new Date();

export const Footer: FooterType = () => {
  const { mainCopyrights, copyrightsNote } = useTranslation(FooterTranslations);

  return (
    <StyledFooter>
      <SocialIcons />
      <br />
      <Logo colourVariant={COLOUR_VARIANT.GREEN} logoWidth={140} />
      <Copyrights>
        &#169; {date.getFullYear().toString()} {mainCopyrights}
        <br />
        {copyrightsNote}
        <br />
        <Link
          href="https://www.linkedin.com/in/pawel-modzelewski/"
          target="_blank"
          aria-label="LinkedIn Page"
        >
          Paweł Modzelewski
        </Link>
        {', '}
        <Link href="/" target="_blank" aria-label="LinkedIn Page">
          Edyta Petrzak
        </Link>
        {', '}
        <Link href="/" target="_blank" aria-label="LinkedIn Page">
          Arutiun Sargsyan
        </Link>
        {', '}
        <Link href="/" target="_blank" aria-label="LinkedIn Page">
          Jakub Flis
        </Link>
        {'.'}
      </Copyrights>
    </StyledFooter>
  );
};
