'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { Icons } from './assets';
import Brand from './brand';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  return (
    <section
      className={cn('', {
        'absolute bg-transparent top-0 inset-x-0 z-40': path === '/',
      })}
    >
      <nav className="container  flex items-center justify-between px-5 py-9">
        <Brand />
        <NavContent />
        {!isMenuOpen ? (
          <Icons.menu
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="cursor-pointer text-foreground lg:hidden"
          />
        ) : (
          <Icons.x
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="cursor-pointer text-foreground lg:hidden"
          />
        )}
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className="flex items-center max-lg:hidden ">
        {siteConfig.nav.map((_) => (
          <li
            key={_.title}
            className={cn('', {
              '': _.href === '/' ? path === '/' : path.includes(_.href),
            })}
          >
            <h3 className="capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className="absolute inset-x-0 flex flex-col items-start lg:hidden">
        {siteConfig.nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_.title}>
            <h3 className="capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};
