import { Fragment, useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserTrips } from '../../redux/features/trip/trip.action'
import ActivityImage from './carousel-components/activityImage'

export default function ImageCarousel({ images = [], activityId = 0 }) {
  const [saved, setSaved] = useState(false)
  const dispatch = useDispatch()
  const loginData = useSelector((state) => state?.auth?.data)
  const trips = useSelector((state) => state?.trip?.data)

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
      dispatch(fetchUserTrips(loginData))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTrips()
  }, [loginData])

  useEffect(() => {
    trips?.activities?.map((activity) => {
      if (activity.id === activityId) {
        setSaved(true)
      }
    })
  }, [trips])

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
