import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import Motion from './motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: (props: any) => JSX.Element;
  text: string;
  image?: string;
  roundedIcon?: boolean;
}

export default function Card({
  className,
  icon,
  label,
  text,
  roundedIcon,
  image,
  ...props
}: CardProps) {
  return (
    <Motion initial="down" transition={{ delay: 0 }} asChild>
      <section
        className={cn(
          'space-y-3 overflow-hidden rounded-lg bg-card  p-7 lg:p-8',
          className,
          {
            'bg-secondary p-0': image,
          }
        )}
        {...props}
      >
        {image && (
          <Image
            src={image}
            alt=""
            className="aspect-square w-full object-cover"
            width={400}
            height={400}
          />
        )}
        {icon && (
          <div className="h-[70px] w-[70px] rounded-full bg-secondary">
            {icon?.({ className: 'p-4' })}
          </div>
        )}

        <p className="text-xl font-bold uppercase">{label}</p>
        <p className="leading-relaxed text-muted">{text}</p>
      </section>
    </Motion>
  );
}
