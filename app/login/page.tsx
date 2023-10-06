'use client'
import Image from "next/image";
import Link from "next/link";
import { gql, useMutation } from '@apollo/client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignIn() {
    const router = useRouter();
    const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
    const [errorResponse, setErrorResponse] = useState({
      field: '',
      message: ''
    });

    useEffect(() => {
      if (data) {
          const { customerAccessToken, userErrors } = data.customerAccessTokenCreate;
          if (userErrors.length === 0) {
              sessionStorage.setItem('accessToken', customerAccessToken.accessToken);
              router.push('/account/profile');
          } else {
              setErrorResponse(userErrors[0]);
              console.error('Error creating access token', userErrors[0].message);
          }
      }
  }, [data]);



    const handleSubmit = async (event : any) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      try {
        const response = await login({
          variables: {
            input: { email, password },
          },
        });
        // Handle successful login
        console.log(response.data.customerAccessTokenCreate.customerAccessToken);
      } catch (err) {
        // Handle error
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email adres
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary/90 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Wachtwoord
                  </label>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-primary/90 hover:text-primary">
                      Wachtwoord Vergeten?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary/90 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
              {/* Display error message below the form and button */}
              {errorResponse.message !== '' && (
                <div className="mt-4 text-center ">
                  <p className="text-red-500 text-1xl">Error: {errorResponse.message}</p>
                </div>
              )}

            <p className="mt-10 text-center text-sm text-gray-500">
              Nog geen account?{' '}
              <Link href="/registreer" className="ml-4 font-semibold leading-6 text-primary hover:text-primary/90">
                Registreer je hier
              </Link>
            </p>
          </div>
        </section>

    )
  }


const LOGIN_MUTATION = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;
