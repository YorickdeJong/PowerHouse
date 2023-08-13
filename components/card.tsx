import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
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
            'bg-secondary group/image hover:shadow-md cursor-pointer': image,
          }
        )}
        {...props}
      >
        {image && (
          <Image
            src={image}
            alt=""
            className="aspect-square w-full -translate-y-7 scale-x-125 object-cover"
            width={400}
            height={400}
          />
        )}
        {icon && (
          <div className="h-[70px] w-[70px] rounded-full bg-secondary">
            {icon?.({ className: 'p-4' })}
          </div>
        )}
        <div className="flex items-center gap-4">
          {image && (
            <div className="relative h-2.5 w-7">
              <div className="absolute left-0 top-[4px] h-0.5 w-[23px] bg-white" />
              <Motion
                initial={{ left: 0 }}
                whileInView={{
                  left: '18px',
                  transition: { delay: 0.1, duration: 0.8 },
                }}
                className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-white"
              />
            </div>
          )}
          <p className="grow text-xl font-bold uppercase">{label}</p>
          <Motion initial="hidden">
            <div className="grid h-5 w-5 place-content-center rounded-full bg-primary p-1">
              <Icons.arrowUp className="p-5 text-background" />
            </div>
          </Motion>
        </div>
        <p className="leading-relaxed text-muted">{text}</p>
      </section>
    </Motion>
  );
}
