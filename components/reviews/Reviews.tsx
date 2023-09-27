'use client'
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ReviewForm from "./reviewForm";
import DisplayReviews from "./ReviewsList";
import { client } from "@/sanity/lib/client";
import { storefront } from "@/utils/shopify/storefront";
import { useParams } from "next/navigation";


interface Rating {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
}

interface Review {
    rating: number; // or the actual type of rating
}

export default function Reviews() {
    const [reviewMenu, setReviewMenu] = useState(false);
    const [refreshReview, setRefreshReview] = useState(false);
    const [totalratings, setTotalRatings] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const handle = useParams()

    const [rating, setRating] = useState<Rating>({
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
    });
    const [loading, setLoading] = useState(true);

    const openReviewMenu = () => {
        setReviewMenu(!reviewMenu)
    }

    useEffect(() => {
        try {

            const query = `*[_type == "review" && handle == "${handle?.slug}"]{
                rating
            }`;
            
            client.fetch(query)
              .then((fetchedReviews: Review[]) => {
                let newRating = {
                    5: 0,
                    4: 0,
                    3: 0,
                    2: 0,
                    1: 0,
                } // Create a copy of the current rating state
                let totalWeightedRating = 0;
            
                fetchedReviews.forEach((review: Review) => {
                    const ratingKey = review.rating as keyof Rating; // Type assertion
                    if (newRating[ratingKey] !== undefined) {
                      newRating[ratingKey] += 1;
                      totalWeightedRating += review.rating; // Sum of all ratings
                    }
                  });
    
                setTotalRatings(fetchedReviews.length)
                setRating(newRating); // Update the state with the new rating values
                setAverageRating(totalWeightedRating / fetchedReviews.length);
                setLoading(false);
              })
              .catch((error) => {
                console.error('Error fetching reviews:', error);
                setLoading(false);
              });
        }
        catch (error) {
            console.error('Error fetching reviews:', error);
            setLoading(false);
        }
    }, [refreshReview]); 

    if (loading) return <p className="text-dark/80">Loading reviews...</p>;

    const ratingPercentage5 = ratingPercentage(rating[5], totalratings)
    const ratingPercentage4 = ratingPercentage(rating[4], totalratings)
    const ratingPercentage3 = ratingPercentage(rating[3], totalratings)
    const ratingPercentage2 = ratingPercentage(rating[2], totalratings)
    const ratingPercentage1 = ratingPercentage(rating[1], totalratings)

    return (
        <>
            <div className="flex flex-row my-6 mb-2 mt-2 ">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                    key={index}
                    className={`w-4 h-4 mr-1 mt-[1px] ${index < Math.floor(averageRating) ? "text-orange-300" : "text-gray-300"}`}
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                    >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                ))}
                <p className="text-[10px] md:text-[13px] font-medium text-gray-500 dark:text-gray-400 ml-2">{averageRating.toFixed(1) ? 'uit 5 sterren' : 'Nog geen reviews'}</p>
            </div>
            <p className="text-[10px] md:text-[13px] font-medium text-gray-500 dark:text-gray-400">{totalratings} product reviews</p>

            <div className="flex items-center mt-4">
                <div className="flex flex-row">
                    <a href="#" className="text-sm font-medium text-dark/90  hover:underline">5</a>
                    <Star className="mt-[2px] ml-[9px]"/>
                </div>
                <div className="w-3/4 h-4 ml-[6px] mx-4 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-5 bg-yellow-400`} style = {{width: `${ratingPercentage5 ? ratingPercentage5 : 0 }%`}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingPercentage5 ? ratingPercentage5 : 0}%</span>
            </div>

            <div className="flex items-center mt-4">
            <div className="flex flex-row">
                    <a href="#" className="text-sm font-medium text-dark/90  hover:underline">4</a>
                    <Star className="mt-[2px] ml-2"/>
                </div>
                <div className="w-3/4 h-4 ml-[6px] mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-5 bg-yellow-400`} style = {{width: `${ratingPercentage4 ? ratingPercentage4 : 0}%`}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingPercentage4 ? ratingPercentage4 : 0}%</span>
            </div>

            <div className="flex items-center mt-4">
            <div className="flex flex-row">
                    <a href="#" className="text-sm font-medium text-dark/90  hover:underline">3</a>
                    <Star className="mt-[2px] ml-2"/>
                </div>
                <div className="w-3/4 h-4 ml-[6px] mx-4 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-5 bg-yellow-400`} style = {{width: `${ratingPercentage3 ? ratingPercentage3 : 0}%`}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingPercentage3 ? ratingPercentage3 : 0}%</span>
            </div>

            <div className="flex items-center mt-4">
                <div className="flex flex-row">
                    <a href="#" className="text-sm font-medium text-dark/90  hover:underline">2</a>
                    <Star className="mt-[2px] ml-2"/>
                </div>
                <div className="w-3/4 h-4 ml-[6px] mx-4 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-5 bg-yellow-400`} style = {{width: `${ratingPercentage2 ? ratingPercentage2 : 0}%`}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingPercentage2 ? ratingPercentage2 : 0}%</span>
            </div>

            <div className="flex items-center mt-4">
            <div className="flex flex-row">
                    <a href="#" className="text-sm font-medium text-dark/90  hover:underline">1</a>
                    <Star className="mt-[2px] ml-[10px]"/>
                </div>
                <div className="w-3/4 h-4 ml-[7px] mx-4 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-5 bg-yellow-400`} style = {{width: `${ratingPercentage1 ? ratingPercentage1 : 0}%`}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingPercentage1 ? ratingPercentage1 : 0}%</span>
            </div>


            {reviewMenu && handle && <ReviewForm setReviewMenu = {setReviewMenu} setRefreshReview={setRefreshReview} refreshReview={refreshReview}/>}
            <Button variant='outline' onClick={openReviewMenu} className="w-[95%] mt-6 text-secondary rounded-xl py-2 font-medium mb-4">
                {reviewMenu ? 'Sluit review menu': 'schrijf een review'}
            </Button>   
        
            {handle && <DisplayReviews refreshReview={refreshReview}/>}
        
        </>
    )
}

function ratingPercentage(rating: number, totalratings: number) {
    return rating / totalratings * 100;
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


const productQuery = `
query ProductByHandle($handle: String!) {
    product(handle: $handle) {
        id
    }  
}
`