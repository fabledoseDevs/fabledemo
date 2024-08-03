import parse from 'html-react-parser';
import Image from 'next/image';
import React, { useState } from 'react';

import Legal from '@/components/Legal';
import ModalWindow from '@/components/ModalWindow';
import arrow from '@/img/arrow-right-green.png';
import socialMediaAvatar from '@/img/social-media-square.jpg';
import substackLogo from '@/img/Substack_logo.png';
import { SubstackButtonTranslations, useTranslation } from '@/translations';

import {
  ArrowImage,
  ContentWrapper,
  DetailsButton,
  LegalCheckbox,
  LegalParagraph,
  NewsletterForm,
  SideImage,
  SideImageWrapper,
  SubstackButtonBody,
  Title,
} from './SubstackButton.styled';
import type { SubstackButton as SubstackButtonType } from './SubstackButton.types';

export const SubstackButton: SubstackButtonType = () => {
  const {
    legalText,
    legalDetailsBtn,
    substackLink,
    ariaLabel,
    btnTitleNo,
    btnTitleOk,
    title,
    arrowAlt,
  } = useTranslation(SubstackButtonTranslations);
  const [legalOpen, setLegalOpen] = useState<boolean>(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterAccepted(event.target.checked);
  };

  const handleLegalOpen = () => {
    setLegalOpen(prevLegalOpen => !prevLegalOpen);
  };

  return (
    <>
      <NewsletterForm>
        <LegalCheckbox>
          <input type="checkbox" onChange={handleCheckboxChange} />
          <LegalParagraph>{parse(legalText)}</LegalParagraph>
        </LegalCheckbox>
        <DetailsButton onClick={handleLegalOpen}>
          {legalDetailsBtn}
        </DetailsButton>
        <SubstackButtonBody
          disabled={!newsletterAccepted}
          aria-label={ariaLabel}
          onClick={() => window.open(substackLink, '_blank')}
          title={newsletterAccepted ? btnTitleOk : btnTitleNo}
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
      </NewsletterForm>
      {legalOpen && (
        <ModalWindow exitFunction={handleLegalOpen}>
          <Legal />
        </ModalWindow>
      )}
    </>
  );
};
