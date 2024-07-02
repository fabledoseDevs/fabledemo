// eslint-disable-next-line tsdoc/syntax
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ENVIRONMENT: process.env.APP_ENVIRONMENT,
    NEWSLETTER_SUBMISSION_KEY: process.env.NEWSLETTER_SUBMISSION_KEY,
    NEWSLETTER_CAPTCHA_ID: process.env.NEWSLETTER_CAPTCHA_ID,
    SPACE_ID: process.env.SPACE_ID,
    PREVIEW_TOKEN: process.env.PREVIEW_TOKEN,
    DELIVERY_TOKEN: process.env.DELIVERY_TOKEN,
  },
  images: { domains: ['images.ctfassets.net'] },
  webpack: config => {
    config.module.rules.push({
      test: /\.(webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
