'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { push } = useRouter();

  return (
    <section
      className={cn('', {
        'absolute bg-transparent top-0 inset-x-0 z-40': (path === '/' || path?.startsWith('/technologie/')),
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
        )}{' '}
        <Button
          onClick={() => push('/booking')}
          variant={'outline'}
          className="max-lg:hidden"
        >
          <Icons.phone className="pr-2" />
          Vrijblijvende Afspraak
        </Button>
      </nav>

      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-16 flex items-center gap-12 max-lg:hidden ">
        {siteConfig.nav.map((_) => (
          <li
            key={_.title}
            className={cn('', {
              '': _.href === '/' ? path === '/' : path?.includes(_.href),
            })}
          >
            <h3 className="capitalize text-lg">
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
      <ul className="absolute inset-x-0 mx-2 flex flex-col items-start gap-4 rounded-xl bg-card p-5 shadow-xl lg:hidden">
        {siteConfig.nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_.title}>
            <h3 className="capitalize hover:text-primary/50">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};
