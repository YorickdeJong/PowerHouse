'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';
import SearchBar from './searchbar';
import { useMediaQuery } from '@/hook/media-query';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { push } = useRouter();
  const phone = useMediaQuery('(max-width: 768px)');

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
            size={28}
            className="cursor-pointer text-dark lg:hidden"
          />
        ) : (
          <Icons.x
            onClick={() => setIsMenuOpen(false)}
            size={28}
            className="z-[11] absolute right-5 top-4 cursor-pointer text-neutral lg:hidden  mb-4"
          />
        )}{' '}
      
        <div className='flex flex-row gap-12'>
          {!phone && <SearchBar />}
          <div className='mt-[7px]'>
            <Icons.person 
            className='hover:opacity-60 cursor-pointer opacity-100'
            />
          </div>
          <div className='mt-[9px] '>
            <Icons.basket 
              onClick={() => openCartAside()}
              className='hover:opacity-60 cursor-pointer opacity-100'
            />
          </div>
        </div>
      </nav>

      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} currentPath={path || ''} />}
    </section>
  );
}

const NavContent = ({currentPath} : {currentPath: string}) => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-4 flex items-center gap-12 max-lg:hidden">
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

const NavContentMob = ({ setIsMenuOpen, currentPath }: { setIsMenuOpen: Function, currentPath: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="z-[10] absolute top-0 inset-x-0 flex flex-col items-start gap-4 bg-primary p-5 shadow-xl lg:hidden"
    >
      <ul>
        <div className='mt-4'>
          {siteConfig.nav.map((_) => (
            <li onClick={() => setIsMenuOpen(false)} key={_.title}>
              <h3 className={`capitalize  py-4 ${
                currentPath === _.href ? 'text-secondary' : 'text-white'
              }`}>
                <Link onClick={() => setIsMenuOpen(false)} href={_.href} className='hover:text-primary/50'>{_.title}</Link>
              </h3>
            </li>
        ))}
        </div>
      </ul>
    </motion.div>
  );
};