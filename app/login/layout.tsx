'use client'
import { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/utils/shopify/apolloClient';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <ApolloProvider client={apolloClient}>
          <Suspense>{children}</Suspense>
        </ApolloProvider>
        </div>
      </div>
    </Suspense>
  );
}
