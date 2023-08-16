'use client';

import { HTMLAttributes } from 'react';
import useSlider from '@/store/slider';

import { Images } from './images';
import Motion from './motion';
import { Typography } from './ui/typography';

export default function ReviewMsg() {
  return (
    <Motion initial="right" key={useSlider.getState().reviewId}>
      <Images.quote className="ml-auto block aspect-square w-14 scale-y-[-1]" />
      <div>
        <p className="text-xl font-semibold text-foreground">Elisha Atif</p>
        {Array.from(Array(5)).map((idx) => (
          <Images.yellowStar className="mr-1 inline-block aspect-square w-3 md:w-4" />
        ))}
        <Typography variant={'muted'} className="mb-8 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci
          augue, bibendum id risus in, tristique dictum urna. In imperdiet enim
          ullamcorper aliquam porta. Duis ultricies metus posuere consequat
          tempus.{' '}
        </Typography>
      </div>
      <Images.quote className="aspect-square w-14" />
    </Motion>
  );
}
