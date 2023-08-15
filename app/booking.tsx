import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import { Images } from '@/components/images';
import Motion from '@/components/motion';

interface BookingProps extends HTMLAttributes<HTMLDivElement> {}

export default function Booking({ className, ...props }: BookingProps) {
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
        <Typography variant={'title'} className="whitespace-nowrap">
          Maak een afspraak
        </Typography>
        <Typography variant={'muted'}>
          Boek een gesprek met Blue Waterfall om uw digitale bedrijf te starten
        </Typography>
        <div className="mt-4 w-fit border-4 border-dashed border-primary">
          <Button className="rounded-none">
            Maak een gratis afspraak &rarr;
          </Button>
        </div>
        <Motion
          initial="scaleDown"
          whileInView={'scaleUp'}
          transition={{ delay: 0, ease: 'linear' }}
        >
          <Images.calendar className="mt-8 origin-top-left md:scale-90" />
        </Motion>
      </div>
    </section>
  );
}
