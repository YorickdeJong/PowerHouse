'use client';

import { useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useScrollTransform from '@/hook/scroll-transform';
import config from '@/sanity.config';
import imageUrlBuilder from '@sanity/image-url';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Card from '@/components/card';
import Motion from '@/components/motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPortfolio } from '@/sanity/sanity-utils';

const builder = imageUrlBuilder(config);

function urlFor(source: any) {
  return builder.image(source);
}

type Portfolio = {
  label: string;
  text: string;
  // ... other properties of a review
};


export default function PortfolioSlugPage({}) {
  const target = useRef(null);
  const path = usePathname();
  const isDesktopProject = path?.includes('etm') || path?.includes('blue-elite');
  const router = useSearchParams();
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  
  useEffect(() => {
    async function fetchPortfolio() {
      const data = await getPortfolio();
      console.log('data', data)
      const randomizedData = data.sort(() => 0.5 - Math.random());
      // Select the first three items
      const selectedData = randomizedData.slice(0, 3);
      setPortfolio(selectedData);
    }

    fetchPortfolio();
  }, []);

  const title = router ? router.get('title') : null;
  let subTitle = router ? router.get('subTitle') : null;



  // Parse the string to get the object
  const renderedSubTitle = renderRichText(JSON.parse(subTitle || '{}'));

  const projectDetails = router ? router.get('projectDetails') : null;
  const parsedProjectDetails = JSON.parse(projectDetails || '{}');
  const transformedData = transformData(parsedProjectDetails);

  console.log('desktop true', isDesktopProject);

  const height = useScrollTransform({
    target,
    outputRange: ['0%', '75%'],
    inputRange: [0, 0.5],
    offset: ['start center', 'end start'],
  });
  const scale = useScrollTransform({
    target,
    outputRange: [1, 0],
    inputRange: [0, 0.5],
    offset: ['start center', 'end start'],
  });
  return (
    <section>
      <Typography className="mt-5" variant={'title'}>
        {title}
      </Typography>{' '}
      <Typography className="mt-3" variant={'muted'}>
        {renderedSubTitle}
      </Typography>{' '}
      {isDesktopProject && (
        <Button variant={'outline'} className="mt-9">
          Bekijk de website &rarr;
        </Button>
      )}
      <div
        ref={target}
        className="relative my-20 grid grid-cols-1 gap-16 "
      >
        <div className="absolute inset-0 hidden flex-col items-center lg:flex">
          <Motion
            style={{ scale: scale as any }}
            className="h-[70.39px] w-[70.39px] origin-bottom rounded-full bg-card"
          />
          <Motion
            style={{
              height: height as any,
            }}
            className="h-0 w-[7.62px] bg-card"
          />
        </div>
        <div className="mt-20">
          {transformedData.map((el : any, idx : any) => (
            <Card
              isDesktopProject
              projectDetails = {[]}
              portfolioDetailsPage
              reversed={idx === 1}
              key={el.label}
              {...el}
            />
          ))}
        </div>
      </div>
      <Typography variant={'title'}>Bekijk ook andere cases</Typography>
      <div className="mt-10 grid grid-cols-1 gap-16 md:mt-40 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((el, idx) => (
          <Card projectDetails = {[]} isDesktopProject = {false} key={el.label} {...el} />
        ))}
      </div>
    </section>
  );
}


const related = [
  {
    label: 'Learning Bot',
    image:
      'https://www.figma.com/file/lhT02P9XV2N010ubG9bOob/image/cbcac15a6c79379ffec1a362e18311431b5e360d',
    text: 'Learning Bot is een interactieve app voor scholen waar leerlingen wiskunde, natuurkunde en progammeren leren.',
  },
  {
    label: ' ETM ',
    image:
      'https://s3-alpha-sig.figma.com/img/b763/23ba/1319d504604920b4c390038a600db429?Expires=1692576000&Signature=fpnxBhMw1~ITPTlx2ThszLRtOOXnX-MlckTO66i72p4N~vGRv6Yq5RuSgz3SDNUOVH7cinFly8BYCk06zrBffMzgQqmk3WYlVWRQ4XM5FB-sHAKFhFQMk60CbQ2QNiK2GtWhnr7haLe5~p5oqxh76BJW5JHWhxLNoIzc~5A5fjiqFKua-jcYjX4Borfk~ly~0mfZQlVqT5NZZwSSZMos7rgOfvrDQ0CMqFxV6CYrct4qSUkbC0VyT~9J1RXrLcuB9dXB5IcM3dgzX2VIfSKs209oHi-2DMHbzP6acPTYR-kJQXa5GdGF2T4tjfCKEPmIJ6vJMqt~B7MdE4jZV6uwCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    text: 'Hoops raw-steak spine portkey dress grayback stroke gringotts hungarian sticking. ',
  },
  {
    label: 'Blue Elite',
    image:
      'https://s3-alpha-sig.figma.com/img/0eb2/99ee/bfa82985d344b7da59ed8cbeba2649ed?Expires=1692576000&Signature=ZSf-OeYM2oachlynhnwfnLjBNlwfEEhSoB6IKmDEJRXpgnOebna4L4m~AHr1v-sHL0nrVe5siFfAbsRxjoXYlgN6u57GlNgSuesYJ0NZ-zSgjVUBxY0tIp4f2FnIZM7FIm9k~e8IWfL-wmuyns1o1kqyn1A1iFdpPpStvMEKRYx3bRaHM1HjMOCROHg~1LW9we66XlSf~aF8SN4HOdgxILE6QULoPB8A~ppPiwvEQh1PyT6E9QjTCYAZhsiGdX9EYL-4a5ZmGOIhXmd1dFpJ83mdB~J6-cGU5Yksd0oJjsQ~5XxD1aLL39FlsLjJ8752cmjvuW5r4lLtnzURQE5~QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    text: 'Hoops raw-steak spine portkey dress grayback stroke gringotts hungarian sticking. ',
  },
];

function renderRichText(content : any) {
  return content.map((block : any) => {
    switch (block._type) {
      case 'block':
        return (
          <p key={block._key}>
            {block.children.map((span : any) => span.text).join('')}
          </p>
        );
      // Add more cases if you have other _type values in your rich text content
      default:
        return null;
    }
  });
}

function transformData(data : any) {
  const labels = ['Probleem', 'oplossing', 'resultaat'];
  return data.map((item  : any, index  : any) => ({
    postImage: urlFor(item).url(),
    label: labels[index],
    text: item.text && item.text[0] && item.text[0].children[0].text,
  }));
}
