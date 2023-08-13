import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import { Images } from '@/components/images';
import LetsTalk from '@/components/lets-talk';
import Motion from '@/components/motion';

export default function ServicesPage() {
  return (
    <section>
      <div className="container">
        <Breadcrumb pageTitle="Services" />
        <Caption className="mt-20">What We are offering</Caption>
        <Typography className="mt-5" variant={'title'}>
          Our Services{' '}
        </Typography>
        <Typography className="mt-3" variant={'muted'}>
          Order norwegian dragon-scale tap-dancing fanged wizard grindylows
          werewolf wool. Head petrificus ministry-of-magic polyjuice knew.{' '}
          <br />
          <br />
          Chalice stroke remembrall hunt fat phials mudbloods unwilling banges.
          Shack yer in restricted charm treats crush who. <br />
          <br /> Glory impedimenta parvati dervish dirigible dead dirt stairs.
          Out downfall wingardium you robes keeper sorcerer&apos;s spleens
          feast.{' '}
        </Typography>
        <LetsTalk light className="my-10" />
        <Motion initial="down">
          <Images.capsule />
        </Motion>
      </div>
    </section>
  );
}
