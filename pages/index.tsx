import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '@/components/Header';
import BookCard from '@/components/BookCard';
import { GOLDILOCKS_AND_THREE_BEARS } from '@/fables_library/pl/library';
import { BOOKCARD_LAYOUT } from '@/components/BookCard/BookCard.types';
import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import { jumbotronData } from '@/components/Jumbotron/Jumbotron.data';
import TagElement from '@/components/TagElement';
import TagList from '@/components/TagList';


const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      content
    </main>
  </>
);
export default Home;
