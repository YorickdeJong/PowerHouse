import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Card from '@/components/card';

interface BenefitsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Benefits({ className, ...props }: BenefitsProps) {
  return (
    <div className={cn('', className, {})} {...props}>
      <Caption>Voordelen om voor ons te kiezen</Caption>
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-20">
        <Typography variant={'title'} className="mb-2 mt-4">
          Waarom Blue waterfall kiezen?
        </Typography>
        <Typography variant={'muted'}>
          Wij maken niet een gewone website voor jou. Als jij bij ons boekt
          zorgen wij ervoor dat jouw bedrijf klanten binnen haalt.
        </Typography>
      </div>
      <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {data.map((item) => (
          <Card
            projectDetails={[]}
            isDesktopProject={false}
            key={item.label}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
const data = [
  {
    label: 'Arthike',
    text: 'Met mijn eerste bedrijf, Schoolklaar, heb ik geleerd dat transparantie en communicatie zijn essentieel voor een vruchtbare samenwerking. Service is key. Als u niet tevreden bent, ben ik dat ook niet.',
  },
  {
    label: 'Yorick',
    text: 'Met mijn ervaring, opgedaan met Learning Bot en Technische Natuurkunde, heb ik geleerd om technische problemen te definiëren en op te lossen. Ik zorg ervoor dat uw website of app makkelijk te gebruiken is en het altijd doet. ',
  },
  {
    label: 'olivier',
    text: 'Met mijn jaren ervaring in design aan de TU Delft, heb ik geleerd dat een goed design het vermogen heeft om de interactie tussen uw merk en uw doelgroep te versterken, wat resulteert in betere conversies en klanttevredenheid.    ',
  },
  {
    label: 'nick',
    text: 'Met mijn startup, Spark, heb ik geleerd wat mensen drijft en waarom zij bepaalde beslissingen maken. Door deze kennis toe te passen op webdevelopment, zorg ik ervoor dat uw website klanten binnen haalt.',
  },
];
