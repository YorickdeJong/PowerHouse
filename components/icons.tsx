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
  tick: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7907 10.5131V11.4122C20.7895 13.5197 20.1071 15.5704 18.8452 17.2584C17.5833 18.9464 15.8096 20.1813 13.7885 20.7788C11.7675 21.3764 9.60741 21.3046 7.63047 20.5743C5.65354 19.8439 3.96567 18.494 2.81858 16.726C1.67149 14.958 1.12666 12.8665 1.26533 10.7636C1.404 8.66058 2.21874 6.65878 3.58805 5.05669C4.95736 3.4546 6.80787 2.33806 8.86359 1.8736C10.9193 1.40913 13.0701 1.62163 14.9952 2.4794M20.7907 3.0993L11.5061 14.3386L8.08545 10.439"
        stroke="currentColor"
        stroke-width="1.95466"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
