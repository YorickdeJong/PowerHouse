import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Filter from '../../components/Filter/Filter';
import Card from '@/components/card';
import Breadcrumb from '@/components/breadcrumb';
import { storefront } from '@/utils/shopify/storefront';
import { useMediaQuery } from '@/hook/media-query';
import { useState } from 'react';

// container prop defines max width of your container
// Typography is a component that defines the font size and weight

export default async function ServicesPage({params, searchParams, children} : any) {
  const {color, min, max, fit} = searchParams;

  console.log('params', searchParams);
  
  let items = [];
  let products;
  try {
    products = await storefront({
      query: FILTER_PRODUCTS_QUERY,
      variables: { min: parseFloat(min), max: parseFloat(max) } // Convert to Float and Correct Variable Names
    });
  
  
    if (products.body && products.body.data && products?.body?.data?.collection?.products?.edges[0]?.node.priceRange) {
      items = products.body.data.collection?.products?.edges;
    } else {
      products = await storefront({
        query: query
      });
      items = products.body.data.products.edges;
      console.error('Products not available');
    }
  } catch (error) {
    console.log('error', error);
    console.log('products 222', products?.body?.errors);
  }

  return (
    <section className='bg-white pb-40' >
      <div className="container">
        
        <div className='flex md:flex-row flex-col'>
          <div className="">
            <Filter categories=''/>
          </div>
          <div className='md:ml-[400px] mt-2 md:mt-12'>
            <Breadcrumb pageTitle = 'Shop' />

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-8 mt-10 md:mt-2">
              {items.map((card: any, index: any) => ( 
                <>
                  {index !==0 && <hr className="my-2 mb-4 border-none bg-dark/10 h-[1px] sm:hidden"/>}
                    <Card 
                        className="box-shadow-2xl mb-4 md:mb-0 md:mt-12"
                        title={card?.node?.title || ''}
                        text={card?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value || 'Body Fit'}
                        image={card?.node?.images?.edges[0]?.node?.url || ''}
                        price={card?.node?.priceRange?.minVariantPrice?.amount || ''}
                        kleuren={card?.node?.variants?.edges || ''}
                        handle={card?.node?.handle || ''}
                        collections = {card?.node?.collections?.edges[0]?.node?.handle || ''}
                    />    
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const FILTER_PRODUCTS_QUERY = `
query FilterProducts($min: Float, $max: Float) {
  collection(handle: "filterable-collection") {
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
`;


const query = `
query Products {
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
`