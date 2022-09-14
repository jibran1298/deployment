import { Fragment } from 'react'
import { nearbyActivitiesData } from '../../shared/data/common-data'
import '../../shared/style/main.css'
import NearbyActivityCard from './nearby-activity-components/NearbyActivityCard'

export default function NearbyActivity() {
  const nearbyActivities = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'title',
      shortDescription: 'description',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'title',
      shortDescription: 'description',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'title',
      shortDescription: 'description',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'title',
      shortDescription: 'description',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'title',
      shortDescription: 'description',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'title',
      shortDescription: 'description',
    },
  ]
  return (
    <div className='nearby-section-container'>
      <h1>{nearbyActivitiesData.title}</h1>
      <div className='nearby-activities-container'>
        {nearbyActivities.map((nearbyActivity, index) => (
          <Fragment key={index}>
            <NearbyActivityCard
              imageUrl={nearbyActivity.imageUrl}
              title={nearbyActivity.title}
              shortDescription={nearbyActivity.shortDescription}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
