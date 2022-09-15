import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNearbyActivities } from '../../redux/features/trip/trip.action'
import { nearbyActivitiesData } from '../../shared/data/common-data'
import '../../shared/style/main.css'
import NearbyActivityCard from './nearby-activity-components/NearbyActivityCard'

export default function NearbyActivity({ activityId = 270 }) {
  const nearbyActivities = useSelector((state) => state?.trip?.nearbyActivities)
  const loginData = useSelector((state) => state?.auth?.data)
  const dispatch = useDispatch()

  const fetchNearbyAct = async () => {
    dispatch(
      fetchNearbyActivities({ token: loginData, activityId: activityId })
    )
  }

  /* eslint-disable */
  useEffect(() => {
    fetchNearbyAct()
  }, [loginData])

  return (
    <div className='nearby-section-container'>
      <h1>{nearbyActivitiesData.title}</h1>
      <div className='nearby-activities-container'>
        {Array.isArray(nearbyActivities)
          ? nearbyActivities?.map((nearbyActivity, index) => (
              <Fragment key={index}>
                <NearbyActivityCard
                  images={nearbyActivity.images}
                  title={nearbyActivity.name}
                  shortDescription={nearbyActivity.description_short}
                  id={nearbyActivity.id}
                />
              </Fragment>
            ))
          : ''}
      </div>
    </div>
  )
}
