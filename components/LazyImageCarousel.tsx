/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { FC } from 'react'
import {
  CarouselProvider,
  ImageWithZoom,
  Slide,
  Slider,
  Dot,
} from 'pure-react-carousel'
import Image from 'next/legacy/image'

import 'pure-react-carousel/dist/react-carousel.es.css'

const CustomDotGroup: FC<Omit<ImageCarouselProps, 'alt'>> = ({
  images,
  onThumbnailClick,
  ...imageProps
}) => {
  return (
    <div
      sx={{
        textAlign: 'center',
        position: 'absolute',
        left: '50%',
        maxWidth: '100%',
        overflow: 'auto',
        display: 'flex',
        bottom: 10,
        transform: 'translatex(-50%)',
      }}
    >
      {images.map((image, slide) => (
        <IconButton
          key={slide}
          sx={{ height: 80, width: 80 }}
          as="span"
          onClick={() => onThumbnailClick?.(slide)}
        >
          <Dot slide={slide}>
            <Image
              alt="dot"
              src={image.src}
              {...imageProps}
              height={80}
              width={80}
            ></Image>
          </Dot>
        </IconButton>
      ))}
    </div>
  )
}

export type ImageCarouselProps = {
  showZoom?: boolean
  images: Array<{ src: string }>
  alt: string
  onThumbnailClick?: (index: number) => void
  width: number
  height: number
  layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined
  priority?: boolean
  fill?: boolean
  loading?: 'eager' | 'lazy'
  sizes?: string
  currentSlide?: number
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  onThumbnailClick,
  showZoom,
  currentSlide,
  ...imageProps
}) => (
  <CarouselProvider
    currentSlide={currentSlide}
    naturalSlideWidth={imageProps.width}
    naturalSlideHeight={imageProps.height}
    hasMasterSpinner={false}
    totalSlides={images.length}
  >
    <Slider>
      {images.map((image, index) => (
        <Slide index={index} key={index}>
          {showZoom ? (
                <ImageWithZoom src={image.src} {...imageProps} imageClassName='rounded-2xl'/>
          ) : (
                <Image src={image.src} {...imageProps} />
        )}
        </Slide>
      ))}
    </Slider>
    {/* {showZoom && (
      <CustomDotGroup
        {...imageProps}
        onThumbnailClick={onThumbnailClick}
        images={images}
      />
    )} */}
  </CarouselProvider>
)

export default ImageCarousel
