import dynamic from 'next/dynamic';
// import Booking from './booking';
// import BookingForm from './booking-form';
import Hero from './hero';
import KwaliteitenSection from './kwaliteiten-section';
import OnzeDienstenSection from './onze-diensten-section';
// import Portfolio from './portfolio';
// import Reviews from './reviews';


const Booking = dynamic(()=>import('./booking'))
const BookingForm = dynamic(()=>import('./booking-form'))
const Reviews = dynamic(()=>import('./reviews'))
const Portfolio = dynamic(()=>import('./portfolio'))

export default function IndexPage() {
  return (
    <section className="">
      <Hero />
      <OnzeDienstenSection />
      <KwaliteitenSection />
      <Portfolio />
      <Reviews />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Booking />
        <BookingForm />
      </div>
    </section>
  );
}
