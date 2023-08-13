import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Icons, Images } from './assets';
import Motion from './motion';

interface LetsTalkProps extends HTMLAttributes<HTMLDivElement> {
  white?: boolean;
}

export default function LetsTalk({
  className,
  white,
  ...props
}: LetsTalkProps) {
  return (
    <section
      className={cn(
        'relative aspect-square w-fit rounded-full bg-primary p-2',
        { 'bg-foreground': white },
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
