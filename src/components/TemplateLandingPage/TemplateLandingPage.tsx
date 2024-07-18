import dynamic from 'next/dynamic';

import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
});
import { useEffect, useState } from 'react';

import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import { ProjectSummary } from '@/components/ProjectSummary';
import Separator from '@/components/Separator';
import StoryCard from '@/components/StoryCard';
import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import {
  StoryCardGoldilockEN,
  StoryCardGoldilockPL,
  StoryCardThreeLittlePigsEN,
  StoryCardThreeLittlePigsPL,
  TemplateLandingPageEN,
  TemplateLandingPagePL,
} from '@/translation';

import {
  CARD_GOLDILOCK,
  CARD_THREE_PIGGIES,
} from './TemplateLandingPage.consts';
import type {
  ActiveTranslation as ActiveTranslationType,
  TemplateLandingPage as TemplateLandingPageType,
} from './TemplateLandingPage.types';

const cookieBannerCheckAndRender = (consentStatus: boolean) => {
  if (!consentStatus) {
    return <CookieBanner />;
  }
};

const translations = {
  en: {
    template: TemplateLandingPageEN,
    goldilock: StoryCardGoldilockEN,
    pigs: StoryCardThreeLittlePigsEN,
  },
  pl: {
    template: TemplateLandingPagePL,
    goldilock: StoryCardGoldilockPL,
    pigs: StoryCardThreeLittlePigsPL,
  },
};

export const TemplateLandingPage: TemplateLandingPageType = () => {
  const { settings } = useSettingsContext();
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] =
    useState<ActiveTranslationType>(translations.en);

  useEffect(() => {
    setActiveTranslations(translations[languageInfo] || translations.en);
  }, [languageInfo]);

  const { template, goldilock, pigs } = activeTranslations;

  return (
    <>
      <Jumbotron
        subtitle={template.jumbotron.subtitle}
        header={{
          before: template.jumbotron.before,
          after: template.jumbotron.after,
        }}
        redLineText={template.jumbotron.redLineText}
      />
      <div id="content-start" />
      <Separator type={'SMALL'} />
      <StoryCard
        bookCover={{
          src: CARD_GOLDILOCK.thumb,
          alt: goldilock.title,
          width: 640,
          height: 340,
        }}
        layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
        content={{
          bookTitle: goldilock.title,
          ctaButton: {
            purpose: PURPOSE.ANCHOR,
            label: template.storyCardButtonLabel.read,
            anchorLink: goldilock.url,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: false,
          },
          summary: goldilock.summary,
          synopsis: goldilock.synopsis,
          iconsBlock: {
            mainTags: CARD_GOLDILOCK.mainTags,
            extraTags: CARD_GOLDILOCK.detailedTags,
          },
        }}
      />
      <StoryCard
        bookCover={{
          src: CARD_THREE_PIGGIES.thumb,
          alt: pigs.title,
          width: 640,
          height: 340,
        }}
        layout={CARD_THREE_PIGGIES.cardLayout}
        content={{
          bookTitle: pigs.title,
          ctaButton: {
            purpose: PURPOSE.FUNCTION_TRIGGER,
            label: template.storyCardButtonLabel.comingSoon,
            anchorLink: pigs.url,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: true,
          },
          summary: pigs.summary,
          synopsis: pigs.synopsis,
          iconsBlock: {
            mainTags: CARD_THREE_PIGGIES.mainTags,
            extraTags: CARD_THREE_PIGGIES.detailedTags,
          },
        }}
      />
      <Separator type={'SMALL'} />
      <ProjectSummary
        mainText={template.projectSummary.mainText}
        supplementaryText={template.projectSummary.supplementaryText}
      />
      <Separator type={'MEDIUM'} />
      {cookieBannerCheckAndRender(settings.cookieConsent)}
    </>
  );
};
