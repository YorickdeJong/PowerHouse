import Image from "next/image";

export default function Banner() {
    return (
        <div className="relative w-full h-[600px]">
            <Image
            src='/assets/images/bannerImages/banner-1.jpg'
            alt = 'shop banner'
            layout="fill" // This will make the image take the full width and height of its container
            objectFit="cover" // This will make sure the image covers the entire area of its container without distorting its aspect ratio
            quality={100}
          />
        </div>
    )
}