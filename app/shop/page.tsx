import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Filter from '../../components/Filter/Filter';
import Card from '@/components/card';
import Breadcrumb from '@/components/breadcrumb';
import { storefront } from '@/utils/shopify/storefront';
import { useMediaQuery } from '@/hook/media-query';
import { useState } from 'react';
import { Metadata } from 'next';
import { WEBSITE_HOST_URL } from '@/lib/constants';
import Products from '@/components/Filter/Products';
import Banner from './Banner';

// container prop defines max width of your container
// Typography is a component that defines the font size and weight



export default async function ServicesPage({params, searchParams, children} : any) {
  const {color, min, max, fit, collection} = searchParams;

  console.log('params', searchParams);
  
  let items = [];
  let products;
  try {
    products = await storefront({
      query: FILTER_PRODUCTS_QUERY,
      variables: { min: parseFloat(min), max: parseFloat(max), collection: collection || "filterable-collection", kleur: color || ""} // Convert to Float and Correct Variable Names
    });
  
    if (products.body && products.body.data && products?.body?.data?.collection?.products?.edges[0]?.node.priceRange) {
      items = products.body.data.collection?.products?.edges;
    } 
    else {
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
      <Banner />
      <div className="container">

      <Products products = {items} />        

      </div>
    </section>
  );
}

const FILTER_PRODUCTS_QUERY = `
query FilterProducts($min: Float, $max: Float, $collection: String, $kleur: String!) {
  collection(handle: $collection) {
    handle
    products(first: 10, filters: [
      { variantOption: { name: "color", value: $kleur } }
      { price: { min: $min, max: $max } },
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
            maxVariantPrice {
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