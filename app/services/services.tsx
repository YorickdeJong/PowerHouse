import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Card from '@/components/card';
import { Icons } from '@/components/icons';

interface ServicesProps extends HTMLAttributes<HTMLDivElement> {}

export default function Services({ className, ...props }: ServicesProps) {
  return (
    <>
      <div
        className={cn(
          'my-7 grid grid-cols-1 lg:grid-cols-2 container gap-5',
          className,
          {}
        )}
        {...props}
      >
        {data.map((el) => (
          <Card squared key={el.label} {...el} />
        ))}
      </div>
    </>
  );
}

const data = [
  {
    icon: Icons.phoneCall,
    label: 'Gratis consultatie',
    text: 'Bij ons krijg je gratis ondersteuning op het pad naar je eigen website. We geven advies over jouw concept en helpen je bij het maken van de best mogelijke keuze.',
  },
  {
    icon: Icons.brain,
    label: 'STrategie ontwikkeling',
    text: 'Besluit je met ons samen te werken? Dan ontwikkelen we een strategie die specifiek op jouw idee is afgestemd. Daarbij hoort een grondige marktanalyse, zodat we de meest effectieve stappen voor succes kunnen bepalen.',
  },
  {
    icon: Icons.brush,
    label: 'ontwerp',
    text: 'Met de strategie op zak, stappen we over naar het ontwerpproces. We presenteren een reeks designopties, gebaseerd op de uitkomst van onze marktanalyse en jouw specifieke behoeften.',
  },
  {
    icon: Icons.terminal,
    label: 'implementatie',
    text: 'Zodra het ontwerp klaar is, transformeren we dat naar een volledig functionele website. We zorgen er ook voor dat jouw website goed geoptimaliseerd is, zodat hij hoog in de zoekresultaten van Google komt te staan.',
  },
];
