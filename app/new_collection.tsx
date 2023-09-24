import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { storefront } from "@/utils/shopify/storefront";
import Link from "next/link";




export default async function NewCollection() {

    let items = []
    try {
        const products = await storefront({query})
        // console.log('products', products.body.data.products.edges[0].node.variants.edges)
        items = products.body.data.products.edges
    }
    catch(error) {
        console.log('error', error)
    }


    return (
        <section className="xl:h-[860px] mb-20 md:mb-28 xl:mb-0 mt-12 ">
            <div className="container pt-10 md:pt-0">
            <hr className="my-2 mb-4 border-none bg-dark/20 h-[1px] container"/>
            <div className="flex flex-row justify-between">
                    <Typography variant = 'title' className="text-tertairy mt-4 lg:text-3xl">
                        Nieuwe Collectie
                    </Typography>
                    <Link href={'/shop'} >
                        <Button variant = 'outline' className="rounded-full mt-4 py-2 md:text-md">
                                Bekijk Alles
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {items.slice(2,6).map((card: any) => (
                            <Card 
                                className="box-shadow-2xl mb-4 md:mb-0"
                                title={card?.node?.title || ''}
                                text={card?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value || 'Body Fit'}
                                image={card?.node?.images?.edges[0]?.node?.url || ''}
                                price={card?.node?.priceRange?.minVariantPrice?.amount || ''}
                                kleuren={card?.node?.variants?.edges || ''}
                                handle={card?.node?.handle || ''}
                            />    
                    ))}
                    
                </div>
            </div>
        </section>
    )
}



const query = `
query Products {
    products(first: 6) {
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
        }
      }
    }
  }
  `

