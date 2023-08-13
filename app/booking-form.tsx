import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface BookingFormProps extends HTMLAttributes<HTMLDivElement> {}

export default function BookingForm({ className, ...props }: BookingFormProps) {
  return (
    <div className="bg-secondary">
      <div className={cn('', className, {})} {...props}></div>;
    </div>
  );
}
