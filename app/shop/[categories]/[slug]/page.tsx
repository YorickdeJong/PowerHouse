import PorductDetails from "@/components/productDetails/ProductDetails";
import Reviews from "@/components/reviews/Reviews";
import ZoomImage from "@/components/ZoomImage";
import Breadcrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gql from "graphql-tag";
import { storefront } from "@/utils/shopify/storefront";
import Link from "next/link";


export default async function ServicesPage({params} : any) {

    const handle = params.slug; // Get handle from URL
    let item = []
    try {
        const products = await storefront({
            query: productQuery,
            variables: { handle: handle }
        });
        item = products.body.data.product;
        console.log('products 222', item) 
    } 
    catch (error) {
        console.log('error', error);
    }

    let recommendedProducts = []

    try {
        const products = await storefront({
            query: RecommendedProducts,
        });
        recommendedProducts = products.body.data.products.edges;
    } 
    catch (error) {
        console.log('errors', error);
    }



    return (
      <section className='mt-16 mx-auto md:ml-10 pb-40'>
        <div className="container">
            <div className="flex xl:flex-row flex-col">
               <div>
                    <ZoomImage images={item?.images?.edges} />
               </div>
               <div className="lg:ml-28">
                    <Breadcrumb pageTitle = 'Shop' className='hidden md:inline-flex' />
                    <PorductDetails item = {item} productId = {item.id}/>
                </div>
            </div>

            <div className="mt-22">
                <div className="flex flex-row justify-between">
                    <Typography variant = 'title' className="text-tertairy  lg:text-3xl">
                        Bekijk Vergelijkbare Producten
                    </Typography>
                    <Link href='/shop'>
                        <Button variant = 'outline' className="rounded-full py-2 md:text-md">
                            Bekijk Alles
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {recommendedProducts.map((card: any) => ( 
                        <Card 
                            className="box-shadow-2xl mb-4 md:mb-0"
                            title={card?.node?.title || ''}
                            text={card?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value || 'Body Fit'}
                            image={card?.node?.images?.edges[0]?.node?.url || ''}
                            price={card?.node?.priceRange?.minVariantPrice?.amount || ''}
                            kleuren={card?.node?.variants?.edges || ''}
                            handle={card?.node?.handle || ''}
                            collections = {card?.node?.collections?.edges[0]?.node?.handle || ''}
                        />    
                    
                    ))}
                    
                </div>
            </div>
        </div>

      </section>
    );
  }
  


const productQuery = `
query ProductByHandle($handle: String!) {
    product(handle: $handle) {
        id
        title
        handle
        description
        priceRange {
            minVariantPrice {
                amount
            }
        }
        images(first: 6) {  
            edges {
                node {
                    url
                    altText
                }
            }
        }
        variants(first: 30) {  
            edges {
                node {
                    id
                    title
                    selectedOptions {
                        name 
                        value 
                    }
                                        image {
                        src
                        altText
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
`

const RecommendedProducts = `
query Products {
    products(first: 3) {
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
          variants(first: 30) {  
            edges {
              node {
                id
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
