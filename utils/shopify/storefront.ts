import gql from "graphql-tag";

export async function storefront({ query, variables } : any) {
    const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
    const key = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN || ''; 
    const revalidate = 30

    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key
        }, 
        next: {revalidate},
        body: JSON.stringify({ query: query, variables: variables })
    });

      if (!result.ok) {
        throw new Error(`Server responded with ${result.status}: ${await result.text()}`);
      }

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
