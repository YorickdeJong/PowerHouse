'use client'

import { set } from "lodash";
import Typography from "../ui/typography";
import { Range } from 'react-range';
import { useEffect, useRef, useState } from "react";
import { Icons } from "../icons";




export default function MoneyRange({selectedPrice, setSelectedPrice} : any) {
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


    return (
        <div ref = {dropdownRef} className="">
            <div onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                <Typography variant = 'muted' className="text-[12px] sm:text-sm lg:text-lg text-[#121212] ml-8 md:ml-12 flex flex-row hover:border-b-[1px]">Selecteer Prijs 
                <Icons.arrowDown className='ml-1 md:ml-2 md:mt-2 lg:mt-1 h-4 mt-[2px] lg:h-5' />
                </Typography>
            </div>

            {isDropdownVisible && (
            <div className="absolute bg-white lg:ml-1  shadow px-8 justify-center items-center pl-12 py-4 z-[100]  mt-2 w-[250px] ml-[-50px]">
                <Range
                    step={1}
                    min={0}
                    max={1000}
                    values={selectedPrice}
                    onChange={(values) => setSelectedPrice(values)}
                    renderTrack={({ props, children }) => (
                    <div
                        className="my-6"
                        {...props}
                        style={{
                        ...props.style,
                        height: '2px',
                        width: '80%',
                        borderRadius: '4px',
                        marginLeft: 10,
                        backgroundColor: '#f3f3f3',
                        }}
                    >
                        {children}
                    </div>
                    )}
                    renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                        ...props.style,
                        height: '10px',
                        width: '10px',
                        backgroundColor: '#121212',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        }}
                    />
                    )}
                />
                <Typography variant = 'muted' className="block text-sm lg:text-sm font-medium text-gray-700 text-center mr-3">
                    €{selectedPrice[0]} - €{selectedPrice[1]}
                </Typography>
            </div>
            )}
    </div>
    )
}