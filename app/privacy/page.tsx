import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';

export default function PrivacyPage() {
  return (
    <section>
      <div className="container py-12">
        <Caption className="justify-center">
          ons privacy en cookiebeleid
        </Caption>
        <Typography variant={'title'} className="mt-3 text-center">
          pRIVACy & avg
        </Typography>
        <div>
          {data.map((text) => (
            <div key={text.label}>
              <h4 className="text-2xl mt-12 font-bold capitalize leading-[40px] mb-5 text-stone-300">
                {text.label}
              </h4>
              <Typography variant={'muted'}>{text.content}</Typography>{' '}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    label: 'Deze website wordt beheerd door Blue Waterfall',
    content: (
      <>
        Als je gebruik maakt van de website van Blue Waterfall en de producten
        en diensten die daarop te vinden zijn, dan laat je gegevens bij ons
        achter. Bovendien laat de website een aantal soorten cookies op je
        computer achter. Die worden gebruikt om de website beter te laten werken
        op jouw apparaat. <br />
        <br />
        Hieronder kun je lezen welke gegevens Blue Waterfall kan verzamelen,
        waarom we dat doen en wat we met die gegevens kunnen doen. Ook kun je
        lezen welke cookies we gebruiken en waarom. Dit statement gaat over onze
        hele website: het geldt dus voor bezoekers, maar bijvoorbeeld ook als je
        je aanmeldt voor een nieuwsbrief.
      </>
    ),
  },
  {
    label: 'Cookies door blue waterfall',
    content:
      "Om deze website beter en sneller te laten functioneren en om deze te kunnen afstemmen op jouw voorkeuren, worden bepaalde gegevens betreffende uw gebruik van deze website verzameld. Deze informatie kan verzameld worden door gebruik te maken van zogenaamde 'cookies'. Dit zijn kleine tekstbestanden die door de bezochte webpagina automatisch op je computer worden geplaatst. Je kunt het gebruik van 'cookies' via de instellingen van je browser uitschakelen. Dit leidt echter tot een minder goede werking van deze website. Ook derde partijen kunnen cookies plaatsen en internetgedrag volgen, zoals bijvoorbeeld het geval is bij embedded video's van Vimeo en Youtube.",
  },
  {
    label: 'Hoe komen wij aan je gegevens?',
    content: (
      <>
        Als je gebruik maakt van de Blue Waterfall-website, dan laat je soms
        persoonsgegevens bij ons achter. <br />
        <br /> Je laat op de volgende manieren je gegevens bij ons achter:{' '}
        <br /> <br />
        <li>Navigatie door de website</li>
        <li>Invullen van formulieren</li>
        <li>Aanmelden voor nieuwsbrief</li>
      </>
    ),
  },
  {
    label: 'Wat doen we met je gegevens?',
    content: (
      <>
        Blue Waterfall bewaart en verwerkt je gegevens met de volgende doelen:{' '}
        <br />
        <br />
        <li>
          Verzamelen en analyseren van statistieken ten einde de website te
          optimaliseren;
        </li>
        <li>
          Het leveren van de producten en diensten die je van ons afneemt;
        </li>
        <li>Het afwikkelen van betalingen;</li>
        <li>Het opbouwen van een contacthistorie;</li>
      </>
    ),
  },
  {
    label: 'Hoe beveiligen we je gegevens?',
    content:
      'Je gegevens worden veilig opgeslagen en verzonden. Wie niets met jouw gegevens te maken heeft, kan er simpelweg niet bij. Blue Waterfall streeft ernaar je gegevens met de meest recente beveiligingstechnieken en versleutelingsmethoden op te slaan en te verzenden.',
  },
  {
    label: 'Met wie deelt blue waterfall jouw gegevens?',
    content:
      'Blue Waterfall gaat vertrouwelijk met je persoonsgegevens om. Wij zullen nooit jouw gegevens verkopen aan andere partijen',
  },
  {
    label: 'Contact, mailing en/of reclame',
    content:
      'Mocht je toch mail of ongewenste reclame ontvangen dan kan je altijd aangeven dat je niet meer wilt dat wij contact met je opnemen. Aan het afmelden zijn nooit kosten verbonden.',
  },
  {
    label: 'Jonger dan 16 jaar?',
    content:
      'Als je minderjarig bent, dus jonger dan 16 jaar, dan mag je alleen toestemming geven voor het verwerken van je persoonsgegevens met toestemming van een van je ouders of wettelijke voogd. Het is dan belangrijk dat je ouder(s) of je voogd dit statement leest. Zij kunnen ook de rechten uitoefenen die je hebt met betrekking tot de persoonsgegevens die je bij ons achterlaat, zoals het recht om je te verzetten tegen de (verdere) verwerking van je persoonsgegevens of het recht op inzage in en correctie van je gegevens.',
  },
  {
    label: 'Inzicht in je gegevens?',
    content:
      'Je kunt altijd inzicht krijgen in de gegevens die Blue Waterfall over jou heeft. Je kunt hiertoe een schriftelijk verzoek indien bij Blue Waterfall. Je kunt op basis van de uitkomsten Blue Waterfall ook verzoeken om je gegevens aan te passen als die feitelijk onjuist, onvolledig of irrelevant zijn.',
  },
  {
    label: 'Contactgegevens',
    content:
      'De website en de persoonsgegevens die je hier achterlaat worden beheerd door Blue Waterfall Voor vragen en opmerkingen over dit Privacy Statement kun je altijd contact opnemen via bluewaterfal@gmail.com',
  },
  {
    label: 'Websites van derden',
    content:
      'Dit Privacy en Cookie Statement is niet van toepassing op websites van derden die via deze website via links kunnen worden bezocht.',
  },
  {
    label: 'Algemene verordening gegevensbescherming (AVG)',
    content:
      'Ja, wij hebben allerlei maatregelen genomen om ervoor te zorgen dat wij aan de nieuwe wetgeving voldoen. Zo hebben we een SSL-certificaat op onze website, hebben we onze cookie- en privacymelding op de website aangepast, hebben we strikte protocollen als het gaat om loginnamen en wachtwoorden en hebben we inzichtelijk welke gegevens we exact verwerken, via welke verwerkers en kunnen we dit aantonen, aanpassen en op verzoek verwijderen. Daarnaast zijn we, waarnodig, verwerkersovereenkomsten aangegaan met de externe partijen die onze gegevens voor ons bewaren (de verwerkers). Ook vermelden we in elke overeenkomst die wij met onze klanten aangaan welke gegevens we verwerken, waarom we dat doen en hoe deze kunnen worden opgevraagd en verwijderd in onze verwerkersovereenkomst.',
  },
  {
    label: 'Algemene NAW- en contactgegevens',
    content: (
      <>
        Wanneer je een offerte bij ons aanvraagt via de website of ander kanaal,
        telefonisch contact met ons opneemt en/of een overeenkomst met ons
        aangaat worden onderstaande gegevens van je opgeslagen: <br />
        <br />
        <li>Bedrijfsnaam</li>
        <li>Voornaam</li>
        <li>Achternaam</li>
        <li>Adres</li>
        <li>Postcode</li>
        <li>Woonplaats</li>
        <li>e-mailadres</li>
        <li>Telefoonnummer</li>
        <li>Domeinnaam</li>
        <li>IBANnummer (automatische betalingen)</li> <br />
        <br />
        Deze gegevens gebruiken we om de overeenkomst tot stand te kunnen
        brengen, je onze diensten en producten te kunnen aanbieden en leveren en
        je te kunnen factureren. Om deze gegevens te kunnen verwerken gebruiken
        wij enkel diensten van betrouwbare partners (subverwerkers) die hebben
        laten zien dat je gegevens veilig worden opgeslagen in Nederland.
      </>
    ),
  },
  {
    label: 'Wijzigingen Privacy statement',
    content:
      'Blue Waterfall behoudt zich het recht voor om wijzigingen aan te brengen in dit Privacy statement. Het verdient daarom aanbeveling om dit Privacy statement regelmatig na te kijken, zodat je van deze wijzigingen op de hoogte blijft. De meest actuele versie kan altijd via de website worden geraadpleegd.',
  },
];
