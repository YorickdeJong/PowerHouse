

import { StarIcon } from '@heroicons/react/20/solid'

const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

export default function Reviews(){
    return(
        <div className="mt-6">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  reviews.average > rating ? 'text-orange-300' : 'text-gray-200',
                  'h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{reviews.average} out of 5 stars</p>
          <a href={reviews.href} className="ml-3 text-sm font-medium text-dark/60 hover:text-dark/30">
            {reviews.totalCount} reviews
          </a>
        </div>
      </div>
    )
}