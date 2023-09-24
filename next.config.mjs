import withFonts from "next-fonts";



const fonts = withFonts({webpack(config, options) {
  config.node = {
    fs: 'empty',
  };
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      options.defaultLoaders.babel,
      {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
      {
        loader: 'file-loader',
      },
    ],
  })
  return config;
}
})



/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
    SHOPIFY_STORE_DROMAIN: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  },
  images: {
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
  fonts
};

export default nextConfig;
