import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';


interface ImageDetail {
  alt: string;
  text: Array<{type: string; children?: Array<any>; [key: string]: any}>;
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
  text: string;
  image?: string;
  portfolioPage?: boolean;
  squared?: boolean;
  reversed?: boolean;
  roundedIcon?: boolean;
  portfolioDetailsPage?: boolean;
  postImage?: string;
  titleProjectPage?: string;
  subHeaderProjectPage?: string;
  isDesktopProject: boolean,
  projectDetails: ProjectDetail[];
}

export default function Card({
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
  const Comp = image ? Link : 'section';

  const linkHref = {
    pathname: `/portfolio/${label.toLowerCase().replaceAll(' ', '-')}`,
    query: {
      title: titleProjectPage,
      subTitle: JSON.stringify(subHeaderProjectPage),
      projectDetails: JSON.stringify(projectDetails),
    },
  };

  const imageStyle = isDesktopProject && {  marginTop: 80, paddingBottom: 25 } ; // Example aspect ratios

  return (
    <Motion initial="down" asChild>
      <Comp
        href={linkHref}
        className={cn(
          'block space-y-3 overflow-hidden rounded-2xl bg-card  p-7 lg:p-8',
          className,
          {
            'group/image hover:shadow-md cursor-pointer': image,
            'bg-secondary': image && !props.portfolioPage,
            'lg:grid lg:grid-cols-2 lg:gap-72 lg:items-center':
              props.portfolioDetailsPage,
            'bg-transparent p-0': postImage,
          }
        )}
        >
        {(image || postImage) && (
          <Image
            src={image! || postImage!}
            alt=""
            style={imageStyle}
            className={cn(
              '-mb-2 w-full -translate-y-9 scale-x-125 object-cover object-top',
              {
                'aspect-square': !isDesktopProject,
                'aspect-16:9': isDesktopProject, // Add your custom aspect ratio class here
                'object-contain scale-x-100 translate-y-0 mb-12': postImage,
                'lg:order-last': props.reversed,
              }
            )}
            width={600}
            height={600}
          />
        )}
        <div>
          {icon && (
            <div
              className={cn(
                'mb-8 h-[70px] w-[70px] rounded-full bg-secondary',
                {
                  'rounded-2xl': props.squared,
                }
              )}
            >
              {icon?.({ className: 'p-4' })}
            </div>
          )}
          <div className="flex items-center gap-4">
            {image && (
              <div className="relative h-2.5 w-7">
                <div className="absolute left-0 top-[4px] h-0.5 w-[23px] bg-white" />
                <Motion
                  initial={{ left: 0 }}
                  whileInView={{
                    left: '18px',
                    transition: { delay: 0.5, duration: 1.5 },
                  }}
                  className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-white"
                />
              </div>
            )}
            <p
              className={cn(
                'mb-2 grow text-xl font-bold uppercase md:text-2xl',
                {
                  'text-2xl': postImage,
                  'lg:text-[40px] lg:mb-4': props.portfolioDetailsPage,
                }
              )}
            >
              {label}
            </p>
            <Motion initial="hidden">
              <div
                className={cn(
                  'grid h-5 w-5 place-content-center rounded-full bg-primary p-1',
                  { hidden: !image }
                )}
              >
                <Icons.arrowUp className="p-5 text-background" />
              </div>
            </Motion>
          </div>
          {text[0]?.children ? <TextRenderer textBlocks={text} /> :
            <p className="leading-relaxed text-muted">{text}</p>
          }
        </div>
      </Comp>
    </Motion>
  );
}


function TextRenderer({ textBlocks = [] }) { // Default to an empty array if not provided
  if (!Array.isArray(textBlocks)) { // Check if textBlocks is indeed an array
    return null; // or some error message or fallback component
  }

  return (
    <div>
      {textBlocks.map(block => {
        const content = block.children.map(child => child.text || '').join(' ');
        return <p className="leading-relaxed text-muted" key={block._key}>{content}</p>;
      })}
    </div>
  );
}

