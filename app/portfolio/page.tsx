
import { getPortfolio } from '@/sanity/sanity-utils';

import { Typography } from '@/components/ui/typography';
import Card from '@/components/card';


export default async function PortfolioPage() {
  const portfolio = await getPortfolio();
  console.log('portfolio', portfolio);

  return (
    <>
      <Typography className="mt-5" variant={'title'}>
        PortFolio
      </Typography>
      <Typography className="mt-3" variant={'muted'}>
        Op deze pagina ziet u een paar van onze projecten ter inspiratie. Per
        project gaan we in op de probleemstelling, de oplossing en het verkregen
        resultaat. U kunt ons ook altijd bellen om meer informatie te krijgen
        over onze voltooide projecten.
      </Typography>
      <div className="mt-10 grid grid-cols-1 gap-16 md:mt-40 md:grid-cols-2">
        {portfolio.map((el: any) => (
          <Card
            projectDetails={[]}
            isDesktopProject={false}
            portfolioPage
            url = {el.websiteUrl}
            key={el.label}
            {...el}
          />
        ))}
      </div>
    </>
  );
}
