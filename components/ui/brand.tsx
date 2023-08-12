import { HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface CompType {}

export default function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('', {}, className)}>
      <Image
        src={'/assets/images/logo.png'}
        alt="logo"
        width={100}
        height={100}
      />
    </Link>
  );
}
