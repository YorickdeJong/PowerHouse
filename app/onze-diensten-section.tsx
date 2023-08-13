import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import { Icons } from '@/components/assets';
import Caption from '@/components/caption';

interface OnzeDienstenSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function OnzeDienstenSection({
  className,
  ...props
}: OnzeDienstenSectionProps) {
  return (
    <section className="bg-card">
      <div className={cn('container  py-20', className, {})} {...props}>
        <Typography variant={'heading'}>ONZE DIENSTEN</Typography>
        <Caption className="mb-4 mt-16">Our Services</Caption>
        <Typography variant={'title'}>wAT WIJ U KUNNEN BIEDEN</Typography>
        <Typography variant={'muted'} className="mt-2">
          Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Typography>
        <hr className="my-8" />
        <div>
          {links.map((link) => (
            <div
              key={link.title}
              className="group flex cursor-pointer items-center justify-between border-b border-border/50 py-5"
            >
              <p className="text-[22px] font-bold uppercase group-hover:text-primary ">
                {link.title}
              </p>
              <div className="h-9 w-9 rounded-full p-1 group-hover:block  group-hover:bg-primary">
                <Icons.arrowUp />
              </div>
            </div>
          ))}
        </div>
        <Image
          src={`/assets/images/video.svg`}
          alt=""
          className="mt-20 aspect-video w-full cursor-pointer"
          width={388}
          height={226}
        />
      </div>
    </section>
  );
}

const links = [
  {
    title: 'business strategie',
    href: '',
  },
  {
    title: 'design & development',
    href: '',
  },
  {
    title: 'marketing',
    href: '',
  },
  {
    title: 'onderhoud',
    href: '',
  },
];
