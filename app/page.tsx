import Hero from './hero';
import KwaliteitenSection from './kwaliteiten-section';
import OnzeDienstenSection from './onze-diensten-section';

export default function IndexPage() {
  return (
    <section className="">
      <Hero />
      <OnzeDienstenSection />
      <KwaliteitenSection />
    </section>
  );
}
