import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import Checkbox from './checkbox';
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
      <div className={cn('rounded-xl bg-secondary', className, {})} {...props}>
        <Button className="mx-auto block rounded-t-none px-12 capitalize">
          {tab}
        </Button>
        <div className="p-6">
          <p className="text-center  text-4xl font-semibold leading-[44.96px]">
            {tab === 'basic'
              ? '€2250 - 4000'
              : tab === 'standard'
              ? '€5000 - 7000'
              : '€9000 - 14000'}
          </p>
          <button className="mx-auto mb-4 mt-1 block rounded-[9.77px] bg-slate-800 px-[24.43px] py-[9.77px] ">
            Indicatie
          </button>
          <Typography variant={'muted'} className="text-center">
            De perfecte optie voor bedrijven die een opmaat gemaakte website
            willen hebben, echter, geen marketing nodig hebben
          </Typography>
          <hr className="my-5" />
          <p className="font-bold ">What’s included:</p>
          <div className="my-5 space-y-5">
            {options.map((opt, idx) => (
              <Checkbox
                key={opt}
                selected={
                  tab === 'basic'
                    ? idx < 7 && true
                    : tab === 'standard'
                    ? idx < 10 && true
                    : true
                }
                label={opt}
              />
            ))}
          </div>
          <Link href={'/booking'}>
            <Button className="w-full">Maak een gratis afspraak</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

const options = [
  'What’s included:',
  'Levertijd: > 4 mnd',
  'Brainstorm sessie',
  'Moodboard',
  '3D ontwerp',
  'Kleur- en materialadvies',
  'Lichtadvies',
  'Indelingsadvies',
  'Aankoopbegeleiding',
  'Projectbegeleiding',
  'Stylingadvies',
  'Verlichtingsplan',
  'Maatwerk',
  'Projectmanagement',
];
