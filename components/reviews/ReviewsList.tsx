
'use client'
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Typography from '../ui/typography';
import { useParams } from 'next/navigation';

interface Review {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    about: string;
    rating: number;
    createdAt: string;
}




export default function DisplayReviews({refreshReview} : any) {
  const handle = useParams()?.slug
  console.log('slug', handle)
  const [indexReview, setIndexReview] = useState(2);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Define a GROQ query to fetch reviews
    const query = `*[_type == "review" && handle == "${handle}"]{
      firstName,
      lastName,
      createdAt,
      email,
      about,
      rating
    }`;

    // Fetch and set the reviews
    client.fetch(query)
      .then((fetchedReviews) => {
        setReviews(fetchedReviews);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching reviewsList:', error);
        setLoading(false);
      });
  }, [refreshReview]); // Empty dependency array means this useEffect runs once when the component mounts

  if (loading) return <p>Loading reviews...</p>;

  if (reviews.length === 0) return <p className='text-dark/70 mt-2 mb-16'>Nog geen reviews voor dit product</p>;

  return (
    <div className='mb-20 w-[95%] border-[1px] border-gray-500 p-5 pr-3 rounded-xl'>
     <div className='flex flex-row justify-between'>
        <Typography variant='title' className='text-gray-600'>Reviews</Typography>
        <Typography variant='muted' className='text-dark/70 text-sm md:text-sm mt-5'>{reviews.length} reviews</Typography>
     </div>
     
      <div className='max-h-[200px] overflow-y-auto custom-scrollbar'>
        <div className='mr-8'>
            {reviews.length > 0 && <hr className="my-2 mb-4 border-none bg-dark/20 h-[1px]"/>}
            <ul>
            {reviews.slice(0, indexReview).map((review) => (
                <React.Fragment key={review._id}>
                <li>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <Typography variant='muted' className='text-dark/90 text-sm md:text-lg mb-1'>{review.firstName} {review.lastName}</Typography>
                            <Typography variant='muted' className='text-dark/50 mt-[-4px] text-sm md:text-sm'>{review.createdAt.slice(0,10)}</Typography>
                        </div>
                        <div>
                            <div className="text-orange-400 flex flex-row pt-2">{Array.from({ length: review.rating }).map((_, index) => (
                                <Star className='inline' key={index} />
                            ))}
                            </div>
                        </div>

                    </div>
                    <Typography variant='muted' className='text-dark/70 mt-5 mb-4 text-sm md:text-sm'>
                        {review.about}
                    </Typography>

                    </li>
                <hr className="my-2 mb-4 border-none bg-dark/20 h-[1px]"/>
                </React.Fragment>
            ))}
            </ul>
        </div>
      </div>
    
      <div className='flex flex-row justify-between'>
        <button className='text-dark/80' onClick = {() => setIndexReview(reviews.length > indexReview ? indexReview + 2 : reviews.length)}>{reviews.length > indexReview  ? 'Laat meer zien...' : 'Geen reviews meer'}</button>   
        {indexReview > 2  && <button className='text-dark/80' onClick = {() => setIndexReview(1)}>x</button>}
      </div>
    </div>
  );
}

function Star({className} : any) {
    return (
        <div className={className}>
            <svg className="w-4 h-4 text-orange-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
    )
}