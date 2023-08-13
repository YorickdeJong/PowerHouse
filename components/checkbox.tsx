import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  selected?: boolean;
}

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <>
      <div className={cn('flex  items-center gap-3', className, {})} {...props}>
        <Icons.tick
          className={cn('text-primary', { 'text-[#767882]': !props.selected })}
        />
        <p className={cn('font-medium', { 'text-[#767882]': !props.selected })}>
          {props.label}
        </p>
      </div>
    </>
  );
}
