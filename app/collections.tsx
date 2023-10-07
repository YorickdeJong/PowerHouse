import ProductsHome from "@/components/ProductsHome";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { inter } from "@/lib/fonts";
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
        <section className="my-12 ">
            <div className="max-w-[1400px] mx-auto pt-10 md:pt-0">
              <ProductsHome items={items} />
            </div>
        </section>
    )
}



const query = `
query Products {
    products(first: 20) {
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
          collections(first: 10) { 
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

