'use client'
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { useProjectState } from '@/context/portfolio-provider';

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
  text: any;
  url: string | '';
  image?: string;
  portfolioPage?: boolean;
  squared?: boolean;
  reversed?: boolean;
  roundedIcon?: boolean;
  portfolioDetailsPage?: boolean;
  postImage?: string;
  titleProjectPage?: string | null;
  subHeaderProjectPage?: string;
  isDesktopProject: boolean;
  projectDetails: ProjectDetail[];
}

export default function Card({
  className,
  postImage,
  label,
  text,
  url,
  roundedIcon,
  image,
  titleProjectPage,
  subHeaderProjectPage,
  isDesktopProject,
  projectDetails,
  ...props
}: CardProps) {
  const { setProjectStateHandler } = useProjectState();

  const handleDivClick = () => {
    setProjectStateHandler({
      title: titleProjectPage,
      url:  url,
      subTitle: JSON.stringify(subHeaderProjectPage),
      projectDetails: projectDetails,
    });
  };

  
  const linkHref = {
    pathname: `/portfolio/${label.toLowerCase().replaceAll(' ', '-')}`,
  };

  const imageStyle = isDesktopProject
    ? { marginTop: 80, paddingBottom: 25 }
    : undefined;

  return (
    <Motion initial="down" asChild>
      <Link
        href={linkHref}
        onClick={handleDivClick}
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
          width={1000}
          height={600}
        />
        <div>
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
          {text[0] && text[0]?.children ? (
            <TextRenderer textBlocks={text} />
          ) : (
            <p className="leading-relaxed text-muted">{text}</p>
          )}
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
