import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

interface CaptionProps extends HTMLAttributes<HTMLDivElement> {
  childrenClassName?: string;
  dark?: boolean;
  primary?: boolean;
}

export default function Caption({
  className,
  childrenClassName,
  ...props
}: CaptionProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <p
        className={cn('font-bold uppercase text-primary', childrenClassName, {
          'text-background': props.primary,
        })}
        {...props}
      />
    </div>
  );
}
