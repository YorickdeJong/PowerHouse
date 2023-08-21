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
      heading: 'text-3xl md:text-4xl lg:text-8xl uppercase', // text-3xl for mobile, text-4xl for medium screens, text-7xl for large screens
      title:
        'text-4xl md:text-5xl lg:text-[55px] font-bold uppercase leading-[48px] lg:leading-[68px]', // text-4xl for mobile, text-5xl for medium screens
      muted: 'text-base md:text-lg text-muted leading-relaxed', // text-base for mobile, text-lg for medium screens
    },
    size: {
      sm: 'text-xs md:text-sm lg:text-base', // text-xs for mobile, text-sm for medium screens, text-base for large screens
      lg: 'text-base md:text-lg lg:text-xl', // text-base for mobile, text-lg for medium screens, text-xl for large screens
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
