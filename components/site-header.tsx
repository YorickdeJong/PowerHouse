'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';
import { Button } from './ui/button';
import { Typography } from './ui/typography';
import SearchBar from './searchbar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { push } = useRouter();

  const openCartAside = () => {
    if (window.location.href.includes('#cart-aside')) {
      return
    }
      window.location.href = window.location.href + '#cart-aside';
  };

  return (
    <section
      className={cn('border-b border-gray-300 ', {
        'bg-white top-0  inset-x-0 z-40 ': (path === '/' || path?.startsWith('/technologie/')),
      })}
    >
      <nav className="container  flex items-center justify-between px-5 py-5">

        <NavContent currentPath={path || ''}/>
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
      
        <div className='flex flex-row gap-12'>
          <SearchBar />
          <div className='mt-[7px]'>
            <Icons.person 
            className='hover:opacity-100 cursor-pointer opacity-60'
            />
          </div>
          <div className='mt-[9px] '>
            <Icons.basket 
              onClick={() => openCartAside()}
              className='hover:opacity-100 cursor-pointer opacity-60'
            />
          </div>
        </div>
      </nav>

      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = ({currentPath} : {currentPath: string}) => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-4 flex items-center gap-12 max-lg:hidden ">
        {siteConfig.nav.map((_) => (
          <li
            key={_.title}
            className={cn('', {
              '': _.href === '/' ? path === '/' : path?.includes(_.href),
            })}
          >
            <h3 className={`capitalize text-md ${currentPath === _.href ? 'text-primary/70 font-bold' : 'text-dark'} hover:font-bold`}>
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
