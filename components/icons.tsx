
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
  logo: () => (
    <Image
      src={'/assets/images/logo-waterfall.png'}
      alt="logo"
      width={100}
      height={100}
    />
  ),
  menu: AlignRight,
  loader: Loader2,
  x: X,
  phone: Phone,
};
