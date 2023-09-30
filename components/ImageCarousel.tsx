/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, AspectRatio } from 'theme-ui'
import React from 'react'
import Image from 'next/legacy/image'
import dynamic from 'next/dynamic'
import UntilInteraction from './UntilInteraction'

type props = import('./LazyImageCarousel').ImageCarouselProps

const LazyCarousel = dynamic(() => import('./LazyImageCarousel'), {
  loading: () => <Box sx={{ height: '100%', bg: 'muted' }} />,
  ssr: false,
})


const ImageCarousel: React.FC<props> = ({
  images,
  onThumbnailClick,
  showZoom,
  currentSlide,
  ...imageProps
}) => {
  return (
    <AspectRatio ratio={Number(imageProps.height) / Number(imageProps.width)}>
      <UntilInteraction
        skeleton={<Image src={images[0].src} {...imageProps} className='object-contain w-[450px] h-[700px]'/>}
      >
        <LazyCarousel
          images={images}
          showZoom={showZoom}
          currentSlide={currentSlide}
          onThumbnailClick={onThumbnailClick}
          fill = {true}
          {...imageProps}
        />
      </UntilInteraction>
    </AspectRatio>
  )
}
export default ImageCarousel
