import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  favoriteTrip,
  fetchUserTrips,
} from '../../../redux/features/trip/trip.action'
import '../../../shared/style/main.css'

export default function NearbyActivityCard({
  images = [],
  title = '',
  shortDescription = '',
  id = 0,
}) {
  const [saved, setSaved] = useState(false)
  const userTrips = useSelector((state) => state.trip.userTrips)
  const loginData = useSelector((state) => state.auth.data)
  const dispatch = useDispatch()

  const favTrip = async () => {
    try {
      dispatch(favoriteTrip(loginData?.jwt, id, images[0]?.id))
    } catch (error) {
      console.error(error)
    } finally {
      fetchTrips()
    }
  }

  const fetchTrips = async () => {
    try {
      dispatch(fetchUserTrips(loginData?.jwt))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTrips()
  }, [])

  useEffect(() => {
    userTrips?.activities?.map((activity) => {
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
      <h4 id='nearbyactivity-title'>{title}</h4>
      <p id='nearby-short-description'>{shortDescription}</p>
      <button id='nearbyactivity-readmore-button'>Read More</button>
    </div>
  )
}
