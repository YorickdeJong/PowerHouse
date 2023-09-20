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
        
        <div className='flex flex-row'>
          <div className="fixed ">
            <Filter />
          </div>
          <div className='ml-[400px] mt-14'>
            <Breadcrumb pageTitle = 'Shop' />
            <div className="col-span-3 grid grid-cols-2 gap-8 ">
              {items.map((card: any) => ( 
                  <Card 
                      className="box-shadow-2xl mb-4 md:mb-0 mt-12"
                      title={card.title}
                      text={card.text}
                      image={card.image}
                      price={card.price}
                      kleuren={card.kleuren}
                  />    
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

