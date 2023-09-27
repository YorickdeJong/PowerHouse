'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { Typography } from './ui/typography';
import { inter } from '@/lib/fonts';
import ColorsComponent from './productDetails/Colors';
import SizesComponent from './productDetails/Sizes';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  text: any;
  image?: string;
  title: string | '';
  price: string | '';
  kleuren: [];
  hoverText?: string;
  handle: string | '';
  houseCard?: boolean;
  collections?: string;
}

export default function Card({
  className,
  text,
  image,
  houseCard,
  title,
  kleuren,
  price,
  hoverText,
  handle,
  collections,
  ...props
}: CardProps) {

    
    
    const colors = kleuren.map((item: any) => {
        const selectedOptions = item.node.selectedOptions;

        
        const filteredOptions = selectedOptions.filter((option: any) => option.name === "Color");

        return filteredOptions.map((option: any) => option.value); // Keep only the color values
      })
      .flat(); // Flatten the array
    
    const uniqueColors = colors.filter((value, index, self) => self.indexOf(value) === index); // Keep only unique values

    const sizes = kleuren.map((item: any) => {
        const selectedOptions = item.node.selectedOptions;

        
        const filteredOptions = selectedOptions.filter((option: any) => option.name === "Size");

        return filteredOptions.map((option: any) => option.value); // Keep only the color values
      })
      .flat(); // 

    const uniqueSizes = sizes.filter((value, index, self) => self.indexOf(value) === index); // Keep only unique values
      
    const sizeObjectsFiltered = uniqueSizes.map(size => ({
        name: size,
        inStock: true
    }));


  const linkHref = {    
    pathname: `/shop/${collections || 'filterable-collection'}/${handle || ''}`,
  };
  
  return (
    <Motion initial="down" asChild>
      <Link href={linkHref}>
        <div
          className={cn(
            'block space-y-3 overflow-hidden hover:scale-105 bg-white group',
            className,
            {
              'group/image  cursor-pointer': image,
              'h-[500px]': houseCard,
            }
          )}
        >
        <div className="overflow-hidden group ">
          <Image
            src={image!}
            alt={''}
            className={cn(
              '-mb-7 w-full h-[600px]   object-cover object-top hover:opacity-70',
            )}
            width={1000}
            height={600}
          />
        </div>
          <div className='px-3'>
            <div className="flex items-center gap-4">
              <p
                className={cn(
                  'grow text-lg font-bold uppercase md:text-lg text-black group-hover:hidden',
                  {
                    'md:text-lg mb-3': houseCard,
                  }
                )}
              >
                {title}
              </p>

              <p
                className={cn(
                  ' grow text-lg font-bold uppercase md:text-lg text-black group-hover:hidden',
                  {
                    'md:text-lg mb-3': houseCard,
                  }
                )}
              >
                €{Number(price).toFixed(2)}
              </p>
            </div>
            <p className={`leading-relaxed text-muted group-hover:hidden ${inter.className}`}>{text}</p>
            <p className={`leading-relaxed text-muted group-hover:hidden  ${inter.className}`}>{uniqueColors?.length ?? ''} kleuren</p>

            <div className='hidden group-hover:block'>
                <ColorsComponent 
                selectedColor={''} 
                setSelectedColor={''} 
                colorObjects={uniqueColors}
                card
                />
            </div>
            
            <div className='hidden group-hover:block'>
                <SizesComponent  
                selectedSize={''} 
                setSelectedSize={''} 
                sizeObjects={sizeObjectsFiltered}
                card
                />
            </div>

          </div>
        </div>
      </Link>
    </Motion>
  );
}
