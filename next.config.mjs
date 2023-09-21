/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    env:{
      SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
      SHOPIFY_STORE_DROMAIN: process.env.SHOPIFY_STORE_DROMAIN,
    },
    domains: ['cdn.sanity.io', 'tailwindui.com', 'cdn.shopify.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
    ],
  },
};

export default nextConfig;
