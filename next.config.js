/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'zh', 'id'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['macreat.com', 'your-cdn.vercel.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-railway-app.up.railway.app/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;