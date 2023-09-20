'use client'
import Image from "next/image";
import { useState } from "react";
import Typography from "./ui/typography";
import Reviews from "./Reviews";






export default function ZoomImage({items, images}: any) {

    const [showPreview, setShowPreview] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);


    const handleMouseMove = (e: any) => {
      setShowPreview(true);
      const preview = document.querySelector(".zoom-preview") as HTMLElement;
      if (preview) {
        const x = 1000 / 300; // Image width / Preview div width
        const y = 600 / 300; // Image height / Preview div height
        const posX = e.nativeEvent.offsetX;
        const posY = e.nativeEvent.offsetY;
  
        preview.style.backgroundImage = `url(${items.image!})`;
        preview.style.backgroundSize = `${1000}px ${600}px`;
        preview.style.backgroundPosition = `-${posX * x}px -${posY * y}px`;
      }
    };
  
    const handleMouseOut = () => {
      setShowPreview(false);
      const preview = document.querySelector(".zoom-preview") as HTMLElement;
      if (preview) {
        preview.style.backgroundImage = "none";
      }
    };
  
    return (
        <div className="flex flex-row">
                <div className="grid grid-cols-1 mr-10 h-[500px]">
                        {images.map((image: any) => {
                            if (image !== selectedImage) {
                                return (
                                    <div className="h-24 w-24 overflow-hidden rounded-xl">
                                            <Image 
                                                onClick={() => setSelectedImage(image)}
                                                src={image}
                                                alt= 'sub image'
                                                width={100}
                                                height={100}
                                                className="hover:scale-110 object-cover"
                                            />
                                    </div>
                                )
                            }
                        })}
                </div>
            <div>
                <div className="rounded-2xl overflow-hidden">
                    <Image
                    src={selectedImage}
                    alt={''}
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                    className="-mb-7 w-[450px] h-[700px] hover:scale-150 rounded-2xl object-cover object-top"
                    width={1000}
                    height={600}
                    />
                </div>

                <div className="mx-0">
                        <Typography variant = 'title' className="text-dark mt-12 lg:text-2xl">Klant Beoordelingen</Typography>   
                        <Reviews />
                </div>
            </div>
        </div>
      );
    }