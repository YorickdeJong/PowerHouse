'use client'

import { useEffect, useRef, useState } from "react";
import Typography from "../ui/typography";
import { Icons } from "../icons";




export default function PriceHighLow({setPriceHighLow, priceHighLow, setPriceLowHigh, priceLowHigh}: any) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleHighToLow = () => {
        setPriceHighLow(true);
        setPriceLowHigh(false);
        setIsDropdownVisible(false);
    };

    const handleLowToHigh = () => {
        setPriceLowHigh(true);
        setPriceHighLow(false);
        setIsDropdownVisible(false);
    };


    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={() => setIsDropdownVisible(!isDropdownVisible)} >
                <Typography variant='muted' className="text-[12px] sm:text-sm lg:text-lg text-[#121212] ml-8 md:ml-12 flex flex-row hover:border-b-[1px] border-[#121212] hover:cursor-pointer">
                    {priceHighLow ? "Prijs Hoog - Laag" : priceLowHigh ? "Prijs Laag - Hoog" : "Sorteer Op"}
                    <Icons.arrowDown className='ml-1 lg:ml-2 md:mt-2 lg:mt-1 h-4 mt-1 lg:h-5' />
                </Typography>
            </div>
            {isDropdownVisible && (
                <div className="absolute top-full px-2 left-0 mt-2 w-48">
                    <div className="shadow bg-white " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="hover:bg-[#F5F5F5]">
                            <button 
                                className="block px-4 py-4 text-sm text-gray-700" 
                                role="menuitem"
                                onClick={handleHighToLow}
                            >
                                Prijs Hoog - Laag
                            </button>
                        </div>
                        <div className="hover:bg-[#F5F5F5]">
                            <button 
                                className="block px-4 py-4 text-sm text-gray-700" 
                                role="menuitem"
                                onClick={handleLowToHigh}
                            >
                                Prijs Laag - Hoog
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>           
    )
}