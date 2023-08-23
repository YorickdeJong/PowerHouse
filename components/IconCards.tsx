
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { useProjectState } from '@/context/portfolio-provider';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: (props: any) => JSX.Element;
  text: any;
  image?: string;
  portfolioPage?: boolean;
  squared?: boolean;
  reversed?: boolean;
  roundedIcon?: boolean;
  portfolioDetailsPage?: boolean;
  postImage?: string;
}

export default function IconCard({
  className,
  icon,
  label,
  text,
  roundedIcon,
  ...props
}: CardProps) {
  return (
    <Motion initial="down" asChild>
      <section
        className={cn(
          'block space-y-3 overflow-hidden rounded-2xl bg-card  p-7 lg:p-8',
          className,
          {
            'lg:grid lg:grid-cols-2 lg:gap-72 lg:items-center':
              props.portfolioDetailsPage,
          }
        )}
      >
        <div>
            <div
                className={cn(
                'mb-8 h-[70px] w-[70px] rounded-full bg-secondary',
                {
                'rounded-2xl': props.squared,
                }
            )}
            >
            {icon?.({ className: 'p-4' })}
            </div>
                <p
                    className={cn(
                        'mb-2 grow text-xl font-bold uppercase md:text-2xl',
                        {
                        'lg:text-[40px] lg:mb-4': props.portfolioDetailsPage,
                        }
                    )}
                    >
                    {label}
                </p>
        </div>
        <p className="leading-relaxed text-muted">{text}</p>
      </section>
    </Motion>
  );
}

