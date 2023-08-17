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
        <Image
          src={`https://s3-alpha-sig.figma.com/img/5cdd/fbd0/44f2660a20dd6837ff31aefdfff9cc7c?Expires=1692576000&Signature=J7QBjHCorAEyJJpKTDyJGdW1uf7ZWKJIhdnmS6zuQduWYGJFnJ3jDy0yD40Zwsq-hu8bz8q2bg-nbPBBgswKmSgLndwhQuyF-dN4p0O9RoiEQ1TpXs4462CE9lRzUZbNk1A4Yh7Mb4WqK29PEy7-9K5Te137U7py6XqfGdbeznXbFYTd4gX6vH6SZXKeWa0Wzx9jHb7NbQ6NI0UMONXY4oj79jFaexTDC5DsbY4ChL7cF34PxBCBryidl1ildplJzFn7t9i9oHdgrwCagV7lkkwb0u9ijsl-y~uJlwsMDbaH3DLTwBwxUiiQP~LJBQW3icIcbICAQN8C6s2IXUJ8sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
          alt=""
          className=" max-h-screen min-h-[500px] w-full origin-right object-cover max-md:scale-[2]"
          width={1024}
          height={600}
        />
      </motion.div>
      <div className="absolute inset-0 m-auto h-fit w-fit">
        <Motion
          initial="hidden"
          className="container max-w-screen-lg space-y-5 text-center md:max-w-screen-xl" // Adjusted the max-width here
        >
          <Typography variant={'heading'} className="max-w-5xl mx-auto">
            WIJ MAKEN WEBSITES MET <span className="text-primary">PASSIE</span>
          </Typography>
          <Typography variant={'muted'} className="max-w-2xl mx-auto">
            Blue Waterfall helpt jou met webdesign, webmarketing en zorgt ervoor
            dat jouw ambities online te zien zijn
          </Typography>
          <div className="flex items-center justify-center gap-5 max-md:flex-col">
            <Link href={'/booking'}>
              <Button>Vrijblijvende afspraak &rarr;</Button>
            </Link>
            {/* <Button variant={'link'}>Learn More</Button> */}
          </div>
        </Motion>
      </div>
    </section>
  );
}
