import type { NextPage } from 'next';
import Head from 'next/head';

import { GOLDILOCKS_AND_THREE_BEARS } from '@/fables_library/pl/library';

import { BookSummary } from '../src/components/BookSummary/BookSummary';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Fabeldose | DEMO</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <BookSummary
        revertLayout={false}
        author={GOLDILOCKS_AND_THREE_BEARS.info.author}
        picturesAuthor={GOLDILOCKS_AND_THREE_BEARS.info.pictures}
        translation={GOLDILOCKS_AND_THREE_BEARS.info.translation}
        bookTitle={GOLDILOCKS_AND_THREE_BEARS.info.title}
        bookSummary={GOLDILOCKS_AND_THREE_BEARS.info.summary}
        bookCover={GOLDILOCKS_AND_THREE_BEARS.info.cover}
        coverDecor={GOLDILOCKS_AND_THREE_BEARS.info.summaryDecor}
        iconsBlock={{
          mainTags: [
            {
              tagName: 'Test Genre',
              tagDescription: 'Lorem ipsum.',
              icon: {
                src: 'images/icon-tag-placeholder-01.svg',
                alt: 'Test Tag Icon',
              },
            },
            {
              tagName: 'Test Age',
              tagDescription: 'Lorem ipsum.',
              icon: {
                src: 'images/icon-tag-placeholder-02.svg',
                alt: 'Test Tag Icon',
              },
            },
          ],
          extraTags: [
            {
              tagName: 'Test Extra',
              tagDescription: 'Lorem ipsum.',
              icon: {
                src: 'images/icon-tag-placeholder-01.svg',
                alt: 'Test Tag Icon',
              },
            },
            {
              tagName: 'Test Extra',
              tagDescription: 'Lorem ipsum.',
              icon: {
                src: 'images/icon-tag-placeholder-01.svg',
                alt: 'Test Tag Icon',
              },
            },
            {
              tagName: 'Test Extra',
              tagDescription: 'Lorem ipsum.',
              icon: {
                src: 'images/icon-tag-placeholder-01.svg',
                alt: 'Test Tag Icon',
              },
            },
          ],
        }}
      />
    </main>
  </>
);
export default Home;
