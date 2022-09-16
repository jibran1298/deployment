import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  favoriteTrip,
  fetchUserTrips,
  removeFromFavorites,
} from '../../../redux/features/trip/trip.action'
import '../../../shared/style/main.css'

export default function NearbyActivityCard({
  images = [],
  title = '',
  shortDescription = '',
  id = 0,
}) {
  const [saved, setSaved] = useState(false)
  const userTrips = useSelector((state) => state?.trip?.trips)
  const loginData = useSelector((state) => state?.auth?.data)
  const dispatch = useDispatch()

  const favTrip = async () => {
    try {
      if (saved === false) {
        dispatch(
          favoriteTrip({
            token: loginData,
            activityId: id,
            tripId: images[0]?.id,
          })
        )

        setSaved(true)
      } else {
        dispatch(
          removeFromFavorites({
            token: loginData,
            activityId: id,
            tripId: images[0]?.id,
          })
        )

        setSaved(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchTrips = async () => {
    try {
      dispatch(fetchUserTrips(loginData))
    } catch (error) {
      console.error(error)
    }
  }

  /* eslint-disable */
  useEffect(() => {
    userTrips[0]?.activities?.map((activity) => {
      if (activity.id === id) {
        setSaved(true)
      }
    })
  }, [userTrips])

  return (
    <div className='nearby-activity-card-container'>
      <div className='nearby-card-top'>
        <img
          src={images[0].url}
          alt='A nearby activity'
          id='nearbyactivity-image'
          loading='lazy'
        />
        <button id='nearbyactivity-save-button' onClick={favTrip}>
          {saved === true ? 'Saved' : 'Save'}
        </button>
      </div>
      <div className='nearby-card-bottom'>
        <h4 id='nearbyactivity-title'>{title}</h4>
        <p id='nearby-short-description'>{shortDescription}</p>
        <button id='nearbyactivity-readmore-button'>Read More</button>
      </div>
    </div>
  )
}
