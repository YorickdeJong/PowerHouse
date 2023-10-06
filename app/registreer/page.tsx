'use client'
import Image from "next/image";
import Link from "next/link";
import { gql, useMutation } from '@apollo/client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Form from "./Form";

export default function Register() {
  const [register, { loading, error, data }] = useMutation(REGISTER_MUTATION);
  const router = useRouter();
  const [userErrors, setUserErrors] = useState({
    field: '',
    message: ''
  });

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await register({
        variables: {
          input: { firstName, lastName, email, password },
        },
      });
      if (response.data.customerCreate.userErrors.length > 0) {
        setUserErrors(response.data.customerCreate.userErrors[0]);
      } else {
        // Redirect to some page after successful registration, e.g., login page
        sessionStorage.setItem('accessToken', response.data.customerCreate.customer.accessToken);
        router.push('/account/profile');
      }
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
                className="mx-auto h-10 w-auto"
                src="/gogymlogo.svg"
                width={32}
                height={32}
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login op je account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* onSubmit={handleSubmit} */}
              <Form handleSubmit={handleSubmit} />
  
              {/* Display error message below the form and button */}
              {userErrors.message !== '' && (
                <div className="mt-4 text-center ">
                  <p className="text-red-500 text-1xl">Error: {userErrors.message}</p>
                </div>
              )}

            <p className="mt-10 text-center text-sm text-gray-500">
              Heb je al een account?{' '}
              <Link href="/login" className="ml-4 font-semibold leading-6 text-primary hover:text-primary/90">
                Log hier in
              </Link>
            </p>
          </div>
        </section>

    )
  }


  const REGISTER_MUTATION = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      userErrors {
        field
        message
      }
    }
  }
`;