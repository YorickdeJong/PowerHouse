import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import Motion from './motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: (props: any) => JSX.Element;
  text: string;
  image?: string | Element;
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
          'space-y-3 rounded-lg bg-card  p-7 lg:p-8',
          className,
          {}
        )}
        {...props}
      >
        <div className="h-[70px] w-[70px] rounded-full bg-secondary">
          {icon?.({ className: 'p-4' })}
        </div>
        <p className="text-xl font-bold uppercase">{label}</p>
        <p className="leading-relaxed text-muted">{text}</p>
      </section>
    </Motion>
  );
}
