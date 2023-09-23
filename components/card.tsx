'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { Typography } from './ui/typography';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  text: any;
  image?: string;
  title: string | '';
  price: string | '';
  kleuren?: string;
  hoverText?: string;
  handle: string | '';
  houseCard?: boolean;
}

export default function Card({
  className,
  text,
  image,
  houseCard,
  title,
  kleuren,
  price,
  hoverText,
  handle,
  ...props
}: CardProps) {


  const linkHref = {
    pathname: `/shop/${handle|| ''}`,
  };
  
  return (
    <Motion initial="down" asChild>
      <Link href={linkHref}>
        <div
          className={cn(
            'block space-y-3 overflow-hidden hover:scale-105 bg-white ',
            className,
            {
              'group/image  cursor-pointer': image,
              'h-[500px]': houseCard,
            }
          )}
        >
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={image!}
            alt={''}
            className={cn(
              '-mb-7 w-full h-[600px]   object-cover object-top',
            )}
            width={1000}
            height={600}
          />
        </div>
          <div className='px-3'>
            <div className="flex items-center gap-4">
              <p
                className={cn(
                  'grow text-lg font-bold uppercase md:text-lg text-black ',
                  {
                    'md:text-lg mb-3': houseCard,
                  }
                )}
              >
                {title}
              </p>

              <p
                className={cn(
                  ' grow text-lg font-bold uppercase md:text-lg text-black ',
                  {
                    'md:text-lg mb-3': houseCard,
                  }
                )}
              >
                €{Number(price).toFixed(2)}
              </p>
            </div>
            <p className="leading-relaxed text-muted">{text}</p>
            <p className="leading-relaxed text-muted">{kleuren} kleuren</p>
          </div>
        </div>
      </Link>
    </Motion>
  );
}
