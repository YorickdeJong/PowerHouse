import { Button } from "./ui/button";





export default function Reviews() {
    return (
        <>
            <div className="flex flex-row my-6 mt-2 mb-8">
                    <svg className="w-4 h-4 text-orange-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-orange-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-orange-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-orange-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-gray-300 mr-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4">1,745 global ratings</p>
            </div>

            <div className="flex items-center mt-4">
                <a href="#" className="text-sm font-medium text-dark/90  hover:underline">5 star</a>
                <div className="w-3/4 h-4 mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-5 bg-yellow-400 w-[70%]" ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
            </div>

            <div className="flex items-center mt-4">
                <a href="#" className="text-sm font-medium text-dark/90 hover:underline">4 star</a>
                <div className="w-3/4 h-4 mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-5 bg-yellow-400 w-[17%]"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
            </div>

            <div className="flex items-center mt-4">
                <a href="#" className="text-sm font-medium text-dark/90 hover:underline">3 star</a>
                <div className="w-3/4 h-4 mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-5 bg-yellow-400 w-[8%]"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
            </div>

            <div className="flex items-center mt-4">
                <a href="#" className="text-sm font-medium text-dark/90 hover:underline">2 star</a>
                <div className="w-3/4 h-4 mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-5 bg-yellow-400 w-[4%]"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
            </div>

            <div className="flex items-center mt-4">
                <a href="#" className="text-sm font-medium text-dark/90 hover:underline">1 star</a>
                <div className="w-3/4 h-4 mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-5 bg-yellow-400 w-[2%]"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">2%</span>
            </div>

                <Button variant='outline' className="w-[95%] mt-12 text-secondary rounded-xl py-2 font-medium">
                    schrijf een review
                </Button>   
        </>
    )
}