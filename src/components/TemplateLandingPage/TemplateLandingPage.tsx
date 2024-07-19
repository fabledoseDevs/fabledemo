import dynamic from 'next/dynamic';

import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
});
import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import { ProjectSummary } from '@/components/ProjectSummary';
import Separator from '@/components/Separator';
import StoryCard from '@/components/StoryCard';
import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import {
  CARD_GOLDILOCK,
  CARD_THREE_PIGGIES,
} from './TemplateLandingPage.consts';
import { useTranslations } from './TemplateLandingPage.translations';
import type { TemplateLandingPage as TemplateLandingPageType } from './TemplateLandingPage.types';

const cookieBannerCheckAndRender = (consentStatus: boolean) => {
  if (!consentStatus) {
    return <CookieBanner />;
  }
};

export const TemplateLandingPage: TemplateLandingPageType = () => {
  const { settings } = useSettingsContext();
  const { template, goldilock, pigs } = useTranslations();

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
