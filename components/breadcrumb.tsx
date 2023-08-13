import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  pageTitle: string;
}

export default function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-[15px] text-sm font-medium text-slate-800',
        className,
        {}
      )}
      {...props}
    >
      <Link href={'/'} className="hover:text-zinc-500">
        Home
      </Link>
      <div>/</div>
      <div className="text-zinc-500">{props.pageTitle}</div>
    </div>
  );
}
