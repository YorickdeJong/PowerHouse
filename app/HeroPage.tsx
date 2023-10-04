'use client'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Typography from '@/components/ui/typography';
import Motion from '@/components/motion';
import { Icons } from '@/components/icons';
import { bebasNeue, openSans } from '@/lib/fonts';

export default function HeroPage(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const transition={
    delay: 0.25,
    duration: 0.5,
    }

    const sliderVariants = {
    hidden: { opacity: 0, x: '-50%' },
    visible: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '50%' },
    };

    const Images = [
    '/assets/images/heroImage-1.png',
    '/assets/images/heroImage-1.png',
    '/assets/images/heroImage-1.png',
    ]

    const imageTitles = [
    'Bekijk Tops',
    'Bekijk Shorts',
    'Bekijk Long-Sleeves'

    ]
    const titles = [
    'Fitness Kleding Voor Dames',
    'Kracht & Elegantie: Sportkleding voor Haar',
    'Dames Fitness: Stijl Ontmoet Prestaties',
    ]

    const subTitles = [
    'Boost Je Workout Met GoGym. Ontdek een wereld waar mode en fitness samenkomen om je de ultieme workout ervaring te bieden!',
    'Til je training naar een hoger niveau met onze stijlvolle en comfortabele sportkleding. Perfect voor elke vrouw die zich krachtig wil voelen!',
    'Waar elegantie en functionaliteit elkaar ontmoeten. Ervaar de perfecte combinatie van mode en comfort tijdens je workout met GoGym!',
    ]

    const links = [
    '/shop/tops',
    '/shop/shorts',
    '/shop/long-sleeves'
    ]
    return (
        <motion.section
            key={currentIndex} // Add this line
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={sliderVariants}
            transition={transition}
            className=' bg-[#FFFBFB] mb-12 lg:p-12'
        >
            <div className='container relative grid grid-cols-1 md:grid-cols-2 gap-4'>

                {/* indicator */}
                <div className='absolute px-16 md:pl-24 top-[50px] left-[0px] grid grid-cols-3 gap-6'>
                    <div onClick = {()=> setCurrentIndex(0)} className='h-2 w-20 rounded-full bg-[#E4E4E4] hover:scale-110' style = {{backgroundColor: currentIndex === 0 ? '#ED795B' : '#E4E4E4'}}/>
                    <div onClick = {()=> setCurrentIndex(1)} className='h-2 w-20 rounded-full bg-[#E4E4E4] hover:scale-110' style = {{backgroundColor: currentIndex === 1 ? '#ED795B' : '#E4E4E4'}}/>
                    <div onClick = {()=> setCurrentIndex(2)} className='h-2 w-20 rounded-full bg-[#E4E4E4] hover:scale-110' style = {{backgroundColor: currentIndex === 2 ? '#ED795B' : '#E4E4E4'}}/>
                </div>

                {/* Second Image with Text Below */}
                <div className='flex flex-col justify-center px-8 md:px-16 py-10 mt-16 md:mt-0 lg:py-0'>

                    <Motion initial= 'hidden' transition={transition}>
                        <Typography variant='heading' className={`sm:text-3xl lg:text-5xl xl:text-7xl text-[#ED795B] ${bebasNeue.className} font-bold lg:leading-[26px]` }>
                            GOGYM
                        </Typography>
                        </Motion>

                        <Motion initial= 'hidden' transition={transition}>
                            <Typography variant='muted' className={`text-[#121212] mt-2 mb-0 text-2xl lg:text-3xl ${openSans.className} xl:leading-[48px] font-bold` }>
                                {titles[currentIndex]}
                            </Typography>
                        </Motion>

                        <Motion initial= 'hidden' transition={transition} >
                        <Typography variant='muted' className={`leading-7 md:text-md lg:max-w-[440px] mt-2 font-regular ${openSans.className} text-[#121212]`}>
                            {subTitles[currentIndex]} 
                        </Typography>
                        </Motion>

                        <Motion initial='hidden' transition={transition} className='mt-[28px] bg-[#ED795B] w-[240px] rounded-full py-[6px] px-5 hover:size-105'>
                        <Link href={links[currentIndex]} className=''>
                            <Typography variant='muted' className='leading-7 md:text-md lg:max-w-[440px] text-white font-bold text-center'>
                                Bekijk de collectie 
                            </Typography>
                        </Link>
                    </Motion>


                </div>


                <Link href={links[currentIndex]} className='relative group h-[350px] md:h-[700px] hover:scale-105 mb-12 md:mb-0'>
                    {/* First Images */}
                    <Image
                        src={Images[currentIndex]} // Use the current index to get the image source
                        alt='Image'
                        layout='fill'
                        objectFit='contain'
                        className='group-hover:opacity-70'
                        priority
                    />
                    <Typography 
                        variant='title' 
                        className='absolute ml-0 mt-4 opacity-0 lg:text-xl group-hover:opacity-100 text-primary transition-opacity duration-300'
                    >
                        {imageTitles[currentIndex]}
                    </Typography>
                    <div className='absolute top-[20px] md:top-[50px] right-[60px] md:right-[100px] md:h-[75px] md:w-[75px] h-[50px] w-[50px]'>
                        <Image
                            src={'/assets/images/Ellipse-8.svg'} // Use the current index to get the image source
                            alt='Image'
                            layout='fill'
                            objectFit='contain'
                            className='group-hover:opacity-70'
                            priority
                        />
                    </div>

                    <div className='absolute top-[10px] right-[0px] md:right-[20px] md:h-[35px] md:w-[35px] h-[28px] w-[28px]'>
                        <Image
                            src={'/assets/images/Ellipse-9.svg'} // Use the current index to get the image source
                            alt='Image'
                            layout='fill'
                            objectFit='contain'
                            className='group-hover:opacity-70'
                            priority
                        />
                    </div>
                </Link>


            </div>
            
            
            
        
        </motion.section>
    )
}