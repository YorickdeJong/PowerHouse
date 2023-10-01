import dynamic from 'next/dynamic';
import Hero from './hero';
import NewCollection from './new_collection';
import NewArrivals from './NewArrivals';
import Hero2 from './hero2';
import Tops from './tops_collection';
import Shorts from './shorts_collection';
import { WEBSITE_HOST_URL } from '@/lib/constants';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'GoGym - Gespecialiseerd in dameskleding',
  description: `GoGym is gespecialiseerd in dames sportkleding. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
  Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
  keywords: "Vrouwen Sport Kleding, Longsleeves, Tops, Sport BH's, Sportbroeken, Shorts",
  alternates: {
    canonical: WEBSITE_HOST_URL
  },
  openGraph: {
    title: 'GoGym - Gespecialiseerd in dameskleding',
    description: `GoGym is gespecialiseerd in dames sportkleding. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
    Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
    url: WEBSITE_HOST_URL,
    locale: 'nl',
    siteName: 'GoGym - Gespecialiseerd in dameskleding',
    type: 'website',
    images: [{
      url: '/gogymlogo.svg'
    }],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/gogymlogo.svg',
  },
};


export default function IndexPage() {
  return (
    <section className="">
      <Hero2 />

      {/* @ts-expect-error Server Component */}
      <NewCollection />
      <Hero />
      {/* <Banner /> */}
      {/* @ts-expect-error Server Component */}
      <Tops />

      <NewArrivals />

      {/* @ts-expect-error Server Component */}
      <Shorts className="lg:mb-20"/>
    </section>
  );
}
