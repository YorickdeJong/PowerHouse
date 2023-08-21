'use client';

import { HTMLAttributes, useEffect } from 'react';
import Head from 'next/head';
import { InlineWidget } from 'react-calendly';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import { Images } from '@/components/images';
import Motion from '@/components/motion';
import { useMediaQuery } from '@/hook/media-query';

interface BookingProps extends HTMLAttributes<HTMLDivElement> {}

export default function Booking({ className, ...props }: BookingProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <section className="bg-card">
      <div
        className={cn(
          'container   pb-20 pt-12 md:px-24 md:pt-20',
          className,
          {}
        )}
        {...props}
      >
        <Caption className="mb-4">Book Blue Waterfall</Caption>
        <Typography variant={'title'} className="md:whitespace-nowrap">
          Maak een afspraak
        </Typography>
        <Typography variant={'muted'}>
          Boek een gesprek met Blue Waterfall om uw digitale bedrijf te starten
        </Typography>
        <div className="mt-16 origin-top-left md:scale-90">
          <InlineWidget
            url="https://calendly.com/yorickdejong/introductory-call?primary_color=0085ff"
            styles={{
              height: '840px',
              width: isMobile ? '100%' : '640px',
            }}
          />
        </div>
      </div>
    </section>
  );
}

// import Head from 'next/head';
// [...]
// useEffect(() => {
//   window.Calendly.initInlineWidget({
//     url: 'https://calendly.com/my-calendar/30min?month=2022-05',
//     parentElement: document.getElementById('calendly-inline-widget')
//   });
// }, [])
//   return (
//     <>
// <Head>
//   <script src="https://assets.calendly.com/assets/external/widget.js"></script>
// </Head>
// <>
//     <div
//       id="calendly-inline-widget"
//       style={{minWidth: 320, height: 580}}
//       data-auto-load="false"
//     >
//     </div>
// </>
// [...]
