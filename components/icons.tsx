
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
  logo: (props : any) => (
    <Image
      {...props}
      src={'/assets/images/logo-waterfall.png'}
      alt="logo"
      width={100}
      height={100}
    />
  ),
  person: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/ic_outline-person.svg'}
      alt="logo"

      width={28}
      height={30}
    />
  ),
  basket: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/mdi_basket-outline.svg'}
      alt="logo"
      width={25}
      height={100}
    />
  ),
  search: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/carbon_search.png'}
      alt="logo"
      width={20}
      height={100}
    />
  ),
  view: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/view.png'}
      alt="logo"
      width={20}
      height={10}
    />
  ),
  share: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/share.png'}
      alt="logo"
      width={18}
      height={10}
    />
  ),
  help: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/help.png'}
      alt="logo"
      width={18}
      height={10}
    />
  ),
  heart: (props : any) => (
    <Image
      {...props}
      src={'/assets/icons/Vector.png'}
      alt="logo"
      width={14}
      height={10}
    />
  ),
  menu: AlignRight,
  loader: Loader2,
  x: X,
  phone: Phone,
};
