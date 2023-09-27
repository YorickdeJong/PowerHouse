import { HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { Images } from './images';

interface CompType {}

export default function BrandBlack({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('ml-4', {}, className)}>
      <Images.logo />
    </Link>
  );
}
