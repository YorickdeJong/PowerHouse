'use client'
import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { RadioGroup } from "@headlessui/react";
import { useMediaQuery } from "@/hook/media-query";
import { Icons } from "./icons";
import { motion } from 'framer-motion';


function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}


export default function Filter() {
    const [selectedColor, setSelectedColor] = useState(colors[0].name)
    const [paddingTop, setPaddingTop] = useState('pt-12');
    const phone = useMediaQuery('(max-width: 768px)');
    const [isFilterVisible, setIsFilterVisible] = useState(false);

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
                <Typography variant = 'title' className="lg:text-2xl text-black/90" >Kleren / Tops</Typography>

                <div className="grid grid-cols-1 gap-8 md:gap-20 mt-8">
                    <div>
                        <Typography variant = 'muted' className="lg:text-xl text-dark/80 font-bold">Selecteer Prijs</Typography>
                        <hr className="mt-2 border-none bg-muted h-[1px]"/>
                        
                        {priceRange.map((range) => (
                            <div className="flex items-center mt-4 ">
                                <input type="checkbox" className="custom-checkbox" />
                                <span className="ml-4 lg:text-md text-dark/90">{range}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Typography variant = 'title' className="lg:text-xl text-dark/80 font-bold"> Selecteer Kleur</Typography>
                        <hr className="mt-2 border-none bg-muted h-[1px]"/>
        
                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-8">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                            {colors.map((color) => (
                                <RadioGroup.Option
                                key={color.name}
                                value={color}
                                className={({ active, checked } : any) =>
                                    classNames(
                                    color.selectedClass,
                                    active && checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                }
                                >
                                <RadioGroup.Label as="span" className="sr-only">
                                    {color.name}
                                </RadioGroup.Label>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                    color.class,
                                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                />
                                </RadioGroup.Option>
                            ))}
                            </div>
                        </RadioGroup>
                        </div>

                    <div>
                        <Typography variant = 'title' className="lg:text-xl text-dark/80 font-bold">Fit</Typography>
                        <hr className="mt-2 border-none bg-muted h-[1px]"/>
                        {fits.map((fit) => (
                            <div className="flex items-center mt-4 ">
                            <input type="checkbox" className="custom-checkbox" />
                            <span className="ml-4 lg:text-md text-dark">{fit}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        }
        </>
    )
}

const priceRange = [
    '€0 - €20',
    '€20 - €50',
    '€50 - €100',
    '€100 - €150'
]

const fits = [
    'Loose',
    'Slim',
    'Tight',
    'Standaard'
]

const colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-200' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'Black', class: 'bg-green-600', selectedClass: 'ring-green-600' },
    { name: 'Black', class: 'bg-red-500', selectedClass: 'ring-red-500' },
    { name: 'Black', class: 'bg-orange-400', selectedClass: 'ring-orange-400' },
]
