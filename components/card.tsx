import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: (props: any) => JSX.Element;
  text: string;
  image?: string;
  portfolioPage?: boolean;
  squared?: boolean;
  roundedIcon?: boolean;
  postImage?: string;
}

export default function Card({
  className,
  icon,
  postImage,
  label,
  text,
  roundedIcon,
  image,
  ...props
}: CardProps) {
  const Comp = image ? Link : 'section';
  return (
    <Motion initial="down" transition={{ delay: 0 }} asChild>
      <Comp
        href={'/portfolio/' + label.toLowerCase().replaceAll(' ', '-')}
        className={cn(
          'block space-y-3 overflow-hidden rounded-lg bg-card  p-7 lg:p-8',
          className,
          {
            'group/image hover:shadow-md cursor-pointer': image,
            'bg-secondary': image && !props.portfolioPage,
            'bg-transparent p-0': postImage,
          }
        )}
      >
        {(image || postImage) && (
          <Image
            src={image! || postImage!}
            alt=""
            className={cn(
              'aspect-square w-full -translate-y-7 scale-x-125 object-cover',
              {
                'object-contain scale-x-100 translate-y-0 mb-12': postImage,
                'md:h-96': props.portfolioPage,
              }
            )}
            width={400}
            height={400}
          />
        )}
        {icon && (
          <div
            className={cn('h-[70px] w-[70px] rounded-full bg-secondary', {
              'rounded-2xl': props.squared,
            })}
          >
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
                  transition: { delay: 0.5, duration: 1.5 },
                }}
                className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-white"
              />
            </div>
          )}
          <p
            className={cn('grow text-xl font-bold uppercase', {
              'text-2xl': postImage,
            })}
          >
            {label}
          </p>
          <Motion initial="hidden">
            <div
              className={cn(
                'grid h-5 w-5 place-content-center rounded-full bg-primary p-1',
                { hidden: !image }
              )}
            >
              <Icons.arrowUp className="p-5 text-background" />
            </div>
          </Motion>
        </div>
        <p className="leading-relaxed text-muted">{text}</p>
      </Comp>
    </Motion>
  );
}
