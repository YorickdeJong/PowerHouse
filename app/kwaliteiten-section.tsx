import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Card from '@/components/card';
import { Images } from '@/components/images';
import LetsTalk from '@/components/lets-talk';
import Motion from '@/components/motion';

interface KwaliteitenSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function KwaliteitenSection({
  className,
  ...props
}: KwaliteitenSectionProps) {
  return (
    <div className={cn('container  py-20', className, {})} {...props}>
      <Typography variant={'heading'}>kwaliteiten</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <Caption className="mb-4 mt-16">Over Ons</Caption>
          <Typography variant={'title'}>
            waarom voor blue waterfall kiezen?
          </Typography>
          <Typography variant={'muted'} className="mt-2">
            Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <div className="mt-10">
            <LetsTalk className="translate-y-4" />
            <Motion initial="down">
              <Images.capsule />
            </Motion>
          </div>
        </div>
        <Motion
          transition={{ staggerChildren: 0 }}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {data.map((el) => (
            <Card projectDetails = {[]} isDesktopProject = {false} {...el} key={el.label} />
          ))}
        </Motion>
      </div>
    </div>
  );
}

const data = [
  {
    label: 'Assertiviteit',
    icon: Images.react,
    text: 'Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: 'partner',
    icon: Images[24],
    text: 'Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: 'wordt gezien',
    icon: Images.people,
    text: 'Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: 'gemak',
    icon: Images.tree,
    text: 'Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
