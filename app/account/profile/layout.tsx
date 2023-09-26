'use client'
import { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/utils/shopify/apolloClient';
import AccountHeader from '@/components/accountHeader';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="">
        <div className="sm:mx-auto">
        <ApolloProvider client={apolloClient}>
          <Suspense>{children}</Suspense>
        </ApolloProvider>
        </div>
      </div>
    </Suspense>
  );
}
