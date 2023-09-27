'use client'
import Image from "next/image";
import { useState } from "react";
import Typography from "./ui/typography";
import Reviews from "./reviews/Reviews";
import dynamic from "next/dynamic";
import { jsx, Box, AspectRatio } from 'theme-ui'
import ImageCarousel from "./LazyImageCarousel";



export default function ZoomImage({images}: any) {

    const [showPreview, setShowPreview] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]?.node?.url);

    const imageProp = {
        src: selectedImage,
        alt: 'sub image'
    }
    const imageProps = {
        className:"rounded-2xl overflow-hidden w-[450px] h-[700px]"
    }
    return (
        <div className="flex lg:flex-row flex-col">
                <div className="grid grid-cols-4 lg:grid-cols-1 lg:mr-10 gap-3 h-[0px] lg:h-[500px]">
                        {images.map((image: any) => {
                            if (image.node.url !== selectedImage) {
                                return (
                                    <div className="lg:h-24 lg:w-24 overflow-hidden rounded-xl">
                                            <Image 
                                                onClick={() => setSelectedImage(image.node.url)}
                                                src={image.node.url}
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
                <div className="rounded-2xl overflow-hidden w-[500px] h-[650px]">
                    <ImageCarousel
                        priority
                        width={550}
                        height={700}
                        alt={'images'}
                        images={[imageProp]}
                        showZoom={true}
                        currentSlide={selectedImage}
                    />
                </div>

                <div className="grid grid-cols-4 max-w-[450px] lg:mr-10 mt-6 gap-3 lg:h-[0px]">
                        {images.map((image: any) => {
                            if (image.node.url !== selectedImage) {
                                return (
                                    <div className=" lg:h-0 lg:w-0 overflow-hidden rounded-xl">
                                            <Image 
                                                onClick={() => setSelectedImage(image.node.url)}
                                                src={image.node.url}
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

                <div className="mx-0 hidden md:block">
                        <Typography variant = 'title' className="text-dark mt-12 lg:text-2xl">Klant Beoordelingen</Typography>   
                        <Reviews />
                </div>
            </div>

            

        </div>
      );
    }