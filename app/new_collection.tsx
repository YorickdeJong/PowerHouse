import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";




export default function NewCollection() {
    return (
        <section className="h-[1100px]">
            <div className="container pt-32">
                <Link href={'/shop'} >
                    <Button variant = 'outline' className="rounded-full py-2 md:text-md">
                            Bekijk Alles
                    </Button>
                </Link>
                <Typography variant = 'title' className="text-tertairy mt-4 lg:text-3xl">
                    Nieuwe Collectie
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {items.map((card: any) => ( 
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
        </section>
    )
}



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