import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { Images } from './images';
import Motion from './motion';

interface LetsTalkProps extends HTMLAttributes<HTMLDivElement> {
  light?: boolean;
}

export default function LetsTalk({
  className,
  light,
  ...props
}: LetsTalkProps) {
  return (
    <section
      className={cn(
        'relative aspect-square w-fit rounded-full bg-primary p-2',
        { 'bg-foreground text-background': light },
        className,
        {}
      )}
      {...props}
    >
      <Images.letsTalk className="animate-spin [animation-duration:60s]" />
      <Motion asChild whileInView={{ scale: [0, 1.5, 0.8, 1] }}>
        <Icons.arrowUp className="absolute inset-0 m-auto" />
      </Motion>
    </section>
  );
}
