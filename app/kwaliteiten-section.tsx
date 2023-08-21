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
            Wij maken niet een gewone website voor jou. Als jij bij ons boekt
            zorgen wij ervoor dat jouw bedrijf klanten binnen haalt.
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
          className="pb-10 mt-10 md:mt-0 lg:mt-0 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {data.map((el) => (
            <Card
              projectDetails={[]}
              isDesktopProject={false}
              {...el}
              key={el.label}
            />
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
    text: 'Wij zijn proactief in het bouwen van uw website, luisteren naar uw ideeën en bieden strategische tips om effectief nieuwe klanten aan te trekken.',
  },
  {
    label: 'partner',
    icon: Images[24],
    text: 'Jij kent jouw klanten het best; daarom zien wij u als partner in het aantrekken van meer klanten voor uw bedrijf.',
  },
  {
    label: 'wordt gezien',
    icon: Images.people,
    text: 'Niemand zit te wachten om geld te betalen voor het bouwen van een website, om daarna onvindbaar te zijn. Wij zorgen dat klanten uw website bezoeken.',
  },
  {
    label: 'gemak',
    icon: Images.tree,
    text: 'Tijdens onze samenwerking zit u niet te wachten op hoofdpijn door onduidelijke communicatie o.i.d. Wij zorgen ervoor dat jouw traject vlekkeloos verloopt.',
  },
];
