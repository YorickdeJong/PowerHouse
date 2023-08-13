import { Typography } from '@/components/ui/typography';
import Card from '@/components/card';

export default function PortfolioPage() {
  return (
    <>
      <Typography className="mt-5" variant={'title'}>
        PortFolio
      </Typography>
      <Typography className="mt-3" variant={'muted'}>
        Op deze pagina ziet u een paar van onze projecten ter inspiratie. Per
        project gaan we in op de probleemstelling, de oplossing en het verkregen
        resultaat. U kunt ons ook altijd bellen om meer informatie te krijgen
        over onze voltooide projecten.
      </Typography>
      <div className="mt-10 grid grid-cols-1 gap-16">
        {data.map((el) => (
          <Card portfolioPage key={el.label} {...el} />
        ))}
      </div>
    </>
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
    label: 'School Klaar',
    image:
      'https://s3-alpha-sig.figma.com/img/b328/084a/f5419907382c7759005fa2002d08dc25?Expires=1692576000&Signature=dgr3T8ZSasiE6uwxVpyRrf6VOMwa67-0DC8T4MJZn9gKov0hZEtmXtykPp-vDgBkuE~AQq~Va4ITggGwANdnLyJcdqGQtQPYembOruepbhethgKg~EkzBAFt02WMGoxOMomkYEoJt8bFFvzatWYwRwom7UCw4be4ilyEIvk1k8orsOn4f2D75RTTgcBdhKTNVwssfViC6c-Z7m30kEZqtm41j-A89tBxSr0-yKBMscX-DHWK8-Ui~naPAnRXNNpx2p~ePzGkxBiCc7KSD~d1p3ASMPQn4Fs4pIZrSZPwY6UjRp-wSh4i-N1a2PF2lOBGXY4vXKZluWHczy3Jg5qXYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    text: 'School klaar is een leerling volg systeem, waar leraren de progressie van hun leerlingen kunnen volgen',
  },
  {
    label: 'Blue Elite',
    image:
      'https://s3-alpha-sig.figma.com/img/0eb2/99ee/bfa82985d344b7da59ed8cbeba2649ed?Expires=1692576000&Signature=ZSf-OeYM2oachlynhnwfnLjBNlwfEEhSoB6IKmDEJRXpgnOebna4L4m~AHr1v-sHL0nrVe5siFfAbsRxjoXYlgN6u57GlNgSuesYJ0NZ-zSgjVUBxY0tIp4f2FnIZM7FIm9k~e8IWfL-wmuyns1o1kqyn1A1iFdpPpStvMEKRYx3bRaHM1HjMOCROHg~1LW9we66XlSf~aF8SN4HOdgxILE6QULoPB8A~ppPiwvEQh1PyT6E9QjTCYAZhsiGdX9EYL-4a5ZmGOIhXmd1dFpJ83mdB~J6-cGU5Yksd0oJjsQ~5XxD1aLL39FlsLjJ8752cmjvuW5r4lLtnzURQE5~QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    text: 'Hoops raw-steak spine portkey dress grayback stroke gringotts hungarian sticking. ',
  },
];
