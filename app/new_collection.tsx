import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { storefront } from "@/utils/shopify/storefront";
import Link from "next/link";




export default async function NewCollection() {

    let items = []
    try {
        const products = await storefront({query})
        items = products.body.data.products.edges
    }
    catch(error) {
        console.log('error', error)
    }


    return (
        <section className="xl:h-[1100px] mb-28 xl:mb-0">
            <div className="container pt-10 md:pt-36">
                <Link href={'/shop'} >
                    <Button variant = 'outline' className="rounded-full py-2 md:text-md">
                            Bekijk Alles
                    </Button>
                </Link>
                <Typography variant = 'title' className="text-tertairy mt-4 lg:text-3xl">
                    Nieuwe Collectie
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {items.map((card: any) => (
                            <Card 
                                className="box-shadow-2xl mb-4 md:mb-0"
                                title={card?.node?.title || ''}
                                text={card?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value || 'Body Fit'}
                                image={card?.node?.images?.edges[0]?.node?.url || ''}
                                price={card?.node?.priceRange?.minVariantPrice?.amount || ''}
                                kleuren={card?.node?.variants?.edges?.length || ''}
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
    products(first: 4) {
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



const items = [
    {
        title: 'Legacy Legging',
        text: 'Body Fit',
        image: '/assets/images/legging_1.png',
        price: '€29.99',
        kleuren: '2'
    },
    {
        title: 'Legacy Legging',
        text: 'Body Fit',
        image: '/assets/images/legging_2.png',
        price: '€29.99',
        kleuren: '2'
    },
    {
        title: 'Legacy Legging',
        text: 'Body Fit',
        image: '/assets/images/legging_3.png',
        price: '€29.99',
        kleuren: '2'
    }
]