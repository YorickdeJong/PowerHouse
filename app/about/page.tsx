import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';

import Benefits from './benefits';
import Person from './person';
import VerhaalSection from './verhaal';

export default function AboutPage() {
  return (
    <section>
      <div className="container">
        <Breadcrumb pageTitle="Over Ons" />
        <Typography className="mt-5" variant={'title'}>
          Over ons
        </Typography>
        <Person />
        <Benefits />
      </div>
      <VerhaalSection />
    </section>
  );
}
