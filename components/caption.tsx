import { Children, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

interface CaptionProps extends HTMLAttributes<HTMLDivElement> {
  childrenClassName?: string;
}

export default function Caption({
  className,
  childrenClassName,
  ...props
}: CaptionProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Icons.star />
      <p
        className={cn(
          'font-bold uppercase text-primary',
          childrenClassName,
          {}
        )}
        {...props}
      />
    </div>
  );
}
