import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';

// container prop defines max width of your container
// Typography is a component that defines the font size and weight

export default function ServicesPage() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
          <div>
            <Caption className="mt-20">Wat wij jou bieden</Caption>
            <Typography className="mt-5" variant={'title'}>
              Header Here{' '}
            </Typography>
            <Typography className="mt-3" variant={'muted'}>
              SubHeader Here
              <br />
              <br />
            </Typography>
          </div>

        </div>
      </div>
    </section>
  );
}
