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
  const texts = [
    `De perfecte optie voor bedrijven die aan een wordpress website genoeg hebben en 
  goede content willen op hun website.`,
    `Deze optie sluit goed aan bij bedrijven die goede content willen, maar ook marketing nodig hebben.`,
    `De perfecte optie voor bedrijven die een opmaat gemaakte website
  willen hebben en daarbij een marketing campagne willen.`,
  ];

  return (
    <>
      <div className={cn('rounded-xl bg-secondary', className, {})} {...props}>
        <Button className="mx-auto block rounded-t-none px-12 capitalize">
          {tab}
        </Button>
        <div className="p-6">
          <p className="text-center  text-4xl font-semibold leading-[44.96px]">
            {tab === 'basis'
              ? '€2250 - 4000'
              : tab === 'standaard'
              ? '€5000 - 7000'
              : '€9000 - 14000'}
          </p>
          <button className="mx-auto mb-4 mt-1 block rounded-[9.77px] bg-slate-800 px-[24.43px] py-[9.77px] ">
            Indicatie
          </button>

          <Typography variant={'muted'} className="text-center">
            {tab === 'basis'
              ? texts[0]
              : tab === 'standaard'
              ? texts[1]
              : texts[2]}
          </Typography>

          <hr className="my-5" />
          <p className="font-bold ">Wat zit in het pakket?</p>
          <div className="my-5 space-y-5">
            {tab === 'basis' &&
              optionsOne.map((opt, idx) => (
                <Checkbox key={opt} selected={idx < 7 && true} label={opt} />
              ))}

            {tab === 'standaard' &&
              optionsTwo.map((opt, idx) => (
                <Checkbox key={opt} selected={idx < 10 && true} label={opt} />
              ))}

            {tab === 'custom' &&
              optionsThree.map((opt, idx) => (
                <Checkbox key={opt} selected={true} label={opt} />
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

const optionsOne = [
  'Levertijd: 3 - 4 weken',
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

const optionsTwo = [
  'Levertijd: < 1.5 - 2 mnd',
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

const optionsThree = [
  'Levertijd: < 2 - 2.5 mnd',
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
