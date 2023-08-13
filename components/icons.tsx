import Image from 'next/image';
import {
  AlignRight,
  LucideProps,
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
  star: () => (
    <Image src={'/assets/images/star.svg'} alt="star" width={30} height={22} />
  ),
  x: X,
  menu: AlignRight,
  arrowUp: (props: LucideProps) => (
    <Image src={'/assets/images/arrow.svg'} alt="star" width={50} height={50} />
  ),
};
