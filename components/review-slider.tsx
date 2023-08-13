'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils';

interface ReviewSliderProps extends HTMLAttributes<HTMLDivElement> {}

export default function ReviewSlider({
  className,
  ...props
}: ReviewSliderProps) {
  return (
    <div className={cn('', className, {})} {...props}>
      <Swiper slidesPerView={3}>
        {Array.from(Array(15)).map((el) => (
          <SwiperSlide key={el}>
            {({ isActive }) => (
              <Image
                src={`https://s3-alpha-sig.figma.com/img/3a10/e5f6/7e898cb1de3745b2e95972e140cb46dd?Expires=1692576000&Signature=eDyWF3~k4FW96D2MiUcJo611T69Rx~9rFYWSlnisiJQrrwNmjKlouzVIdBjM7Cph4Uk2y66rIiITA2lt-VkSz6tQrq207sJQw~2jBTkYFKBU35csRk9Mm3dwtR8SPQ8REmRgU1apR3hEBawrE-d223ZgAr6jnYbfG1vhaRr3vJMPAssd85qkCUUEyhqz~TjYt8y86CoKMvwMyIg~T54qkI-oTrGo3lGAp2daTxCyeKkfi4hWcpclJ15GwM8jfQ0nxcc4GEJZGmWEKIPSLujDsDUE8e9lwBlgJS6e3JqT1dN3v7LsXvsg8QQSq2OWmBrfcoW-G6VzgHxBN5LmKG9WVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                alt=""
                className={cn('aspect-square rounded-full duration-500', {
                  'scale-50': !isActive,
                })}
                width={200}
                height={200}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
