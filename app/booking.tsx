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
      <div className={cn('container   pb-20 pt-12', className, {})} {...props}>
        <Caption className="mb-4">Book Blue Waterfall</Caption>
        <Typography variant={'title'}>Maak een afspraak</Typography>
        <Typography variant={'muted'}>
          Boek een gesprek met Blue Waterfall om uw digitale bedrijf te starten
        </Typography>
        <div className="w-fit mt-4 border-4 border-dashed border-primary">
          <Button className="rounded-none">
            Maak een gratis afspraak &rarr;
          </Button>
        </div>
        <Motion
          initial="scaleDown"
          whileInView={'scaleUp'}
          transition={{ delay: 0, ease: 'linear' }}
          always
        >
          <Images.calendar className="mt-8" />
        </Motion>
      </div>
    </section>
  );
}
