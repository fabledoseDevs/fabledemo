import type { NextPage } from 'next';
import Head from 'next/head';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import Header from '@/components/Header';
import BookCard from '@/components/BookCard';

import { GOLDILOCKS_AND_THREE_BEARS } from '@/fables_library/pl/library';
import { BOOKCARD_LAYOUT } from '@/components/BookCard/BookCard.types';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <BookCard
        bookCover={{
          src: GOLDILOCKS_AND_THREE_BEARS.info.thumb,
          alt: GOLDILOCKS_AND_THREE_BEARS.info.title,
          width: 636,
          height: 336
        }}
        layout={BOOKCARD_LAYOUT.IMAGE_LEFT}
        content={{
          author: GOLDILOCKS_AND_THREE_BEARS.info.author,
          bookTitle: GOLDILOCKS_AND_THREE_BEARS.info.title,
          bookExcerpt: GOLDILOCKS_AND_THREE_BEARS.info.excerpt,
          iconsBlock: {
            main: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
            details: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
          },
          ctaButton: {
            label: 'Czytaj Bajkę',
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            purpose: PURPOSE.FUNCTION_TRIGGER,
            onclickAction: () => console.info('ładowanie bajki...')
          }
        }}
      />
      <BookCard
        bookCover={{
          src: GOLDILOCKS_AND_THREE_BEARS.info.thumb,
          alt: GOLDILOCKS_AND_THREE_BEARS.info.title,
          width: 636,
          height: 336
        }}
        layout={BOOKCARD_LAYOUT.IMAGE_RIGHT}
        content={{
          author: GOLDILOCKS_AND_THREE_BEARS.info.author,
          bookTitle: GOLDILOCKS_AND_THREE_BEARS.info.title,
          bookExcerpt: GOLDILOCKS_AND_THREE_BEARS.info.excerpt,
          iconsBlock: {
            main: GOLDILOCKS_AND_THREE_BEARS.info.mainTags,
            details: GOLDILOCKS_AND_THREE_BEARS.info.detailedTags,
          },
          ctaButton: {
            label: 'Czytaj Bajkę',
            colorVariant: COLOR_VARIANTS.GREEN,
            fontVariant: FONT_VARIANTS.UPPERCASE,
            purpose: PURPOSE.FUNCTION_TRIGGER,
            onclickAction: () => console.info('ładowanie bajki...')
          }
        }}
      />
    </main>
  </>
);
export default Home;
