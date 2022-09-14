import { Fragment, useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { API_ENDPOINT } from '../../shared/data/common-data'
import ActivityImage from './carousel-components/activityImage'

export default function ImageCarousel({ images = [], activityId = 0 }) {
  const [saved, setSaved] = useState(false)

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

  const fetchTrips = async () => {
    try {
      const data = await fetch(`${API_ENDPOINT}/frontend/trips`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })

      const response = await data.json()
      response[0]?.activities?.map((activity) => {
        if (activity.id === activityId) {
          setSaved(true)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTrips()
  }, [])

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
            isSaved={saved}
            alt={image.alternativeText}
            id={image.id}
            activityId={activityId}
          />
        </Fragment>
      ))}
    </Carousel>
  )
}
