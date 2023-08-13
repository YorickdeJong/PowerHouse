import Image from 'next/image';
import {
  AlignRight,
  Moon,
  SunMedium,
  X,
  type Icon as LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: () => (
    <Image
      src={'/assets/images/logo.png'}
      alt="logo"
      width={100}
      height={100}
    />
  ),
  x: X,
  menu: AlignRight,
};
