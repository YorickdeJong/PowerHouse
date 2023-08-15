'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Motion
        initial={{ x: -1000, opacity: 0 }}
        animate="visible"
        transition={{ delay: 0, duration: 0.4 }}
        exit={{ x: 1000, opacity: 0 }}
        key={path}
      >
        {children}
        {/* <Motion
        className="fixed inset-0 h-screen origin-bottom bg-card"
        animate={{ scaleY: 0 }}
        initial={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      /> */}
      </Motion>
    </AnimatePresence>
  );
}
