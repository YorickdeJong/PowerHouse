import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN, // Ensure this is correct and server is running
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN || '',
  },
});

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;
