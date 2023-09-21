import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Filter from '../../components/Filter';
import Card from '@/components/card';
import Breadcrumb from '@/components/breadcrumb';

// container prop defines max width of your container
// Typography is a component that defines the font size and weight

export default function ServicesPage() {
  return (
    <section className='bg-white pb-40' >
      <div className="container">
        
        <div className='flex md:flex-row flex-col'>
          <div className="">
            <Filter />
          </div>
          <div className='md:ml-[400px] mt-2 md:mt-12'>
            <Breadcrumb pageTitle = 'Shop' />
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-8 mt-10 md:mt-2">
              {items.map((card: any, index: any) => ( 
                <>
                  {index !==0 && <hr className="my-2 mb-4 border-none bg-dark/10 h-[1px] sm:hidden"/>}
                    <Card 
                        className="box-shadow-2xl mb-4 md:mb-0 md:mt-12"
                        title={card.title}
                        text={card.text}
                        image={card.image}
                        price={card.price}
                        kleuren={card.kleuren}
                    />    
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const items = [
  {
      title: 'Legacy Legging',
      text: 'Body Fit',
      image: '/assets/images/legging_1.png',
      price: '€29.99',
      kleuren: '2 kleuren'
  },
  {
      title: 'Legacy Legging',
      text: 'Body Fit',
      image: '/assets/images/legging_2.png',
      price: '€29.99',
      kleuren: '2 kleuren'
  },
  {
      title: 'Legacy Legging',
      text: 'Body Fit',
      image: '/assets/images/legging_3.png',
      price: '€29.99',
      kleuren: '2 kleuren'
  },
  {
    title: 'Legacy Legging',
    text: 'Body Fit',
    image: '/assets/images/legging_1.png',
    price: '€29.99',
    kleuren: '2 kleuren'
},
{
    title: 'Legacy Legging',
    text: 'Body Fit',
    image: '/assets/images/legging_2.png',
    price: '€29.99',
    kleuren: '2 kleuren'
},
{
    title: 'Legacy Legging',
    text: 'Body Fit',
    image: '/assets/images/legging_3.png',
    price: '€29.99',
    kleuren: '2 kleuren'
}
]

