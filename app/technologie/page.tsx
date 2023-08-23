import { Typography } from '@/components/ui/typography';
import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import StackCard from '@/components/stackCard';

export default function ServicesPage() {

  return (
    <section>
      <div className="container">
        <Breadcrumb pageTitle="Technologie" />
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
    textCard: `Next.js is een React-gebaseerd framework dat server-side rendering en statische sitegeneratie vereenvoudigt. 
    Het is ideaal voor het bouwen van snelle, SEO-vriendelijke websites.`,
    textOne: ` Next.js biedt een reeks functies en optimalisaties die zijn ontworpen om de ontwikkeling van 
    moderne webapplicaties te versnellen, waaronder:`,
    textTwo: `Next.js is een open-source React-framework dat is ontwikkeld door Vercel. Het is ontworpen om 
    de ontwikkeling van server-side rendered (SSR) en statisch gegenereerde (SSG) React-applicaties te vergemakkelijken.`,
    textArray: [
      {
          text: `Naast SSR biedt Next.js de mogelijkheid om statische websites te genereren (SSG), waardoor de tijd tot de eerste 
          byte (TTFB) wordt verminderd en de snelheid van de site wordt verbeterd. Je kunt pagina's vooraf renderen tijdens de 
          bouwtijd en ze serveren als statische bestanden.
          `,
          heading: 'SNEL',
      },
      {
          text: `Next.js biedt ingebouwde server-side rendering (SSR), waardoor je volledig gerenderde HTML-pagina's kunt 
          serveren voor verbeterde SEO en prestaties. 
          Dit kan bijzonder voordelig zijn voor dynamische inhoud waar zoekmachinezichtbaarheid belangrijk is.`,
          heading: 'SEO OPTIMALISATIE',
      },
      {
          text: `Het framework is zeer uitbreidbaar en kan gemakkelijk worden aangepast als de website groeit. Dit maakt 
          het een aantrekkelijke keuze voor zowel startups als grotere ondernemingen. Het maakt langetermijnonderhoud ook gemakkelijker.`,
          heading: 'FLEXIBILITEIT EN SCHAALBAARHEID',
      },
      {
          text: `Next.js biedt ingebouwde API-routing, waardoor je zowel frontend als backend in één oplossing kunt hebben. Dit vereenvoudigt 
          de architectuur en maakt beheer gemakkelijker. Voor klanten die een uniforme oplossing willen, is dit bijzonder aantrekkelijk.`,
          heading: 'FRONT EN BACKEND',
      },
    ]
  },
  {
    image: '/assets/images/React.jpg',
    label: 'ReactJS',
    textCard: `ReactJS is een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces. 
    Het is bijzonder geschikt voor single-page applicaties waar je een snelle en interactieve gebruikerservaring nodig hebt.`,
    textOne: `ReactJS is ontworpen om de ontwikkeling van complexe gebruikersinterfaces eenvoudig en efficiënt te maken. Het biedt een op componenten gebaseerde architectuur die zorgt voor herbruikbaarheid en beter onderhoudbare code.`,
    textTwo: `Ontwikkeld en onderhouden door Facebook, heeft ReactJS een enorme populariteit verworven in de techgemeenschap. Het wordt veel gebruikt voor het bouwen van schaalbare en performante frontend-toepassingen, waardoor het een eerste keuze is voor veel ontwikkelaars en bedrijven.`,
    textArray: [
      {
        text: `ReactJS maakt gebruik van een virtuele DOM om het renderen te optimaliseren en de prestaties van de applicatie 
        te verbeteren. Dit zorgt ervoor dat alleen de componenten die zijn gewijzigd, opnieuw worden gerenderd, 
        waardoor de UI-updates ongelooflijk snel zijn.`,
        heading: 'SNELHEID',
      },
      {
        text: `Met ReactJS kun je eenvoudig componenten testen, wat resulteert in robuustere applicaties. 
        Het framework biedt verschillende testbibliotheken zoals Jest en React Testing Library, waardoor het 
        mogelijk is om zowel unit tests als end-to-end tests uit te voeren.`,
        heading: 'TESTBAARHEID',
      },
      {
        text: `ReactJS is zeer flexibel en biedt uitstekende integratie met verschillende backend-technologieën zoals Node.js, 
        Django en Ruby on Rails. Dit maakt het een veelzijdige keuze voor het ontwikkelen van full-stack applicaties.`,
        heading: 'FLEXIBILITEIT',
      },
      {
        text: `De grote community en overvloed aan beschikbare tools zoals Create React App en Next.js maken het een uitstekende 
        keuze voor zowel beginners als experts. Dit zorgt voor een rijke set van bibliotheken en modules die de ontwikkeling versnellen.`,
        heading: 'COMMUNITY EN ECOSYSTEEM',
      },
    ]
  },
  { 
    image: '/assets/images/Vue.jpg',
    label: 'Vue',
    textCard: `Vue is een progressief framework voor het bouwen van gebruikersinterfaces. 
    In tegenstelling tot andere monolithische frameworks, is Vue ontworpen om geleidelijk te worden geadopteerd.`,
    textOne: `Vue is ontworpen om incrementeel adopteerbaar te zijn, wat betekent dat je het gemakkelijk kunt integreren in 
    projecten waar al JavaScript-bibliotheken worden gebruikt. De kernbibliotheek focust zich uitsluitend op de weergavelaag, 
    waardoor het eenvoudig is om het te integreren met andere bibliotheken.`,
    textTwo: `Gemaakt door een voormalige Google-ingenieur Evan You, heeft Vue een zachte leercurve en uitstekende documentatie. 
    Dit maakt het toegankelijk voor ontwikkelaars die nieuw zijn in frontend-frameworks en ook robuust genoeg voor het bouwen van 
    complexe applicaties.`,
    textArray: [
      {
        text: `Vue's gedetailleerde documentatie en ondersteunende gemeenschap maken het gemakkelijk voor ontwikkelaars om het 
        framework te leren en problemen op te lossen. Deze gebruiksvriendelijke aard heeft bijgedragen aan de groeiende populariteit.`,
        heading: 'GEBRUIKERSVRIENDELIJKHEID',
      },
      {
        text: `Vue biedt reactieve databinding, wat betekent dat als je de data wijzigt, de view automatisch wordt bijgewerkt. 
        Dit maakt het gemakkelijk om complexe gebruikersinterfaces te bouwen die naadloos reageren op veranderingen in de onderliggende 
        data.`,
        heading: 'REACTIVITEIT',
      },
      {
        text: `Vue is ontworpen om flexibel en aanpasbaar te zijn, waardoor het kan worden geïntegreerd met verschillende andere 
        technologieën zoals Firebase en GraphQL. Dit maakt het een goede keuze voor veel verschillende soorten projecten, van kleine 
        websites tot grote, complexe applicaties.`,
        heading: 'FLEXIBILITEIT',
      },
      {
        text: `Dankzij de lichte footprint en uitstekende optimalisatie voor prestaties, is Vue een uitstekende keuze voor projecten 
        van elke omvang. Het biedt lazy-loading en asynchrone componenten, wat bijdraagt aan snellere laadtijden en een betere 
        gebruikerservaring.`,
        heading: 'PRESTATIES',
      },
    ]
  },
  {
    image: '/assets/images/Flutter.jpg',
    label: 'Flutter',
    textCard: `Flutter is een open-source UI-software-ontwikkelingskit gemaakt door Google. 
    Het wordt gebruikt om native applicaties te ontwikkelen voor mobiel, web en desktop vanuit een enkele codebase.`,
    textOne: `Flutter stelt ontwikkelaars in staat om visueel verbluffende applicaties te bouwen die native aanvoelen op Android, 
    iOS en het web. Het biedt een rijke set van vooraf ontworpen widgets en een zeer aanpasbare UI, waardoor ontwikkelaars de 
    vrijheid hebben om hun creatieve visie tot uitdrukking te brengen.`,
    textTwo: `Een van de belangrijkste voordelen van Flutter is de architectuur met een enkele codebase. 
    Hierdoor kunnen ontwikkelaars code schrijven en deze implementeren op meerdere platforms, wat het ontwikkelingsproces 
    aanzienlijk versnelt en de time-to-market vermindert.`,
    textArray: [
      {
        text: `Flutter biedt een uitgebreid scala aan vooraf ontworpen widgets en ontwikkelingstools. Hierdoor kunnen ontwikkelaars snel hoogwaardige gebruikersinterfaces bouwen die niet alleen mooi zijn, maar ook functioneel.`,
        heading: 'RIJKE UI',
      },
      {
        text: `Met Flutter kun je eenvoudig apps ontwikkelen die op verschillende platforms werken, zoals Android, iOS en het web. 
        Dit wordt mogelijk gemaakt door de enkele codebase, waardoor ontwikkelaars niet voor elk platform aparte code hoeven te schrijven.`,
        heading: 'CROSS-PLATFORM',
      },
      {
        text: `Flutter heeft een actieve community en een schat aan plug-ins en pakketten beschikbaar op pub.dev. Dit versnelt 
        de ontwikkeling aanzienlijk omdat veelvoorkomende taken en functionaliteiten vaak al zijn geïmplementeerd door de gemeenschap.`,
        heading: 'COMMUNITY EN ECOSYSTEEM',
      },
      {
        text: `Dankzij de Dart-programmeertaal biedt Flutter uitstekende prestaties die vergelijkbaar zijn met native apps. 
        Dart compileert naar native code, wat resulteert in snellere opstarttijden en soepelere animaties.`,
        heading: 'PRESTATIES',
      },
    ]
  }
]


