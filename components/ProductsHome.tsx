'use client'
import { inter } from "@/lib/fonts";
import Typography from "./ui/typography";
import Card from "./card";
import { useEffect, useState } from "react";




export default function ProductsHome({items} : any){
    const [filteredProducts, setFilteredProducts] = useState(items);

    const [selectedItem, setSelectedItem] = useState('shorts');

    useEffect(() => {
        const result = filterProducts(items, selectedItem);
        console.log('result', result)
        setFilteredProducts(result);
    }, [selectedItem]);

    return (
        <div>
            <div className="flex items-center justify-center">
                  <div className="flex flex-row justify-between gap-10 mt-1">
                        <div onClick = {() => setSelectedItem('shorts')}>
                            <p  className={`${inter.className} text-[#605F5F] lg:text-lg hover:font-bold hover:cursor-pointer`}
                            style = {{borderBottom: selectedItem === 'shorts' ? '2px solid #ED795B' : '#605F5F', color: selectedItem === 'shorts' ? '#ED795B' : '#C4C4C4'}}
                            >
                                Shorts
                            </p>
                        </div>
                        <div onClick = {() => setSelectedItem('tops')}>
                            <p className={`${inter.className} text-[#605F5F] lg:text-lg hover:font-bold hover:cursor-pointer`}
                            style = {{borderBottom: selectedItem === 'tops' ? '2px solid #ED795B' : '#605F5F', color: selectedItem === 'tops' ? '#ED795B' : '#C4C4C4'}}
                            >   
                                Tops
                            </p>
                        </div>
                        <div onClick = {() => setSelectedItem('alles')}>
                          <p className={`${inter.className} text-[#605F5F] lg:text-lg hover:font-bold hover:cursor-pointer`}
                            style = {{borderBottom: selectedItem === 'alles' ? '2px solid #ED795B' : '#605F5F', color: selectedItem === 'alles' ? '#ED795B' : '#C4C4C4'}}
                          >
                              Alles
                          </p>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-12">
                    {filteredProducts.reverse().slice(0,6).map((card: any) => (
                            <Card 
                                className="box-shadow-2xl mb-4 md:mb-0"
                                title={card?.node?.title || ''}
                                text={card?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Style")?.value || 'Body Fit'}
                                image={card?.node?.images?.edges[0]?.node?.url || ''}
                                price={card?.node?.priceRange?.minVariantPrice?.amount || ''}
                                kleuren={card?.node?.variants?.edges || ''}
                                handle={card?.node?.handle || ''}
                                collections={card?.node?.collections?.edges[0]?.node?.handle || ''}
                            />    
                    ))}
                        
                </div>
        </div>
    )
}



function filterProducts(items : any, type : any){

    if (type === 'alles') {
        console.log('type', type)
        return items
    }
    else {
        console.log('type', type)
        return items.filter((product: any) => {
            // Check if any of the collections match the given type
            return product.node.collections.edges.some((collection: any) => {
                return collection.node.handle === type;
            });
        });
    }
} 