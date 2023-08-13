'use client';

import { HTMLAttributes } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import PriceCard from '@/components/price-card';

interface ServicePlanProps extends HTMLAttributes<HTMLDivElement> {}

export default function ServicePlan({ className, ...props }: ServicePlanProps) {
  return (
    <div className="bg-card">
      <div className={cn('container py-12', className, {})} {...props}>
        <Caption>Service plans</Caption>
        <Typography variant={'heading'}>Diensten</Typography>
        <Tabs.Root defaultValue={tabs[0]}>
          <Tabs.List className="flex justify-between gap-4 my-11">
            {tabs.map((tab) => (
              <Tabs.Trigger asChild key={tab} value={tab}>
                <Button
                  className="px-6 capitalize max-[380px]:px-3"
                  size={'sm'}
                >
                  {tab}
                </Button>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Content key={tab} value={tab}>
              <PriceCard tab={tab} />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
}

const tabs = ['basic', 'standard', 'custom'];
