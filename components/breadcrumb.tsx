'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hook/media-query';

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  pageTitle: string;
}

export default function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  let path = usePathname() || '';
  path = path.includes('orders/') ? '/account/orders/order' : path;
  const slug = path?.replaceAll('-', ' ')
  let slugSpace = slug?.split('/').filter(item => item.trim() !== '');
  console.log('SLUGS', slugSpace)
  slugSpace = slugSpace.map((slug : string) => slug.includes('filterable collection') ? slug.replace('filterable collection', 'Alle Producten') : slug)
  let accumulatedPath = '';


  return (
    <div
      className={cn(
        'inline-flex items-center gap-[15px] text-sm font-medium text-slate-400',
        className,
        {}
      )}
      {...props}
    >
      <Link href={'/'} className="hover:text-zinc-600">
        Home
      </Link>
      
      
      {slugSpace && (
        <>
        {slugSpace.map((slug : string, index: number) => {
          if (slug === 'Alle Producten'){
            accumulatedPath += `/${'filterable-collection'}`;
          }
          else {
            accumulatedPath += `/${slug}`;
          }
          if (slug === 'account') {
            return
          }
          
          if (index < slugSpace.length - 1){
            return (
              <>
              {' '}/{' '}<Link href={accumulatedPath} className={`capitalize text-zinc-${500 - 200 * (index + 1)}`}> {slug} </Link>{' '}
              </>
            )
          }


          return (
            <>
              {' '}/{' '}<div className="capitalize text-zinc-500"> {slug} </div>{' '}
            </>
          )
            })}
          </>
          )}
    </div>
  );
}
