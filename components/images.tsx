import Image from 'next/image';


export const Images =  {
    logo: (props: any) => (
      <Image
        {...props}
        src={`/gogymlogo.svg`} //add image path here
        alt="logo"
        width={40}
        height={300}
      />
    ),
    logoBlack: (props: any) => (
      <Image
        {...props}
        src={`/gogymlogo-black.svg`} //add image path here
        alt="logo"
        width={40}
        height={300}
      />
    ),
    women_1: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/homepage-mid.png`} //add image path here
        alt="women 1"
        fill
        quality={100}
      />
    ),
    women_2: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/women_2_homepage.png`} //add image path here
        alt="women 2"
        fill
        quality={100}
      />
    ),
    homepage: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/hompageMid.png`} //add image path here
        alt="women 2"
        width={1000}
        height={700}
        quality={100}
      />
    ),
homepageHero: (props: any) => (
  <Image
    {...props}
    src={`/assets/images/legging_3.png`} //add image path here
    alt="women 2"
    width={1000}
    height={700}
    quality={100}
  />
),

};
