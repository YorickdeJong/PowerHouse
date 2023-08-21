'use client';

import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import { Icons } from '@/components/icons';
import Motion from '@/components/motion';

interface OnzeDienstenSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function OnzeDienstenSection({
  className,
  ...props
}: OnzeDienstenSectionProps) {
  const [text, setText] = useState();

  return (
    <Tabs.Root
      onValueChange={setText as any}
      className="bg-card"
      defaultValue={links[0].title}
    >
      <div className={cn('container  py-20', className, {})} {...props}>
        <Typography variant={'heading'}>ONZE DIENSTEN</Typography>
        <Caption className="mb-4 mt-16">Our Services</Caption>
        <Typography variant={'title'}>WAT WIJ U KUNNEN BIEDEN</Typography>

        <Typography variant={'muted'} className="mt-2 text-container">
          {links.map((link) => (
            <Tabs.Content value={link.title} key={link.title}>
              <Motion key={text} initial="hidden">
                {link.text}
              </Motion>
            </Tabs.Content>
          ))}
        </Typography>
        <hr className="my-8" />
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
        <Tabs.List>
          {links.map((link) => (
            <Tabs.Trigger asChild value={link.title} key={link.title}>
              <div className="group flex cursor-pointer items-center justify-between border-b border-border/50 py-5">
                <p className={`text-[22px] font-bold uppercase ${text === link.title ? 'text-blue-500' : ''} group-hover:font-extrabold`}>
                  {link.title}
                  </p>
                  <Motion initial="hidden">
                    <div className="grid h-9 w-9 place-content-center rounded-full p-1 group-hover:bg-primary">
                      <Icons.arrowUp className="p-3" />
                    </div>
                  </Motion>
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {/* <Image
            src={`/assets/images/video.svg`}
            alt=""
            className="mt-20 aspect-video w-full cursor-pointer"
            width={388}
            height={226}
          /> */}
        </div>
      </div>
    </Tabs.Root>
  );
}

const links = [
  {
    title: 'business strategie',
    text: `Bij de eerste stap is ons doel is om uw kernwaarden, de reden waarom u uw bedrijf bent gestart en uw producten te 
    begrijpen, zodat we een website kunnen creëren die echt bij u past en gepaste klanten aantrekt`,
  },
  {
    title: 'design & development',
    text: `We zijn toegewijd aan het ontwerp en de ontwikkeling van uw website. Met de hulp van ervaren ontwerpers brengen we uw bedrijf visueel tot leven. 
    Onze samenwerking met bekwame programmeurs zorgt voor een naadloze overgang van ontwerp naar implementatie, waardoor uw visie werkelijkheid wordt.`,
  },
  {
    title: 'marketing',
    text: `Wij, en jij waarschijnlijk ook, willen dat jouw website potentiële klanten aantrekt. Daarom gaan wij aan de slag om uw website online vindbaar te maken.
    Door het optimaliseren van uw website voor googles zoekmachine en advertenties voor jouw website te maken, zorgen wij ervoor dat mensen uw website bezoeken.`,
  },
  {
    title: 'onderhoud',
    text: `We uiten onze voortdurende toewijding aan het succes van uw bedrijf. Een website up-to-date houden is onmisbaar voor het genereren van online klanten.
    Een niet goed werkende of verouderde website zorgt ervoor dat jij klanten kan kwijt raken. Geen zorgen, met onze hulp zullen jouw klanten altijd te vreden zijn over jouw website. 
    `,
  },
];
