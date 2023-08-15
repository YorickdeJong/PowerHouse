// @ts-nocheck
'use client';

import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';

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
                <Accordion.Trigger className="flex w-full items-center justify-between  rounded-lg bg-card p-6 text-sm  font-medium">
                  {el.label} <Icons.minus />
                </Accordion.Trigger>
              </Accordion.Header>
              {accordion === el.label + idx && (
                <motion.div
                  key={el.label + idx}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: { ease: 'linear' },
                  }}
                  transition={{ type: 'tween', delay: 0.1, duration: 0.2 }}
                >
                  <Accordion.Content className="pt-7 text-muted">
                    {el.text}
                  </Accordion.Content>
                </motion.div>
              )}
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
