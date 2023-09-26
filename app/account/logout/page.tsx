'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react"




export default function Logout(){
    const router = useRouter(); // Initializing the useRouter hook

    useEffect(() => {
            sessionStorage.removeItem('accessToken'); // Replace with your logic
            // 2. Update the UI
            router.push('/'); // Redirect to login page
        
    }, [])
    
    
    return (
        <div>
            <h1>Logout</h1>
        </div>
    )


}