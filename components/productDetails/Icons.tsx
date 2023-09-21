import Typography from "../ui/typography";
import { Icons } from "../icons";



export default function IconsComponent() {

    return (
        <>
        <div className='grid grid-cols-3 mt-6'>
            <div  className='flex flex-row'>
                <div className='mt-[11px]'>
                    <Icons.heart />
                </div>
                <Typography variant={'muted'} className='text-dark/80 font-semibold ml-2 hover:text-primary'>Favorite</Typography>
            </div>
            <div  className='flex flex-row ml-4'>
                <div className='mt-[9px]'>
                    <Icons.help />
                </div>
                <Typography variant={'muted'} className='text-dark/80 font-semibold ml-2 hover:text-primary'>Help</Typography>
            </div>
            
            <div  className='flex flex-row ml-4'>
                <div className='mt-[9px]'>
                    <Icons.share />
                </div>
                <Typography variant={'muted'} className='text-dark/80 font-semibold ml-2 hover:text-primary'>Share</Typography>
            </div>
        </div>
        <hr className='mt-4 border-none bg-dark/10 h-[1px]'/>
        </>
    )
}