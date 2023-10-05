'use client'
import { useEffect, useState } from "react";
import Typography from "../ui/typography";
import { storefront } from "@/utils/shopify/storefront";
import Link from "next/link";



async function fetchCollections() {
    try {
      const response = await storefront({
        query: COLLECTIONS_QUERY,
      });
      const collections = response.body.data.collections.edges.map((edge: any) => edge.node);
      return collections || [];
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }

export default function CategoryFilter({}: any) {
 
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        fetchCollections().then((data) => setCollections(data));
    },[])
    

    return (
        <div>
             <Typography variant = 'title' className="text-lg lg:text-xl text-dark/80 font-bold">Categorie</Typography>
            <div className="max-h-[200px] overflow-y-auto custom-scrollbar max-w-[170px]">
              {collections.map((collection: any) => {
                if (collection.handle === 'filterable-collection') {
                  collection.title.replace('filterable-collection', 'Alle Producten')
                }
              return (
                    <Link href={`/shop/${collection.handle}`} className="flex flex-row justify-between items-center mt-4">
                        <Typography variant = 'muted' 
                          className={`lg:text-sm text-dark/80 
                          hover:cursor-pointer hover:text-gray-400`} 
                        >
                            {collection.title}
                        </Typography>
                    </Link>
                  )}
              )}
            </div>
        </div>
    )
}

const COLLECTIONS_QUERY = `
query Collections {
  collections(first: 30) {
    edges {
      node {
        title
        handle
      }
    }
  }
}
`;