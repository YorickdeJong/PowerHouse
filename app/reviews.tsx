import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import ReviewMsg from '@/components/review-msg';
import ReviewSlider from '@/components/review-slider';

interface ReviewsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Reviews({ className, ...props }: ReviewsProps) {
  return (
    <div className={cn('container  py-20', className, {})} {...props}>
      <Typography variant={'heading'}>Revews</Typography>
      <Caption className="mb-4 mt-16">Wat onze klanten over ons zeggen</Caption>
      <Typography variant={'title'}>testimonials</Typography>
      <div className="grid grid-cols-1 md:mt-32 md:grid-cols-3 md:gap-4">
        <ReviewMsg />
        <ReviewSlider className="md:col-span-2" />
      </div>
    </div>
  );
}
