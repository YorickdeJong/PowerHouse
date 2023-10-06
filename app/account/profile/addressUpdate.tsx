import { storefront } from "@/utils/shopify/storefront";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronDown, FaChevronRight, FaPersonBooth, FaUser } from 'react-icons/fa';
import {inter} from '@/lib/fonts';
import Typography from "@/components/ui/typography";
import { set } from "lodash";

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customeraddresscreate
const CREATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;


const UPDATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
    $country: CountryCode
    $language: LanguageCode
 ) @inContext(country: $country, language: $language) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
export function UserAddresses({user, token} : any) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
      address1: user?.defaultAddress?.addresses?.address1,
      city: user?.defaultAddress?.addresses?.city,
      province: user?.defaultAddress?.addresses?.province,
      zip: user?.defaultAddress?.addresses?.zip
    });
  
    function handleInputChange(event: any) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  
    async function handleSubmit(event: any) {
      event.preventDefault();
      setIsEditing(false);
      event.preventDefault();
      setIsEditing(false);
    
      // Ensure token is available before making the request
      if (!token) {
        console.error("Token is not available");
        return;
      }

      try {
        const addressId = user?.defaultAddress?.id;
        // Map formData to the correct fields expected by Shopify
        const addressData = {
          address1: formData.address1,
          city: formData.city,
          province: formData.province,
          zip: formData.zip,
        };
        
        setFormData(addressData);

        console.log('addressData', addressData)

        if (!addressId) {
          const created = await storefront({
            query: CREATE_ADDRESS_MUTATION,
            variables: {
              customerAccessToken: token,
              address: addressData,
              addressId: addressId,
            },
          });
        }
        else {
          const updated = await storefront({
            query: UPDATE_ADDRESS_MUTATION,
            variables: {
              customerAccessToken: token,
              addressId: addressId,
            },
          });

          console.log('updated', updated)
          if (updated.status === 200) {
            if (updated.body.errors && updated.body.errors.length > 0) {
              console.log('GraphQL error:', updated.body.errors[0]);
              return;
            }
      
            const customerUserErrors = updated.body.data?.customerDefaultAddressUpdate?.customerUserErrors;
            if (customerUserErrors && customerUserErrors.length) {
              console.log('error', customerUserErrors[0]);
              return;
            }
          }
        }
    }
    catch (error) {
        console.log('error', error);
      }
    }
    console.log('address', user)
    function handleButtonPress() {
      setIsEditing(true);
    }
  
    console.log('formData', formData)


    return (
      <div>
        <div className={`${inter.className} border-[1px] rounded-xl p-8 text-dark border-[#CBCBCB] mb-4 `}>
          <div className='flex lg:flex-row flex-col gap-2 lg:justify-between mb-6'>
            <Typography variant={'title'} className='text-dark/90 lg:text-lg'>Adresgegevens</Typography>
          
            {!isEditing ? 
              <button onClick = {() => handleButtonPress()} className="px-4 text-gray-600 text-sm">
                 Wijzig gegevens
              </button>
              :<div></div>
            } 
            </div>


            {isEditing ? (
              <form onSubmit={handleSubmit} className='flex flex-col gap-2 overflow-hidden'>
                  <label className={`text-dark flex flex-row`}>
                    <span className='w-[150px] block'>Adres:</span> {/* Adjust the min-width as per your design needs */}
                    <input type="text" name="address1" className={`ml-4 text-dark/60 border-b text-sm lg:text-md mb-4 lg:mb-0`} 
                      value={formData.address1} onChange={handleInputChange} />
                  </label>
                  <label className={`text-dark flex flex-row`}>
                    <span className='w-[150px] block'>Stad:</span> {/* Adjust the min-width as per your design needs */}
                    <input type="text" name="city" className={`ml-4 text-dark/60 border-b text-sm lg:text-md mb-4 lg:mb-0`} 
                      value={formData.city} onChange={handleInputChange} />
                  </label>
                  <label className={`text-dark flex flex-row`}> 
                    <span className='w-[150px] block'>Provincie:</span> {/* Adjust the min-width as per your design needs */}
                    <input type="text" name="province" className={`ml-4 text-dark/60 border-b text-sm lg:text-md mb-4 lg:mb-0`} 
                      value={formData.province} onChange={handleInputChange} />
                  </label>
                  <label className={`text-dark flex flex-row`}>
                    <span className='w-[150px] block'>PostCode:</span> {/* Adjust the min-width as per your design needs */}
                    <input type="text" name="zip" className={`ml-4 text-dark/60 border-b text-sm lg:text-md mb-4 lg:mb-0`} 
                      value={formData.zip} onChange={handleInputChange} />
                  </label>
                  <button type="submit" className='w-1/2 bg-primary text-white py-2 rounded-xl mt-4'>Save</button>
                </form> 
              ) : (
              <div>
                <Typography variant='muted' className='text-dark/80 mb-2'>Adres: {formData?.address1}</Typography>
                <Typography variant='muted' className='text-dark/80 mb-2'>Stad: {formData?.city}</Typography>
                <Typography variant='muted' className='text-dark/80 mb-2'>Provincie: {formData?.province}</Typography>
                <Typography variant='muted' className='text-dark/80 mb-2'>PostCode: {formData?.zip}</Typography>
              </div>
              )}
        </div>
      </div>
    )
  }

  

  