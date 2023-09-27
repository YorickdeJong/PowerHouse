'use client'
import { useEffect, useState } from "react";
import Typography from "../ui/typography";
import { storefront } from "@/utils/shopify/storefront";



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

export default function CategoryFilter({setSelectedCollection, selectedCollection}: any) {
 
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        fetchCollections().then((data) => setCollections(data));
    },[])

    return (
        <div>
             <Typography variant = 'title' className="lg:text-xl text-dark/80 font-bold"> Categorie</Typography>
            {collections.map((collection: any) => (
                <div className="flex flex-row justify-between items-center mt-4" onClick = {() => setSelectedCollection(collection.title)}>
                    <Typography variant = 'muted' className={`lg:text-sm text-dark/80 ${collection.title === selectedCollection ? 'text-dark font-bold' : ''} hover:text-gray-400`} >{collection.title}</Typography>
                </div>
            ))}
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