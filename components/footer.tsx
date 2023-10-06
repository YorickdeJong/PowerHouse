import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <div className={cn('mt-12 pt-14 bg-[#FFFBFB]', className, {})} {...props}>
      <div className="mx-5 items-center justify-between border-b-[1px] border-b-gray-200 py-6 md:flex">
        <Brand />
        <div className="flex items-end justify-between">
          <div className="inline-flex gap-[23px] pb-4 pt-8 max-md:flex-col">
            {links.map((link) => (
              <Link
                href={link.href}
                className="text-base font-normal text-[#121212] hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>{' '}
        <div className="flex h-[54px] w-[179.05px] gap-[22.74px] bg-primary px-[28.42px] py-[14.21px] max-md:ml-auto rounded-xl">
          <Link href={'/'}>
            <Icons.facebook className="fill-white stroke-none transition-all hover:fill-none hover:stroke-white" />
          </Link>

          <Link href={'/'}>
            <Icons.twitter className="fill-white stroke-none transition-all hover:fill-none hover:stroke-white" />
          </Link>

          <Link href={'/'}>
            <Icons.linkedin className="fill-white stroke-none transition-all hover:fill-none hover:stroke-white" />
          </Link>
        </div>
      </div>{' '}
      <div className=" my-8 text-center text-[#121212] mr-20">
        All rights reserved by Blue Waterfall
      </div>
    </div>
  );
}

const links = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
];
