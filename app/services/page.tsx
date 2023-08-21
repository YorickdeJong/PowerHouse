import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import { Images } from '@/components/images';
import LetsTalk from '@/components/lets-talk';
import Motion from '@/components/motion';

import ServicePlan from './service-plan';
import Services from './services';

export default function ServicesPage() {
  return (
    <section>
      <div className="container">
        <Breadcrumb pageTitle="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
          <div>
            <Caption className="mt-20">Wat wij jou bieden</Caption>
            <Typography className="mt-5" variant={'title'}>
              Onze Diensten{' '}
            </Typography>
            <Typography className="mt-3" variant={'muted'}>
              Blue Waterfall geeft jouw bedrijf een volledig pakket, zodat jij
              manieren klanten binnenhaalt via het web. Want, laten we eerlijk
              zijn. U wilt niet een website laten bouwen voor uw plezier. Nee, u
              doet dit met het doel om meer klanten te genereren via het web.
              <br />
              <br />
              Wij snappen dit volkomen. Daarom hebben wij onze strategie hierop
              aangepast. Door met ons in zee te gaan, zorgen wij ervoor dat uw
              website wordt bezocht en u hiermee potentiële klanten binnen
              haalt.
              <br />
              <br />
            </Typography>
          </div>
          <div className="flex flex-col justify-end">
            <LetsTalk light className="max-md:my-10 md:-mb-10" />
            <Motion initial="down">
              <Images.capsule />
            </Motion>
          </div>
        </div>
      </div>
      <Services />
      <ServicePlan />
    </section>
  );
}
