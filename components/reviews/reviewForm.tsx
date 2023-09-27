import { client } from "@/sanity/lib/client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";






export default function ReviewForm({setReviewMenu, setRefreshReview, refreshReview} : any) {
    const handle = useParams()?.slug

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        about: '',
        rating: 0,
        handle: handle,
    });
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const onMouseEnter = (index : number) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    };

    const onSaveRating = (index : number) => {
        console.log('index', index)
        setRating(index);
        setFormData({
            ...formData,
            rating: index,
        });
    };

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        console.log('formData', formData)
        // Check if all fields are filled in
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.about ||
            !formData.handle ||
            formData.rating === 0
        ) {
            alert('Vul alle velden in');
            return;
        }
    
        try {
            // Create a new document in Sanity
            const createdDocument = await client.create({
                _type: 'review',
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                about: formData.about,
                rating: formData.rating,
                createdAt: new Date().toISOString(),
                handle: formData.handle,
            });
    
            console.log('Document created with ID:', createdDocument._id);
            // Optionally, clear the form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                about: '',
                handle: handle,
                rating: 0,
            });
            setRating(0);
        } catch (error) {
            console.error('Error creating document:', error);
        }

        setReviewMenu(false)
        setRefreshReview(!refreshReview)
    };

    return (
        <div className="border-t border-gray-100 mt-8">
          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Voornaam
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Achternaam
              </label>
              <div className="mt-2">
                <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
                    Rating
                </label>

                <div className="flex flex-row my-6 mt-4 mb-8">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 mr-1 cursor-pointer ${index <= (hoverRating || rating) ? 'text-orange-300' : 'text-gray-300'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            onMouseEnter={() => onMouseEnter(index)}
                            onMouseLeave={onMouseLeave}
                            onClick={() => onSaveRating(index)}
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    ))}
                </div>
            </div>
                            
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Bericht
              </label>
              <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    rows={3}
                    className="block w-full bg-white p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Button className='mt-4 text-white py-3' onClick={handleSubmit}>
                Verstuur
            </Button>
        </div>   
    )   
}