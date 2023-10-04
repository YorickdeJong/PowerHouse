import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { storefront } from "@/utils/shopify/storefront";
import gql from "graphql-tag";
import { cn } from "@/lib/utils";
import Motion from "@/components/motion";
import { spaceGrotesk } from "@/lib/fonts";
import { Icons } from "@/components/icons";
import { space } from "postcss/lib/list";


export default function NewsLetter({className} : any) {

    const transition={
      delay: 0.5,
      duration: 0.8,
      type: 'tween',
    }

    return (
        <section className={cn("py-12", className)}>
            <div className="bg-[#FFFBFB] h-[450px] mx-4 lg:mx-auto flex items-center justify-center flex-col px-10 lg:px-0 ">
                <Motion initial= 'hidden' transition={transition}>
                  <Typography variant='title' className={`text-primary mt-2 mb-0 text-2xl lg:text-5xl ${spaceGrotesk.className} lg:max-w-[670px] xl:leading-[58px] font-medium text-center` }>
                    Meld Je Aan Voor de Nieuwsbrief
                  </Typography>
                </Motion>
                <Motion initial= 'hidden' transition={transition} >
                  <Typography variant='muted' className='leading-7 md:text-md lg:max-w-[440px] mt-4 font-regular text-center'>
                    Houd je dagelijkse stijl chic en trendy met onze selectie van meer dan 10 stijlen om uit te kiezen.
                  </Typography>
                </Motion>

                <div className="mt-12 flex justify-between lg:min-w-[650px] mx-auto border-b-[1px] border-[#CBCBCB] pb-2 mb">
                  <Icons.mail className="h-8 text-[#232323]"/>
                  <input type="email" className="w-full rounded-md px-4 ml-6 text-[#121212] pb-[1px]" placeholder="Email Adres"/>
                  {/* <button className={`border-[#121212] text-[#121212] text-md lg:text-md ${spaceGrotesk.className}`}>
                    <Link href='/shop' className={`flex whitespace-nowrap`}>
                      Lees meer <Icons.arrowRight className='text-gray-600 h-4 ml-2 mt-[5px]'/>                
                    </Link>
                  </button> */}
                </div>
            </div>
        </section>
    )
}
