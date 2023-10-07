'use client'
import { useEffect, useRef, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { RadioGroup } from "@headlessui/react";
import { useMediaQuery } from "@/hook/media-query";
import { Icons } from "../icons";
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import MoneyRange from "./moneyRange";
import ColorSelect from "./colorSelect";
import FitSelect from "./fitSelect";
import Link from "next/link";
import CategoryFilter from "./categoryFilter";


const colors = [
    { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-200' },
    { name: 'gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'red', class: 'bg-red-500', selectedClass: 'ring-red-500' },
    { name: 'orange', class: 'bg-orange-400', selectedClass: 'ring-orange-400' },
    { name: 'blue', class: 'bg-blue-400', selectedClass: 'ring-blue-400' },
    { name: 'green', class: 'bg-green-600', selectedClass: 'ring-green-600' },
]


export default function Filter({setSelectedPrice, setSelectedColor, setSelectedFit, selectedColor, selectedFit, selectedPrice}: any) {
    const phone = useMediaQuery('(max-width: 768px)');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const transition={
        delay: 0.1,
        duration: 0.25,
        ease: [0.43, 0.13, 0.7, 0.99]
      }

    const slideIn = {
        hidden: { x: '-20%', opacity: 0 },
        visible: { x: '0%', opacity: 1 },
        exit: { x: '100%', opacity: 0 },
      };


    useEffect(() => {
        console.log('isFilterVisible', isFilterVisible);
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsFilterVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);


    
    return (
        <>
            { phone && (
                <div className="hover:opacity-60">
                    <button onClick={() => setIsFilterVisible(!isFilterVisible)} className="hover:size-110">
                        <Icons.filter 
                        className='my-2 absolute right-0 mr-8'
                        />
                    </button>
                </div>
                
            )}
        
            { (isFilterVisible || !phone) &&  

        <div ref={dropdownRef}>
         <motion.div
          
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={transition}
          variants={slideIn}
            className={`w-[450px] mb-20 absolute pb-10 shadow-b-1 px-10
                transform transition-transform duration-150 ease-in-out bg-white
                ${isFilterVisible && phone ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-row justify-between">
                    <Typography variant='title' className="text-dark">Filters</Typography>
                    
                </div>
                <div className="grid grid-cols-1 gap-8 md:gap-12 mt-2">


                        <CategoryFilter
                        />



                    <ColorSelect 
                        colors={colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />

                    <FitSelect
                        selectedFit={selectedFit}
                        setSelectedFit={setSelectedFit}
                    />

                </div>
            </motion.div>
            </div>
        }
        </>
    )
}

