'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useScrollTransform from '@/hook/scroll-transform';
import config from '@/sanity.config';
import { getPortfolio } from '@/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url';
import { motion, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import Image from 'next/image';
import BenefitsCard from '@/components/BenefitsCard';
import { cn } from '@/lib/utils';

const builder = imageUrlBuilder(config);

function urlFor(source: any) {
  return builder.image(source);
}



export default function TechnologySlugPage({}) {
const stack = {}
  return (
    <section
    >
     <Image
        className="h-screen w-full object-contain md:max-h-[700px] md:w-full md:origin-right md:object-cover md:max-md:scale-[2]"
        src = '/assets/images/Banner3.png'
        width={2200}
        height={1000}
        alt = ''
        style = {{opacity: 0.9}}
          />
            <div className="md:w-[80%] md:max-w-[2000px] mx-auto align-center mt-32">
                <Breadcrumb pageTitle="Services" />
                    <div>
                        <div className="w-[80%]">
                            <Caption className="mt-20">Technologie</Caption>
                            <Typography className="mt-5" variant={'title'}>
                                NextJs
                            </Typography>
                            <Typography className="mt-3 md:text-xl" variant={'muted'}>
                            Next.js biedt een reeks functies en optimalisaties die zijn ontworpen om de ontwikkeling van 
                            moderne webapplicaties te versnellen, waaronder:
                            </Typography>

                            <h4 className="mb-5 mt-12 text-3xl font-bold capitalize leading-[40px] text-stone-300">
                                Wat is NextJS?
                            </h4>

                            <Typography className="mt-3 md:text-xl" variant={'muted'}>
                                Next.js is een open-source React-framework dat is ontwikkeld door Vercel. Het is ontworpen om 
                                de ontwikkeling van server-side rendered (SSR) en statisch gegenereerde (SSG) React-applicaties te vergemakkelijken.
                            </Typography>
                        </div>

                    <h4 className="mb-5 mt-12 text-3xl font-bold capitalize leading-[40px] text-stone-300">
                        Voordelen
                    </h4>
                    <div
                        className={cn(
                        'my-12 mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2',
                        {}
                        )}
                    >
                    {stacks.map((stack, index) => (
                        <BenefitsCard
                            projectDetails={[]}
                            isDesktopProject={false}
                            portfolioPage
                            {...stack}
                        />
                    ))}
                    </div>
            </div>
        </div>
    </section>
  );
}

const stacks =  [
    {
        text: `Naast SSR biedt Next.js de mogelijkheid om statische websites te genereren (SSG), waardoor de tijd tot de eerste 
        byte (TTFB) wordt verminderd en de snelheid van de site wordt verbeterd. Je kunt pagina's vooraf renderen tijdens de 
        bouwtijd en ze serveren als statische bestanden.
        `,
        label: 'SNEL',
        image: '',
    },
    {
        text: `Next.js biedt ingebouwde server-side rendering (SSR), waardoor je volledig gerenderde HTML-pagina's kunt 
        serveren voor verbeterde SEO en prestaties. 
        Dit kan bijzonder voordelig zijn voor dynamische inhoud waar zoekmachinezichtbaarheid belangrijk is.`,
        label: 'SEO OPTIMALISATIE',
        image: '',
    },
    {
        text: `Het framework is zeer uitbreidbaar en kan gemakkelijk worden aangepast als de website groeit. Dit maakt 
        het een aantrekkelijke keuze voor zowel startups als grotere ondernemingen. Het maakt langetermijnonderhoud ook gemakkelijker.`,
        label: 'FLEXIBILITEIT EN SCHAALBAARHEID',
        image: '',
    },
    {
        text: `Next.js biedt ingebouwde API-routing, waardoor je zowel frontend als backend in één oplossing kunt hebben. Dit vereenvoudigt 
        de architectuur en maakt beheer gemakkelijker. Voor klanten die een uniforme oplossing willen, is dit bijzonder aantrekkelijk.`,
        label: 'FRONT EN BACKEND',
        image: '',
    },
]


function renderRichText(content: any) {
  return content.map((block: any) => {
    switch (block._type) {
      case 'block':
        return (
          <p key={block._key}>
            {block.children.map((span: any) => span.text).join('')}
          </p>
        );
      // Add more cases if you have other _type values in your rich text content
      default:
        return null;
    }
  });
}

function transformData(data: any) {
  const labels = ['Probleem', 'oplossing', 'resultaat'];
  return data.map((item: any, index: any) => ({
    postImage: urlFor(item).url(),
    label: labels[index],
    text: item.text && item.text[0] && item.text[0].children[0].text,
  }));
}
