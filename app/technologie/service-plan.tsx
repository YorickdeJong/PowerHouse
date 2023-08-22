'use client';

import { Fragment, HTMLAttributes } from 'react';
import { useMediaQuery } from '@/hook/media-query';
import * as Tabs from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import PriceCard from '@/components/price-card';

interface ServicePlanProps extends HTMLAttributes<HTMLDivElement> {}

export default function ServicePlan({ className, ...props }: ServicePlanProps) {
  const isLg = useMediaQuery('lg');
  const Comp = isLg ? Fragment : Tabs.Content;
  return (
    <div className="bg-card ">
      <div className={cn('container py-16', className, {})} {...props}>
        <Caption className="justify-center">SERVICEPLANNEN</Caption>
        <Typography variant={'heading'} className="mt-3 text-center">
          Diensten
        </Typography>
        <Tabs.Root defaultValue={tabs[0]} className="gap-6 lg:mt-12 lg:flex">
          <Tabs.List className="my-11 flex justify-between gap-4 lg:hidden">
            {tabs.map((tab) => (
              <Tabs.Trigger asChild key={tab} value={tab}>
                <Button
                  style={{ width: '110px', height: '40px' }}
                  className="px-6 capitalize max-[380px]:px-3"
                  size={'sm'}
                >
                  {tab}
                </Button>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <div className="grid md:grid-cols-3 gap-4">
            {tabs.map((tab) => (
              <Comp key={tab} value={tab}>
                <PriceCard tab={tab} />
              </Comp>
            ))}
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}

const tabs = ['basis', 'standaard', 'custom'];
