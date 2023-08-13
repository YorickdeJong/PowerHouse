import Hero from './hero';
import KwaliteitenSection from './kwaliteiten-section';
import OnzeDienstenSection from './onze-diensten-section';
import Portfolio from './portfolio';

export default function IndexPage() {
  return (
    <section className="">
      <Hero />
      <OnzeDienstenSection />
      <KwaliteitenSection />
      <Portfolio />
    </section>
  );
}
