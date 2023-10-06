'use client'
import { Fragment, useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { storefront } from '@/utils/shopify/storefront';
import Typography from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';


const ORDER_ITEM_FRAGMENT = gql`
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    totalPriceV2 {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          id
          title
          priceV2 {
            amount
            currencyCode
          }
          image {
            url
            altText
            height
            width
          }
        }
        quantity
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;

const CUSTOMER_FRAGMENT = gql`
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/queries/customer
const CUSTOMER_ORDERS_QUERY = gql`
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;



export default function Orders({params} : any) {
  const router = useRouter(); // Initializing the useRouter hook
  const path = usePathname();
  const [token, setToken] = useState<string | null>(null);
  console.log('slug', path)

  useEffect(() => {
    // Check if the user is logged in
    const accessToken = sessionStorage.getItem('accessToken');
    setToken(accessToken);
    
    
    if (!accessToken) {
      // If the user is not logged in, redirect to the login page
      router.push('/login'); // Replace with your login page route
    }

    console.log('accessToken', accessToken)

  }, [router]);

  console.log('token', token)

  const { loading, error, data } = useQuery(CUSTOMER_ORDERS_QUERY, {
    variables: { customerAccessToken: token, first: 5 },
    
    skip: !token,
  });
  console.log('data', data)


  const orders = data?.customer?.orders?.nodes || []




  return (
    <main>
     <section className="mt-24 mb-10 ml-10">
            <Breadcrumb pageTitle='' />   
            <div className="max-w-7xl py-6">
                <CustomerOrders orders={orders} />
            </div>
        </section>
    </main>
  )
}


const CustomerOrders = ({orders} : any) => {
  const router = useRouter(); // Initializing the useRouter hook

  return (
    <div>
      {orders.map((order: any) => {
        const encodedOrderId = encodeURIComponent(order.id);
        return (
        <div className='mb-8 group border-2 rounded-xl p-6 border-dark/60 hover:bg-dark/10' key={order.id}>
          <Link href={`/account/orders/${encodedOrderId}`} className='flex flex-row items-center'>
              <div className='flex-shrink-0'>
                {/* Check if the image exists before rendering it */}
                {order.lineItems.nodes[0]?.variant?.image?.url && (
                  <Image
                    src={order.lineItems.nodes[0].variant.image.url}
                    alt={order.lineItems.nodes[0]?.variant?.image?.altText || 'Product Image'}
                    className='w-24 h-24 object-cover rounded-md ml-4'
                    width={100}
                    height={100}
                  />
                )}
              </div>
              <div className='ml-10'>
                <Typography variant='title' className='text-dark/80 group-hover:text-dark/50 mt-[-16px]'>
                  Bestelnummer #{order.orderNumber} - Totale Prijs: {Number(order.totalPriceV2.amount).toFixed(2)} {order.totalPriceV2.currencyCode}
                </Typography>
                <ul>
                  {order.lineItems.nodes.map((item: any) => (
                    <li key={item?.variant?.id} className='text-dark/60 mt-2'>
                      {item?.title} - {item?.quantity} x {Number(item?.variant?.priceV2?.amount)?.toFixed(2)} {item?.variant?.priceV2?.currencyCode}
                    </li>
                  ))}
                </ul>
              </div>
          </Link>
        </div>
      )})}
    </div>
  );
};


function getStatusColor(status : any) {
  switch (status) {
    case 'UNFULFILLED':
    case 'UNDERWAY':
      return 'orange';
    case 'DELIVERED':
      return 'green';
    case 'CANCELED':
      return 'red';
    default:
      return 'black'; // default color
  }
}