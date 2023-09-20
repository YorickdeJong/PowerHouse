'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

import { Button } from './ui/button';
import { Typography } from './ui/typography';

export default function SearchBar({ className }: any) {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState(''); // State to keep track of input value

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Function to handle button click
  const handleSearch = () => {
    if (inputValue.trim() === '') {
      alert('Voer aub tekst in'); // Show an alert if the input is empty
    } else {
      push('/aanbod'); // Navigate to /aanbod if the input is filled
    }
  };

  return (
    <div
      className={cn(
        'bg-muted/10 min-w-[350px] max-w-[550px] h-[40px] rounded-full flex-row flex items-center justify-between',
        className
      )}
    >
      <div className="md:ml-4 mx-2 md:mx-0">
        <Icons.search />
      </div>
      <div className="">
        <input
          className="md:min-w-[280px] md:max-w-[550px] h-[30px]  rounded-[12px] lg:text-sm md:text-lg"
          placeholder="Zoek op locatie..."
          style={{ color: '#B0ADAD' }}
          value={inputValue}
          onChange={handleInputChange} // Update state on input change
        />
      </div>
    </div>
  );
}
