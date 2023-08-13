import Image from 'next/image';
import {
  AlignRight,
  Brain,
  Facebook,
  Linkedin,
  LucideProps,
  Moon,
  Phone,
  PhoneCall,
  SunMedium,
  Twitter,
  X,
} from 'lucide-react';

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  phoneCall: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/phone-call.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  brain: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/brain.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  brush: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/brush.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  terminal: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/terminal.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  phone: Phone,
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
  starPrimary: () => (
    <Image
      src={'/assets/images/star-primary.svg'}
      alt="star"
      width={30}
      height={22}
    />
  ),
  starDark: () => (
    <Image
      src={'/assets/images/star-dark.svg'}
      alt="star"
      width={30}
      height={22}
    />
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
