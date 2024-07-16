import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '@/components/Footer';
import { TemplateLandingPage } from '@/components/TemplateLandingPage/TemplateLandingPage';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabledose - Świat Animowanych Bajek do Czytania</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Zanurz się w magicznym świecie Fabledose, gdzie klasyczne baśnie ożywają podczas czytania dzięki urokliwym animacjom. Nasze bajki są idealną pozycją dla dzieci i dorosłych o młodym sercu!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Fabledose - Świat Animowanych Bajek do Czytania"
      />
      <meta
        property="og:description"
        content="Zanurz się w magicznym świecie Fabledose, gdzie klasyczne baśnie ożywają podczas czytania dzięki urokliwym animacjom. Nasze bajki są idealną pozycją dla dzieci i dorosłych o młodym sercu!"
      />
      <meta property="og:image" content="/images/og-images/main-og.jpg" />
      <meta property="og:url" content="https://www.fabledose.com" />
      <meta property="og:site_name" content="Fabledose" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Fabledose - Świat Animowanych Bajek do Czytania"
      />
      <meta
        name="twitter:description"
        content="Zanurz się w magicznym świecie Fabledose, gdzie klasyczne baśnie ożywają podczas czytania dzięki urokliwym animacjom. Nasze bajki są idealną pozycją dla dzieci i dorosłych o młodym sercu!"
      />
      <meta name="twitter:image" content="/images/og-images/main-og.jpg" />
      <meta name="twitter:site" content="@fabledose" />
      <meta name="twitter:creator" content="@fabledose_creator" />
      <meta
        name="keywords"
        content="baśnie, bajki, animowane historyjki, czytanki dla dzieci, dzieci, opowieści na dobranoc, animacje"
      />
      <meta name="author" content="Fabledose Team" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.fabledose.com" />
    </Head>
    <main>
      <TemplateLandingPage />
      <Footer />
    </main>
  </>
);

export default Home;
