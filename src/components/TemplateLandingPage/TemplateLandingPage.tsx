import { track } from '@vercel/analytics';
import dynamic from 'next/dynamic';

import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
});
import type { Dispatch } from 'react';
import { useState } from 'react';

import CookiePolicy from '@/components/CookiePolicy';
import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import ModalWindow from '@/components/ModalWindow';
import { ProjectSummary } from '@/components/ProjectSummary';
import Separator from '@/components/Separator';
import StoryCard from '@/components/StoryCard';
import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import {
  JumbotronTranslations,
  StoryCardFishermanAndTheGoldfish,
  StoryCardGoldilocks,
  StoryCardThreeLittlePigs,
  TemplateLandingPageTranslations,
  useTranslation,
} from '@/translations';

import {
  CARD_GOLDFISH,
  CARD_GOLDILOCKS,
  CARD_THREE_PIGGIES,
} from './TemplateLandingPage.consts';
import type { TemplateLandingPage as TemplateLandingPageType } from './TemplateLandingPage.types';

const cookieBannerCheckAndRender = (
  consentStatus: boolean,
  policyModalHandler: Dispatch<boolean>,
) => {
  if (!consentStatus) {
    return <CookieBanner policyModalHandler={policyModalHandler} />;
  }
};

export const TemplateLandingPage: TemplateLandingPageType = () => {
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState<boolean>(false);
  const { settings } = useSettingsContext();
  const {
    title: goldilocksTitle,
    synopsis: goldilocksSynopsis,
    summary: goldilocksSummary,
    url: goldilocksUrl,
  } = useTranslation(StoryCardGoldilocks);
  const {
    title: pigsTitle,
    synopsis: pigsSynopsis,
    summary: pigsSummary,
    url: pigsUrl,
  } = useTranslation(StoryCardThreeLittlePigs);
  const {
    title: goldfishTitle,
    synopsis: goldfishSynopsis,
    summary: goldfishSummary,
    url: goldfishUrl,
  } = useTranslation(StoryCardFishermanAndTheGoldfish);
  const {
    subtitle: jumboSubtitle,
    before: jumboBefore,
    after: jumboAfter,
    redLineText: jumboRedLine,
  } = useTranslation(JumbotronTranslations);
  const {
    storyCardButtonLabel: { read, comingSoon },
    projectSummary: { mainText, supplementaryText },
  } = useTranslation(TemplateLandingPageTranslations);

  return (
    <>
      <Jumbotron
        subtitle={jumboSubtitle}
        header={{
          before: jumboBefore,
          after: jumboAfter,
        }}
        redLineText={jumboRedLine}
      />
      <div id="content-start" />
      <Separator type={'SMALL'} />
      <StoryCard
        bookCover={{
          src: CARD_GOLDILOCKS.thumb,
          alt: goldilocksTitle,
          width: 640,
          height: 340,
        }}
        layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
        content={{
          bookTitle: goldilocksTitle,
          ctaButton: {
            purpose: PURPOSE.ANCHOR,
            label: read,
            anchorLink: goldilocksUrl,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: false,
            onclickAction: () => track('Open story: Glodilocks'),
          },
          summary: goldilocksSummary,
          synopsis: goldilocksSynopsis,
          iconsBlock: {
            mainTags: CARD_GOLDILOCKS.mainTags,
            extraTags: CARD_GOLDILOCKS.detailedTags,
          },
        }}
      />
      <StoryCard
        bookCover={{
          src: CARD_THREE_PIGGIES.thumb,
          alt: pigsTitle,
          width: 640,
          height: 340,
        }}
        layout={CARD_THREE_PIGGIES.cardLayout}
        content={{
          bookTitle: pigsTitle,
          ctaButton: {
            purpose: PURPOSE.ANCHOR,
            label: read,
            anchorLink: pigsUrl,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: false,
            onclickAction: () => track('Open story: Three Little Pigs'),
          },
          summary: pigsSummary,
          synopsis: pigsSynopsis,
          iconsBlock: {
            mainTags: CARD_THREE_PIGGIES.mainTags,
            extraTags: CARD_THREE_PIGGIES.detailedTags,
          },
        }}
      />
      <StoryCard
        bookCover={{
          src: CARD_GOLDFISH.thumb,
          alt: goldfishTitle,
          width: 640,
          height: 340,
        }}
        layout={CARD_GOLDFISH.cardLayout}
        content={{
          bookTitle: goldfishTitle,
          ctaButton: {
            purpose: PURPOSE.FUNCTION_TRIGGER,
            label: comingSoon,
            anchorLink: goldfishUrl,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: true,
            onclickAction: () => track('Open story: Goldfish'),
          },
          summary: goldfishSummary,
          synopsis: goldfishSynopsis,
          iconsBlock: {
            mainTags: CARD_GOLDFISH.mainTags,
            extraTags: CARD_GOLDFISH.detailedTags,
          },
        }}
      />
      <Separator type={'SMALL'} />
      <ProjectSummary
        mainText={mainText}
        supplementaryText={supplementaryText}
      />
      <Separator type={'MEDIUM'} />
      {cookieBannerCheckAndRender(settings.cookieConsent, setCookiePolicyOpen)}
      {cookiePolicyOpen && (
        <ModalWindow exitFunction={setCookiePolicyOpen}>
          <CookiePolicy />
        </ModalWindow>
      )}
    </>
  );
};
