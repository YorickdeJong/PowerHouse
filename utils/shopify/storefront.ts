import gql from "graphql-tag";

export async function storefront({ query, variables } : any) {
    const endpoint = process.env.SHOPIFY_STORE_DOMAIN || '';
    const key = process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN || ''; 

    
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key
        },
        body: JSON.stringify({ query: query, variables: variables })
      });
      
      return {
        status: result.status,
        body: await result.json()
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: 500,
        error: 'Error receiving data'
      };
    }
}