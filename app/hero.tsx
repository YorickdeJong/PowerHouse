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

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero({ className, ...props }: HeroProps) {
  const target = useRef(null);
  const _y = useScrollTransform({
    target,
    offset: ['start start', 'end start'],
    outputRange: [0, 100],
  });

  const opacity = useScrollTransform({
    target,
    offset: ['start start', 'end start'],
    outputRange: [1, 0],
  });
  const _scale = useScrollTransform({
    target,
    offset: ['start start', 'end start'],
    outputRange: [1, 1.2],
  });
  const scale = useSpring(_scale);
  const y = useSpring(_y);

  const marginTop = { marginTop: 50 };

  return (
    <section
      ref={target}
      className={cn('relative overflow-hidden', className, {})}
    >
      <motion.div
        style={{ y, opacity, scale }}
        transition={{ duration: 2, type: 'spring' }}
        className="blue-overlay"
      >
      <div dangerouslySetInnerHTML={{ __html: `
        <video
          style="height: 100vh; width: 100%; object-fit: cover;"
          autoPlay
          loop
          muted
          playsinline
        >
          <source src="/Waterfall_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      `}}
      />
      </motion.div>
      <div className="absolute inset-0 m-auto h-fit w-full pb-28 md:pb-0">
        <Motion
          initial="hidden"
          className="container max-w-screen-lg space-y-5 text-center md:max-w-screen-xl" // Adjusted the max-width here
        >
          <Typography variant={'heading'} className="max-w-5xl mx-auto">
            Place your header <span className='text-primary'>here</span>
          </Typography>
          <Typography
            variant={'muted'}
            className="max-w-3xl md:text-2xl mx-auto"
          >
            Place a fitting subtitle here
          </Typography>
          <div
            className="flex items-center justify-center gap-5 max-md:flex-col"
            style={marginTop}
          >
            <Link href={'/booking'}>
              <Button className="md:text-xl">
                Your call to action  &rarr;
              </Button>
            </Link>
            {/* <Button variant={'link'}>Learn More</Button> */}
          </div>
        </Motion>
      </div>
    </section>
  );
}
