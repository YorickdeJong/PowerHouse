'use client'
import { useState } from "react";
import { FaChevronCircleRight, FaChevronDown, FaChevronRight, FaPersonBooth, FaUser } from 'react-icons/fa';
import {inter} from '@/lib/fonts';
import { useQuery, gql } from '@apollo/client';
import { storefront } from "@/utils/shopify/storefront";
import Typography from "@/components/ui/typography";




const CUSTOMER_UPDATE_MUTATION = `
  mutation customerUpdate(
    $customerAccessToken: String!,
    $customer: CustomerUpdateInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        acceptsMarketing
        email
        firstName
        id
        lastName
        phone
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;




export function UserDetails({user, token}: any) {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
    });
  
    function handleInputChange(event: any) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  
    async function handleSubmit(event: any) {
      console.log('form', formData)
      console.log('token', token)

      if (token === null || !token) {
        console.log('no token')
        throw new Error('No token found');
      }


      event.preventDefault();
      console.log(formData);
      setFormData(formData);
      setIsEditing(false);
  
      // handle address updates
      try {
          // update customer and possibly password


          


          const updated = await storefront({query: CUSTOMER_UPDATE_MUTATION, 
            variables: {
              customerAccessToken: token,
              customer: formData,
            }
          });

          console.log('updated', updated)
  
          if (updated.status === 200) {
            if (updated.body.data.customerUpdate.customerErrors){
              console.log('error', updated.body.data.customerUpdate.customerErrors[0])
              return 
            }
            sessionStorage.setItem('accessToken', updated.body.data.customerUpdate.customerAccessToken);
          }
  
      }
      catch (error) {
          console.log('error', error)
      }
  
    }
  
    function handleButtonPress() {
      setIsEditing(true);
    }
  
    return (
      <div>
        <div className={`${inter.className} border-[1px] rounded-xl p-8 text-dark border-[#CBCBCB] mb-4 `}>
          <div className='flex lg:flex-row flex-col gap-2 lg:justify-between mb-6'>
            <Typography variant={'title'} className='text-dark/90 lg:text-lg'>Persoonlijke Gegevens</Typography>
          
            {!isEditing ?
            <button onClick = {() => handleButtonPress()} className="px-4 text-gray-600 text-sm">
               Wijzig gegevens
            </button>
            : <div></div>
            } 
    
          </div>
          {isEditing ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 overflow-hidden'>
              <label className={`text-dark flex flex-row`}>
                <span className='inline-block'>First Name:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="firstName" className={`ml-4 text-dark/60 border-b w-[150px] text-sm lg:text-md mb-4 lg:mb-0`} value={formData.firstName} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='w-[100px]] block'>Last Name:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="lastName" className={`ml-4 text-dark/60 border-b w-[150px] text-sm lg:text-md mb-4 lg:mb-0`} value={formData.lastName} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}> 
                <span className='w-[50px] block'>Email:</span> {/* Adjust the min-width as per your design needs */}
                <input type="email" name="email" className={`ml-4 text-dark/60 border-b w-[200px] text-sm lg:text-md mb-4 lg:mb-0`} value={formData.email} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='w-[100px] block'>Telefoonnummer:</span> {/* Adjust the min-width as per your design needs */}
                <input type="tel" name="phone" className={`ml-10 text-dark/60 border-b w-[150px] text-sm lg:text-md mb-4 lg:mb-0`} value={formData.phone} onChange={handleInputChange} />
              </label>
              <button type="submit" className='w-1/2 bg-primary text-white py-2 rounded-xl mt-4'>Save</button>
            </form> 
          ) : (
          <div>
            <Typography variant='muted' className='text-dark/80 mb-2'>Name: {user?.firstName} {user?.lastName}</Typography>
            <Typography variant='muted' className='text-dark/80 mb-2'>Email: {user?.email}</Typography>
            <Typography variant='muted' className='text-dark/80 mb-2'>Telefoon nummer: {user?.phone}</Typography>
            <Typography variant='muted' className='text-dark/80 mb-2'>Geboorte Datum: {user?.email}</Typography>
          </div>
          )}
  
        </div>
      </div>
    )
  }
  
  