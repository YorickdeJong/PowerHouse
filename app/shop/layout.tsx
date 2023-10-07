import { WEBSITE_HOST_URL } from '@/lib/constants';
import { Metadata } from 'next';
import Banner from './Banner';


export const metadata: Metadata = {
    title: 'Ontdek Welke Dames Sport Artikelen Voor Jou Zijn - GoGym',
    description: `Ontdek diverse dames sport artikelen in onze winkel. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
    Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
    keywords: "Sport Artikelen, Vrouwen Sport Kleding, Longsleeves, Tops, Sport BH's, Sportbroeken, Shorts",
    alternates: {
      canonical: WEBSITE_HOST_URL
    },
    openGraph: {
      title: 'Ontdek Welke Dames Sport Artikelen Voor Jou Zijn - GoGym',
      description: `Ontdek diverse dames sport artikelen in onze winkel. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
      Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
      url: WEBSITE_HOST_URL,
      locale: 'nl',
      siteName: 'Ontdek Welke Dames Sport Artikelen Voor Jou Zijn - GoGym',
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
  

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {' '}
      <section>
            <Banner />
            {children}
      </section>
    </>
  );
}
