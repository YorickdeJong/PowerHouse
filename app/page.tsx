import dynamic from 'next/dynamic';
import Hero from './hero';
import NewCollection from './new_collection';
import NewArrivals from './NewArrivals';
import Hero2 from './hero2';
import Tops from './tops_collection';
import Shorts from './shorts_collection';

//Define your components in the Page.tsx
// The /app/ route is your home page

//Example: 
// /app/about-us will be your about us page
// IN /app/about-us you define your page.tsx, this is the file that will display all components

export default function IndexPage() {
  return (
    <section className="">
      <Hero2 />
      {/* @ts-expect-error Server Component */}
      <NewCollection />
      <Hero />
      {/* <Banner /> */}
      {/* @ts-expect-error Server Component */}
      <Tops />

      <NewArrivals />

      {/* @ts-expect-error Server Component */}
      <Shorts className="lg:mb-20"/>
    </section>
  );
}
