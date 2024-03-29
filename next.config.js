// eslint-disable-next-line tsdoc/syntax
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEWSLETTER_SUBMISSION_KEY: process.env.NEWSLETTER_SUBMISSION_KEY,
    NEWSLETTER_CAPTCHA_ID: process.env.NEWSLETTER_CAPTCHA_ID,
  },

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
