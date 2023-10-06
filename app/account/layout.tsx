'use client'
import { Suspense, useEffect, useState } from 'react';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import apolloClient from '@/utils/shopify/apolloClient';
import AccountMenu from '@/components/AccountMenu';
import { useParams, usePathname } from 'next/navigation';
import UserData from './userData';




export default function Layout({ children, params }: { children: React.ReactNode, params: any }) {
  const param = useParams()


  return (
    <Suspense>
      <div className="">
        <div className="sm:mx-auto container flex flex-row">
        <ApolloProvider client={apolloClient}>
          <UserData />
          {param?.slug !== 'login' && param?.slug !== 'registreer' && <AccountMenu />}
          <Suspense>{children}</Suspense>
        </ApolloProvider>
        </div>
      </div>
    </Suspense>
  );
}
