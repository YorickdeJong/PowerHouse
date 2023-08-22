import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import StackCard from '@/components/stackCard';

export default function ServicesPage() {

  const el = {}
  return (
    <section>
      <div className="container">
        <Breadcrumb pageTitle="Services" />
          <div>
            <Caption className="mt-20">Technologie waar wij mee werken</Caption>
            <Typography className="mt-5" variant={'title'}>
              Technologie{' '}
            </Typography>
            <Typography className="mt-3" variant={'muted'}>
              In de snel veranderende wereld van digitale technologie is het belangrijk om met de beste en meest efficiënte programmeerstacks te werken. 
              Maar wat zijn programmeerstacks precies? Simpel gezegd, een programmeerstack is een combinatie van softwaretools, frameworks en programmeertalen 
              die samenwerken om een compleet, functionerend web- of mobiele applicatie te creëren.
              <br />
              <br />
              De keuze voor een specifieke stack hangt af van diverse factoren zoals de aard van het project, de expertise van het ontwikkelteam en de eisen 
              van de klant. Deze stacks kunnen worden onderverdeeld in front-end en back-end technologieën.
            </Typography>

            <h4 className="mb-5 mt-12 text-3xl font-bold capitalize leading-[40px] text-stone-300">
              Waarom is de juiste Stack belangrijk?{' '}
            </h4>
            <Typography className="mt-3" variant={'muted'}>
              Het kiezen van de juiste stack is cruciaal voor de efficiëntie, prestaties en schaalbaarheid van een applicatie. 
              Een goed uitgekozen stack kan niet alleen de ontwikkeltijd verkorten maar ook helpen bij het makkelijker onderhouden en updaten van een applicatie.
            </Typography>
          </div>

          <div className='mt-20'>
            {stacks.map((stack, index) => (
              <StackCard 
              projectDetails={[]}
              isDesktopProject={false}
              portfolioPage
              {...stack}
            />
            ))}
          </div>
      </div>
    </section>
  );
}



const stacks = [
  {
    image: '/assets/images/Next1.jpg',
    label: 'NextJs', 
    text: ''
  },
  {
    image: '/assets/images/React.jpg',
    label: 'ReactJs', 
    text: ''
  },
  {
    image: '/assets/images/Vue.jpg',
    label: 'Vue', 
    text: ''
  },
  {
    image: '/assets/images/Flutter.jpg',
    label: 'Flutter', 
    text: ''
  },
]