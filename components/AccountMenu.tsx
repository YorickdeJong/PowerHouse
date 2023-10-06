import { spaceGrotesk } from "@/lib/fonts";
import Link from "next/link";
import { Images } from "./images";
import UserPhoto from "@/app/account/profile/userPhoto";






export default function AccountMenu ({params} : any) {
    const slug = params?.slug;

    return (
        <>
            <div className="grid grid-cols-1 h-[400px] gap-8 mt-28 mr-20 w-[100px]">
                <UserPhoto  /> 
                {/* <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Images.homepageMid />
                </div> */}
                <Link href='/account/profile' className={`text-[#121212] ${spaceGrotesk.className} text-xl`} style = {{}}>Profiel</Link>
                <Link href='/account/orders' className={`text-[#121212] ${spaceGrotesk.className} text-xl`}>Orders</Link>
                <Link href='/account/profile' className={`text-[#121212] ${spaceGrotesk.className} text-xl`}>Retours</Link>
                <Link href='/account/profile' className={`text-[#121212] ${spaceGrotesk.className} text-xl`}>Wishlist</Link>
                <Link href='/account/logout' className={`text-[#121212] ${spaceGrotesk.className} text-xl`}>Log Uit</Link>
            </div>
        </>
    )
}
