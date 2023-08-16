import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { Images } from './images';
import Motion from './motion';

interface LetsTalkProps extends HTMLAttributes<HTMLDivElement> {
  light?: boolean;
  reversed?: boolean;
}

export default function LetsTalk({
  className,
  light,
  ...props
}: LetsTalkProps) {
  return (
    <Link href={'/booking'}>
      <Motion
        asChild
        initial="scale0"
        transition={{ delay: 0.2 }}
        whileInView={'scaleUp'}
      >
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
            <Icons.arrowUp
              className={cn('absolute inset-0 m-auto', {
                'scale-x-[-1]': props.reversed,
              })}
            />
          </Motion>
        </section>
      </Motion>
    </Link>
  );
}
