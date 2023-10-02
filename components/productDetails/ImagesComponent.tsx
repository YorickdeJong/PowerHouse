'use client'

import Image from "next/image"

export default function ImagesComponent({selectedImages, setSelectedImages, selectedColor, setSelectedColor, images} : any){


    return (
        <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Kleur</h3>
            <div className="grid grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
                {images.map((image: any) => {
                        const isSelected = selectedImages.src === image.src 
                        console.log('alt', image.altText)
                        return (
                            <div className="lg:h-24 lg:w-24 overflow-hidden rounded-2xl "
                            style = {{cursor: 'pointer', 
                            borderWidth: isSelected ? '2px' : '0px', 
                            borderColor: 'gray',
                            padding: isSelected ? '2px' : '0px'
                        }}
                            >
                                    <Image
                                        onClick={() => {
                                            setSelectedImages(image);
                                            setSelectedColor(image.color);
                                        }}
                                        src={image.src}
                                        alt={image.altText}
                                        width={100}
                                        height={100}
                                        className="hover:scale-105 rounded-xl"
                                    />
                            </div>
                        )
                    
                })}
            </div>
        </div>
    )
}