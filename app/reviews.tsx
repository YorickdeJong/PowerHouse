'use client'

import { HTMLAttributes, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import ReviewMsg from '@/components/review-msg';
import ReviewSlider from '@/components/review-slider';
import { getReviews } from '@/sanity/sanity-utils';

interface ReviewsProps extends HTMLAttributes<HTMLDivElement> {}



type Reviews = {
  name: string;
  stars: number;
  image: string;
  reviewText: any;
  // ... other properties of a review
};


export default function Reviews({ className, ...props }: ReviewsProps) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState<Reviews | null>({
    name: '',
    stars: 5,
    image: '',
    reviewText: ''
  });
  
  const [extractedData, setExtractedData] = useState<ExtractedData>({
    starsAndNames: [],
    images: []
  });



  useEffect(() => {
    async function fetchPortfolio() {
      const data = await getReviews();
      const extracted = extractReviewData(data);
      console.log('extracted', extracted)
      setExtractedData(extracted);
      setCurrentReview(extracted.starsAndNames[currentReviewIndex]);
    }

    fetchPortfolio();
  }, []);

  useEffect(() => {
    setCurrentReview(extractedData.starsAndNames[currentReviewIndex]);
  }, [currentReviewIndex])


  return (
    <div className={cn('container  py-20', className, {})} {...props}>
      <Typography variant={'heading'}>Reviews</Typography>
      <Caption className="mb-4 mt-16">Wat onze klanten over ons zeggen</Caption>
      <Typography variant={'title'}>Testimonials</Typography>
      <div className="grid grid-cols-1 md:my-20 md:grid-cols-3 md:gap-24">
        <ReviewMsg currentReview={currentReview} />
        <ReviewSlider setCurrentReviewIndex={setCurrentReviewIndex} images={extractedData?.images} className="md:col-span-2" />
      </div>
    </div>
  );
}




interface Review {
  stars: number;
  name: string;
  reviewText: any[]; // You might want to define a more specific type for this
  image: string;
}

interface ExtractedData {
  starsAndNames: {
    stars: number;
    name: string;
    reviewText: any; // Again, you might want a more specific type here
  }[];
  images: {
    image: string;
  }[];
}


function extractReviewData(reviews: Reviews[]): ExtractedData {
  const extractedData: ExtractedData = {
    starsAndNames: [],
    images: []
  };

  for (let review of reviews) {
    extractedData.starsAndNames.push({
      stars: review.stars,
      name: review.name,
      reviewText: review.reviewText
    });

    extractedData.images.push({
      image: review.image
    });
  }

  return extractedData;
}
