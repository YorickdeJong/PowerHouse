import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';

import Person from './person';

export default function AboutPage() {
  return (
    <section className="container">
      <Breadcrumb pageTitle="Over Ons" />
      <Typography className="mt-5" variant={'title'}>
        Over ons
      </Typography>
      <Person />
    </section>
  );
}
