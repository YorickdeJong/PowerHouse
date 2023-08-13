import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Images } from './images';
import { Typography } from './ui/typography';

interface ReviewMsgProps extends HTMLAttributes<HTMLDivElement> {}

export default function ReviewMsg({ className, ...props }: ReviewMsgProps) {
  return (
    <div className={cn('', className, {})} {...props}>
      <Images.quote className="ml-auto block aspect-square w-14 scale-y-[-1]" />
      <div>
        <p className="text-xl font-semibold text-foreground">Elisha Atif</p>
        {Array.from(Array(5)).map((idx) => (
          <Images.yellowStar className="mr-1 inline-block aspect-square w-3 md:w-4" />
        ))}
        <Typography variant={'muted'} className="mt-3 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci
          augue, bibendum id risus in, tristique dictum urna. In imperdiet enim
          ullamcorper aliquam porta. Duis ultricies metus posuere consequat
          tempus.{' '}
        </Typography>
      </div>
      <Images.quote className="aspect-square w-14" />
    </div>
  );
}
