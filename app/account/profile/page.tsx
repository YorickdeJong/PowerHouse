'use client'
import { Fragment, useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image'
import Link from 'next/link'
import SignIn from '../login/page'
import { FaChevronCircleRight, FaChevronDown, FaChevronRight, FaPersonBooth, FaUser } from 'react-icons/fa';
import {inter} from '@/lib/fonts';
import { usePathname, useRouter } from 'next/navigation'
import Typography from '@/components/ui/typography';
import { storefront } from '@/utils/shopify/storefront';
import { UserDetails } from './userProfileUpdate';
import { UserAddresses } from './addressUpdate';
import AccountHeader from '@/components/accountHeader';
import Breadcrumb from '@/components/breadcrumb';

const GET_USER_DETAILS = gql`
  query getUserDetails($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      phone
      email
      createdAt
      defaultAddress {
        id
        address1
        city
        province
        country
        zip
      }
      addresses(first: 10) { # Retrieve the first 10 addresses, adjust as needed
        edges {
          node {
            id
            address1
            city
            province
            country
            zip
          }
        }
      }
    }
  }
`;


export default function Account() {
  const router = useRouter(); // Initializing the useRouter hook
  const [token, setToken] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    // Check if the user is logged in
    const accessToken = sessionStorage.getItem('accessToken');
    setToken(accessToken);
    if (!accessToken) {
      // If the user is not logged in, redirect to the login page
      router.push('/account/login'); // Replace with your login page route
    }

  }, [router]);

  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { customerAccessToken: token },
    skip: !token,
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data?.customer;
  console.log('user', user)

  return (
    <>
    <AccountHeader slug={path}/>
     <section className="container mt-10 mb-10">
          <Breadcrumb pageTitle='/orders' />   
          <div className="py-6  grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <UserDetails user={user} token={token}/>

              <UserAddresses user={user} token={token}/>
            </div>
            <div>
              <Banner user={user} />
            </div>
          </div>
      </section>
    
    </>
  )
}
 


export function Banner({user} : any){
  return (
    <div className = 'bg-gray-500 h-[220px] rounded-xl  mt-[70px] mx-8 p-6 pl-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
          <div className=' '>
              <Typography variant='title' className='text-white'>Welkom {user?.firstName}</Typography>
              <Typography variant='muted' className='text-white'>hier vind je al je relevante informatie</Typography>
          </div>
          <div className='flex items-center justify-center'>
            <div className='h-40 w-40 bg-gray-400 rounded-full  overflow-hidden'>
              <Image 
                src='/assets/images/legging_1.png'
                width={200}
                height={200}
                alt = 'profile'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
    </div>
  )
}