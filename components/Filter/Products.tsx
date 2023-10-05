

'use client'
import Filter from "@/components/Filter/Filter";
import PriceHighLow from "@/components/Filter/priceHighLow";
import Breadcrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import { Icons } from "@/components/icons";
import SearchBar from "@/components/searchbar";
import Typography from "@/components/ui/typography";
import { useEffect, useState } from "react";
import MoneyRange from "./moneyRange";


export default function Products({products}: any) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    // const filteredProducts = filterProducts(products, null, false, false, null, null);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const [selectedFit, setSelectedFit] = useState<any>([{
        name: '',
        inStock: true
    }]);
    const [selectedPrice, setSelectedPrice] = useState([0, 1000]); // Initial min and max prices
    const [selectedColor, setSelectedColor] = useState({
        name: '',
        class: '',
        selectedClass: ''
    })
    const [priceHighLow, setPriceHighLow] = useState(false);
    const [priceLowHigh, setPriceLowHigh] = useState(false);

    useEffect(() => {
        const result = filterProducts(products, selectedColor, priceHighLow, priceLowHigh, selectedPrice, selectedFit);
        setFilteredProducts(result);
    }, [selectedColor, priceLowHigh, priceHighLow, selectedPrice, selectedFit]);


    const productArray = filteredProducts.length > 0 ? filteredProducts : products;

    return (
        <div>
            <div className="py-12">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-y-0">
                    <Breadcrumb pageTitle='/shop' />
                    <div className="flex flex-row">
                        <div onClick={() => setIsFilterVisible(!isFilterVisible)}>
                            <Typography variant='muted' className="text-[12px] sm:text-sm lg:text-lg text-[#121212] flex flex-row group hover:border-b-[1px] border-[#121212] hover:cursor-pointer">Filter <Icons.filter_2 className='ml-3 ' /> </Typography>
                        </div>

                        <MoneyRange
                            selectedPrice={selectedPrice}
                            setSelectedPrice={setSelectedPrice}
                        />

                        <PriceHighLow 
                        setPriceHighLow={setPriceHighLow} 
                        priceHighLow={priceHighLow}
                        setPriceLowHigh={setPriceLowHigh}
                        priceLowHigh={priceLowHigh}
                        />

                    </div>
                </div>
            </div>


            {isFilterVisible &&
                <Filter 
                    setSelectedPrice={setSelectedPrice}
                    selectPrice={selectedPrice}
                    setSelectedColor={setSelectedColor}
                    selectedColor={selectedColor}
                    setSelectedFit={setSelectedFit}
                    selectedFit={selectedFit}
                />
            }


          
            <SearchBar  className='lg:hidden mx-auto' />
            <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-40 my-12 md:my-12">
              {productArray.map((card: any, index: any) => ( 
                <>
                    <Card 
                        className=""
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
    )
}



function filterProducts(allProducts: any, color: any, lowHigh: boolean, highLow: boolean, priceRange: any, size: any) {
    return allProducts.filter((product : any) => {
        try {
            // Color filter
            const productColor = product?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Color")?.value;
            if (color.name && productColor !== color.name) return false;
    
            // Price range filter
            const productPrice = parseFloat(product?.node?.priceRange?.minVariantPrice?.amount || "0");
            if (priceRange && (productPrice < priceRange[0] || productPrice > priceRange[1])) return false;
    
            // Size filter
            const productSize = product?.node?.variants?.edges[0]?.node?.selectedOptions?.find((option : any) => option?.name === "Size")?.value;
            if (size.name && productSize !== size.name) return false;
    
            return true;
        }
        catch(error) {
            console.log('error', error)
        }
    })
    .sort((a : any, b : any) => {
        const aPrice = parseFloat(a?.node?.priceRange?.minVariantPrice?.amount || "0");
        const bPrice = parseFloat(b?.node?.priceRange?.minVariantPrice?.amount || "0");

        // Price sorting (low to high)
        if (lowHigh) return bPrice - aPrice;

        // Price sorting (high to low)
        if (highLow) return aPrice - bPrice;

        return 0; // No sorting
    });
}