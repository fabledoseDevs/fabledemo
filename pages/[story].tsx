import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { TemplateStoryPage } from '@/components/TemplateStoryPage';
import { mapStory } from '@/lib/mappers';
import { GET_SLUGS, GET_STORY } from '@/lib/queries';
import type { Story } from '@/types/fairytale.types';

const isThisPreview =
  process.env.APP_ENVIRONMENT === 'production' ? false : true;

export const getStaticProps: GetStaticProps<{ story: Story | false }> = async ({
  params,
}) => {
  const { default: client } = await import('@/lib/apollo-client');
  const defaultQuery = await client.query({
    query: GET_STORY,
    variables: { preview: isThisPreview, slug: params && params.story },
  });

  const story = mapStory(defaultQuery.data.storyCollection.items[0]);

  if (!story) {
    return { notFound: true };
  }

  return {
    props: { story },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { default: client } = await import('@/lib/apollo-client');
  const defaultQuery = await client.query({
    query: GET_SLUGS,
    variables: { preview: isThisPreview },
  });

  const paths: string[] = defaultQuery.data.storyCollection.items.map(
    ({ slug }: { slug: string }) => `/${slug}`,
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

const MainStoryPage: NextPage<{ story: Story }> = ({ story }) => {
  const { asPath } = useRouter();
  const absoluteUrl = `https://www.fabledose.com${asPath?.split('?')?.[0]}`;

  return (
    <>
      <Head>
        <title>{story.info.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={story.info.synopsis} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Fabledose - ${story.info.title}`} />
        <meta property="og:description" content={story.info.synopsis} />
        <meta property="og:image" content={story.info.thumb} />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:site_name" content="Fabledose" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Fabledose - ${story.info.title}`}
        />
        <meta name="twitter:description" content={story.info.synopsis} />
        <meta name="twitter:image" content="/images/og-images/main-og.jpg" />
        <meta name="twitter:site" content="@fabledose" />
        <meta name="twitter:creator" content="@fabledose_creator" />
      </Head>
      <main>
        <TemplateStoryPage storyData={story} />
      </main>
    </>
  );
};

export default MainStoryPage;
