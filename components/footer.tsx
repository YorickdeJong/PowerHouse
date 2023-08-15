import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <div className={cn('pt-14', className, {})} {...props}>
      <div className="mx-5 items-center justify-between border-y border-y-border/40 py-6 md:flex">
        <Brand />
        <div className="flex items-end justify-between">
          <div className="inline-flex gap-[23px] pb-4 pt-8 max-md:flex-col">
            {links.map((link) => (
              <Link
                href={link.href}
                className="text-base font-normal text-neutral-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>{' '}
        <div className="flex h-[54px] w-[179.05px] gap-[22.74px] bg-primary px-[28.42px] py-[14.21px] max-md:ml-auto">
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
      <div className=" my-5 text-center text-neutral-200">
        All rights reserved by Blue water
      </div>
    </div>
  );
}

const links = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/services' },
  { label: 'Over ons', href: '/portfolio' },
  { label: 'FAQ’S', href: '/faqs' },
  { label: 'Ons werk', href: '/portfolio' },
  { label: 'Privacy & AVG', href: '/privacy' },
];
