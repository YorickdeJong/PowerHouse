import { HTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    textColor: {
      default: 'text-foreground',

      primary: 'text-primary',
      secondary: 'text-secondary',
    },
    variant: {
      default: '',
      heading: 'max-[400px]:text-3xl text-6xl md:text-[80px] uppercase ',
      title:
        'text-4xl font-bold uppercase leading-[45px] lg:text-[49px] lg:leading-[65px]',
      muted: 'text-muted leading-relaxed',
    },
    size: {
      sm: 'text-sm md:text-base',
      lg: 'text-lg md:text-xl',
    },
  },
  defaultVariants: {
    textColor: 'default',
    variant: 'default',
  },
});

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, textColor, variant, size, ...props }, ref) => {
    return (
      <p
        className={cn(
          typographyVariants({ textColor, variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
