'use client'
import { Fragment, useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image'
import Link from 'next/link'
import SignIn from '../../login/page'
import { FaChevronCircleRight, FaChevronDown, FaChevronRight, FaPersonBooth, FaUser } from 'react-icons/fa';
import {inter} from '@/lib/fonts';
import { usePathname, useRouter } from 'next/navigation'
import Typography from '@/components/ui/typography';
import { storefront } from '@/utils/shopify/storefront';
import { UserDetails } from './userProfileUpdate';
import { UserAddresses } from './addressUpdate';
import Breadcrumb from '@/components/breadcrumb';
import { useUser } from '@/context/userProfileContext';




export default function Account() {
  const router = useRouter(); // Initializing the useRouter hook
  const path = usePathname();
  const { user, accessToken } = useUser();
  const token = sessionStorage.getItem('accessToken');

  
  console.log('accessToken', accessToken)


  return (
    <>
     <section className="mt-24 mb-10 ml-10">
          <Breadcrumb pageTitle='' />   
          <div className="py-6  grid grid-cols-1 lg:grid-cols-2 gap-10">
            
              <UserDetails user={user} token={accessToken}/>

              <UserAddresses user={user} token={accessToken}/>
            

          </div>
      </section>
    
    </>
  )
}
 

