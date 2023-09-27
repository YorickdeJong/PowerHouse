'use client'
import Brand from "./brand";
import { useEffect, useRef } from 'react';

export default function SiteBanner() {
    const marqueeRef = useRef<HTMLDivElement>(null); // Specify the type here


    useEffect(() => {
        const marquee = marqueeRef.current;
        if (marquee) {
            const clone = marquee.cloneNode(true);
            marquee.parentNode?.appendChild(clone); // Use optional chaining here
        }
    }, []);

  return (
    <section className="bg-gray-800 h-[70px] relative overflow-hidden">
      <div className="container flex items-center justify-between h-full">
        <div className="mt-[-24px]">
          <Brand />
        </div>
            <div className="absolute max-w-[1000px] mx-auto top-0 right-0 bottom-0 left-0 flex items-center overflow-hidden">
            <div
                className="flex space-x-4 marquee"
                style={{
                animation: `marquee 10s linear infinite`,
                whiteSpace: 'nowrap',
                }}
            >
                <span className="text-white">Sale Voor Tops - 50% Korting <span className="ml-4 mr-2">|</span> </span>
                <span className="text-white">Winter Collectie - 30% Korting <span className="ml-4 mr-2">|</span> </span>
                <span className="text-white">Gratis Verzending voor Orders over €50</span>
            </div>
        </div>
      </div>
    </section>
  );
}
