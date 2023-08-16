'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Motion style={{ opacity: 0 }} initial={'left'} key={path}>
      {children}
    </Motion>
  );
}

{
  /* </AnimatePresence> */
}
// <AnimatePresence mode="wait">
