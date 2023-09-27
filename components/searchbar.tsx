
'use client'
import { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'
import axios from 'axios';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";
import { cn } from '@/lib/utils';
import { storefront } from '@/utils/shopify/storefront';

interface SearchResult {
    node: {
        title: string;
        handle: string;
    }
    // other fields you expect, like slug
  }

export default function SearchBar({ className }: any) {
  const [query, setQuery] = useState('')
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Step 3: Check if the click was outside the search bar container
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setResults([]); // Close the search bar by clearing the results
      }
    }

    // Step 2: Add an event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Step 4: Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchResults = debounce(async (query) => {
    setIsLoading(true)
    console.log('query', query)
    try {
      const products = await storefront({query: productsQuery, variables: {title: query}})
      console.log('products', products.body.data.products.edges)

      const data = products.body.data.products.edges
      setResults(data)
    } 
    catch (error) {
      console.error("There was an error fetching data", error)
    }

    setIsLoading(false)
  }, 300)

  const handleSearch = (e: any) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  
    if (newQuery.trim() === "") {
      setResults([]); // Clear the results if query is empty
    } else {
      fetchResults(newQuery);
    }
  };

  return (
    <div className='mt-0' ref={searchBarRef}>
            <div
                className={cn(
                    'border-[2px] border-gray-400 min-w-[350px] max-w-[550px] h-[40px] rounded-full flex-row flex items-center justify-between',
                    className
                )}
                >
                <FontAwesomeIcon
                    icon={faSearch}
                    className='text-primary mx-3 h-4 w-4'
                />
                <input 
                    type="text" 
                    className='w-full text-dark'
                    placeholder="Zoek artikelen..." 
                    value={query}
                    onChange={handleSearch}
                />

        </div>
        
        {results[0]?.node && <ul className=' absolute mt-2 bg-neutral-100 p-6 min-w-[350px] max-w-[550px] rounded-[10px] shadow-lg'>
            {results.slice(0, 5).map((result, index) => (
                <>
                <li key={index} className='py-2 text-dark/60 hover:text-dark'>
                    <Link href={`/shop/filterable-collection/${result.node.handle}`}>
                        {result.node.title}
                    </Link>
                </li>
                <hr className="my-2 mb-4 border-none bg-dark/30 h-[1px] "/>
                </>
            ))}
        </ul>
        }
    </div>
  )
}



const productsQuery = `
query SearchProducts($title: String!) {
    products(first: 5, query: $title) {
      edges {
        node {
          title
          handle     
        }
      }
    }
  }
`