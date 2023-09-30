'use client'
import { useEffect, useState } from "react";
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
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-200' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'Black', class: 'bg-green-600', selectedClass: 'ring-green-600' },
    { name: 'Black', class: 'bg-red-500', selectedClass: 'ring-red-500' },
    { name: 'Black', class: 'bg-orange-400', selectedClass: 'ring-orange-400' },
]


export default function Filter({categories}: any) {
    const [paddingTop, setPaddingTop] = useState('pt-12');
    const phone = useMediaQuery('(max-width: 768px)');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState({
        name: '',
        class: '',
        selectedClass: ''
    })
    const [selectedCollection, setSelectedCollection] = useState();
    // State to hold the selected minimum and maximum prices
    const [selectedPrice, setSelectedPrice] = useState([0, 150]); // Initial min and max prices

    const [selectedFit, setSelectedFit] = useState<any>([{
        name: '',
        inStock: true
    }]);
  

    console.log('color', selectedColor)
    const slideIn = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: '0%', opacity: 1 },
        exit: { x: '100%', opacity: 0 },
      };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {  // Replace 200 with the scroll height you want to check for
          setPaddingTop('pt-0 mt-[-40px]');
        } else {
          setPaddingTop('pt-12');
        }
      };
  
      // Initial check
      handleScroll();
  
      // Listen for scroll events
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    console.log('selectedcolor', selectedColor.name)
    console.log('selectedprice', selectedPrice)
    console.log('selectedfit', selectedFit)
    console.log('selectedcollection', selectedCollection)
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


         <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideIn}
            className={`md:fixed w-[250px] mb-20 ${paddingTop} 
                transform transition-transform duration-150 ease-in-out bg-white
                ${isFilterVisible && phone ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-row justify-between">
                    <Typography variant='title' className="text-dark">Filters</Typography>
                    
                </div>
                <div className="grid grid-cols-1 gap-8 md:gap-12 mt-2">

                    <CategoryFilter
                        selectedCollection={selectedCollection}
                        setSelectedCollection={setSelectedCollection}
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

                    <MoneyRange 
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice}
                    />

                    <Link href={`/shop${categories}?color=${selectedColor.name}&min=${selectedPrice[0]}&max=${selectedPrice[1]}&fit=${selectedFit.name}&collection=${selectedCollection}`}
                    className="mt-2 lg:mt-[-10px] h-[40px] text-white text-lg bg-primary rounded-lg lg:text-xl font-bold items-center justify-center flex"
                    >
                        Zoek
                    </Link>
                </div>
            </motion.div>
        }
        </>
    )
}

