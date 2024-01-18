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
    <main></main>
  </>
);
export default Home;
