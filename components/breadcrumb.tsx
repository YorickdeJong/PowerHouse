'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  pageTitle: string;
}

export default function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  const path = usePathname();
  const slug = path?.replaceAll('-', ' ')
  const slugSpace = slug?.split('/').filter(item => item.trim() !== '');
  let accumulatedPath = '';
  

  console.log(slugSpace)
  return (
    <div
      className={cn(
        'inline-flex items-center gap-[15px] text-sm font-medium text-slate-800',
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
          accumulatedPath += `/${slug}`;
          if (index < slugSpace.length - 1){
            return (
              <>
              /{' '}<Link href={accumulatedPath} className={`capitalize text-zinc-${500 + 200 * (index + 1)}`}> {slug} </Link>{' '}
              </>
            )
          }
          return (
            <>
              /{' '}<div className="capitalize text-zinc-500"> {slug} </div>{' '}
            </>
          )
            })}
          </>
          )}
    </div>
  );
}
