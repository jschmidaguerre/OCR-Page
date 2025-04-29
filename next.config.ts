import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export' as const,
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
