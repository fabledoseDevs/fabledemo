import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { TemplateLandingPage } from '@/components/TemplateLandingPage/TemplateLandingPage';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Header />
      <TemplateLandingPage />
      <Footer />
    </main>
  </>
);
export default Home;
