import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { storefront } from "@/utils/shopify/storefront";
import gql from "graphql-tag";


export default async function Seamless() {
    let items = []
    try {
        const products = await storefront({query})
        items = products.body.data.products.edges
    }
    catch(error) {
        console.log('error', error)
    }

    console.log('items', items[1]?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value)


    return (
        <section className="bg-white mb-20 lg:mb-0 lg:h-[1100px]">
            <div className="container pt-32">
                <Link href={'/shop'} >
                    <Button variant = 'outline' className="rounded-full py-2 md:text-md">
                            Bekijk Alles
                    </Button>
                </Link>
                <Typography variant = 'title' className="text-tertairy mt-4 lg:text-3xl">
                    GOGYM SEAMLESS COLLECTIE
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {items.map((card: any) => (
                            <Card 
                                className="box-shadow-2xl mb-4 md:mb-0"
                                title={card?.node?.title || ''}
                                text={card?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value || 'Body Fit'}
                                image={card?.node?.images?.edges[0]?.node?.url || ''}
                                price={card?.node?.priceRange?.minVariantPrice?.amount || ''}
                                kleuren={card?.node?.variants?.edges?.length || ''}
                            />    
                    ))}
                    
                </div>
            </div>
        </section>
    )
}





const query = `
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
          variants(first: 3) {  
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
        }
      }
    }
  }
`
