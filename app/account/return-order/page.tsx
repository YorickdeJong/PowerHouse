'use client'
import { Fragment, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'



export default function Account() {
  const path = usePathname();
  const router = useRouter(); // Initializing the useRouter hook
  
  useEffect(() => {
    // Check if the user is logged in
    const token = sessionStorage.getItem('accessToken'); // Replace with your logic
    
    if (!token) {
      // If the user is not logged in, redirect to the login page
      router.push('/login'); // Replace with your login page route
    }
  }, [router]);

  return (
    <>
     <section className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </section>
    
    </>
  )
}