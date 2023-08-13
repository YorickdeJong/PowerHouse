import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Caption from '@/components/caption';
import Card from '@/components/card';

interface PortfolioProps extends HTMLAttributes<HTMLDivElement> {}

export default function Portfolio({ className, ...props }: PortfolioProps) {
  return (
    <section className="bg-card">
      <div className={cn('container  py-20', className, {})} {...props}>
        <Typography variant={'heading'}>Portfolio</Typography>
        <Caption className="mb-4 mt-16">Portfolio</Caption>
        <div className="flex items-center justify-between">
          <Typography variant={'title'}>ons werk</Typography>
          <Button variant={'outline'}>Bekijk alles</Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-16">
          {data.map((el) => (
            <Card key={el.label} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
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
