'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";

import Brand from './brand';
import { Icons } from './icons';
import SearchBar from './searchbar';
import { useMediaQuery } from '@/hook/media-query';
import Typography from './ui/typography';
import { storefront } from '@/utils/shopify/storefront';
import { Search } from 'lucide-react';



async function fetchCollections() {
  try {
    const response = await storefront({
      query: COLLECTIONS_QUERY,
    });
    const collections = response.body.data.collections.edges.map((edge: any) => edge.node);
    return collections || [];
  } catch (error) {
    console.log('error', error);
    return [];
  }
}


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartAsideVisible, setCartAsideVisible] = useState(false);
  const path = usePathname();
  const phone = useMediaQuery('(max-width: 768px)');
  const [cartItems, setCartItems] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [collections, setCollections] = useState([]);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  const openCartAside = () => {
    if (window.location.href.includes('#cart-aside')) {
      return
    }
      window.location.href = window.location.href + '#cart-aside';
  };

  // Check for cart aside is open
  useEffect(() => {
    const handleHashChange = () => {
      setCartAsideVisible(window.location.href.includes('#cart-aside'));
    };

    const handleClickOutside = (event : any) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsSearchBarOpen(false); // Close the search bar if clicked outside
      }
    };

    
    fetchCollections().then((data) => setCollections(data));
    
    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchBarOpen]);

  // Update cart items
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(items.length)

    const accesToken = sessionStorage.getItem('accessToken');
    setIsLoggedIn(Boolean(accesToken));
  }, [cartAsideVisible])

  return (
    <section
      className={cn('relative border-b border-[#EAEAEA] bg-white h-[75px] w-full', {
      })}
    >
      <nav className="container  flex items-center justify-between px-5 pt-5">
        <Brand />
        <NavContent collections={collections} currentPath={path || ''}/>
        
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
      
        <div className='flex flex-row gap-x-12'>
          {isSearchBarOpen ?
            (
              <div ref={searchBarRef}>
                <SearchBar className='hidden md:inline-flex'/>
              </div>            
            ) 
             :
            ( <Icons.search 
                onClick = {() => setIsSearchBarOpen(true)}
                className='text-[#121212]opacity-65 hover:opacity-100 cursor-pointer hidden md:inline-flex'
              />
            )}


          <Link href={!isLoggedIn ? '/login' : '/account/profile'} className='mt-[-2px]'>
            <Icons.person 
            className='hover:opacity-60 cursor-pointer  text-[#121212] '
            />
          </Link>

          <div className='relative  flex flex-row'>
            <Typography variant='muted' className='text-[#121212] font-bold '>
              <span className='absolute mt-[8px] md:mt-0 right-1 text-[12px]'>{cartItems}</span>
            </Typography>
            <Icons.basket 
              onClick={() => openCartAside()}
              className='hover:opacity-60 text-[#121212] cursor-pointer mr-3' 
            />
          </div>
        </div>
      </nav>

      {isMenuOpen && <NavContentMob collections={collections} setIsMenuOpen={setIsMenuOpen} currentPath={path || ''} />}
    </section>
  );
}

const NavContent = ({ currentPath, collections }: { currentPath: string; collections: any }) => {
  const [shopOpen, setShopOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <ul className="ml-4 flex items-center gap-12 max-lg:hidden">
        {siteConfig.nav.map((_) => (
          <li key={_.title} className={cn('relative', { 'text-gray-500': path?.includes(_.href) })}>
            <div
              onMouseEnter={() => _.href === '/shop' && setShopOpen(true)}
              onMouseLeave={() => _.href === '/shop' && setShopOpen(false)}
            >
                <div className='group'>
                  <h3 className={`capitalize text-md ${currentPath === _.href && !_.href.includes('/shop') ? 'font-bold' : 'text-gray-700'} ${!_.href.includes('/shop') && 'hover:font-bold'}`}>
                      <Link href={_.href} className='flex flex-row'>
                        <div>
                          {_.title} <span>{_.href === '/shop' ? <Icons.arrowDown className='h-4 inline'/> : ''}</span>
                        </div>
                      </Link>
                      {shopOpen && _.href === '/shop' && collections.length > 0 && (
                        <div className='absolute  z-10 pt-[26px]  w-[200px] '>
                          <ul className="bg-white shadow">
                            {collections.map((collection: any) => (
                              <>
                                <li key={collection.id} className='hover:bg-[#F5F5F5]'>
                                  <div className='py-4'>
                                    <Link href={`/shop/${collection.handle === 'filterable-collection' ? '' : collection.handle}`} className=' px-4 text-[#121212] hover:font-bold '>
                                      {collection.title === 'filterable-collection' ? 'Alle Producten' : collection.handle}
                                    </Link>
                                  </div>
                                </li>
                              </>
                            ))}
                          </ul>
                        </div>
                      )}
                  </h3>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen, currentPath, collections }: { setIsMenuOpen: Function, currentPath: string, collections: any }) => {
  const [shopOpen, setShopOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="z-[10] absolute top-0 inset-x-0 flex flex-col items-start gap-4 bg-white p-5 shadow-xl lg:hidden"
    >
      <ul>
        <div className='mt-4'>
          {siteConfig.nav.map((_) => (
            <li onClick={() => setIsMenuOpen(false)} key={_.title} className='my-4'>
             <div
              onMouseEnter={() => _.href === '/shop' && setShopOpen(true)}
              onMouseLeave={() => _.href === '/shop' && setShopOpen(false)}
            >
              <h3 className={`capitalize text-md ${currentPath === _.href && !_.href.includes('/shop') ? 'font-bold text-gray-900' : 'text-gray-600'} ${!_.href.includes('/shop') && 'hover:font-bold'}`}>
                <Link href={_.href}>
                  <div className='flex flex-row'>
                    {_.title} <span>{_.href === '/shop' ? <Icons.arrowDown className='h-4 mt-[6px]'/> : ''}</span>
                  </div>
                </Link>
                {shopOpen && _.href === '/shop' && collections.length > 0 && (
                  <div className='pt-2'>
                    <div className='absolute bg-white ml-[-20px] z-10  px-6 w-full'>
                    <hr className="mb-4 mt-1 border-none bg-dark/30 h-[1px] w-full"  />
                      <ul className="dropdown-menu">
                        {collections.map((collection: any) => (
                          <>
                            <li key={collection.id} className='py-3'>
                              <Link href={`/shop/${collection.handle === 'filterable-collection' ? '' : collection.handle}`} className='text-dark/70 hover:font-bold'>
                                {collection.handle === 'filterable-collection' ? 'Alle Producten' : collection.handle}
                              </Link>
                            </li>

                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </h3>
            </div>
            </li>
        ))}
        </div>
      </ul>
    </motion.div>
  );
};


const COLLECTIONS_QUERY = `
query Collections {
  collections(first: 30) {
    edges {
      node {
        title
        handle
      }
    }
  }
}
`;