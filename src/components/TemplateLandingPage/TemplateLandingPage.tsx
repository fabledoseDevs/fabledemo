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
import type { TemplateLandingPage as TemplateLandingPageType } from './TemplateLandingPage.types';

const cookieBannerCheckAndRender = (consentStatus: boolean) => {
  if (!consentStatus) {
    return <CookieBanner />;
  }
};

export const TemplateLandingPage: TemplateLandingPageType = () => {
  const { settings } = useSettingsContext();
  return (
    <>
      <Jumbotron
        subtitle={'Fabledose'}
        header={{
          before: 'tutaj baśnie',
          after: ' do czytania',
        }}
        redLineText={'ożywają'}
      />
      <div id="content-start" />
      <Separator type={'SMALL'} />
      <StoryCard
        bookCover={{
          src: CARD_GOLDILOCK.thumb,
          alt: CARD_GOLDILOCK.title,
          width: 640,
          height: 340,
        }}
        layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
        content={{
          bookTitle: CARD_GOLDILOCK.title,
          ctaButton: {
            purpose: PURPOSE.ANCHOR,
            label: 'Czytaj',
            anchorLink: CARD_GOLDILOCK.url,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: false,
          },
          summary: CARD_GOLDILOCK.summary,
          synopsis: CARD_GOLDILOCK.synopsis,
          iconsBlock: {
            mainTags: CARD_GOLDILOCK.mainTags,
            extraTags: CARD_GOLDILOCK.detailedTags,
          },
        }}
      />
      <StoryCard
        bookCover={{
          src: CARD_THREE_PIGGIES.thumb,
          alt: CARD_THREE_PIGGIES.title,
          width: 640,
          height: 340,
        }}
        layout={CARD_THREE_PIGGIES.cardLayout}
        content={{
          bookTitle: CARD_THREE_PIGGIES.title,
          ctaButton: {
            purpose: PURPOSE.FUNCTION_TRIGGER,
            label: 'Dostępne wkrótce',
            anchorLink: CARD_THREE_PIGGIES.url,
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: true,
          },
          summary: CARD_THREE_PIGGIES.summary,
          synopsis: CARD_THREE_PIGGIES.synopsis,
          iconsBlock: {
            mainTags: CARD_THREE_PIGGIES.mainTags,
            extraTags: CARD_THREE_PIGGIES.detailedTags,
          },
        }}
      />
      <Separator type={'SMALL'} />
      <ProjectSummary
        mainText={[
          'Jesteśmy grupą przyjaciół i profesjonalistów, których łączy wspólna pasja do baśni i opowiadań dla dzieci. Są wśród nas pedagodzy, nauczyciele przedszkolni i żłobkowi, programiści i artyści. Wszyscy kierujemy się przekonaniem, że czytanie dziecku bajek jest istotną częścią jego rozwoju. Mając to na uwadze, rozpoczęliśmy pracę nad stworzeniem magicznego portalu wypełnionego animowanymi książkami do czytania dla dzieci.',
          'Chcemy oferować klasyczne baśnie, które przetrwały próbę czasu, opowiedziane nie tylko słowem, ale też animowaną ilustracją. Każda historia została wybrana pod kątem głębi i znaczenia, mając na celu wydobycie tego, co w dziecięcej wyobraźni najlepsze. Możesz bezpiecznie zostawić nasze bajki dziecku do samodzielnego czytania, lub czytać je z własną pociechą na dobranoc. Opowieści te zostały zaprojektowane tak, aby urzekać i inspirować zarówno młodych, jak i starszych.',
          'Już wkrótce uruchomimy kampanię crowdfundingową! Zachęcamy Cię do wsparcia tego projektu. Bez twojego zaangażowania takie projekty jak ten — skupione wokół idei innej niż pieniądze — mają ograniczone szanse na zaistnienie. Dzięki Twojemu wsparciu możemy stworzyć interaktywną platformę, która zanurzy dzieci w magicznym świecie opowieści. Pozostań na bieżąco z dalszymi aktualizacjami. Uruchomimy naszą kampanię wcześniej, niż myślisz!',
        ]}
        supplementaryText={[
          'Zapraszamy Cię do zaangażowania w tę podróż. Śledź nas na profilach społecznościowych lub użyj poniższego przycisku aby zapisać się do naszego newslettera. Pozostań w kontakcie i jako pierwszy dowiaduj się o postępie prac nad projektem. Razem możemy rozpalić iskrę wyobraźni w sercach dzieci i sprawić, że animowane baśnie do czytania będą inspirowały przyszłe pokolenia.',
          'Dziękujemy za zainteresowanie naszym projektem. Do usłyszenia wkrótce!',
        ]}
      />
      <Separator type={'MEDIUM'} />
      {cookieBannerCheckAndRender(settings.cookieConsent)}
    </>
  );
};
