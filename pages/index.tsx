import type { NextPage } from 'next';
import Head from 'next/head';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import Header from '@/components/Header';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Header />
      <Button
        label="Click Me"
        colorVariant={COLOR_VARIANTS.WHITE}
        fontVariant={FONT_VARIANTS.STANDARD}
        purpose={PURPOSE.ANCHOR}
        anchorLink="https://google.pl"
      />
    </main>
  </>
);
export default Home;
