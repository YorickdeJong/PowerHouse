import { Images } from "@/components/images";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";





export default function Banner() {
    return (
        <section className="relative h-[300px] xl:h-[650px]  ">
            <div className='absolute h-full w-screen ' style={{ background: 'linear-gradient(to right, #B2D8E4, #ffffff)' }} />
            
            <div className="absolute bottom-0 xl:h-[600px] xl:w-[600px] xl:left-[200px]">
                <Images.women_2
                    
                />
            </div>

            <div className="isolate xl:absolute flex items-center justify-center xl:right-[400px] pt-10 xl:pt-60 text-center">
                <div>
                    <Typography variant='title' className='leading-10 text-tertairy'>
                    GOGYM SEAMLESS
                    </Typography>
                    <Typography variant='muted' className="lg:text-2xl mt-6 text-primary max-w-[450px] lg:leading-[30px]">
                    Welke nieuwe kleuren en stijlen sluiten naadloos op jouw training aan?
                    </Typography>

                    <Button variant='default' className="rounded-full py-3 mt-10 text-white text-lg text-center ring-gray-900/10 hover:ring-gray-900/20">
                    VIND JE FIT {' '}
                    <a href="#" className="font-semibold text-white ml-4">
                        <span className="absolute inset-0 " aria-hidden="true" />
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                    </Button>
                </div>
            </div>
        </section>
    )

}