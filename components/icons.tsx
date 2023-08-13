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
    <svg
      {...props}
      width="56"
      height="55"
      viewBox="0 0 56 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_409_2569)">
        <path
          d="M39.445 16.0557L16.5566 38.944"
          stroke="currentColor"
          stroke-width="2.00971"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.8477 16.0557H39.4472V36.6552"
          stroke="currentColor"
          stroke-width="2.00971"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_409_2569">
          <rect
            width="54.932"
            height="54.932"
            fill="white"
            transform="translate(0.535156 0.0341797)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};
