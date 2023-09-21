import PorductDetails from "@/components/ProductDetails";
import Reviews from "@/components/Reviews";
import ZoomImage from "@/components/ZoomImage";
import Breadcrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";




export default function ServicesPage() {



    return (
      <section className='mt-16 mx-auto md:ml-10 pb-40'>
        <div className="container">
            <div className="flex xl:flex-row flex-col">
               <div>
                    <ZoomImage images={images} items={items}/>
               </div>
               <div className="lg:ml-28">
                    <Breadcrumb pageTitle = 'Shop' />
                    <PorductDetails />
                </div>
            </div>

            <div className="mt-22">
                <Button variant = 'outline' className="rounded-full py-2 md:text-md">
                    Bekijk Alles
                </Button>
                <Typography variant = 'title' className="text-tertairy mt-4 lg:text-3xl">
                    Bekijk Vergelijkbare Producten
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {cards.map((card: any) => ( 
                        <Card 
                            className="box-shadow-2xl mb-4 md:mb-0"
                            title={card.title}
                            text={card.text}
                            image={card.image}
                            price={card.price}
                            kleuren={card.kleuren}
                        />    
                    
                    ))}
                    
                </div>
            </div>
        </div>

      </section>
    );
  }
  

  const items = 
    {
        title: 'Legacy Legging',
        text: 'Body Fit',
        image: '/assets/images/legging_1.png',
        price: '€29.99',
        kleuren: '2 kleuren'
    }



const images = [
    '/assets/images/legging_1.png',
    '/assets/images/sub_image_1.png',
    '/assets/images/sub_image_2.png',
    '/assets/images/sub_image_3.png',
    '/assets/images/sub_image_4.png',

]

const cards = [
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
