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
  phone: Phone,
  brain: Brain,
  phoneCall: PhoneCall,
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
  brush: (props: LucideProps) => (
    <svg
      width="38"
      height="38"
      {...props}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_286_6224)">
        <path
          d="M4.75 33.2502V26.9168C4.75 25.6642 5.12144 24.4397 5.81736 23.3982C6.51327 22.3567 7.50241 21.545 8.65967 21.0656C9.81694 20.5862 11.0904 20.4608 12.3189 20.7052C13.5475 20.9496 14.6759 21.5528 15.5617 22.4385C16.4474 23.3242 17.0506 24.4527 17.295 25.6813C17.5393 26.9098 17.4139 28.1832 16.9346 29.3405C16.4552 30.4978 15.6435 31.4869 14.6019 32.1828C13.5604 32.8787 12.3359 33.2502 11.0833 33.2502H4.75Z"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.2491 4.75C28.73 5.36813 24.4616 7.19489 20.8944 10.0375C17.3273 12.88 14.5938 16.6329 12.9824 20.9"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.2496 4.75C32.6315 9.26912 30.8047 13.5375 27.9622 17.1047C25.1196 20.6718 21.3667 23.4053 17.0996 25.0167"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.7832 14.25C19.8599 15.67 22.3298 18.14 23.7499 21.2167"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_286_6224">
          <rect width="38" height="38" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  terminal: (props: LucideProps) => (
    <svg
      width="38"
      {...props}
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_286_6236)">
        <path
          d="M4.75 11.0832C4.75 10.2433 5.08363 9.43786 5.6775 8.844C6.27136 8.25013 7.07681 7.9165 7.91667 7.9165H30.0833C30.9232 7.9165 31.7286 8.25013 32.3225 8.844C32.9164 9.43786 33.25 10.2433 33.25 11.0832V26.9165C33.25 27.7564 32.9164 28.5618 32.3225 29.1557C31.7286 29.7495 30.9232 30.0832 30.0833 30.0832H7.91667C7.07681 30.0832 6.27136 29.7495 5.6775 29.1557C5.08363 28.5618 4.75 27.7564 4.75 26.9165V11.0832Z"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 12.6665H9.51583"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.25 12.6665H14.2658"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_286_6236">
          <rect width="38" height="38" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
