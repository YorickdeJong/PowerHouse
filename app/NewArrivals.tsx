import Image from "next/image";
import Link from "next/link";



export default function NewArrivals() {
    return (
        <>
        <hr className="h-[1px] border-none bg-dark/20 mt-8 max-w-[1200px] mx-auto md:mb-12" />
        <div className="relative overflow-hidden bg-white mb-12 max-w-[1200px] mx-auto px-8 md:px-0">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative  max-w-7xl sm:static">
                <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Ontdek jouw smaak met GoGym
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                    Maak kennis met een nieuwe manier van trainen
                </p>
                </div>
                <div>
                <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <Link href={'/shop'} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">
                            <Image
                                src="/assets/images/legging_3.png"
                                width={1000}
                                height={600}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </Link>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                alt=""
                                width={1000}
                                height={600}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                alt=""
                                width={1000}
                                height={600}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                alt=""
                                width={1000}
                                height={600}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                alt=""
                                width={1000}
                                height={600}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                alt=""
                                width={1000}
                                height={600}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                alt=""
                                width={1000}
                                height={600}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    
                    <Link
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                    >
                    Shop Collection
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr className="h-[1px] border-none bg-dark/20 max-w-[1200px] mx-auto" />
        </>
    )
  }