import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Filter from '../../../components/Filter/Filter';
import Card from '@/components/card';
import Breadcrumb from '@/components/breadcrumb';
import { storefront } from '@/utils/shopify/storefront';
import { useMediaQuery } from '@/hook/media-query';
import { WEBSITE_HOST_URL } from '@/lib/constants';
import { Metadata } from 'next';
import Products from '@/components/Filter/Products';
import Banner from '../Banner';

// container prop defines max width of your container
// Typography is a component that defines the font size and weight

type Params = {
  params: {
      slug: string
  }
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const slug = params.slug

  return {
    title: `Ontdek Welke Dames Sport ${params.slug} Voor Jou Zijn - GoGym`,
    description: `Ontdek diverse dames sport artikelen in onze winkel. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
    Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
    keywords: `Sport Artikelen, Vrouwen Sport Kleding, Dames ${params.slug}`,
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/shop/${slug}`
    },
    openGraph: {
      title: `Ontdek Welke Dames Sport ${params.slug} Voor Jou Zijn - GoGym`,
      description: `Ontdek diverse dames sport artikelen in onze winkel. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
      Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
      url:  `${WEBSITE_HOST_URL}/shop/${slug}`,
      locale: 'nl',
      siteName:  `Ontdek diverse dames sport artikelen in onze winkel. ✓ Longsleeves ✓ Tops ✓ Sport BH's ✓ Sportbroeken ✓ Shorts  
      Gratis verzending vanaf €30, gratis retourneren en kies zelf je bezorgmoment! `,
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
  }
}


export default async function ServicesPage({params, searchParams, children} : any) {
  
  console.log('params', params.categories)
  const {color, min, max, fit} = searchParams;
  let items = [];
  let products;
  try {

    if (!min && !max) {
        products = await storefront({query: TOPS_QUERY, variables: { handle: params.categories }});
    }
    else {
        products = await storefront({
          query: FILTER_PRODUCTS_QUERY,
          variables: { min: parseFloat(min), max: parseFloat(max), handle: params.categories } // Convert to Float and Correct Variable Names
        });
    }
  
    items = products.body.data.collection?.products?.edges;
  } catch (error) {
    console.log('error', error);
  }




  return (
    <section className='bg-white pb-40' >
      <Banner />
      <div className="container">
        <Products products = {items} />        
      </div>
    </section>
  );
}

const TOPS_QUERY = `
query AllProducts($handle: String) {
    collection(handle: $handle) {
      products(first: 30) {
        edges {
            node {
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 40) {  
                edges {
                  node {
                    title
                    selectedOptions {
                      name 
                      value 
                    }
                  }
                }
              }
              collections(first: 1) { 
                edges {
                  node {
                    title
                    handle
                  }
                }
              }
            }
        }
      }
    }
}
`


const FILTER_PRODUCTS_QUERY = `
query FilterProducts($min: Float, $max: Float, $handle: String) {
  collection(handle: $handle) {
    handle
    products(first: 10, filters: [{ price: { min: $min, max: $max } }, {
      variantOption: {
          name: "color",
          value: "black"
      }
    }
  ]) {
      edges {
        node {
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 40) {
            edges {
              node {
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
}
`;
