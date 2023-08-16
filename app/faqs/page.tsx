// @ts-nocheck
'use client';

import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import { Icons } from '@/components/icons';

export default function FaqsPage() {
  const [accordion, setAccordion] = useState();

  return (
    <>
      <div className="container max-w-[816px] py-12">
        <Caption className="justify-center">The things peoples asked</Caption>
        <Typography variant={'title'} className="mt-3 text-center">
          Frequently asked Questions
        </Typography>

        <Accordion.Root
          onValueChange={setAccordion}
          type="single"
          className="my-10 space-y-7"
        >
          {Array.from(Array(7).fill(data)).map((el, idx) => (
            <Accordion.Item key={el.label} value={el.label + idx}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center text-left justify-between  rounded-lg bg-card p-6 text-sm  font-medium">
                  {el.label}{' '}
                  <Icons.minus className="hidden group-data-[state=open]:block" />
                  <Icons.plus className="group-data-[state=open]:hidden" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pt-7 text-muted data-[state=close]:animate-slideUp data-[state=open]:animate-slideDown">
                {el.text}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </>
  );
}

const data = {
  label: 'Lorem ipsum dolor sit amet, consectetur?',
  text: 'Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
