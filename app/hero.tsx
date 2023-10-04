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
      className={cn('relative container grid grid-cols-1 md:grid-cols-2 gap-4 py-12', className, {})}
    >
        <div className='w-[300px] md:hidden mx-auto'>
          <Images.homepage 
            className=' md:mt-0  object-cover object-top'
          />
        </div>

        <div className='grid grid-cols-1 gap-16 mt-8 md:mt-0justif-center items-center mx-auto'>
          <div className="space-y-5 isolate ">
              <div className=" ">
              <Motion initial= 'hidden' asChild transition={transition}>
                <Typography variant = 'muted' className='text-secondary leading-10 text-3xl md:text-3xl lg:text-5xl font-medium' level={2}>
                  Boost jouw workout met zelfvertrouwen en stijl
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
      </div>

      <div className='w-[0px] hidden md:block sm:w-[400px] xl:w-[500px]'>
        <Images.homepage 
          className='object-cover object-top'
        />
      </div>


    </section>
  );
}
