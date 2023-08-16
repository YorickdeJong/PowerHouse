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
    <AnimatePresence mode="wait">
      <Motion style={{ opacity: 0 }} initial={'down'} key={path}>
        {children}
      </Motion>
    </AnimatePresence>
  );
}
