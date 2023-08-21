'use client';

import { HTMLAttributes } from 'react';
import useSlider from '@/store/slider';

import { Images } from './images';
import Motion from './motion';
import { Typography } from './ui/typography';

interface Review {
  name: string;
  stars: number;
  reviewText: any[]; // Adjusted this to match the data structure
}

interface ReviewMsgProps {
  currentReview: Review;
}

export default function ReviewMsg({ currentReview }: ReviewMsgProps) {
  currentReview = currentReview
    ? currentReview
    : {
        name: '',
        stars: 5,
        reviewText: [],
      };
  return (
    <Motion initial="right" key={useSlider.getState().reviewId}>
      <Images.quote className="ml-auto block aspect-square w-14 scale-y-[-1]" />
      <div>
        <div key={currentReview.name}>
          <p className="text-xl font-semibold text-foreground">
            {currentReview.name}
          </p>
          {Array.from(Array(currentReview.stars)).map((_, idx) => (
            <Images.yellowStar
              key={idx}
              className="mr-1 inline-block aspect-square w-3 md:w-4"
            />
          ))}
          <Typography variant={'muted'} className="mb-8 mt-3">
            <TextRenderer textBlocks={currentReview.reviewText} />
          </Typography>
        </div>
      </div>
      <Images.quote className="aspect-square w-14" />
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
  console.log('textBlocks', textBlocks);
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
