// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hook/media-query';
import useSwiperRef from '@/hook/swiper';
import useSlider from '@/store/slider';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils';

import { Images } from './images';

interface ReviewSliderProps {
  className?: string;
  images: any[];
  currentReviewIndex: any;
  setCurrentReviewIndex: any;
  [key: string]: any; // for other props
}

export default function ReviewSlider({
  className,
  images,
  currentReviewIndex,
  setCurrentReviewIndex,
  ...props
}: ReviewSliderProps) {
  const [nextEl, nextRef] = useSwiperRef();
  const isMd = useMediaQuery('md');
  const [prevEl, prevRef] = useSwiperRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setCurrentReviewIndex(0);
  }, []);
  const handleSlideChange = (swiper: any) => {
    setCurrentReviewIndex(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };

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
        onSlideChange={handleSlideChange}
        loop={true}
      >
        <div
          className="fixed -left-7 z-10 my-auto aspect-square h-10 translate-y-2 cursor-pointer transition-all active:scale-95 max-md:inset-y-0 md:left-[38%]"
          onClick={() =>
            useSlider.setState({ reviewId: Math.round(Math.random() * 10) })
          }
          ref={prevRef}
        >
          <Images.left />
        </div>
        <div
          className="fixed -right-7 z-50 my-auto aspect-square h-10 translate-y-2 cursor-pointer transition-all active:scale-95 max-md:inset-y-0 md:right-[38%]"
          ref={nextRef}
          onClick={() =>
            useSlider.setState({ reviewId: Math.round(Math.random() * 10) })
          }
        >
          <Images.right />
        </div>
        {images?.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                'ml-auto w-fit rounded-full bg-gradient-to-r from-transparent from-50% to-primary to-50% p-[5px]',
                {
                  '-translate-y-1/2 mt-[50%] to-[#676974]':
                    index !== activeIndex,
                }
              )}
            >
              <Image
                src={imageSrc.image}
                alt=""
                className={cn(
                  'aspect-square rounded-full ring-4 ring-background ',
                  {
                    ' block w-14 md:w-32 aspect-square': index !== activeIndex,
                  }
                )}
                width={isMd ? 280 : 200}
                height={isMd ? 280 : 200}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
