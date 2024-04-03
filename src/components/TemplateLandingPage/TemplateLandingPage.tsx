import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import CookieBanner from '@/components/CookieBanner';
import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import { ProjectSummary } from '@/components/ProjectSummary';
import Separator from '@/components/Separator';
import StoryCard from '@/components/StoryCard';
import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import type { TemplateLandingPage as TemplateLandingPageType } from '@/components/TemplateLandingPage/TemplateLandingPage.types';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { GOLDILOCKS_AND_THREE_BEARS } from '@/fablesLibrary240100_GOLDILOCK/pl';

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
        button={{
          purpose: PURPOSE.ANCHOR,
          label: 'Dowiedz się więcej',
          anchorLink: '#content-start',
          colorVariant: COLOR_VARIANTS.GREEN,
          fontVariant: FONT_VARIANTS.UPPERCASE,
        }}
      />
      <div id="content-start" />
      <Separator type={'SMALL'} />
      <StoryCard
        bookCover={{
          src: GOLDILOCKS_AND_THREE_BEARS.info.thumb,
          alt: GOLDILOCKS_AND_THREE_BEARS.info.title,
          width: 640,
          height: 340,
        }}
        layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
        content={{
          bookTitle: GOLDILOCKS_AND_THREE_BEARS.info.title,
          author: GOLDILOCKS_AND_THREE_BEARS.info.author,
          ctaButton: {
            purpose: PURPOSE.ANCHOR,
            label: 'Czytaj',
            anchorLink: '/goldilocks',
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            isDisabled: false,
          },
          summary: GOLDILOCKS_AND_THREE_BEARS.info.summary,
          synopsis: GOLDILOCKS_AND_THREE_BEARS.info.synopsis,
          iconsBlock: {
            mainTags: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
            extraTags: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
          },
        }}
      />
      <Separator type={'SMALL'} />
      <ProjectSummary
        mainText={[
          'Jesteśmy grupą przyjaciół i profesjonalistów, których łączy wspólna pasja do baśni i opowiadań dla dzieci. Są wśród nas pedagodzy, nauczyciele przedszkolni i żłobkowi, programiści i artyści. Wszyscy kierujemy się przekonaniem, że czytanie dziecku bajek jest istotną częścią jego rozwoju. Mając to na uwadze, rozpoczęliśmy pracę nad stworzeniem magicznego portalu wypełnionego animowanymi książkami do czytania dla dzieci.',
          'Chcemy oferować klasyczne baśnie, które przetrwały próbę czasu, opowiedziane nie tylko słowem, ale też animowaną ilustracją. Każda historia została wybrana pod kątem głębi i znaczenia, mając na celu wydobycie tego, co w dziecięcej wyobraźni najlepsze. Możesz bezpiecznie zostawić nasze bajki dziecku do samodzielnego czytania. Lub czytać je z własną pociechą, na przykład, na dobranoc. Albo samemu zatopić się w nich i poczuć znowu dzieckiem. Opowieści te zostały zaprojektowane tak, aby urzekać i inspirować zarówno młodych, jak i starszych.',
          'Już wkrótce uruchomimy kampanię crowdfundingową! Zachęcamy Cię do wsparcia tego projektu. Bez twojego zaangażowania takie projekty jak ten — skupione wokół idei innej niż pieniądze — mają ograniczone szanse na zaistnienie. Dzięki Twojemu wsparciu możemy stworzyć interaktywną platformę, która zanurzy dzieci w magicznym świecie opowieści. Pozostań na bieżąco z dalszymi aktualizacjami. Uruchomimy naszą kampanię wcześniej, niż myślisz!',
        ]}
        supplementaryText={[
          'Zapraszamy Cię do zaangażowania w tę podróż. Śledź nas na profilach społecznościowych lub użyj poniższego formularza aby zapisać się do naszego newslettera. Pozostań w kontakcie i jako pierwszy dowiaduj się o postępie prac nad projektem. Razem możemy rozpalić iskrę wyobraźni w sercach dzieci i sprawić, że animowane baśnie do czytania będą inspirowały przyszłe pokolenia.',
          'Dziękujemy za przeczytanie tej wiadomości i rozważenie wsparcia. Do usłyszenia wkrótce!',
        ]}
      />
      <Separator type={'MEDIUM'} />
      {cookieBannerCheckAndRender(settings.cookieConsent)}
    </>
  );
};
