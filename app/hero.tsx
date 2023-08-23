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
        {/* <Image
          src={`https://s3-alpha-sig.figma.com/img/5cdd/fbd0/44f2660a20dd6837ff31aefdfff9cc7c?Expires=1692576000&Signature=J7QBjHCorAEyJJpKTDyJGdW1uf7ZWKJIhdnmS6zuQduWYGJFnJ3jDy0yD40Zwsq-hu8bz8q2bg-nbPBBgswKmSgLndwhQuyF-dN4p0O9RoiEQ1TpXs4462CE9lRzUZbNk1A4Yh7Mb4WqK29PEy7-9K5Te137U7py6XqfGdbeznXbFYTd4gX6vH6SZXKeWa0Wzx9jHb7NbQ6NI0UMONXY4oj79jFaexTDC5DsbY4ChL7cF34PxBCBryidl1ildplJzFn7t9i9oHdgrwCagV7lkkwb0u9ijsl-y~uJlwsMDbaH3DLTwBwxUiiQP~LJBQW3icIcbICAQN8C6s2IXUJ8sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
          alt=""
          className="h-screen w-full object-cover md:max-h-screen md:min-h-[500px] md:w-full md:origin-right md:object-cover md:max-md:scale-[2]"
          width={1024}
          height={600}
        /> */}
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
            WIJ MAKEN WEBSITES MET <span className="text-primary">PASSIE</span>
          </Typography>
          <Typography
            variant={'muted'}
            className="max-w-3xl md:text-2xl mx-auto"
          >
            Blue Waterfall zorgt ervoor dat jij met jouw website klanten
            binnenhaalt, om zo jouw bedrijf te laten groeien
          </Typography>
          <div
            className="flex items-center justify-center gap-5 max-md:flex-col"
            style={marginTop}
          >
            <Link href={'/booking'}>
              <Button className="md:text-xl">
                Vrijblijvende afspraak &rarr;
              </Button>
            </Link>
            {/* <Button variant={'link'}>Learn More</Button> */}
          </div>
        </Motion>
      </div>
    </section>
  );
}
