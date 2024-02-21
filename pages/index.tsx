import type { NextPage } from 'next';
import Head from 'next/head';

import StoryPage from '@/components/StoryPage';
import { GOLDILOCKS_AND_THREE_BEARS } from '@/fables_library/pl/library';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <StoryPage
        layout={GOLDILOCKS_AND_THREE_BEARS.content[0].layout}
        wildcardsData={GOLDILOCKS_AND_THREE_BEARS.content[0].wildcardsData}
        text={GOLDILOCKS_AND_THREE_BEARS.content[0].paragraphs}
        backgroundPicture={GOLDILOCKS_AND_THREE_BEARS.content[0].picture}
      />
    </main>
  </>
);
export default Home;
