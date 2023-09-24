'use client'
import { useState } from 'react'
import { Typography } from '../ui/typography'
import { Icons } from '../icons'
import Reviews from '../Reviews'
import Sizes from './Sizes'
import ReviewsStars from './Reviews'
import Colors from './Colors'
import IconsComponent from './Icons'
import ButtonsComponents from './buttonsComponent'
import DescriptionComponent from './Description'
import ColorsComponent from './Colors'


const product = {
    name: 'Legacy Legging',
    price: '€192.00',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    viewAmount: '32',
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
    ],
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }

  
export default function PorductDetails({item} : any) {

    const selectedOptions = item.variants.edges.map((variantEdge: any) => variantEdge.node.selectedOptions);
    const uniqueColors = [...new Set(selectedOptions.flat().filter((option : any) => option.name === "Color").map((option : any) => option.value.toLowerCase()))];
    const uniqueSizes = [...new Set(selectedOptions.flat().filter((option : any) => option.name === "Size").map((option : any) => option.value.toLowerCase()))];

      
    const sizeObjectsFiltered = uniqueSizes.map(size => ({
        name: size,
        inStock: true
    }));


    const [selectedColor, setSelectedColor] = useState(uniqueColors[1])
    const [selectedSize, setSelectedSize] = useState(sizeObjectsFiltered[0])

    return (
            <div className="max-w-sm pb-16 pt-10 lg:max-w-md  lg:pb-24 lg:pt-4">
      
                {/* Options */}
                <div className="">

                {/* Title + description */}
                  <Typography variant='title' className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" level={1}>{item.title}</Typography>
                  <div className="space-y-6 mb-10">
                      <p className="text-base text-gray-900 ">{item.description}</p>
                  </div>

                    
                  {/* Reviews */}
                  <ReviewsStars />
      
                  {/* Price */}

                  <p className="text-3xl tracking-tight text-gray-900 mt-5 font-bold">€ {Number(item.priceRange.minVariantPrice.amount).toFixed(2)}</p>
                  <div className='flex flex-row my-6'>
                    <Icons.view />
                    <Typography variant='muted' className='text-dark/80 lg:text-sm ml-2'><span className='font-bold'>{product.viewAmount}</span> mensen hebben dit product bekeken</Typography>
                  </div>
                  <hr className='mt-4 border-none bg-dark/10 h-[1px]'/>

                  <form className="mt-8">
                  {/* Colors */}
                  <ColorsComponent 
                    selectedColor={selectedColor} 
                    setSelectedColor={setSelectedColor} 
                    colorObjects={uniqueColors}
                  />

                    {/* Sizes */}
                    <Sizes 
                      selectedSize={selectedSize} 
                      setSelectedSize={setSelectedSize} 
                      sizeObjects={sizeObjectsFiltered} 
                      />
      
                    {/* ADD TO BAG BUTTON */}
                    <ButtonsComponents 
                    item={item}
                    selectedColor={selectedColor}
                    selectedSize={selectedSize}
                    />
                  </form>

                  {/* Icons */}
                  <IconsComponent />
                </div>
      
                {/* Reviews */}
                <div className="mx-0 md:hidden">
                        <Typography variant = 'title' className="text-dark mt-12 lg:text-2xl">Klant Beoordelingen</Typography>   
                        <Reviews />
                        <hr className='mt-8 border-none bg-dark/10 h-[1px]'/>
                </div>

                {/* Description */}
                <DescriptionComponent product={product} />
        </div>
    )
}