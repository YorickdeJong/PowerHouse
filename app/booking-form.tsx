import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

interface BookingFormProps extends HTMLAttributes<HTMLDivElement> {}

export default function BookingForm({ className, ...props }: BookingFormProps) {
  return (
    <div className="-mt-4  rounded-t-xl bg-secondary">
      <div className={cn('container py-12', className, {})} {...props}>
        <p className="text-[28px] font-semibold leading-[44.87px]">
          Vul het formulier in
        </p>
        <Typography variant={'muted'} size={'sm'}>
          Stuur ons een bericht zodat wij jou kunnen helpen
        </Typography>
        <form className="bg-white rounded-xl shadow py-4 px-5 mt-8">
          <p className="text-background font-bold">Stuur ons een bericht</p>
          {fields.map((field) => (
            <div
              key={field.label}
              className="py-2.5 space-y-2 border-b border-border/10 focus-within:border-border/40 text-background"
            >
              <label htmlFor={field.label} className="text-xs">
                {field.label}
              </label>
              <input
                className="w-full text-sm"
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <Button className="w-full text-xs mt-8">Stuur</Button>
        </form>
      </div>
    </div>
  );
}

const fields = [
  {
    label: 'Naam',
    placeholder: 'John Doe',
    type: 'text',
  },
  {
    label: 'Email',
    placeholder: 'Johndoe@gmail.com',
    type: 'email',
  },
  {
    label: 'Bericht',
    placeholder: 'Schrijf hier je bericht',
    type: 'text',
  },
];
