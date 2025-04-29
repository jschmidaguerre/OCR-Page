import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  basePath: '/OCR-Page',
  assetPrefix: '/OCR-Page',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  }
};

export default withNextIntl(nextConfig);
