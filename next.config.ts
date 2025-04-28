import createNextIntlPlugin from 'next-intl/plugin'; // asegurate que sea .js si usás MJS
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export' as const,
  images: {
    unoptimized: true
  },
  basePath: '/OCR-Page',
  assetPrefix: '/OCR-Page'
};
 
export default withNextIntl(nextConfig);
