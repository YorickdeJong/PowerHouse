import Image from 'next/image';


export const Images =  {
    logo: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/logo.png`} //add image path here
        alt="    "
        width={80}
        height={300}
      />
    ),
};
