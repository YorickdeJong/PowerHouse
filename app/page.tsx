import dynamic from 'next/dynamic';
import Hero from './hero';
import NewCollection from './new_collection';
import Banner from './banner';
import Seamless from './seamless_collection';
import NewArrivals from './NewArrivals';

//Define your components in the Page.tsx
// The /app/ route is your home page

//Example: 
// /app/about-us will be your about us page
// IN /app/about-us you define your page.tsx, this is the file that will display all components

export default function IndexPage() {
  return (
    <section className="">
      <Hero />
      {/* @ts-expect-error Server Component */}
      <NewCollection />
      <NewArrivals />
      <Banner />
      {/* @ts-expect-error Server Component */}
      <Seamless />
      
    </section>
  );
}
