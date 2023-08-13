import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './ui/button';
import { Typography } from './ui/typography';

interface PriceCardProps extends HTMLAttributes<HTMLDivElement> {
  tab: string;
}

export default function PriceCard({
  className,
  tab,
  ...props
}: PriceCardProps) {
  return (
    <>
      <div className={cn('bg-secondary rounded-xl', className, {})} {...props}>
        <Button className="rounded-t-none px-12 mx-auto block capitalize">
          {tab}
        </Button>
        <div className="p-6">
          <p className="text-center  text-4xl font-semibold leading-[44.96px]">
            €2250 - 4000
          </p>
          <button className="px-[24.43px] mx-auto block mt-1 mb-4 py-[9.77px] bg-slate-800 rounded-[9.77px] ">
            Indicatie
          </button>
          <Typography variant={'muted'} className="text-center">
            De perfecte optie voor bedrijven die een opmaat gemaakte website
            willen hebben, echter, geen marketing nodig hebben
          </Typography>
          <hr className="my-5" />
          <p className="font-bold ">What’s included:</p>
          <Button className="w-full">Maak een gratis afspraak</Button>
        </div>
      </div>
    </>
  );
}
