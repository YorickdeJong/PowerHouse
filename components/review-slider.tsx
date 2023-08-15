// @ts-nocheck
'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hook/media-query';
import useSwiperRef from '@/hook/swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils';

import { Images } from './images';

interface ReviewSliderProps extends HTMLAttributes<HTMLDivElement> {}

export default function ReviewSlider({
  className,
  ...props
}: ReviewSliderProps) {
  const [nextEl, nextRef] = useSwiperRef();
  const isMd = useMediaQuery('md');
  const [prevEl, prevRef] = useSwiperRef();
  return (
    <div
      className={cn('translate-x-0 translate-y-0', className, {})}
      {...props}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={true}
        className="relative py-12"
        navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
        }}
        slidesPerView={3}
      >
        <div
          className="fixed translate-y-2 -left-7 z-10 my-auto aspect-square h-10 cursor-pointer transition-all active:scale-95 max-md:inset-y-0 md:left-[40%]"
          ref={prevRef}
        >
          <Images.left />
        </div>
        <div
          className="fixed translate-y-2 -right-7 z-50 my-auto aspect-square h-10 cursor-pointer transition-all active:scale-95 max-md:inset-y-0 md:right-[40%]"
          ref={nextRef}
        >
          <Images.right />
        </div>
        {Array.from(Array(7)).map((el) => (
          <SwiperSlide key={el}>
            {({ isActive }) => (
              <div
                className={cn(
                  'ml-auto w-fit rounded-full bg-gradient-to-r from-transparent from-50% to-primary to-50% p-[5px]',
                  { '-translate-y-1/2 mt-[50%] to-[#676974]': !isActive }
                )}
              >
                <Image
                  src={`https://s3-alpha-sig.figma.com/img/3a10/e5f6/7e898cb1de3745b2e95972e140cb46dd?Expires=1692576000&Signature=eDyWF3~k4FW96D2MiUcJo611T69Rx~9rFYWSlnisiJQrrwNmjKlouzVIdBjM7Cph4Uk2y66rIiITA2lt-VkSz6tQrq207sJQw~2jBTkYFKBU35csRk9Mm3dwtR8SPQ8REmRgU1apR3hEBawrE-d223ZgAr6jnYbfG1vhaRr3vJMPAssd85qkCUUEyhqz~TjYt8y86CoKMvwMyIg~T54qkI-oTrGo3lGAp2daTxCyeKkfi4hWcpclJ15GwM8jfQ0nxcc4GEJZGmWEKIPSLujDsDUE8e9lwBlgJS6e3JqT1dN3v7LsXvsg8QQSq2OWmBrfcoW-G6VzgHxBN5LmKG9WVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                  alt=""
                  className={cn(
                    'aspect-square rounded-full ring-4 ring-background ',
                    {
                      ' block w-14 md:w-32 aspect-square': !isActive,
                    }
                  )}
                  width={isMd ? 280 : 200}
                  height={isMd ? 280 : 200}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
