import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { Typography } from './ui/typography';

interface ImageDetail {
  alt: string;
  text: Array<{ type: string; children?: Array<any>; [key: string]: any }>;
}

interface ProjectDetail {
  detailImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    hotspot?: {
      x: number;
      y: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    fields: ImageDetail;
  };
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: (props: any) => JSX.Element;
  text: any;
  image?: string;
  portfolioPage?: boolean;
  squared?: boolean;
  reversed?: boolean;
  roundedIcon?: boolean;
  portfolioDetailsPage?: boolean;
  postImage?: string;
  titleProjectPage?: string;
  subHeaderProjectPage?: string;
  isDesktopProject: boolean;
  projectDetails: ProjectDetail[];
}

export default function StackCard({
  className,
  icon,
  postImage,
  label,
  text,
  roundedIcon,
  image,
  titleProjectPage,
  subHeaderProjectPage,
  isDesktopProject,
  projectDetails,
  ...props
}: CardProps) {
  const linkHref = {
    pathname: `/technologie/${label.toLowerCase().replaceAll(' ', '-')}`,
  };

  return (
    <Motion initial="down" asChild>
      <Link
        href={linkHref}
        className={cn(
          'block space-y-3 overflow-hidden rounded-2xl bg-card h-[400px] my-16 transform transition-transform duration-300 hover:scale-115 relative',
          className,
          {
            'group/image hover:shadow-md cursor-pointer': image,
            'bg-secondary': image && !props.portfolioPage,
            'lg:grid lg:grid-cols-2 lg:gap-72 lg:items-center': props.portfolioDetailsPage,
            'bg-transparent p-0': postImage,
          }
        )}
      >

        <div className="flex flex-row justify-center h-full">
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
          {/* Text */}
          <div className="flex-1 max-w-1/5 flex flex-col justify-center mx-16">
            <h4 className="mb-10 text-5xl capitalize leading-[40px] text-stone-300">
              {label}
            </h4>
            <Typography variant={'muted'}>
              Op deze pagina ziet u een paar van onze projecten ter inspiratie. 
              Per project gaan we in op de probleemstelling, de oplossing en het verkregen resultaat. 
              U kunt ons ook altijd bellen om meer informatie te krijgen over onze voltooide projecten.
            </Typography>
          </div>
  
          {/* Image */}
          <div className="flex-4 w-3/5">
            <Image
              src={image ? image : '' }
              alt=""
              width={1200}
              height={600}
              className={cn(
                'object-cover h-full w-full',
              )}
            />
          </div>
        </div>  
      </Link>
    </Motion>
  );
}






interface TextBlock {
  _key: string;
  children: Array<{ text: string }>;
}

function TextRenderer({ textBlocks = [] }: { textBlocks?: TextBlock[] }) {
  // Default to an empty array if not provided
  if (!Array.isArray(textBlocks)) {
    // Check if textBlocks is indeed an array
    return null; // or some error message or fallback component
  }

  return (
    <div>
      {textBlocks.map((block) => {
        const content = block.children
          .map((child: any) => child.text || '')
          .join(' ');
        return (
          <p className="leading-relaxed text-muted" key={block._key}>
            {content}
          </p>
        );
      })}
    </div>
  );
}
