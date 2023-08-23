import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { Typography } from './ui/typography';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
  text: any;
  heading?: string
}

export default function BenefitsCard({
  className,
  text,
  heading,
  ...props
}: CardProps) {

  return (
    <Motion initial="down" asChild>
      <section
        className={cn(
          'block space-y-3 overflow-hidden rounded-2xl bg-secondary pb-20 my-2 transform transition-transform duration-300 hover:scale-115 relative',
          className,
          {
            'group/image hover:shadow-md cursor-pointer bg-secondary' : true
          }
        )}
      >

        <div className="flex mt-16 mx-8">
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center mx-10">
                <h4 className="mb-8 text-4xl font-bold capitalize leading-[40px] text-stone-300">
                {heading}
                </h4>
                <Typography variant={'muted'}>
                {text}
                </Typography>
            </div>
        </div>  
      </section>
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
