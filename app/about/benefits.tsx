import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Card from '@/components/card';

interface BenefitsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Benefits({ className, ...props }: BenefitsProps) {
  return (
    <div className={cn('', className, {})} {...props}>
      <Caption>Benefits for choosing us</Caption>
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-20">
        <Typography variant={'title'} className="mb-2 mt-4">
          Waarom Blue waterfall kiezen?
        </Typography>
        <Typography variant={'muted'}>
          Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {data.map((item) => (
          <Card key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
const data = [
  {
    label: 'Arthike',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. consectetur adipiscing elit, sed ',
  },
  {
    label: 'Yorick',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. consectetur adipiscing elit, sed ',
  },
  {
    label: 'olivier',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. consectetur adipiscing elit, sed ',
  },
  {
    label: 'nick',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. consectetur adipiscing elit, sed ',
  },
];
