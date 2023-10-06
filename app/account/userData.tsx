import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/userProfileContext';
import { usePathname } from 'next/navigation';
import {  gql, useQuery } from '@apollo/client';

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

export default function UserData () {
    const router = useRouter(); // Initializing the useRouter hook
    const [token, setToken] = useState<string | null>(null);
    const { setUser, setAccessToken } = useUser();
    const path = usePathname();
  
  
    useEffect(() => {
        // Check if the user is logged in
        const accessToken = sessionStorage.getItem('accessToken');
        setToken(accessToken);
        setAccessToken(accessToken);
        if (!accessToken) {
          // Log the user out if the token isn't available
          logOut();
        }
      }, [router, token]);
    
      const logOut = () => {
        // Remove the token from sessionStorage
        sessionStorage.removeItem('accessToken');
        
        // Reset user-related state/context
        setUser(null);
        setAccessToken(null)
        // Redirect to the login page
        router.push('/login');
      }
    
      const { loading, error, data } = useQuery(GET_USER_DETAILS, {
        variables: { customerAccessToken: token },
        skip: !token,
      });

      if (loading) return <p>Loading...</p>;
      if (error) {
        logOut();
        return <p>Error: {error.message}</p>;
      }
    
      const user = data?.customer;
      console.log('user', user)
      setUser(user);

    return (
        <div></div>
    )
}