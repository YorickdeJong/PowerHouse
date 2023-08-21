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
    <div className="bg-primary pb-24 pt-14 max-md:mb-10">
      <div className={cn('container relative', className, {})} {...props}>
        <Caption primary>ons bedrijf</Caption>
        <Typography variant={'title'} className="mb-2 mt-4">
          De reden voor blue waterfall
        </Typography>
        <Typography variant={'muted'} className="text-white/80">
          Internet, het wordt wel eens het digitale dorpsplein van de toekomst
          genoemd. Alleen kan niet iedereen zomaar op dat plein wandelen. Het
          bouwen van een online aanwezigheid kan duur zijn, terwijl het
          tegenwoordig juist zo belangrijk is. Dat is precies waar wij
          verandering in willen brengen!
          <br />
          <br />
          Het gaat echter niet alleen om het bouwen van software. Het is zinloos
          als niemand jouw product gebruikt. Daarom kijken we verder dan alleen
          code. Samen met jou duiken we in je bedrijfsplan en bouwen we een
          bedrijf rondom je MVP.
          <br />
          <br />
          Geloof ons, het zijn de kleine dingen die een groot verschil maken. We
          hebben dit zelf meegemaakt en weten dus hoe we jou kunnen helpen. Wij
          zijn niet alleen je softwareontwikkelaars, maar ook je partners. Samen
          zullen we succes boeken op het digitale plein van de toekomst. Stap je
          met ons mee?.
        </Typography>
        <LetsTalk reversed light className="absolute right-10 top-[105%]" />
      </div>
    </div>
  );
}
