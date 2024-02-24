import type { NextPage } from 'next';
import Head from 'next/head';

import { TemplateStoryPage } from '@/components/TemplateStoryPage';
import { GOLDILOCKS_AND_THREE_BEARS } from '@/fables_library/pl/library';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Złotowłosa | Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <TemplateStoryPage storyData={GOLDILOCKS_AND_THREE_BEARS} />
    </main>
  </>
);
export default Home;
