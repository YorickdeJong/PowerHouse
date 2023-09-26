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
      event.preventDefault();
      console.log(formData);
      setFormData(formData);
      setIsEditing(false);
  
      // handle address updates
      try {
          // update customer and possibly password
          console.log('form', formData)
          const updated = await storefront({query: CUSTOMER_UPDATE_MUTATION, 
            variables: {
              customerAccessToken: token,
              customer: formData,
            }
          });
  
          if (updated.status === 200) {
            if (updated.body.data.customerUpdate.customerErrors.length){
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
        <div className='flex flex-row justify-between'>
          <FaUser className='text-dark mt-6 ml-4' />
          <Typography variant={'title'} className='text-dark/90'>Persoonlijke Informatie</Typography>
         
          {!isEditing ? <button onClick = {() => handleButtonPress()} className="px-4 mt-3 h-[40px] inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
            <i className="mr-1 fa fa-plus"></i> Wijzig gegevens
          </button>
          : <div></div>
          } 
  
        </div>
        <div className={`${inter.className} border-2 rounded-xl p-8 text-dark border-dark/60 mb-4 `}>
          {isEditing ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>First Name:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="firstName" className={`ml-4 text-dark/60 border-b`} value={formData.firstName} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>Last Name:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="lastName" className={`ml-4 text-dark/60 border-b`} value={formData.lastName} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}> 
                <span className='min-width-[150px] block'>Email:</span> {/* Adjust the min-width as per your design needs */}
                <input type="email" name="email" className={`ml-4 text-dark/60 border-b`} value={formData.email} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>Telefoonnummer:</span> {/* Adjust the min-width as per your design needs */}
                <input type="tel" name="phone" className={`ml-4 text-dark/60 border-b`} value={formData.phone} onChange={handleInputChange} />
              </label>
              <button type="submit" className='w-1/2 bg-primary text-white py-2 rounded-xl mt-4'>Save</button>
            </form> 
          ) : (
          <div>
            <Typography variant='muted' className='text-dark/80'>Name: {user?.firstName} {user?.lastName}</Typography>
            <Typography variant='muted' className='text-dark/80'>Email: {user?.email}</Typography>
            <Typography variant='muted' className='text-dark/80'>Telefoonnummer: {user?.phone}</Typography>
            <Typography variant='muted' className='text-dark/80'>Geboorte Datum: {user?.email}</Typography>
          </div>
          )}
  
        </div>
      </div>
    )
  }
  
  