import { Fragment } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ActivityImage from './carousel-components/activityImage'

export default function ImageCarousel({ images = [] }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item'
    >
      {images.map((image, index) => (
        <Fragment key={index}>
          <ActivityImage
            imageUrl={image.url}
            isSaved={false}
            alt={image.alternativeText}
          />
        </Fragment>
      ))}
    </Carousel>
  )
}
