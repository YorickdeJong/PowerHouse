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
        <Typography variant={'title'} className="mb-2 mt-4 text-background">
          ons verhaal
        </Typography>
        <Typography variant={'muted'} className="text-background">
          Wij zijn 4 ingineurs, afgestudeerd van de TU Delft. Wij hebben 5+
          jaren geleerd hoe wij problemen kunnen signaleren en deze kunnen
          oplossen. Samen met de ervaring die wij hebben opgedaan over bedrijven
          oprichten, webdevelopment en marketing zorgen wij ervoor dat jij een
          website krijgt die klanten aantrekt en jouw bedrijf laat bloeien.
          <br />
          <br />
          Wij zijn toegewijd aan het creëren van innovatieve digitale
          oplossingen voor middelgrote ondernemingen. Door gebruik te maken van
          outsourcing en kunstmatige intelligentie, bouwen we geweldige
          producten tegen een eerlijke prijs
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
