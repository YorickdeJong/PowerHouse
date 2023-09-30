'use client';

import { HTMLAttributes, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollTransform from '@/hook/scroll-transform';
import { motion, useSpring } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Motion from '@/components/motion';
import { Images } from '@/components/images';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero({ className, ...props }: HeroProps) {
  const target = useRef(null);
  const _y = useScrollTransform({
    target,
    offset: ['start start', 'end start'],
    outputRange: [0, 100],
  });


  const transition={
    delay: 0.5,
    duration: 0.8,
    type: 'tween',
  }


  return (
    <section
      ref={target}
      className={cn('relative  container my-20 mt-16', className, {})}
    >
      <div className='w-[300px] sm:w-[0px] '>
          <Images.homepage 
            className=' md:mt-0  object-cover object-top'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <div className="space-y-5 isolate pt-12 lg:pt-12">
              <div className=" ">
              <Motion initial= 'hidden' asChild transition={transition}>
                <Typography variant = 'heading' className='text-secondary leading-10 xl:text-5xl font-medium' level={2}>
                  BOOST JOUW WORKOUT MET ZELFVERTROUWEN EN STIJL
                </Typography>
              </Motion>
                <Motion initial= 'hidden' asChild transition={transition}>
                  <Typography variant = 'muted' className="lg:text-md max-w-[400px] xl:max-w-[500px] mt-6 text-dark/70 lg:leading-[35px]">
                  GoGym is speciaal ontworpen om je te laten schitteren tijdens je workouts. Elk kledingstuk is niet alleen stijlvol is, maar ook bestand tegen squats, vlekken 
                </Typography>

                </Motion>

                <Button variant = 'default' className="rounded-full  mt-10 text-white text-md py-3 text-center ring-gray-900/10 hover:ring-gray-900/20">
                  Bekijk al onze producten{' '}
                  <Link href="/shop" className="font-semibold text-white ml-4">
                    <span className="absolute inset-0 " aria-hidden="true" />
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Button>
          </div>
        </div>

        <div className='w-[0px] sm:w-[400px] xl:w-[700px]'>
          <Images.homepage 
            className='mt-0 sm:mt-10 md:mt-12  xl:ml-[-80px] object-cover object-top'
          />
        </div>
      </div>
    </section>
  );
}
