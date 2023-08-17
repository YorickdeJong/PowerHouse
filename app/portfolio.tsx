import { HTMLAttributes } from 'react';
import { getReviews } from '@/sanity/sanity-utils';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Card from '@/components/card';

interface PortfolioProps extends HTMLAttributes<HTMLDivElement> {}

export default async function Portfolio({
  className,
  ...props
}: PortfolioProps) {
  const reviews = await getReviews();

  return (
    <section className="bg-card">
      <div className={cn('container  py-20', className, {})} {...props}>
        <Typography variant={'heading'}>Portfolio</Typography>
        <Caption className="mb-4 mt-16">Portfolio</Caption>
        <div className="flex items-center justify-between">
          <Typography variant={'title'}>ons werk</Typography>
          <Button variant={'outline'}>Bekijk alles</Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((el) => (
            <Card key={el.label} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
