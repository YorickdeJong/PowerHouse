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

export default function Hero2({ className, ...props }: HeroProps) {
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
    <section className='relative container py-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
      
      {/* First Image */}
      <Link href='/shop/tops' className='relative group  h-[350px] md:h-[700px] '>
        <Image
          src='/assets/images/frontpage-left.jpg' // Replace with the path to your first image
          alt='First Image'
          layout='fill'
          objectFit='cover'
          className='group-hover:opacity-70'
          quality={100}
        />
        <Typography 
          variant='title' 
          className='absolute ml-8 mt-4 opacity-0 group-hover:opacity-100 text-[#884244] transition-opacity duration-300'
        >
          Bekijk Tops
        </Typography>
      </Link>
    
      
      
      {/* Second Image with Text Below */}
      <div className='flex flex-col'>
        <Link href='/shop/pants'  className='relative h-[350px] md:h-[550px] overflow-hidden group  '>
          <Image
            src='/assets/images/frontpage-right.jpg' // Replace with the path to your second image
            alt='Second Image'
            layout='fill'
            className='hover:opacity-70'
            objectFit='cover'
            quality={100}
          />

          <Typography 
              variant='title' 
              className='absolute ml-8 mt-4 opacity-0 text-[#73A3B4] group-hover:opacity-100 transition-opacity duration-300'
            >
            Bekijk Sportbroeken
          </Typography>

        </Link>
        <div className='p-2 h-[100px] md:h-[150px] mt-4 md:mt-1'>
        <Motion initial= 'hidden' transition={transition}>
          <Typography variant='heading' className='text-primary mb-0'>
          Ontdek Je Ultieme Workout   Look
          </Typography>
        </Motion>
        <Motion initial= 'hidden' transition={transition} >
          <p className='text-gray-700 leading-7'>
            Boost Je Workout Met GoGym. Ontdek een wereld waar mode en fitness samenkomen om je de ultieme workout ervaring te bieden!
          </p>
        </Motion>
        </div>
      </div>
      
    </section>
  );
}