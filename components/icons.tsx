import Image from 'next/image';
import {
  AlignRight,
  Brain,
  Facebook,
  Linkedin,
  Loader2,
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
      src={'/assets/images/logo-waterfall.png'}
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
  loader: Loader2,
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
  minus: (props: LucideProps) => (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  plus: (props: LucideProps) => (
    <svg
      {...props}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.62305 12H15.623M21.623 12C21.623 17.5228 17.1459 22 11.623 22C6.1002 22 1.62305 17.5228 1.62305 12C1.62305 6.47715 6.1002 2 11.623 2C17.1459 2 21.623 6.47715 21.623 12Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7383 7.87125L11.6357 15.8706M11.5588 21.8701C6.03637 21.7993 1.61701 17.2651 1.68784 11.7427C1.75868 6.22027 6.29288 1.80091 11.8153 1.87175C17.3377 1.94258 21.757 6.47678 21.6862 11.9992C21.6154 17.5216 17.0812 21.9409 11.5588 21.8701Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
