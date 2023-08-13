import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import LetsTalk from '@/components/lets-talk';

interface KwaliteitenSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function KwaliteitenSection({
  className,
  ...props
}: KwaliteitenSectionProps) {
  return (
    <div className={cn('container  py-20', className, {})} {...props}>
      <Typography variant={'heading'}>kwaliteiten</Typography>
      <Caption className="mb-4 mt-16">Over Ons</Caption>
      <Typography variant={'title'}>
        waarom voor blue waterfall kiezen?
      </Typography>
      <Typography variant={'muted'} className="mt-2">
        Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <div>
        <LetsTalk />
      </div>
    </div>
  );
}
