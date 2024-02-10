import type { NextPage } from 'next';
import Head from 'next/head';

import { StoryPage } from '@/components/StoryPage/StoryPage';
import { LAYOUT_VARIANTS } from '@/fables_library/library.types';
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
        layout={LAYOUT_VARIANTS.WILDCARD}
        wildcardsData={[
          {
            width: 5,
            height: 5,
            top: 10,
            left: 10,
          },
          {
            width: 5,
            height: 5,
            top: 20,
            left: 10,
          },
        ]}
        text={GOLDILOCKS_AND_THREE_BEARS.content[0].paragraphs}
        backgroundPicture={GOLDILOCKS_AND_THREE_BEARS.content[0].picture}
      />
    </main>
  </>
);
export default Home;
