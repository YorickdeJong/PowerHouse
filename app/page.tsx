import Booking from './booking';
import Hero from './hero';
import KwaliteitenSection from './kwaliteiten-section';
import OnzeDienstenSection from './onze-diensten-section';
import Portfolio from './portfolio';
import Reviews from './reviews';

export default function IndexPage() {
  return (
    <section className="">
      <Hero />
      <OnzeDienstenSection />
      <KwaliteitenSection />
      <Portfolio />
      <Reviews />
      <Booking />
    </section>
  );
}
