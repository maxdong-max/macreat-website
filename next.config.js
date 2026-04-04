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
  // API rewrites disabled - Railway backend may not be available
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://your-railway-app.up.railway.app/api/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;