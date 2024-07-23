import Image from 'next/image';

import arrow from '@/img/arrow-right-green.png';
import socialMediaAvatar from '@/img/social-media-square.jpg';
import substackLogo from '@/img/Substack_logo.png';
import { SubstackButtonTranslations, useTranslation } from '@/translations';

import {
  ArrowImage,
  ContentWrapper,
  SideImage,
  SideImageWrapper,
  SubstackButtonBody,
  Title,
} from './SubstackButton.styled';
import type { SubstackButton as SubstackButtonType } from './SubstackButton.types';

export const SubstackButton: SubstackButtonType = () => {
  const { substackLink, ariaLabel, title, arrowAlt } = useTranslation(
    SubstackButtonTranslations,
  );
  return (
    <SubstackButtonBody
      href={substackLink}
      target="_blank"
      aria-label={ariaLabel}
    >
      <SideImageWrapper>
        <SideImage src={socialMediaAvatar} alt="Substack Blog" />
      </SideImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Image src={substackLogo} alt="Substack" />
      </ContentWrapper>
      <ArrowImage src={arrow} alt={arrowAlt} />
    </SubstackButtonBody>
  );
};
