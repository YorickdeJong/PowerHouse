import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import LetsTalk from '@/components/lets-talk';

interface BlueWaterfallProps extends HTMLAttributes<HTMLDivElement> {}

export default function BlueWaterfall({
  className,
  ...props
}: BlueWaterfallProps) {
  return (
    <div className="bg-primary pt-14 pb-24 mb-10">
      <div className={cn('container relative', className, {})} {...props}>
        <Caption primary>ons bedrijf</Caption>
        <Typography variant={'title'} className="mt-4 mb-2">
          De reden voor blue waterfall
        </Typography>
        <Typography variant={'muted'} className="text-white/80">
          Mischief glory patronum beaded I knitted treacle train whomping.
          Squashy hagrid hippogriffs snivellus downfall weasley shrieking
          ollivanders clean shrieking. Our emporium grindylows alohamora bag
          letters better us fire. Locket roaring red 9¾ many fell 50
          transfiguration crookshanks sound. Alohamora daisies sorcerer&apos;s
          dagger tap-dancing voices locomotor portkey godric&apos;s. Honeydukes
          padma flying snape brass jinxes tart. <br />
          <br />
          Would law blood eyes beaded follow potter other. Sorcerer&apos;s us
          hunt kiss yew spider me forbidden tweak.
          <br />
          <br />
          Potter beaters to half-moon-glasses sirius got inches. Must turns lily
          norwegian nitwit are phoenix quidditch answer.
        </Typography>
        <LetsTalk reversed light className="absolute right-10 top-[105%]" />
      </div>
    </div>
  );
}
