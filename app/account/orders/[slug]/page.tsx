'use client'
import { Fragment, useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { storefront } from '@/utils/shopify/storefront';
import Typography from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';

const CUSTOMER_ORDER_QUERY = gql`
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment AddressFull on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineProductVariant on ProductVariant {
    id
    image {
      altText
      height
      url
      id
      width
    }
    price {
      ...OrderMoney
    }
    product {
      handle
    }
    sku
    title
  }
  fragment OrderLineItemFull on OrderLineItem {
    title
    quantity
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    originalTotalPrice {
      ...OrderMoney
    }
    discountedTotalPrice {
      ...OrderMoney
    }
    variant {
      ...OrderLineProductVariant
    }
  }
  fragment Order on Order {
    id
    name
    orderNumber
    statusUrl
    processedAt
    fulfillmentStatus
    totalTaxV2 {
      ...OrderMoney
    }
    totalPriceV2 {
      ...OrderMoney
    }
    subtotalPriceV2 {
      ...OrderMoney
    }
    shippingAddress {
      ...AddressFull
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order(
    $country: CountryCode
    $language: LanguageCode
    $orderId: ID!
  ) @inContext(country: $country, language: $language) {
    order: node(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`;


export default function OrderItem({params} : any)  {
  const router = useRouter(); // Initializing the useRouter hook
  const path = usePathname();
  const [token, setToken] = useState<string | null>(null);
  const orderId = decodeURIComponent(params.slug);

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


  const { loading, error, data } = useQuery(CUSTOMER_ORDER_QUERY, {
    variables: { orderId},
    
    skip: !token,
  });

  console.log('data', data)
  console.log('error', error)
  const order = data ? data : []




  return (

    <main>
     <section className="mt-24 mb-10 ml-10">
            <Breadcrumb pageTitle='' />   
            <div className="max-w-7xl py-6">
            {orderId && data ? <CustomerOrders order={order.order} /> : <Typography variant='title' className='text-dark/80'>Geen Bestellingen Geplaatst</Typography>}
          </div>
      </section>
    </main>
  )
}


const CustomerOrders = ({ order }: any) => {
  const router = useRouter(); // Initializing the useRouter hook

  const fullfilmentColor = getStatusColor(order?.fulfillmentStatus)
  return (
    <div>
      <Typography variant='title' className='text-dark/80 my-4 lg:my-0'>Bestelnummer: {order.orderNumber}</Typography>
      {order?.lineItems?.nodes?.map((node: any) => (
        <div className='mb-8 group border-2 rounded-xl p-6 border-dark/60 hover:bg-dark/10' key={node?.variant?.id}>
          <Link href={`/shop/filterable-collection/${node?.variant?.product.handle}`} className='flex flex-row'>
            <div className='flex-shrink-0'>
              {/* Check if the image exists before rendering it */}
              {node?.variant?.image?.url && (
                <Image
                  src={node?.variant?.image?.url}
                  alt={node?.variant?.image?.altText || 'Product Image'}
                  className='w-44 h-44 object-cover rounded-md'
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className='ml-10'>
              <Typography variant='title' className='text-dark/80 group-hover:text-dark/50 mt-[-10px]'>
              {node?.title}: {Number(node?.discountedTotalPrice?.amount).toFixed(2)} {order?.totalPriceV2?.currencyCode}
              </Typography>
              <ul>
                <li className='text-dark/60'>
                  <Link href={`/product/${encodeURIComponent(node?.variant?.id)}`}>
                    {node.quantity} x {Number(node?.variant?.price?.amount).toFixed(2)} {node?.variant?.priceV2?.currencyCode}
                  </Link>
                </li>
              </ul>
              <div className='mt-1 text-dark/60 '>
                <p className='mb-1'>Vertstuurt Naar: {order?.shippingAddress?.address1}, {order?.shippingAddress?.city}, {order?.shippingAddress?.country}</p>
                <p className='mb-1'>Verstuur Datum: <span style = {{color: getStatusColor(order?.fulfillmentStatus)}}>{order?.fulfillmentStatus}</span></p>
                <p>Bestel Datum: {new Date(order?.processedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
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

