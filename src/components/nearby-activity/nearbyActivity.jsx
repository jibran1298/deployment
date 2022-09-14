import { Fragment, useEffect, useState } from 'react'
import {
  API_ENDPOINT,
  nearbyActivitiesData,
} from '../../shared/data/common-data'
import '../../shared/style/main.css'
import NearbyActivityCard from './nearby-activity-components/NearbyActivityCard'

export default function NearbyActivity({ activityId = 270 }) {
  const [nearbyActivities, setNearbyActivities] = useState([])

  const fetchNearbyActivities = async () => {
    const data = await fetch(
      `${API_ENDPOINT}/frontend/activities/nearby/${activityId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )

    const response = await data.json()

    setNearbyActivities(response)
  }

  /* eslint-disable */
  useEffect(() => {
    fetchNearbyActivities()
  }, [activityId])

  return (
    <div className='nearby-section-container'>
      <h1>{nearbyActivitiesData.title}</h1>
      <div className='nearby-activities-container'>
        {nearbyActivities.map((nearbyActivity, index) => (
          <Fragment key={index}>
            <NearbyActivityCard
              images={nearbyActivity.images}
              title={nearbyActivity.name}
              shortDescription={nearbyActivity.description_short}
              id={nearbyActivity.id}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
