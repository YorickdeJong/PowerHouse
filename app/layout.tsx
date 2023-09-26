import { ThemeProvider } from '@/context/theme-provider';
import TransitionProvider from '@/context/transition-provider';

import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import { siteConfig } from '@/config/site';
import { spaceGrotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import GoToTop from '@/components/goto-top';
import SiteHeader from '@/components/site-header';

import '@/styles/globals.css'; //import global css here --> styles/global.css
import ShoppingCart from '@/components/shoppingCart';
// import { ApolloProvider } from '@apollo/client';
// import apolloClient from '@/utils/shopify/apolloClient';


export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}


export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-white antialiased',
            spaceGrotesk.className
          )}
        >
            {/* <ApolloProvider client={apolloClient}> */}
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                  <div className="relative flex min-h-screen  flex-col">
                    <SiteHeader />
                    <ShoppingCart />
                    <div className="flex-1">
                      <TransitionProvider>{children}</TransitionProvider>
                    </div>
                    <Footer />
                  </div>
                  {/* <TailwindIndicator /> */}
                  <Toaster position="top-right" />
                  <GoToTop />
                </ThemeProvider>
            {/* </ApolloProvider> */}
        </body>
      </html>
    </>
  );
}
