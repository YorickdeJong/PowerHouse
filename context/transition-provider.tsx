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
    <Motion
      layout
      initial={Math.round(Math.random() * 10) % 2 === 0 ? 'left' : 'right'}
      key={path}
    >
      {children}
    </Motion>
  );
}

{
  /* </AnimatePresence> */
}
// <AnimatePresence mode="wait">
