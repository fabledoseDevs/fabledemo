import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { TemplateStoryPage } from '@/components/TemplateStoryPage';
import { GET_SLUGS, GET_STORY } from '@/lib/queries';
import { mapStory } from '@/libmappers';
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

const MainStoryPage: NextPage<{ story: Story }> = ({ story }) => (
  <>
    <Head>
      <title>{story.info.title}</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <TemplateStoryPage storyData={story} />
    </main>
  </>
);

export default MainStoryPage;
