import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import { Images } from '@/components/images';
import Motion from '@/components/motion';

interface VerhaalSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function VerhaalSection({
  className,
  ...props
}: VerhaalSectionProps) {
  return (
    <section className="bg-white pt-14">
      <div className={cn('container', className, {})} {...props}>
        <Caption dark>hoe we zijn gestrart</Caption>
        <Typography variant={'title'} className="text-background mt-4 mb-2">
          ons verhaal
        </Typography>
        <Typography variant={'muted'} className="text-background">
          Telescope die half-blood headmaster must floor teacup catherine
          wormtail. Winky soul potter woes dementors room. Forest back goblet
          fairy black answer managed through candles wizard. <br />
          <br />
          Holly stroke erumpent answer rise our time-turner cursed. Mimbletonia
          come gnomes dirt die chalice.
        </Typography>
        <Motion
          initial="down"
          whileInView={{ y: 5, opacity: 1 }}
          className="mt-10"
        >
          <Images.capsule className="hue-rotate-30" />
        </Motion>
      </div>
    </section>
  );
}
