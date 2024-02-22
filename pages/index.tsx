import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import { ProjectSummary } from '@/components/ProjectSummary';
import Separator from '@/components/Separator';
import StoryCard from '@/components/StoryCard';
import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';
import StorySummary from '@/components/StorySummary';
import { GOLDILOCKS_AND_THREE_BEARS } from '@/fables_library/pl/library';

import coverOne from '../public/images/fairytale-thumb-placeholder-01.png';
import coverTwo from '../public/images/fairytale-thumb-placeholder-02.png';
import coverThree from '../public/images/fairytale-thumb-placeholder-03.png';

const Home: NextPage = () => {
  const [isPortalActive, setPortalActive] = useState<boolean>(true);

  const portalHandler = () => {
    setPortalActive(true);
  };

  return (
    <>
      <Head>
        <title>Fabeldose | DEMO</title>
        <meta name="description" content="Let's make magic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
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
            src: coverOne,
            alt: 'Złotowłosa',
            width: 640,
            height: 340,
          }}
          layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
          content={{
            bookTitle: GOLDILOCKS_AND_THREE_BEARS.info.title,
            author: GOLDILOCKS_AND_THREE_BEARS.info.author,
            ctaButton: {
              purpose: PURPOSE.FUNCTION_TRIGGER,
              label: 'Dowiedz się więcej',
              anchorLink: '#content-start',
              colorVariant: COLOR_VARIANTS.GREEN,
              fontVariant: FONT_VARIANTS.UPPERCASE,
              isDisabled: false,
              onclickAction: portalHandler,
            },
            bookExcerpt: GOLDILOCKS_AND_THREE_BEARS.info.excerpt,
            iconsBlock: {
              mainTags: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
              extraTags: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
            },
          }}
        />
        <StoryCard
          bookCover={{
            src: coverThree,
            alt: 'Złotowłosa',
            width: 640,
            height: 340,
          }}
          layout={BOOKCARD_LAYOUT.IMAGE_RIGHT}
          content={{
            bookTitle: 'Calineczka',
            author: ['Hans Christian Andersen'],
            ctaButton: {
              purpose: PURPOSE.ANCHOR,
              label: 'Dowiedz się więcej',
              anchorLink: '#content-start',
              colorVariant: COLOR_VARIANTS.GREEN,
              fontVariant: FONT_VARIANTS.UPPERCASE,
              isDisabled: true,
            },
            bookExcerpt:
              'Baśń o maleńkiej (nie większej od ludzkiego kciuka) dziewczynce, narodzonej z ziarna zasianego przez bezdzietną kobietę i jej przygodach, które sprawiły, że stała się wróżką.',
            iconsBlock: {
              mainTags: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
              extraTags: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
            },
          }}
        />
        <StoryCard
          bookCover={{
            src: coverTwo,
            alt: 'Złotowłosa',
            width: 640,
            height: 340,
          }}
          layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
          content={{
            bookTitle: 'Trzy świnki',
            author: GOLDILOCKS_AND_THREE_BEARS.info.author,
            ctaButton: {
              purpose: PURPOSE.ANCHOR,
              label: 'Dowiedz się więcej',
              anchorLink: '#content-start',
              colorVariant: COLOR_VARIANTS.GREEN,
              fontVariant: FONT_VARIANTS.UPPERCASE,
              isDisabled: true,
            },
            bookExcerpt:
              'Trzy małe świnki były rodzeństwem, które przemierzały świat, szukając miejsca do zbudowania domu. W końcu świnki znalazły dla siebie odpowiednie miejsce. Każda postanowiła zbudować dom dla siebie. Jedna zbudowała go ze słomy, druga z drewna, a trzecia – najbardziej pracowita – z cegieł. ',
            iconsBlock: {
              mainTags: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
              extraTags: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
            },
          }}
        />
        <Separator type={'SMALL'} />
        <ProjectSummary
          mainText={[
            'Jesteśmy grupą przyjaciół, osób i profesjonalistów, których łączy wspólna pasja do baśni i opowiadań dla dzieci. Są wśród nas doradcy ds. dzieci, nauczyciele w przedszkolach, programiści i artyści, a wszyscy kierujemy się przekonaniem, że opowiadanie historii jest istotną częścią rozwoju dziecka. Mając to na uwadze, rozpoczęliśmy misję stworzenia magicznego portalu wypełnionego animowanymi książkami do czytania.',
            'Naszą wizją jest oferowanie klasycznych baśni, które przetrwały próbę czasu, wraz z zapierającymi dech w piersiach animowanymi ilustracjami. Każda historia została starannie wybrana pod kątem jej głębi i znaczenia, mając na celu wydobycie tego, co najlepsze w dziecięcej wyobraźni i wartościach. Niezależnie od tego, czy lubisz je czytać solo, czy też cenisz jako opowieści na dobranoc dzielone z małym dzieckiem, opowieści te zostały zaprojektowane tak, aby urzekać i inspirować zarówno młodych, jak i starszych.',
            'Z radością ogłaszamy nadchodzącą kampanię crowdfundingową! To dla Ciebie szansa, aby stać się częścią naszej podróży i pomóc nam w realizacji tego czarującego projektu. Dzięki Twojemu wsparciu możemy ulepszyć opowiadanie historii i stworzyć interaktywną platformę, która zanurzy dzieci w magii tych ukochanych opowieści. Bądź na bieżąco z dalszymi aktualizacjami, ponieważ uruchomimy naszą kampanię wcześniej, niż myślisz!',
          ]}
          supplementaryText={[
            'Zapraszamy Cię do przeżycia tej niesamowitej przygody. Śledź nas na naszych profilach w mediach społecznościowych, aby pozostać w kontakcie i jako pierwszy dowiedzieć się o rozpoczęciu naszej kampanii crowdfundingowej, ekskluzywnych nagrodach i aktualizacjach projektu. Razem możemy rozpalić iskrę wyobraźni w sercach dzieci i sprawić, że cud baśni będzie nadal inspirował przyszłe pokolenia.',
            'Dziękujemy za wsparcie i wyruszmy razem w tę podróż!',
          ]}
        />
        <Separator type={'MEDIUM'} />
        <Footer />
      </main>
      {isPortalActive &&
        createPortal(
          <StorySummary
            revertLayout={false}
            author={GOLDILOCKS_AND_THREE_BEARS.info.author}
            picturesAuthor={GOLDILOCKS_AND_THREE_BEARS.info.pictures}
            bookCover={GOLDILOCKS_AND_THREE_BEARS.info.cover}
            bookTitle={GOLDILOCKS_AND_THREE_BEARS.info.title}
            bookSummary={GOLDILOCKS_AND_THREE_BEARS.info.summary}
            iconsBlock={{
              mainTags: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
              extraTags: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
            }}
            ctaButton={{
              purpose: PURPOSE.FUNCTION_TRIGGER,
              label: 'Dowiedz się więcej',
              anchorLink: '#content-start',
              colorVariant: COLOR_VARIANTS.GREEN,
              fontVariant: FONT_VARIANTS.UPPERCASE,
              isDisabled: false,
              onclickAction: portalHandler,
            }}
          />,
          document.body,
        )}
    </>
  );
};
export default Home;
