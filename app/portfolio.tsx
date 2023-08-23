'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
import Link from 'next/link';
import { getPortfolio, getReviews } from '@/sanity/sanity-utils';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Card from '@/components/card';

interface PortfolioProps extends HTMLAttributes<HTMLDivElement> {}

type Portfolio = {
  label: string;
  text: string;
  websiteUrl: string;
  // ... other properties of a review
};

export default function Portfolio({ className, ...props }: PortfolioProps) {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

  useEffect(() => {
    async function fetchPortfolio() {
      const data = await getPortfolio();

      const randomizedData = data.sort(() => 0.5 - Math.random());
      // Select the first three items
      const selectedData = randomizedData.slice(0, 3);
      setPortfolio(selectedData);
    }

    fetchPortfolio();
  }, []);

  console.log('portfolio', portfolio);

  return (
    <section className="bg-card">
      <div className={cn('container  py-20', className, {})} {...props}>
        <Typography variant={'heading'}>Portfolio</Typography>
        <Caption className="mb-4 mt-16">Portfolio</Caption>
        <div className="flex items-center justify-between">
          <Typography variant={'title'}>ons werk</Typography>
          <Link href={`/portfolio`}>
            <Button variant={'outline'} className='py-2 px-4'>Bekijk alles</Button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((el) => (
            <Card
              url = {el.websiteUrl}
              projectDetails={[]}
              isDesktopProject={false}
              key={el.label}
              {...el}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
