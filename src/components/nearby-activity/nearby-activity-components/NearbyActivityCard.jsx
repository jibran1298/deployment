import { useEffect, useState } from 'react'
import { API_ENDPOINT } from '../../../shared/data/common-data'
import '../../../shared/style/main.css'

export default function NearbyActivityCard({
  images = [],
  title = '',
  shortDescription = '',
  id = 0,
}) {
  const [saved, setSaved] = useState(false)

  const favoriteTrip = async () => {
    try {
      const formData = new FormData()
      formData.append('activityId', id)
      formData.append('tripId', images[0].id)
      formData.append('tripType', 'favorite')

      await fetch(`${API_ENDPOINT}/frontend/trips/add_activity`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: formData,
      })


    } catch (error) {
      console.error(error)
    } finally {
      fetchTrips()
    }
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
        if (activity.id === id) {
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
    <div className='nearby-activity-card-container'>
      <div className='nearby-card-top'>
        <img
          src={images[0].url}
          alt='A nearby activity'
          id='nearbyactivity-image'
          loading='lazy'
        />
        <button id='nearbyactivity-save-button' onClick={favoriteTrip}>
          {saved === true ? 'Saved' : 'Save'}
        </button>
      </div>
      <h4 id='nearbyactivity-title'>{title}</h4>
      <p id='nearby-short-description'>{shortDescription}</p>
      <button id='nearbyactivity-readmore-button'>Read More</button>
    </div>
  )
}
