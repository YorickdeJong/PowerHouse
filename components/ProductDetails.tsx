'use client'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import { Typography } from './ui/typography'
import { Icons } from './icons'

const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

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
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. ',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }

export default function PorductDetails() {

    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
            <div className="max-w-sm pb-16 pt-10 lg:max-w-md  lg:pb-24 lg:pt-4">
      
                {/* Options */}
                <div className="">

                {/* Title + description */}
                  <Typography variant='title' className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" level={1}>{product.name}</Typography>
                  <div className="space-y-6">
                      <p className="text-base text-gray-900 mt-6">{product.description}</p>
                  </div>

                    
                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating ? 'text-orange-300' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{reviews.average} out of 5 stars</p>
                      <a href={reviews.href} className="ml-3 text-sm font-medium text-dark/60 hover:text-dark/30">
                        {reviews.totalCount} reviews
                      </a>
                    </div>
                  </div>
      
                  {/* Price */}
                  <p className="text-3xl tracking-tight text-gray-900 mt-5 font-bold">{product.price}</p>
                  <div className='flex flex-row my-6'>
                    <Icons.view />
                    <Typography variant='muted' className='text-dark/80 lg:text-sm ml-2'><span className='font-bold'>{product.viewAmount}</span> mensen hebben dit product bekeken</Typography>
                  </div>
                  <hr className='mt-4 border-none bg-dark/10 h-[1px]'/>

                  <form className="mt-8">
                    {/* Colors */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Kleur</h3>
      
                      <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                        <div className="flex items-center space-x-3">
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ active, checked }) =>
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
      
                    {/* Sizes */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">Maat</h3>
                        <a href="#" className="text-sm font-medium text-secondary hover:text-tertairy">
                          Hulp bij maatkeuze
                        </a>
                      </div>
      
                      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                        <div className="grid grid-cols-5 gap-4">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  size.inStock
                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                  active ? 'ring-2 ring-primary' : '',
                                  'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-primary' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-md'
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
      
                    {/* ADD TO BAG BUTTON */}
                    <button
                      type="submit"
                      className="mt-10 flex w-full justify-between rounded-full  bg-neutral px-8 py-2 text-base font-medium text-white hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <Typography variant='muted' className='text-dark/80'>+</Typography>
                      <Typography variant='muted' className='text-dark/80'>1</Typography>
                      <Typography variant='muted' className='text-dark/80'>-</Typography>
                    </button>

                    <button
                      type="submit"
                      className="mt-4 flex w-full items-center justify-center rounded-full  bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Add to bag
                    </button>
                  </form>

                {/* Icons */}
                  <div className='grid grid-cols-3 mt-6'>
                    <div  className='flex flex-row'>
                        <div className='mt-[11px]'>
                            <Icons.heart />
                        </div>
                        <Typography variant={'muted'} className='text-dark/80 font-semibold ml-2 hover:text-primary'>Favorite</Typography>
                    </div>
                    <div  className='flex flex-row ml-4'>
                        <div className='mt-[9px]'>
                            <Icons.help />
                        </div>
                        <Typography variant={'muted'} className='text-dark/80 font-semibold ml-2 hover:text-primary'>Help</Typography>
                    </div>
                    
                    <div  className='flex flex-row ml-4'>
                        <div className='mt-[9px]'>
                            <Icons.share />
                        </div>
                        <Typography variant={'muted'} className='text-dark/80 font-semibold ml-2 hover:text-primary'>Share</Typography>
                    </div>
                  </div>
                  <hr className='mt-4 border-none bg-dark/10 h-[1px]'/>
                </div>
      
                {/* Description */}
                <div className="py-10  lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>
                  </div>
      
                  <div className="mt-8">
                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
      
                    <div className="mt-4">
                      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
      
                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>
      
                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{product.details}</p>
                    </div>
                  </div>
                </div>
        </div>
    )
}