'use client';

import { usePathname } from 'next/navigation';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Motion initial={'left'} key={path}>
      {children}
    </Motion>
  );
}

{
  /* </AnimatePresence> */
}
// <AnimatePresence mode="wait">
