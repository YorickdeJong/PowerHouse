'use client'

import { inter } from "@/lib/fonts";
import { getProfilePicture } from "@/sanity/hooks";
import { storefront } from "@/utils/shopify/storefront";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';



export default function UserPhoto() {
      // State to manage the user's image
    const [userImage, setUserImage] = useState(null);
    const [imageAlt, setImageAlt] = useState('');
    const router = useRouter(); // Initializing the useRouter hook
    const [token, setToken] = useState<string | null>('');

    useEffect(() => {
        // const profileData = getProfilePicture({ userId: 'some-user-id', userRole: 'user' });
        // Check if the user is logged in
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            setToken(accessToken);
           
        } else {
            window.location.href = '/login';
        }
    
    }, [router]);




    const handleImageClick = () => {
        const element = document.getElementById('imageUpload');
        if (element) {
            element.click();
        }
    };

    // Handle image change
    const handleImageChange = (event : any) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader() as any;
        reader.onloadend = () => {
            setUserImage(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    return (
            <div className="w-30 h-30 overflow-hidden">
                <div className="border-0 rounded-full p-0">
                    <Image
                        src={userImage || '/gogymlogo-black.svg'} // Use the user's image if available, otherwise use a default image
                        alt={imageAlt}
                        className="rounded-full  object-cover hover:cursor-pointer"
                        width={140}
                        height={140}
                        onClick={() => handleImageClick()} // Trigger the file input when the image is clicked
                    />
                    <input
                        type="file"
                        id="imageUpload"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>  
        </div>
    );
}

