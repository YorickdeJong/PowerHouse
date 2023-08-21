// @ts-nocheck
'use client';

import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import { Icons } from '@/components/icons';

export default function FaqsPage() {
  const [accordion, setAccordion] = useState(null);

  const toggleAccordionItem = (value) => {
    if (value === accordion) {
      setAccordion(null);
    } else {
      setAccordion(value);
    }
  };

  return (
    <>
      <div className="container max-w-[900px] py-12">
        <Caption className="justify-center">The things peoples asked</Caption>
        <Typography variant={'title'} className="mt-3 text-center">
          Frequently asked Questions
        </Typography>

        <Accordion.Root
          value={accordion}
          type="single"
          className="my-10 space-y-7"
        >
          {data.map((el, idx) => {
            const value = el.label + idx;
            return (
              <Accordion.Item key={value} value={value}>
                <Accordion.Header>
                  <Accordion.Trigger
                    onClick={() => toggleAccordionItem(value)}
                    className="group flex w-full items-center justify-between rounded-lg  bg-card p-6 text-left text-lg  font-medium"
                  >
                    {el.label}{' '}
                    <Icons.minus className="hidden group-data-[state=open]:block" />
                    <Icons.plus className="group-data-[state=open]:hidden" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pt-7 text-muted text-lg data-[state=close]:animate-slideUp data-[state=open]:animate-slideDown">
                  {el.text}
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </>
  );
}

const data = [
  {
    label: 'Welke diensten biedt uw bedrijf aan bedrijven aan?',
    text: 'Wij bieden een uitgebreid pakket aan diensten, waaronder websiteontwikkeling, bedrijfsstrategieformulering, marketingoplossingen en implementatie om uw online aanwezigheid en algemeen online succes te verbeteren.',
  },
  {
    label:
      'Hoe kunnen uw strategische hoofdoplossingen mijn bedrijf ten goede komen?',
    text: 'Onze strategische hoofdoplossingen zijn ontworpen om de kernuitdagingen aan te pakken waarmee bedrijven online worden geconfronteerd. Door uw online aanwezigheid te optimaliseren, de gebruikerservaring te verbeteren en effectieve marketingstrategieën te implementeren, zorgen wij ervoor dat uw bedrijf opvalt en zijn online doelen bereikt.',
  },
  {
    label: 'Moet ik een bestaande website hebben om mij te helpen?',
    text: 'Nee, of u nu helemaal opnieuw begint of een bestaande site wilt vernieuwen, ons team is uitgerust om u te helpen bij elke stap van uw online reis.',
  },
  {
    label:
      'Hoe past u uw strategieën aan om bij verschillende bedrijven te passen?',
    text: 'We beginnen met een grondige analyse van uw bedrijf, industrie en doelgroep. Hierdoor kunnen we een op maat gemaakte strategie ontwikkelen die in lijn is met uw unieke doelen en markteisen.',
  },
  {
    label: 'Wat maakt uw websiteontwikkelingsbenadering anders dan andere?',
    text: 'Onze aanpak is holistisch. We bouwen niet alleen websites; we creëren online platforms die strategisch zijn afgestemd op uw bedrijfsdoelstellingen, zodat elk element, van ontwerp tot inhoud, resultaten oplevert.',
  },
  {
    label:
      'Hoe zorgt u ervoor dat de marketingstrategieën die u implementeert effectief zijn?',
    text: 'We vertrouwen op datagestuurde inzichten en continue monitoring. Door het analyseren van belangrijke prestatie-indicatoren en gebruikersgedrag, verfijnen en passen we strategieën aan om de ROI te maximaliseren.',
  },
  {
    label: 'Kunt u bedrijven helpen die niet technisch onderlegd zijn?',
    text: 'Absoluut! Onze oplossingen zijn ontworpen om gebruiksvriendelijk te zijn en ons team staat altijd klaar om begeleiding, training en ondersteuning te bieden, zodat u zich op uw gemak voelt bij elk aspect van uw online aanwezigheid.',
  },
  {
    label:
      'Hoe lang duurt het meestal voordat u resultaten ziet van uw diensten?',
    text: 'Hoewel de tijdlijn kan variëren op basis van individuele bedrijfsbehoeften en de reikwijdte van het project, beginnen veel van onze klanten binnen enkele maanden na het implementeren van onze strategieën positieve veranderingen in hun online aanwezigheid en betrokkenheid te zien.',
  },
  {
    label:
      'Biedt u doorlopende ondersteuning en onderhoud aan nadat een website is gelanceerd?',
    text: 'Ja, we geloven in het opbouwen van langdurige relaties met onze klanten. We bieden doorlopende ondersteuning, onderhoud en updates om ervoor te zorgen dat uw website actueel en effectief blijft in het steeds veranderende digitale landschap.',
  },
  {
    label: 'Hoe begin ik met uw diensten?',
    text: 'Neem gewoon contact met ons op via ons contactformulier of bel ons. Ons team zal een eerste consultatie opzetten om uw behoeften te begrijpen en u te begeleiden bij de volgende stappen.',
  },
];
