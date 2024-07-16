import Head from 'next/head';
import { useRouter } from 'next/router';

import type { MetaData as MetaDataType } from './MetaData.types';

export const MetaData: MetaDataType = ({
  description,
  ogDescription,
  ogImage,
  ogTitle,
  title,
}) => {
  const isProduction = process.env.APP_ENVIRONMENT === 'production';

  const pageIndex = isProduction ? 'index' : 'noindex';
  const pageFollow = isProduction ? 'follow' : 'nofolllow';

  const { asPath } = useRouter();
  const absoluteUrl = `https://www.fabledose.com${asPath?.split('?')?.[0]}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={`${pageIndex} ${pageFollow}`}
        key="robotsMeta"
      />
      <meta property="og:type" content="website" />
      <link key="canonical" rel="canonical" href={absoluteUrl} />
      {ogTitle && (
        <>
          <meta name="twitter:title" content={ogTitle} />
          <meta property="og:title" content={ogTitle} />
        </>
      )}
      {ogDescription && (
        <>
          <meta property="twitter:description" content={ogDescription} />
          <meta property="og:description" content={ogDescription} />
        </>
      )}
      {ogImage?.src && (
        <>
          <meta property="twitter:image" content={ogImage.src as string} />
          <meta property="og:image" content={ogImage.src as string} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fabledose" />
      <meta name="twitter:creator" content="@fabledose_creator" />
    </Head>
  );
};
