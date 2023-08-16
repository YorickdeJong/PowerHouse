'use client';

import { HTMLAttributes, useState } from 'react';
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
        <Typography variant={'title'}>wAT WIJ U KUNNEN BIEDEN</Typography>

        <Typography variant={'muted'} className="mt-2">
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
                  <p className="text-[22px] font-bold uppercase group-hover:text-primary ">
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
          <Image
            src={`/assets/images/video.svg`}
            alt=""
            className="mt-20 aspect-video w-full cursor-pointer"
            width={388}
            height={226}
          />
        </div>
      </div>
    </Tabs.Root>
  );
}

const links = [
  {
    title: 'business strategie',
    text: ' ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores eos, quisquam iste nostrum fuga.',
  },
  {
    title: 'design & development',
    text: 'elit odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga.',
  },
  {
    title: 'marketing',
    text: 'ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga.',
  },
  {
    title: 'onderhoud',
    text: 'libero dolor ea fugit possimus eos, quisquam iste nostrum fuga. adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae dignissimos ',
  },
];
