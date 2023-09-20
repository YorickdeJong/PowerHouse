import Image from 'next/image';


export const Images =  {
    logo: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/logo.png`} //add image path here
        alt="logo"
        width={80}
        height={300}
      />
    ),
    women_1: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/home_page_1.png`} //add image path here
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
        src={`/assets/images/homepage_image.png`} //add image path here
        alt="women 2"
        width={1000}
        height={700}
        quality={100}
      />
    ),
};
