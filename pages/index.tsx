import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Jumbotron } from '@/components/Jumbotron/Jumbotron';
import { jumbotronData } from '@/components/Jumbotron/Jumbotron.data';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Header />
      <Jumbotron {...jumbotronData} />
      <Footer>{/* toDo: add SocialMediaBlock here */}</Footer>
    </main>
  </>
);
export default Home;
