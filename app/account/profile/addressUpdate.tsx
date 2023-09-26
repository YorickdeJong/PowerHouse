import { storefront } from "@/utils/shopify/storefront";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronDown, FaChevronRight, FaPersonBooth, FaUser } from 'react-icons/fa';
import {inter} from '@/lib/fonts';
import Typography from "@/components/ui/typography";
import { set } from "lodash";

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


const UPDATE_DEFAULT_ADDRESS_MUTATION = `#graphql
  mutation customerDefaultAddressUpdate(
    $addressId: ID!
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerDefaultAddressUpdate(
      addressId: $addressId
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        defaultAddress {
          id
        }
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
    const addresses = user?.defaultAddress
  
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
      address1: addresses?.address1,
      city: addresses?.city,
      province: addresses?.province,
      country: addresses?.country,
      zip: addresses?.zip
    });
  
    function handleInputChange(event: any) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  
    async function handleSubmit(event: any) {
      event.preventDefault();
      setIsEditing(false);
      try {
        const addressId = user?.defaultAddress?.id;
        // Map formData to the correct fields expected by Shopify
        const addressData = {
          address1: formData.address1,
          city: formData.city,
          province: formData.province,
          country: formData.country,
          zip: formData.zip,
        };
        
        setFormData(addressData);

        console.log('addressData', addressData)
        console.log('addressId', addressId)

        if (!addressId) {
          const created = await storefront({
            query: CREATE_ADDRESS_MUTATION,
            variables: {
              customerAccessToken: token,
              address: addressData,
            },
          });
    
          if (created.status === 200) {
            if (created.body.data.customerAddressCreate.customerUserErrors.length) {
              console.log('error', created.body.data.customerAddressCreate.customerUserErrors[0]);
              return;
            }
    
            // Get the ID of the newly created address
            const newAddressId = created.body.data.customerAddressCreate.customerAddress.id;
    
            // Update the default address to the newly created address
            const updated = await storefront({
              query: UPDATE_DEFAULT_ADDRESS_MUTATION,
              variables: {
                customerAccessToken: token,
                addressId: newAddressId,
              },
            });
    
            if (updated.status === 200 && updated.body.data.customerDefaultAddressUpdate.customerUserErrors.length) {
              console.log('error', updated.body.data.customerDefaultAddressUpdate.customerUserErrors[0]);
              return;
            }
          }
        } else {
          // If the user already has a default address, update it
          const updated = await storefront({
            query: UPDATE_DEFAULT_ADDRESS_MUTATION,
            variables: {
              customerAccessToken: token,
              addressId: addressId,
            },
          });
    
          if (updated.status === 200 && updated.body.data.customerDefaultAddressUpdate.customerUserErrors.length) {
            console.log('error', updated.body.data.customerDefaultAddressUpdate.customerUserErrors[0]);
            return;
          }
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  
    console.log('address', user)
    function handleButtonPress() {
      setIsEditing(true);
    }
  
    console.log('formData', formData)


    return (
      <div className="mt-16">
        <div className='flex flex-row justify-between'>
            <FaUser className='text-dark mt-6 ml-4' />
            <Typography variant={'title'} className='text-dark/90'>Adress Gegevens</Typography>
            <button onClick = {() => handleButtonPress()} className="px-4 mt-3 h-[40px] inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
              <i className="mr-1 fa fa-plus"></i> Wijzig gegevens
            </button>
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>Adres:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="address1" className={`ml-4 text-dark/60 border-b`} value={formData.address1} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>Stad:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="city" className={`ml-4 text-dark/60 border-b`} value={formData.city} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}> 
                <span className='min-width-[150px] block'>Provincie:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="province" className={`ml-4 text-dark/60 border-b`} value={formData.province} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>Land:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="country" className={`ml-4 text-dark/60 border-b`} value={formData.country} onChange={handleInputChange} />
              </label>
              <label className={`text-dark flex flex-row`}>
                <span className='min-width-[150px] block'>PostCode:</span> {/* Adjust the min-width as per your design needs */}
                <input type="text" name="zip" className={`ml-4 text-dark/60 border-b`} value={formData.zip} onChange={handleInputChange} />
              </label>
              <button type="submit" className='w-1/2 bg-primary text-white py-2 rounded-xl mt-4'>Save</button>
            </form> 
          ) : (
        <div className="border-2 rounded-xl p-8 border-dark/60 mb-4">
          <div>
            <Typography variant='muted' className='text-dark/80'>Adres: {formData?.address1}</Typography>
            <Typography variant='muted' className='text-dark/80'>Stad: {formData?.city}</Typography>
            <Typography variant='muted' className='text-dark/80'>Provincie: {formData?.province}</Typography>
            <Typography variant='muted' className='text-dark/80'>Land: {formData?.country}</Typography>
            <Typography variant='muted' className='text-dark/80'>PostCode: {formData?.zip}</Typography>
          </div>
        </div>
          )}
      </div>
    )
  }
  
  