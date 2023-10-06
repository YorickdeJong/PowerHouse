import Hero from './hero';
import NewCollection from './collections';
import { WEBSITE_HOST_URL } from '@/lib/constants';
import { Metadata } from 'next';
import HeroPage from './HeroPage';
import NewsLetter from './newsLetter';


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
      <HeroPage />
      {/* @ts-expect-error Server Component */}
      <NewCollection />
      
      <NewsLetter />      
      
      <Hero />
      {/* <Hero2 /> */}

    </section>
  );
}
